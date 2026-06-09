import { Icon } from "@iconify/react";
import heroBg from "@/assets/hero-construcao.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center bg-[#003D7A] overflow-hidden pt-16"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 pointer-events-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,61,122,0.80), rgba(0,61,122,0.90))",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="gsap-reveal inline-flex items-center rounded-full bg-[#F5A623] px-4 py-1.5 text-xs sm:text-sm font-medium text-[#1A1A2E] mb-8">
          Regularização de Imóveis · Serra Gaúcha - RS
        </div>

        <h1 className="font-display font-bold leading-[1.05] text-white text-[44px] sm:text-6xl lg:text-[72px] tracking-tight">
          <span className="gsap-reveal block">Seu imóvel irregular</span>
          <span className="gsap-reveal block text-[#B8D9F0]">te impede de vender?</span>
        </h1>

        <p className="gsap-reveal mt-8 mx-auto max-w-xl text-white/75 text-base sm:text-lg leading-relaxed">
          A Russell Bedford Brasil resolve toda a documentação — Habite-se, INSS de Obras, Averbação
          e Aprovação de Projetos — sem você precisar ir a nenhuma repartição.
        </p>

        <div className="gsap-reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
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

        <div className="gsap-reveal mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-white/80">
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

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-px h-16 bg-white/20 overflow-hidden">
        <div className="w-full h-1/3 bg-[#F5A623] scroll-indicator-block" />
      </div>
    </section>
  );
}
