import { Icon } from "@iconify/react";

const etapas = [
  {
    n: "01",
    icon: "solar:phone-calling-linear",
    titulo: "Avaliação inicial gratuita",
    desc: "Você conta a situação da obra — fase atual, cronograma, projeto disponível. Avaliamos o que é necessário e enviamos proposta no mesmo dia.",
  },
  {
    n: "02",
    icon: "solar:document-text-linear",
    titulo: "Análise do projeto e contrato",
    desc: "Antes de começar as visitas, revisamos o projeto aprovado e o contrato com a construtora. Já identificamos pontos de risco antes de pisar na obra.",
  },
  {
    n: "03",
    icon: "solar:buildings-3-linear",
    titulo: "Visitas técnicas por fase",
    desc: "Nosso engenheiro vai à obra nos momentos críticos — antes de concretar, antes de fechar a parede, antes de cobrir a laje. Onde erro não tem conserto, a gente está lá.",
  },
  {
    n: "04",
    icon: "solar:camera-linear",
    titulo: "Relatório fotográfico por visita",
    desc: "Após cada visita, você recebe relatório técnico com fotos, itens verificados, não-conformidades encontradas e prazo para correção pela construtora.",
  },
  {
    n: "05",
    icon: "solar:chat-line-linear",
    titulo: "Você acompanha tudo por WhatsApp",
    desc: "Nada de esperar reunião ou relatório mensal. Cada visita gera um resumo direto no seu WhatsApp. Você sabe o que está acontecendo na sua obra em tempo real.",
  },
  {
    n: "06",
    icon: "solar:shield-check-linear",
    titulo: "Poder de paralisar serviço irregular",
    desc: "Se detectarmos risco estrutural ou desvio grave, temos autoridade técnica para exigir paralisação até correção. Você não precisa brigar com a construtora — a gente faz isso.",
  },
];

export function ComoFuncionaObras() {
  return (
    <section className="bg-[#F4F6F9] border-t border-[#E0EAF4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0073C6]">Como funciona</span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E]">
            Do primeiro contato ao<br />Habite-se — sem surpresas
          </h2>
          <p className="mt-4 text-[#4A4A5A] text-lg">
            Um processo claro. Você não precisa entender de obra — é para isso que estamos aqui.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {etapas.map((e, i) => (
            <article key={e.n} className="relative bg-white border border-[#E0EAF4] rounded-2xl p-7">
              <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shadow-md ${i === 0 ? "bg-[#F5A623] text-[#1A1A2E]" : "bg-[#0073C6] text-white"}`}>
                {e.n}
              </div>
              <Icon icon={e.icon} className="w-8 h-8 text-[#0073C6] mb-5" />
              <h3 className="font-display font-semibold text-[#1A1A2E] text-base mb-2">{e.titulo}</h3>
              <p className="text-[#4A4A5A] text-sm leading-relaxed">{e.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-[#0073C6] rounded-2xl p-8 text-center text-white">
          <p className="font-display font-semibold text-xl mb-2">
            Já está no meio da obra? Ainda dá tempo.
          </p>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Podemos entrar em qualquer fase. O importante é garantir que as próximas etapas sejam executadas corretamente — pois é nelas que ainda é possível corrigir o que veio antes.
          </p>
        </div>
      </div>
    </section>
  );
}
