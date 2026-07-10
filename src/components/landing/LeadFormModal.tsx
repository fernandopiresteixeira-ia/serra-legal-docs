import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { toast } from "sonner";
import { submitLead } from "@/lib/leads.functions";
import { captureTracking } from "@/lib/leadTracking";

const SERVICOS = [
  "Habite-se",
  "INSS de Obras",
  "Averbação",
  "Aprovação de Projetos",
  "Regularização Rural",
  "PPCI",
  "Outro / Não sei",
];

function maskPhone(v: string): string {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ctaOrigem: string;
}

export function LeadFormModal({ open, onOpenChange, ctaOrigem }: Props) {
  const submit = useServerFn(submitLead);
  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipo_servico: "",
    mensagem: "",
    website: "", // honeypot
  });

  useEffect(() => {
    if (open) {
      setStep("form");
      setForm({
        nome: "",
        email: "",
        telefone: "",
        tipo_servico: "",
        mensagem: "",
        website: "",
      });
    }
  }, [open]);

  const mutation = useMutation({
    mutationFn: async () => {
      const tracking = captureTracking();
      return submit({
        data: {
          nome: form.nome,
          email: form.email,
          telefone: form.telefone,
          tipo_servico: form.tipo_servico,
          mensagem: form.mensagem || null,
          cta_origem: ctaOrigem,
          website: form.website,
          ...tracking,
        },
      });
    },
    onSuccess: () => {
      setStep("success");
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_lead_submitted",
          cta_origem: ctaOrigem,
          tipo_servico: form.tipo_servico,
        });
      }
    },
    onError: (err: Error) => {
      toast.error(err.message || "Erro ao enviar. Tente novamente.");
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.telefone.trim() || !form.tipo_servico) {
      toast.error("Preencha nome, e-mail, telefone e tipo de serviço.");
      return;
    }
    if (form.telefone.replace(/\D/g, "").length < 10) {
      toast.error("Telefone inválido.");
      return;
    }
    mutation.mutate();
  }


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Solicite sua análise gratuita</DialogTitle>
              <DialogDescription>
                Preencha seus dados e a equipe Russell Bedford entra em contato.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                className="hidden"
                aria-hidden="true"
              />

              <div className="space-y-1.5">
                <Label htmlFor="nome">Nome completo *</Label>
                <Input
                  id="nome"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    required
                    inputMode="tel"
                    value={form.telefone}
                    onChange={(e) =>
                      setForm({ ...form, telefone: maskPhone(e.target.value) })
                    }
                    placeholder="(54) 99999-9999"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="voce@email.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="tipo_servico">Tipo de serviço *</Label>
                <Select
                  value={form.tipo_servico}
                  onValueChange={(v) => setForm({ ...form, tipo_servico: v })}
                >
                  <SelectTrigger id="tipo_servico">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICOS.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="mensagem">Conte um pouco sobre seu caso (opcional)</Label>
                <Textarea
                  id="mensagem"
                  rows={3}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Ex: Casa construída em 2010 em Caxias do Sul, sem Habite-se."
                />
              </div>

              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-[#F5A623] hover:bg-[#E69612] text-[#1A1A2E] font-semibold"
                size="lg"
              >
                {mutation.isPending ? "Enviando..." : "Enviar solicitação"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Seus dados são protegidos. Não compartilhamos com terceiros.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <Icon icon="solar:check-circle-bold" className="w-9 h-9 text-green-600" />
            </div>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Recebido!</DialogTitle>
              <DialogDescription>
                Sua solicitação chegou. Em breve nossa equipe entra em contato.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-2 pt-2">
              <Button onClick={() => onOpenChange(false)} size="lg">
                Fechar
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
