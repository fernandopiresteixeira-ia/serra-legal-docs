import { Icon } from "@iconify/react";
import { useState } from "react";
import { LeadFormModal } from "@/components/landing/LeadFormModal";

export function CtaAlvara() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-[#0073C6] py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white opacity-[0.06] blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#1A1A2E] opacity-20 blur-[150px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs sm:text-sm font-medium text-white mb-8">
          <Icon icon="solar:clock-circle-bold" className="w-4 h-4 text-[#F5A623]" />
          Análise inicial gratuita · Resposta em até 24h
        </span>

        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[52px] leading-tight text-white">
          Tire seu alvará sem burocracia.<br />
          <span className="text-[#B8D9F0]">Comece com uma análise gratuita.</span>
        </h2>

        <p className="mt-6 text-white/75 text-lg leading-relaxed">
          Conte a situação da sua obra ou terreno. Em até 24 horas, um engenheiro avalia o que é necessário e envia um orçamento sem compromisso.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-8 py-4 text-base font-semibold text-[#1A1A2E] hover:bg-[#E69612] transition-all shadow-xl shadow-[#003D7A]/30"
          >
            Solicitar análise gratuita
            <Icon icon="solar:arrow-right-linear" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://wa.me/5554999999999?text=Olá,%20gostaria%20de%20tirar%20meu%20alvará%20de%20construção"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all"
          >
            <Icon icon="logos:whatsapp-icon" className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-white/70">
          {[
            "Sem compromisso",
            "Caxias do Sul e Serra Gaúcha",
            "Engenheiro disponível por WhatsApp",
          ].map((t) => (
            <span key={t} className="inline-flex items-center gap-2">
              <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-white/50" />
              {t}
            </span>
          ))}
        </div>
      </div>

      <LeadFormModal open={open} onOpenChange={setOpen} ctaOrigem="cta-alvara" />
    </section>
  );
}
