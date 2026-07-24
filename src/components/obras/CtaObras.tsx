import { Icon } from "@iconify/react";
import { useState } from "react";
import { LeadFormModal } from "@/components/landing/LeadFormModal";

export function CtaObras() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-[#1A1A2E] py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(0,115,198,0.18) 0%, transparent 65%)" }} />

      <div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F5A623]/15 border border-[#F5A623]/25 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#F5A623] mb-8">
          <Icon icon="solar:shield-check-bold" className="w-4 h-4" />
          Avaliação inicial gratuita · Resposta em até 24h
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[52px] leading-tight text-white">
          Sua obra merece um engenheiro<br />
          <span className="text-[#4EC5E8]">que trabalha para você.</span>
        </h2>

        <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
          Conte a situação da sua obra. Em até 24h um engenheiro da Russell Bedford avalia o que é necessário e envia proposta sem compromisso.
        </p>

        {/* Garantia explícita */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-5 max-w-md mx-auto text-left">
          <div className="flex gap-3 items-start">
            <Icon icon="solar:shield-star-bold" className="w-6 h-6 text-[#F5A623] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white text-sm">Nossa garantia</p>
              <p className="text-white/55 text-xs mt-1 leading-relaxed">
                Se em 3 visitas consecutivas não encontrarmos nenhuma não-conformidade na sua obra, a próxima visita é gratuita. Confiamos no que fazemos.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button type="button" onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-8 py-4 text-base font-semibold text-[#1A1A2E] hover:bg-[#E69612] transition-all shadow-xl shadow-[#F5A623]/15">
            Quero um engenheiro na minha obra
            <Icon icon="solar:arrow-right-linear" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="https://wa.me/5554999999999?text=Olá,%20quero%20saber%20sobre%20acompanhamento%20de%20obra"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all">
            <Icon icon="logos:whatsapp-icon" className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/40">
          {["Avaliação gratuita", "Engenheiro com CREA-RS", "Serra Gaúcha e região"].map(t => (
            <span key={t} className="inline-flex items-center gap-2">
              <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-white/25" />
              {t}
            </span>
          ))}
        </div>
      </div>

      <LeadFormModal open={open} onOpenChange={setOpen} ctaOrigem="cta-obras" />
    </section>
  );
}
