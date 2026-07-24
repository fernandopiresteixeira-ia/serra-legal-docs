import { Icon } from "@iconify/react";

const diferenciais = [
  {
    icon: "solar:user-check-rounded-linear",
    title: "Responsável técnico do início ao fim",
    desc: "Um engenheiro sênior acompanha todo o processo — você não fala com atendentes, fala com quem assina o projeto.",
  },
  {
    icon: "solar:dollar-minimalistic-linear",
    title: "Preço transparente, sem surpresas",
    desc: "Orçamento fechado antes de começar. Nenhum concorrente divulga preço — nós sim. Sem cobranças extras no meio do processo.",
  },
  {
    icon: "solar:buildings-linear",
    title: "Especialistas no sistema de Caxias do Sul",
    desc: "Conhecemos o SMUWEB a fundo e o Código de Obras municipal (Lei n. 375/2010). Menos idas e vindas, menos exigências.",
  },
  {
    icon: "solar:clock-circle-linear",
    title: "Cumprimento do prazo legal",
    desc: "O prazo da Prefeitura é 30 dias úteis. Com documentação completa na primeira entrega, não há motivo para atrasos.",
  },
  {
    icon: "solar:map-point-linear",
    title: "Atendemos toda a Serra Gaúcha",
    desc: "Caxias do Sul, Bento Gonçalves, Farroupilha, Flores da Cunha, São Marcos e municípios vizinhos.",
  },
  {
    icon: "solar:chat-line-linear",
    title: "Você acompanha tudo em tempo real",
    desc: "Atualizações via WhatsApp em cada etapa do processo. Sem sumir, sem precisar ligar para perguntar.",
  },
];

const vs = [
  { item: "Preço transparente antes de contratar", nos: true, eles: false },
  { item: "Um responsável técnico do início ao fim", nos: true, eles: false },
  { item: "Especialistas no SMUWEB de Caxias do Sul", nos: true, eles: false },
  { item: "Habite-se incluso no escopo quando aplicável", nos: true, eles: false },
  { item: "Acompanhamento via WhatsApp", nos: true, eles: false },
  { item: "Análise inicial sem custo", nos: true, eles: false },
];

export function DiferenciaisAlvara() {
  return (
    <section className="bg-[#1A1A2E] py-24 lg:py-32 overflow-hidden relative">
      <div className="absolute -bottom-64 -left-32 w-[600px] h-[600px] rounded-full bg-[#0073C6] opacity-10 blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="gsap-fade-up max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5A623]">Por que a Russell Bedford</span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-white">
            O que nos diferencia dos concorrentes
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Pesquisamos o mercado em Caxias do Sul — veja o que nenhum outro escritório oferece
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {diferenciais.map((d) => (
            <div key={d.title} className="gsap-fade-up bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0073C6]/20 flex items-center justify-center mb-5">
                <Icon icon={d.icon} className="w-6 h-6 text-[#4EC5E8]" />
              </div>
              <h3 className="font-display font-semibold text-white text-base mb-2">{d.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="gsap-fade-up bg-white/5 border border-white/10 rounded-2xl overflow-hidden max-w-3xl mx-auto">
          <div className="grid grid-cols-3 text-sm font-semibold text-center py-4 border-b border-white/10">
            <span className="text-white/40 col-span-1 px-4 text-left">Critério</span>
            <span className="text-[#4EC5E8]">Russell Bedford</span>
            <span className="text-white/40">Concorrentes</span>
          </div>
          {vs.map((r) => (
            <div key={r.item} className="grid grid-cols-3 text-sm py-3.5 border-b border-white/5 last:border-0">
              <span className="text-white/70 px-4">{r.item}</span>
              <span className="flex justify-center">
                <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-green-400" />
              </span>
              <span className="flex justify-center">
                <Icon icon="solar:close-circle-bold" className="w-5 h-5 text-red-400/60" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
