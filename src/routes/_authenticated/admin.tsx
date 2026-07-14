import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { listLeads, updateLead, listRdSyncLogs, resendLeadToRd } from "@/lib/adminLeads.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { toast } from "sonner";
import { openWhatsApp } from "@/lib/whatsapp";

export const Route = createFileRoute("/_authenticated/admin")({
  component: AdminDashboard,
});

type Lead = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  tipo_servico: string;
  mensagem: string | null;
  status: "novo" | "em_contato" | "convertido" | "descartado";
  anotacoes: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  referrer: string | null;
  cta_origem: string | null;
  dispositivo: string | null;
  created_at: string;
};

const STATUS_LABELS: Record<Lead["status"], string> = {
  novo: "Novo",
  em_contato: "Em contato",
  convertido: "Convertido",
  descartado: "Descartado",
};

const STATUS_COLORS: Record<Lead["status"], string> = {
  novo: "bg-blue-100 text-blue-800",
  em_contato: "bg-amber-100 text-amber-800",
  convertido: "bg-green-100 text-green-800",
  descartado: "bg-gray-100 text-gray-600",
};

function originLabel(s: string | null): string {
  if (!s) return "Direto";
  const m = s.toLowerCase();
  if (m.includes("google")) return "Google";
  if (m.includes("instagram") || m === "ig") return "Instagram";
  if (m.includes("facebook") || m.includes("meta") || m === "fb") return "Meta";
  return s;
}

function AdminDashboard() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const list = useServerFn(listLeads);
  const update = useServerFn(updateLead);
  const listLogs = useServerFn(listRdSyncLogs);
  const resend = useServerFn(resendLeadToRd);

  const [status, setStatus] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Lead | null>(null);
  const [notes, setNotes] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["leads", status, search],
    queryFn: () =>
      list({
        data: {
          status: status === "all" ? undefined : status,
          search: search || undefined,
        },
      }),
  });

  const leads = (data?.leads ?? []) as Lead[];

  const stats = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return {
      total: leads.length,
      hoje: leads.filter((l) => new Date(l.created_at) >= today).length,
      semana: leads.filter((l) => new Date(l.created_at) >= weekAgo).length,
      convertidos: leads.filter((l) => l.status === "convertido").length,
    };
  }, [leads]);

  const mutation = useMutation({
    mutationFn: async (vars: { id: string; status?: Lead["status"]; anotacoes?: string }) =>
      update({ data: vars }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["leads"] });
      toast.success("Atualizado");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate({ to: "/admin/login" });
  }

  function openLead(l: Lead) {
    setSelected(l);
    setNotes(l.anotacoes ?? "");
  }

  function exportCSV() {
    const headers = [
      "Data",
      "Nome",
      "Telefone",
      "E-mail",
      "Serviço",
      "Status",
      "Origem",
      "Campanha",
      "CTA",
      "Dispositivo",
      "Mensagem",
    ];
    const rows = leads.map((l) =>
      [
        new Date(l.created_at).toLocaleString("pt-BR"),
        l.nome,
        l.telefone,
        l.email,
        l.tipo_servico,
        STATUS_LABELS[l.status],
        originLabel(l.utm_source),
        l.utm_campaign ?? "",
        l.cta_origem ?? "",
        l.dispositivo ?? "",
        (l.mensagem ?? "").replace(/\n/g, " "),
      ]
        .map((c) => `"${String(c).replace(/"/g, '""')}"`)
        .join(","),
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-display text-xl font-bold text-[#003D7A]">Painel de Leads</h1>
            <p className="text-xs text-muted-foreground">Russell Bedford Brasil</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <Icon icon="solar:logout-2-linear" className="w-4 h-4" />
            Sair
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total", value: stats.total, color: "text-[#003D7A]" },
            { label: "Hoje", value: stats.hoje, color: "text-blue-600" },
            { label: "7 dias", value: stats.semana, color: "text-amber-600" },
            { label: "Convertidos", value: stats.convertidos, color: "text-green-600" },
          ].map((s) => (
            <div key={s.label} className="bg-white border rounded-xl p-4">
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border rounded-xl p-4 flex flex-col md:flex-row gap-3 md:items-center">
          <Input
            placeholder="Buscar por nome, telefone ou e-mail..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="md:max-w-xs"
          />
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="md:w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos status</SelectItem>
              <SelectItem value="novo">Novo</SelectItem>
              <SelectItem value="em_contato">Em contato</SelectItem>
              <SelectItem value="convertido">Convertido</SelectItem>
              <SelectItem value="descartado">Descartado</SelectItem>
            </SelectContent>
          </Select>
          <div className="md:ml-auto">
            <Button variant="outline" onClick={exportCSV} disabled={leads.length === 0}>
              <Icon icon="solar:download-linear" className="w-4 h-4" />
              Exportar CSV
            </Button>
          </div>
        </div>

        <div className="bg-white border rounded-xl overflow-hidden">
          {isLoading ? (
            <p className="p-8 text-center text-muted-foreground">Carregando...</p>
          ) : leads.length === 0 ? (
            <p className="p-8 text-center text-muted-foreground">Nenhum lead encontrado.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Data</th>
                    <th className="px-4 py-3">Nome</th>
                    <th className="px-4 py-3">Contato</th>
                    <th className="px-4 py-3">Serviço</th>
                    <th className="px-4 py-3">Origem</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {leads.map((l) => (
                    <tr
                      key={l.id}
                      onClick={() => openLead(l)}
                      className="hover:bg-slate-50 cursor-pointer"
                    >
                      <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(l.created_at).toLocaleDateString("pt-BR")}
                        <br />
                        <span className="text-[10px]">
                          {new Date(l.created_at).toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium">{l.nome}</td>
                      <td className="px-4 py-3 text-xs">
                        <div>{l.telefone}</div>
                        <div className="text-muted-foreground">{l.email}</div>
                      </td>
                      <td className="px-4 py-3">{l.tipo_servico}</td>
                      <td className="px-4 py-3 text-xs">{originLabel(l.utm_source)}</td>
                      <td className="px-4 py-3">
                        <Badge className={STATUS_COLORS[l.status]}>{STATUS_LABELS[l.status]}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Sheet open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto p-6">
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle>{selected.nome}</SheetTitle>
                <SheetDescription>
                  Recebido em {new Date(selected.created_at).toLocaleString("pt-BR")}
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#25D366] hover:bg-[#1FBA57] text-white"
                    onClick={() =>
                      openWhatsApp(`Olá ${selected.nome}, sou da Russell Bedford Brasil.`)
                    }
                  >
                    <Icon icon="ic:baseline-whatsapp" className="w-4 h-4" />
                    WhatsApp
                  </Button>
                  <a
                    href={`mailto:${selected.email}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-slate-50"
                  >
                    <Icon icon="solar:letter-linear" className="w-4 h-4" />
                    E-mail
                  </a>
                </div>

                <Info label="Telefone" value={selected.telefone} />
                <Info label="E-mail" value={selected.email} />
                <Info label="Serviço" value={selected.tipo_servico} />
                {selected.mensagem && <Info label="Mensagem" value={selected.mensagem} multiline />}

                <div className="border-t pt-4">
                  <p className="font-semibold text-xs uppercase text-muted-foreground mb-2">
                    Origem
                  </p>
                  <Info label="Fonte" value={originLabel(selected.utm_source)} />
                  {selected.utm_campaign && <Info label="Campanha" value={selected.utm_campaign} />}
                  {selected.utm_medium && <Info label="Mídia" value={selected.utm_medium} />}
                  {selected.cta_origem && <Info label="CTA" value={selected.cta_origem} />}
                  {selected.dispositivo && <Info label="Dispositivo" value={selected.dispositivo} />}
                  {selected.referrer && <Info label="Referrer" value={selected.referrer} multiline />}
                </div>

                <div className="border-t pt-4">
                  <Label className="text-xs uppercase text-muted-foreground">Status</Label>
                  <Select
                    value={selected.status}
                    onValueChange={(v) =>
                      mutation.mutate({ id: selected.id, status: v as Lead["status"] })
                    }
                  >
                    <SelectTrigger className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="novo">Novo</SelectItem>
                      <SelectItem value="em_contato">Em contato</SelectItem>
                      <SelectItem value="convertido">Convertido</SelectItem>
                      <SelectItem value="descartado">Descartado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-xs uppercase text-muted-foreground">
                    Anotações internas
                  </Label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className="mt-1.5"
                  />
                  <Button
                    size="sm"
                    className="mt-2"
                    onClick={() => mutation.mutate({ id: selected.id, anotacoes: notes })}
                    disabled={mutation.isPending}
                  >
                    Salvar anotações
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function Info({
  label,
  value,
  multiline,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p
        className={`text-sm ${multiline ? "whitespace-pre-wrap break-words" : "break-all"} mt-0.5`}
      >
        {value}
      </p>
    </div>
  );
}
