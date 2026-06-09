import { Icon } from "@iconify/react";
import HeroWave from "@/components/ui/dynamic-wave-canvas-background";
import engenheiroAsset from "@/assets/engenheiro-planta.png.asset.json";
import heroBg from "@/assets/hero-construcao.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-[#00A3D7] overflow-hidden pt-24"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 pointer-events-none"
      />
      <HeroWave className="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay opacity-90" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,163,215,0.45), rgba(0,61,122,0.65))",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Texto à esquerda */}
        <div className="lg:col-span-7 text-left">
          <div className="gsap-reveal inline-flex items-center rounded-full bg-[#F5A623] px-4 py-1.5 text-xs sm:text-sm font-medium text-[#1A1A2E] mb-8">
            Regularização de Imóveis · Serra Gaúcha - RS
          </div>

          <h1 className="font-display font-bold leading-[1.05] text-white text-[40px] sm:text-5xl lg:text-[64px] xl:text-[72px] tracking-tight">
            <span className="gsap-reveal block">Seu imóvel irregular</span>
            <span className="gsap-reveal block text-[#B8D9F0]">te impede de vender?</span>
          </h1>

          <p className="gsap-reveal mt-8 max-w-xl text-white/85 text-base sm:text-lg leading-relaxed">
            A Russell Bedford Brasil resolve toda a documentação — Habite-se, INSS de Obras, Averbação
            e Aprovação de Projetos — sem você precisar ir a nenhuma repartição.
          </p>

          <div className="gsap-reveal mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="https://wa.me/55XXXXXXXXXXX"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-6 py-3.5 text-sm font-semibold text-[#1A1A2E] hover:bg-[#E69612] transition-all shadow-lg shadow-[#F5A623]/20"
            >
              Solicitar análise gratuita
              <Icon icon="solar:arrow-right-linear" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Ver como funciona ↓
            </a>
          </div>

          <div className="gsap-reveal mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-white" />
              Análise inicial sem custo
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-white" />
              Atendemos toda a Serra Gaúcha
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-white" />
              Sem burocracia para você
            </span>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end -mt-8 sm:-mt-12 lg:-mt-20">
          <div className="relative w-full flex justify-center lg:justify-end">
            {/* Halo / círculo de fundo */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square max-w-[520px] pointer-events-none"
            >
              {/* glow externo suave */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(245,166,35,0.45) 0%, rgba(0,163,215,0.25) 45%, transparent 70%)",
                }}
              />
              {/* círculo sólido translúcido */}
              <div
                className="absolute inset-[8%] rounded-full backdrop-blur-sm border border-white/15"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 55%, rgba(0,61,122,0.10) 100%)",
                }}
              />
              {/* anel decorativo */}
              <div className="absolute inset-[4%] rounded-full border border-white/20" />
              <div className="absolute inset-[14%] rounded-full border border-white/10" />
            </div>

            <img
              src={engenheiroAsset.url}
              alt="Engenheiro analisando planta de imóvel"
              className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-none lg:w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-px h-16 bg-white/20 overflow-hidden">
        <div className="w-full h-1/3 bg-[#F5A623] scroll-indicator-block" />
      </div>
    </section>
  );
}
