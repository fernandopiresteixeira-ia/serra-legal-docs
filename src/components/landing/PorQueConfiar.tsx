import { Icon } from "@iconify/react";

const items = [
  {
    icon: "solar:global-linear",
    title: "Rede internacional",
    desc: "Presente em mais de 100 países com forte atuação global.",
  },
  {
    icon: "solar:users-group-rounded-linear",
    title: "Mais de 11.000 profissionais",
    desc: "Especialistas qualificados em todo o mundo à sua disposição.",
  },
  {
    icon: "solar:map-arrow-square-linear",
    title: "Presença nacional",
    desc: "Especialistas em engenharia, auditoria, tributação e consultoria em todo o Brasil.",
  },
  {
    icon: "solar:shield-up-linear",
    title: "Atuação integrada",
    desc: "Trabalho conjunto e estratégico para proteger e valorizar seu patrimônio.",
  },
];

export function PorQueConfiar() {
  return (
    <section className="bg-slate-50 border-t border-b border-[#E0EAF4] pt-[90px] lg:pt-[100px] pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="gsap-fade-up text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0073C6]">
            Solidez & Credibilidade
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E]">
            Por que confiar na Russell Bedford Brasil?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="gsap-fade-up bg-white rounded-2xl p-8 border border-[#E0EAF4] shadow-sm hover:shadow-md hover:border-[#0073C6]/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8F4FB] flex items-center justify-center mb-6">
                <Icon icon={it.icon} className="w-6 h-6 text-[#0073C6]" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[#1A1A2E] mb-3">
                {it.title}
              </h3>
              <p className="text-[#4A4A5A] text-sm leading-relaxed mt-auto">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
