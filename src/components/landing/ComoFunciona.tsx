import { Icon } from "@iconify/react";

const steps = [
  { n: "01", icon: "solar:magnifer-linear", title: "Análise inicial gratuita", desc: "Você descreve a situação do imóvel e avaliamos o que precisa ser feito, sem custo e sem compromisso." },
  { n: "02", icon: "solar:document-add-linear", title: "Proposta detalhada", desc: "Enviamos orçamento claro com todos os serviços, prazos estimados e condições de pagamento." },
  { n: "03", icon: "solar:ruler-cross-pen-linear", title: "Vistoria técnica", desc: "Nossa equipe visita o imóvel para levantamento das medidas e informações necessárias." },
  { n: "04", icon: "solar:pen-new-square-linear", title: "Desenvolvimento técnico", desc: "Elaboramos projetos, memoriais e documentos exigidos pelos órgãos competentes." },
  { n: "05", icon: "solar:buildings-2-linear", title: "Aprovação e acompanhamento", desc: "Protocolamos junto à Prefeitura, INSS e Cartório e acompanhamos cada etapa." },
  { n: "06", icon: "solar:check-circle-linear", title: "Entrega da documentação", desc: "Você recebe toda a documentação regularizada. Sem comparecer a nenhuma repartição." },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative bg-[#F4F6F9] py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0073C6] opacity-[0.06] blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#00A3D7] opacity-[0.04] blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="gsap-fade-up max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E]">
            Do diagnóstico à documentação regularizada
          </h2>
          <p className="mt-4 text-[#4A4A5A] text-lg">
            Um processo transparente, sem surpresas para você
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <article key={s.n} className="gsap-fade-up relative bg-white border border-[#E0EAF4] rounded-2xl p-8">
              <div
                className={`absolute -top-4 -left-4 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                  i === 0 ? "bg-[#F5A623] text-[#1A1A2E]" : "bg-[#0073C6] text-white"
                }`}
              >
                {s.n}
              </div>
              <Icon icon={s.icon} className="w-8 h-8 text-[#0073C6] mb-6" />
              <h3 className="font-display font-semibold text-lg text-[#1A1A2E]">{s.title}</h3>
              <p className="mt-2 text-[#4A4A5A] leading-relaxed text-sm">{s.desc}</p>
            </article>
          ))}
        </div>

        <p className="gsap-fade-up mt-10 text-center text-sm italic text-[#4A4A5A]">
          ⚠️ Prazos são estimativas e variam conforme o município, o tipo de imóvel e a demanda dos
          órgãos competentes.
        </p>
      </div>
    </section>
  );
}
