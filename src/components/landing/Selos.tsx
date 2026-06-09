import { Icon } from "@iconify/react";

const selos = [
  { icon: "solar:verified-check-linear", title: "Análise gratuita", desc: "Sem custo e sem compromisso" },
  { icon: "solar:document-text-linear", title: "Sem burocracia", desc: "Não precisa ir a repartição alguma" },
  { icon: "solar:clock-circle-linear", title: "Acompanhamento", desc: "Atualização em cada etapa do processo" },
  { icon: "solar:map-point-linear", title: "Serra Gaúcha", desc: "Toda a região serrana atendida" },
];

export function Selos() {
  return (
    <section className="bg-white border-t border-[#E0EAF4] py-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#E0EAF4]">
        {selos.map((s) => (
          <div key={s.title} className="gsap-fade-up flex flex-col items-center text-center lg:px-8">
            <Icon icon={s.icon} className="w-10 h-10 text-[#0073C6]" />
            <h4 className="mt-4 font-display font-semibold text-[#1A1A2E]">{s.title}</h4>
            <p className="mt-1 text-sm text-[#4A4A5A]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
