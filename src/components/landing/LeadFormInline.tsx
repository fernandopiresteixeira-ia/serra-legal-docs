import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Icon } from "@iconify/react";
import { toast } from "sonner";
import { submitLead } from "@/lib/leads.functions";
import { captureTracking } from "@/lib/leadTracking";

function maskPhone(v: string): string {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

interface Props {
  ctaOrigem: string;
  tipoServico: string;
  title?: string;
  subtitle?: string;
}

export function LeadFormInline({
  ctaOrigem,
  tipoServico,
  title = "Análise gratuita do seu caso",
  subtitle = "Sem compromisso. Retorno em até 2h.",
}: Props) {
  const submit = useServerFn(submitLead);
  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", website: "" });

  const mutation = useMutation({
    mutationFn: async () => {
      const tracking = captureTracking();
      return submit({
        data: {
          nome: form.nome,
          email: form.email,
          telefone: form.telefone,
          tipo_servico: tipoServico,
          mensagem: null,
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
        window.dataLayer.push({ event: "form_lead_submitted", cta_origem: ctaOrigem, tipo_servico: tipoServico });
      }
    },
    onError: (err: Error) => {
      toast.error(err.message || "Erro ao enviar. Tente novamente.");
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.telefone.trim()) {
      toast.error("Preencha todos os campos.");
      return;
    }
    if (form.telefone.replace(/\D/g, "").length < 10) {
      toast.error("Telefone inválido.");
      return;
    }
    mutation.mutate();
  }

  const inputCls =
    "w-full bg-white/10 border border-white/25 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/60 focus:bg-white/15 transition-colors";

  if (step === "success") {
    return (
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-sm w-full flex flex-col items-center justify-center gap-4 text-center min-h-[280px]">
        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
          <Icon icon="solar:check-circle-bold" className="w-8 h-8 text-[#F5A623]" />
        </div>
        <div>
          <p className="font-display font-semibold text-white text-lg">Recebido!</p>
          <p className="text-white/75 text-sm mt-1">Nossa equipe entra em contato em breve.</p>
        </div>
        <a
          href={`https://wa.me/5554999999999?text=Olá!%20Acabei%20de%20enviar%20meus%20dados%20pelo%20site.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1fb855] transition-colors"
        >
          <Icon icon="ic:baseline-whatsapp" className="w-5 h-5" />
          Falar agora no WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-sm w-full">
      <p className="font-display font-semibold text-white text-lg leading-snug">{title}</p>
      <p className="text-white/65 text-xs mt-1 mb-5">{subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-3">
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

        <input
          type="text"
          required
          placeholder="Seu nome completo"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className={inputCls}
          autoComplete="name"
        />

        <input
          type="email"
          required
          placeholder="Seu e-mail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputCls}
          autoComplete="email"
        />

        <input
          type="tel"
          required
          inputMode="tel"
          placeholder="(54) 99999-9999"
          value={form.telefone}
          onChange={(e) => setForm({ ...form, telefone: maskPhone(e.target.value) })}
          className={inputCls}
          autoComplete="tel"
        />

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full rounded-lg bg-[#F5A623] px-4 py-3 text-sm font-semibold text-[#1A1A2E] hover:bg-[#E69612] disabled:opacity-70 transition-colors shadow-lg shadow-black/20 mt-1"
        >
          {mutation.isPending ? "Enviando..." : "Solicitar análise gratuita"}
        </button>
      </form>

      <p className="text-[11px] text-white/45 text-center mt-3">
        Seus dados são protegidos. Sem spam.
      </p>
    </div>
  );
}
