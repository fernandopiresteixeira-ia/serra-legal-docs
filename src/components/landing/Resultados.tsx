import { Icon } from "@iconify/react";

const stats = [
  {
    icon: "solar:home-smile-linear",
    value: "+300",
    label: "imóveis regularizados",
  },
  {
    icon: "solar:chart-square-linear",
    value: "+R$ 200mi",
    label: "em patrimônio regularizado",
  },
  {
    icon: "solar:map-point-linear",
    value: "+40",
    label: "municípios atendidos",
  },
  {
    icon: "solar:shield-check-linear",
    value: "95%",
    label: "dos processos concluídos sem deslocamento do cliente",
  },
];

export function Resultados() {
  return (
    <section
      id="resultados"
      className="relative bg-[#003D7A] py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0073C6]/30 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#00A3D7]/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="gsap-fade-up text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5A623]">
            Nossos resultados
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-white">
            Números que comprovam nossa expertise
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Resultados concretos de quem é referência em regularização de imóveis na Serra Gaúcha.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {stats.map((s, i) => (
            <div
              key={i}
              className="gsap-fade-up relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#F5A623]/40 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5A623]/15 flex items-center justify-center mb-6">
                <Icon icon={s.icon} className="w-6 h-6 text-[#F5A623]" />
              </div>
              <div className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-[56px] leading-none tracking-tight">
                {s.value}
              </div>
              <p className="mt-4 text-white/75 text-sm leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
