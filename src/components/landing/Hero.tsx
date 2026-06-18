import { Icon } from "@iconify/react";
import { useState } from "react";
import HeroWave from "@/components/ui/dynamic-wave-canvas-background";
import engenheiroAsset from "@/assets/engenheiro-planta.png.asset.json";
import stripedCircleAsset from "@/assets/striped-circle.png.asset.json";
import heroBg from "@/assets/hero-construcao.jpg";
import { LeadFormModal } from "./LeadFormModal";

export function Hero() {
  const [open, setOpen] = useState(false);
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
            A Russell Bedford Brasil é referência em regularização de imóveis — Habite-se, INSS de
            Obras, Averbação e Aprovação de Projetos — sem você precisar ir a nenhuma repartição.
          </p>

          <div className="gsap-reveal mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-6 py-3.5 text-sm font-semibold text-[#1A1A2E] hover:bg-[#E69612] transition-all shadow-lg shadow-[#F5A623]/20"
            >
              Solicitar análise gratuita
              <Icon icon="solar:arrow-right-linear" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="gsap-reveal mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-white" />
              Análise inicial sem custo
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-white" />
              Caxias do Sul, Bento Gonçalves, Farroupilha e região
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-white" />
              Sem burocracia para você
            </span>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center -mt-8 sm:-mt-12 lg:-mt-16">
          <div className="relative flex justify-center lg:justify-end w-full">
            <div className="relative inline-block">
              {/* Composição circular estática (estilo "Five Conda") */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-[45%] -translate-y-1/2 w-[170%] aspect-square max-w-[820px] pointer-events-none"
              >
                {/* Ondas concêntricas externas */}
                <div className="absolute inset-0 rounded-full border border-white/15" />
                <div className="absolute inset-[6%] rounded-full border border-white/20" />
                <div className="absolute inset-[12%] rounded-full border border-white/25" />
                <div className="absolute inset-[18%] rounded-full border border-white/30" />

                {/* Disco striado central (recolorido para azul do site) */}
                <div
                  className="absolute inset-[24%] rounded-full overflow-hidden"
                  style={{
                    backgroundColor: "#00A3D7",
                    opacity: 0.4,
                    WebkitMaskImage: `url(${stripedCircleAsset.url})`,
                    maskImage: `url(${stripedCircleAsset.url})`,
                    WebkitMaskSize: "140%",
                    maskSize: "140%",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />

                {/* Brilho externo suave */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-50 -z-10"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(78,197,232,0.55) 0%, transparent 65%)",
                  }}
                />
              </div>

              <img
                src={engenheiroAsset.url}
                alt="Engenheiro analisando planta de imóvel"
                className="relative block w-[330px] sm:w-[418px] lg:w-[506px] h-auto -translate-x-[5%] translate-y-0 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-px h-16 bg-white/20 overflow-hidden">
        <div className="w-full h-1/3 bg-[#F5A623] scroll-indicator-block" />
      </div>
      <LeadFormModal open={open} onOpenChange={setOpen} ctaOrigem="hero" />
    </section>
  );
}
