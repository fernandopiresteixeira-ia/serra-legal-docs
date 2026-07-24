import { Icon } from "@iconify/react";

const steps = [
  { n: "01", icon: "solar:magnifer-linear", title: "Diagnóstico gratuito", desc: "Você nos conta a situação da obra ou imóvel. Avaliamos o que é necessário, sem custo e sem compromisso." },
  { n: "02", icon: "solar:document-add-linear", title: "Proposta detalhada", desc: "Enviamos orçamento claro com todos os serviços, documentos necessários e prazo estimado." },
  { n: "03", icon: "solar:ruler-cross-pen-linear", title: "Elaboração do projeto", desc: "Nossa equipe técnica prepara o projeto arquitetônico e complementares (hidro, elétrico, estrutural) com ART inclusa." },
  { n: "04", icon: "solar:buildings-2-linear", title: "Protocolo na Prefeitura", desc: "Damos entrada no SMUWEB (sistema da Prefeitura de Caxias do Sul) e acompanhamos cada etapa do processo." },
  { n: "05", icon: "solar:shield-check-linear", title: "Resposta às exigências", desc: "Se a Prefeitura solicitar complementações, cuidamos de tudo — sem você precisar ir pessoalmente." },
  { n: "06", icon: "solar:check-circle-linear", title: "Alvará em mãos", desc: "Você recebe a licença para construir. Após a obra, cuidamos também do Habite-se." },
];

export function ComoFuncionaAlvara() {
  return (
    <section id="como-funciona" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0073C6] opacity-[0.06] blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="gsap-fade-up max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0073C6]">Como funciona</span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E]">
            Do diagnóstico ao alvará em mãos
          </h2>
          <p className="mt-4 text-[#4A4A5A] text-lg">
            Um processo transparente — você não precisa ir à Prefeitura em nenhuma etapa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <article key={s.n} className="gsap-fade-up relative bg-[#F4F6F9] border border-[#E0EAF4] rounded-2xl p-8">
              <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${i === 0 ? "bg-[#F5A623] text-[#1A1A2E]" : "bg-[#0073C6] text-white"}`}>
                {s.n}
              </div>
              <Icon icon={s.icon} className="w-8 h-8 text-[#0073C6] mb-6" />
              <h3 className="font-display font-semibold text-lg text-[#1A1A2E]">{s.title}</h3>
              <p className="mt-2 text-[#4A4A5A] leading-relaxed text-sm">{s.desc}</p>
            </article>
          ))}
        </div>

        <p className="gsap-fade-up mt-10 text-center text-sm italic text-[#4A4A5A]">
          ⚠️ O prazo legal em Caxias do Sul é de 30 dias úteis. Com documentação completa na primeira entrega, o prazo é cumprido.
        </p>
      </div>
    </section>
  );
}
