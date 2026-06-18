import { Icon } from "@iconify/react";
import { useState } from "react";
import { LeadFormModal } from "./LeadFormModal";

export function CtaFinal() {
  const [open, setOpen] = useState(false);
  return (
    <section id="contato" className="relative bg-[#2A3F6F] py-28 lg:py-36 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0073C6]/20 blur-[100px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <h2 className="gsap-fade-up font-display font-bold text-white text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-tight">
          Não deixe a irregularidade travar seu patrimônio
        </h2>
        <p className="gsap-fade-up mt-6 mx-auto max-w-2xl text-white/70 text-lg">
          Faça uma análise gratuita e descubra exatamente o que precisa ser regularizado. Sem
          compromisso, sem custo inicial.
        </p>

        <div className="gsap-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-6 py-3.5 text-sm font-semibold text-[#1A1A2E] hover:bg-[#E69612] transition-colors"
          >
            Solicitar análise gratuita
            <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
          </button>
        </div>

        <p className="gsap-fade-up mt-8 text-sm text-white/60">
          📍 Caxias do Sul, Bento Gonçalves, Farroupilha, Flores da Cunha, Garibaldi, Carlos
          Barbosa, Nova Petrópolis e São Marcos
        </p>
      </div>
      <LeadFormModal open={open} onOpenChange={setOpen} ctaOrigem="cta_final" />
    </section>
  );
}
