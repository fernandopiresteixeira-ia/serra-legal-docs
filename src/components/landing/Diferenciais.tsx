import { Icon } from "@iconify/react";
import imgDiferenciais from "@/assets/diferenciais.jpg";

const items = [
  {
    icon: "solar:map-point-wave-linear",
    title: "Conhecimento local profundo",
    desc: "Atuamos na Serra Gaúcha e conhecemos as exigências específicas das prefeituras da região.",
  },
  {
    icon: "solar:document-text-linear",
    title: "Você não vai a repartição alguma",
    desc: "Com procuração, representamos você junto à Prefeitura, INSS e Cartório de Registro de Imóveis.",
  },
  {
    icon: "solar:chat-round-check-linear",
    title: "Comunicação em cada etapa",
    desc: "Você recebe atualizações durante todo o processo. Sem letras miúdas, sem surpresas no final.",
  },
];

export function Diferenciais() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="gsap-fade-up relative group rounded-2xl overflow-hidden">
          <img
            src={imgDiferenciais}
            alt="Imóvel regularizado na Serra Gaúcha com documentação aprovada"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-[#0073C6]/0 group-hover:bg-[#0073C6]/10 transition-colors" />
        </div>

        <div className="gsap-fade-up">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0073C6]">
            Por que nos escolher
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E]">
            Especialistas em regularização na Serra Gaúcha
          </h2>

          <div className="mt-10 space-y-7">
            {items.map((it) => (
              <div key={it.title} className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#E8F4FB] flex items-center justify-center">
                  <Icon icon={it.icon} className="w-6 h-6 text-[#0073C6]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-[#1A1A2E]">{it.title}</h3>
                  <p className="mt-1.5 text-[#4A4A5A] leading-relaxed">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
