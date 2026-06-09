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

                {/* Disco sólido central (azul mais claro) */}
                <div
                  className="absolute inset-[24%] rounded-full overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, #4ec5e8 0%, #00A3D7 55%, #0077a8 100%)",
                    boxShadow:
                      "0 20px 60px -10px rgba(0,61,122,0.45), inset 0 0 60px rgba(255,255,255,0.10)",
                  }}
                >
                  {/* Listras diagonais decorativas dentro do círculo */}
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(255,255,255,0.9) 0 6px, transparent 6px 22px)",
                      maskImage:
                        "radial-gradient(circle at 50% 45%, black 30%, transparent 70%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at 50% 45%, black 30%, transparent 70%)",
                    }}
                  />
                </div>

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
                className="relative block w-[300px] sm:w-[380px] lg:w-[460px] h-auto -translate-x-[5%] -translate-y-[10%] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-px h-16 bg-white/20 overflow-hidden">
        <div className="w-full h-1/3 bg-[#F5A623] scroll-indicator-block" />
      </div>
    </section>
  );
}
