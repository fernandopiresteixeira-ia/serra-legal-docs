import { Icon } from "@iconify/react";

const diferenciais = [
  {
    icon: "solar:user-speak-bold",
    titulo: "Trabalhamos para você, não para a construtora",
    desc: "O fiscal da construtora protege a construtora. Nosso engenheiro é 100% independente — contratado por você, respondendo só para você.",
  },
  {
    icon: "solar:dollar-minimalistic-bold",
    titulo: "Preço transparente antes de assinar",
    desc: "Nenhum concorrente nosso divulga preço. Nós sim: a partir de R$ 900/mês para obras residenciais. Você sabe o que paga desde o início.",
  },
  {
    icon: "solar:clock-circle-bold",
    titulo: "Relatório no mesmo dia da visita",
    desc: "Não esperamos o fim do mês para te informar. Cada visita gera um relatório no seu WhatsApp no mesmo dia.",
  },
  {
    icon: "solar:diploma-bold",
    titulo: "Engenheiro com CREA-RS e ART por obra",
    desc: "Toda visita técnica tem responsabilidade civil formal. Não é um estagiário — é um engenheiro registrado que assina o que faz.",
  },
  {
    icon: "solar:hand-shake-bold",
    titulo: "Garantia de descoberta ou devolvemos a visita",
    desc: "Se em 3 visitas consecutivas não encontrarmos nenhuma não-conformidade, a próxima visita é gratuita. Confiamos no nosso trabalho.",
  },
  {
    icon: "solar:map-arrow-right-bold",
    titulo: "Atendemos toda a Serra Gaúcha",
    desc: "Caxias do Sul, Bento Gonçalves, Farroupilha, Flores da Cunha, São Marcos, Garibaldi e região.",
  },
];

const tabela = [
  { item: "Fiscal independente (não da construtora)", nos: true, eles: false },
  { item: "Preço divulgado antes de contratar", nos: true, eles: false },
  { item: "Relatório por WhatsApp no dia da visita", nos: true, eles: false },
  { item: "ART por visita técnica", nos: true, eles: false },
  { item: "Garantia explícita de descoberta", nos: true, eles: false },
  { item: "Engenheiro sênior (não estagiário)", nos: true, eles: false },
];

export function DiferenciaisObras() {
  return (
    <section className="bg-[#1A1A2E] py-24 lg:py-32 overflow-hidden relative">
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#0073C6] opacity-[0.08] blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5A623]">Por que a Russell Bedford</span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-white">
            O que nenhum outro escritório<br />de Caxias do Sul oferece
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Pesquisamos cada concorrente local. O resultado está na tabela abaixo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {diferenciais.map((d) => (
            <div key={d.titulo} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#F5A623]/15 flex items-center justify-center mb-5">
                <Icon icon={d.icon} className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="font-display font-semibold text-white text-base mb-2">{d.titulo}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden max-w-3xl mx-auto">
          <div className="grid grid-cols-3 text-sm font-semibold text-center py-4 border-b border-white/10">
            <span className="text-white/40 text-left px-6">Critério</span>
            <span className="text-[#4EC5E8]">Russell Bedford</span>
            <span className="text-white/40">Concorrentes</span>
          </div>
          {tabela.map((r) => (
            <div key={r.item} className="grid grid-cols-3 py-3.5 border-b border-white/5 last:border-0">
              <span className="text-white/65 text-sm px-6">{r.item}</span>
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
