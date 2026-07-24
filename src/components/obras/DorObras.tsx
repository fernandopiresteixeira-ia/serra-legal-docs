import { Icon } from "@iconify/react";

const fases = [
  {
    fase: "Fundação",
    risco: "Erros aqui afundam tudo — literalmente",
    exemplos: ["Aço abaixo do especificado", "Profundidade insuficiente", "Concretagem sem teste de resistência"],
    cor: "red",
  },
  {
    fase: "Estrutura",
    risco: "Depois da laje pronta, não tem como voltar atrás",
    exemplos: ["Pilares fora de prumo", "Traço de concreto errado", "Cobrimento do aço incorreto"],
    cor: "orange",
  },
  {
    fase: "Instalações",
    risco: "Erro escondido atrás da parede custa 10× para corrigir",
    exemplos: ["Tubulação de bitola errada", "Fiação sem norma", "Vedação inadequada de embutidos"],
    cor: "yellow",
  },
  {
    fase: "Acabamento",
    risco: "Subfaturamento de material é comum e quase invisível",
    exemplos: ["Cerâmica de espessura inferior", "Revestimento sem argamassa adequada", "Pintura com demão a menos"],
    cor: "blue",
  },
];

const corMap: Record<string, string> = {
  red: "border-red-200 bg-red-50",
  orange: "border-orange-200 bg-orange-50",
  yellow: "border-yellow-200 bg-yellow-50",
  blue: "border-blue-200 bg-blue-50",
};

const textMap: Record<string, string> = {
  red: "text-red-700",
  orange: "text-orange-700",
  yellow: "text-yellow-700",
  blue: "text-blue-700",
};

export function DorObras() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EF4444]">Por que você precisa de um fiscal</span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E]">
            Há erros que não têm conserto.<br />
            <span className="text-[#EF4444]">Há momentos em que já é tarde demais.</span>
          </h2>
          <p className="mt-5 text-[#4A4A5A] text-lg">
            A construtora trabalha para entregar rápido e lucrar mais. O fiscal independente existe para garantir que <strong>o que foi pago foi feito</strong> — antes de ficar impossível corrigir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {fases.map((f) => (
            <div key={f.fase} className={`border rounded-2xl p-7 ${corMap[f.cor]}`}>
              <div className="flex items-start gap-4 mb-4">
                <Icon icon="solar:danger-triangle-bold" className={`w-6 h-6 shrink-0 mt-0.5 ${textMap[f.cor]}`} />
                <div>
                  <h3 className={`font-display font-semibold text-lg ${textMap[f.cor]}`}>{f.fase}</h3>
                  <p className="text-[#1A1A2E] text-sm font-medium mt-0.5">{f.risco}</p>
                </div>
              </div>
              <ul className="space-y-1.5 pl-10">
                {f.exemplos.map(e => (
                  <li key={e} className="text-[#4A4A5A] text-sm flex gap-2">
                    <Icon icon="solar:arrow-right-linear" className="w-4 h-4 shrink-0 mt-0.5 text-[#4A4A5A]/50" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bloco de choque */}
        <div className="bg-[#1A1A2E] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-[#F5A623] text-sm font-semibold uppercase tracking-wide mb-3">A conta que ninguém quer fazer</p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
              Uma casa de R$ 500.000 pode ter<br />
              <span className="text-[#F5A623]">R$ 50.000 em problemas escondidos</span>
            </h3>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              Pesquisa da CBIC aponta que irregularidades técnicas afetam mais de 80% das obras residenciais brasileiras. A maioria dos proprietários só descobre quando aparece a rachadura, quando a fiação queima, ou quando a Prefeitura embarga.
            </p>
          </div>
          <div className="shrink-0 text-center">
            <p className="text-white/40 text-xs uppercase tracking-wide mb-2">Custo do fiscal independente</p>
            <p className="font-display font-bold text-white text-4xl">2–4%</p>
            <p className="text-white/40 text-xs mt-1">do valor da obra</p>
            <div className="mt-4 w-px h-8 bg-white/20 mx-auto" />
            <p className="text-white/40 text-xs uppercase tracking-wide mt-4 mb-2">Custo médio de correção pós-entrega</p>
            <p className="font-display font-bold text-[#EF4444] text-4xl">38–70%</p>
            <p className="text-white/40 text-xs mt-1">do problema original</p>
          </div>
        </div>
      </div>
    </section>
  );
}
