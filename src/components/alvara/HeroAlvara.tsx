import { Icon } from "@iconify/react";
import { useState } from "react";
import HeroWave from "@/components/ui/dynamic-wave-canvas-background";
import heroBg from "@/assets/hero-construcao.jpg";
import { LeadFormModal } from "@/components/landing/LeadFormModal";

export function HeroAlvara() {
  const [open, setOpen] = useState(false);
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-[#00A3D7] pt-24">
      <img src={heroBg} alt="" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 pointer-events-none" />
      <HeroWave className="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay opacity-90" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,163,215,0.45), rgba(0,61,122,0.65))" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 text-left">
          <div className="gsap-reveal inline-flex items-center rounded-full bg-[#F5A623] px-4 py-1.5 text-xs sm:text-sm font-medium text-[#1A1A2E] mb-8">
            Alvará de Construção · Caxias do Sul e Serra Gaúcha - RS
          </div>

          <h1 className="font-display font-bold leading-[1.05] text-white text-[40px] sm:text-5xl lg:text-[64px] tracking-tight">
            <span className="gsap-reveal block">Sem alvará, sua obra</span>
            <span className="gsap-reveal block text-[#B8D9F0]">pode ser embargada amanhã.</span>
          </h1>

          <p className="gsap-reveal mt-8 max-w-xl text-white/85 text-base sm:text-lg leading-relaxed">
            A Russell Bedford Brasil cuida de toda a aprovação de projeto e licença de construção junto à Prefeitura de Caxias do Sul — do protocolo ao alvará em mãos, sem você precisar ir a nenhuma repartição.
          </p>

          <div className="gsap-reveal mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button type="button" onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-6 py-3.5 text-sm font-semibold text-[#1A1A2E] hover:bg-[#E69612] transition-all shadow-lg shadow-[#F5A623]/20">
              Solicitar análise gratuita
              <Icon icon="solar:arrow-right-linear" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="gsap-reveal mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-white/80">
            {["Análise inicial sem custo", "Caxias do Sul, Bento Gonçalves, Farroupilha e região", "Você não precisa ir à Prefeitura"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-white" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-sm w-full">
            <h3 className="font-display font-semibold text-white text-lg mb-4">O que cuidamos por você:</h3>
            <ul className="space-y-3">
              {[
                "Aprovação do projeto arquitetônico na Prefeitura",
                "Projetos complementares (hidro, elétrico, estrutural)",
                "ART / RRT de todos os responsáveis técnicos",
                "Protocolo e acompanhamento no SMUWEB",
                "Licença para construir (Alvará)",
                "Habite-se após conclusão da obra",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-white/90 text-sm">
                  <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <LeadFormModal open={open} onOpenChange={setOpen} ctaOrigem="hero-alvara" />
    </section>
  );
}
