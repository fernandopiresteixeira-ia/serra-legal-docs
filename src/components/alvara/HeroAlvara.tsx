import { Icon } from "@iconify/react";
import HeroWave from "@/components/ui/dynamic-wave-canvas-background";
import heroBg from "@/assets/hero-construcao.jpg";
import { LeadFormInline } from "@/components/landing/LeadFormInline";

export function HeroAlvara() {
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-[#00A3D7] pt-24">
      <img src={heroBg} alt="" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 pointer-events-none" />
      <HeroWave className="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay opacity-90" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,163,215,0.45), rgba(0,61,122,0.65))" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 text-left">
          <div className="inline-flex items-center rounded-full bg-[#F5A623] px-4 py-1.5 text-xs sm:text-sm font-medium text-[#1A1A2E] mb-8">
            Alvará de Construção · Caxias do Sul e Serra Gaúcha - RS
          </div>

          <h1 className="font-display font-bold leading-[1.05] text-white text-[40px] sm:text-5xl lg:text-[64px] tracking-tight">
            <span className="block">Sem alvará, sua obra</span>
            <span className="block text-[#B8D9F0]">pode ser embargada amanhã.</span>
          </h1>

          <p className="mt-8 max-w-xl text-white/85 text-base sm:text-lg leading-relaxed">
            A Russell Bedford Brasil cuida de toda a aprovação de projeto e licença de construção junto à Prefeitura de Caxias do Sul — do protocolo ao alvará em mãos, sem você precisar ir a nenhuma repartição.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:hidden">
            <a href="#form-inline"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-6 py-3.5 text-sm font-semibold text-[#1A1A2E] hover:bg-[#E69612] transition-all shadow-lg shadow-[#F5A623]/20">
              Solicitar análise gratuita
              <Icon icon="solar:arrow-right-linear" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-white/80">
            {["Análise inicial sem custo", "Caxias do Sul, Bento Gonçalves, Farroupilha e região", "Você não precisa ir à Prefeitura"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-white" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div id="form-inline" className="lg:col-span-4 flex justify-center lg:justify-end">
          <LeadFormInline
            ctaOrigem="hero-alvara"
            tipoServico="Aprovação de Projetos"
            title="Análise gratuita do seu caso"
            subtitle="Sem compromisso. Retorno em até 2h."
          />
        </div>
      </div>
    </section>
  );
}
