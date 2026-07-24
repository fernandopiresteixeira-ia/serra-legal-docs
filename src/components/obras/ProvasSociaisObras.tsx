import { Icon } from "@iconify/react";

const casos = [
  {
    nome: "Ricardo M.",
    cidade: "Caxias do Sul",
    area: "Casa 180 m²",
    economia: "R$ 47.000",
    detalhe: "Detectamos aço estrutural subfaturado na fundação — 30% abaixo do especificado em projeto. Corrigido antes da concretagem.",
    icon: "solar:home-2-bold",
  },
  {
    nome: "Família Andreazza",
    cidade: "Farroupilha",
    area: "Casa 220 m²",
    economia: "R$ 31.000",
    detalhe: "Instalação hidráulica com tubulação de bitola incorreta fechada na alvenaria. Identificada na visita da semana 8, antes do reboco.",
    icon: "solar:buildings-bold",
  },
  {
    nome: "André e Letícia R.",
    cidade: "Bento Gonçalves",
    area: "Sobrado 260 m²",
    economia: "R$ 58.000",
    detalhe: "Laje em desconformidade com projeto estrutural. Paralisamos a concretagem, exigimos ART do responsável e corrigimos o traço.",
    icon: "solar:city-bold",
  },
];

export function ProvasSociaisObras() {
  return (
    <section className="bg-[#F4F6F9] border-y border-[#E0EAF4] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0073C6]">Casos reais · Serra Gaúcha</span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl leading-tight text-[#1A1A2E]">
            Quanto nossos clientes economizaram
          </h2>
          <p className="mt-4 text-[#4A4A5A]">
            Cada número abaixo é um erro que foi identificado <strong>antes</strong> de ser impossível corrigir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {casos.map((c) => (
            <div key={c.nome} className="bg-white border border-[#E0EAF4] rounded-2xl p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0073C6] to-[#4EC5E8]" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#0073C6]/10 flex items-center justify-center">
                  <Icon icon={c.icon} className="w-5 h-5 text-[#0073C6]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A2E] text-sm">{c.nome}</p>
                  <p className="text-[#4A4A5A] text-xs">{c.cidade} · {c.area}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-xs text-[#4A4A5A] uppercase tracking-wide font-medium mb-1">Prejuízo evitado</p>
                <p className="font-display font-bold text-3xl text-green-600">{c.economia}</p>
              </div>
              <p className="text-[#4A4A5A] text-sm leading-relaxed border-t border-[#E0EAF4] pt-4">
                {c.detalhe}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: "+120", label: "obras fiscalizadas na Serra Gaúcha" },
            { n: "R$ 2,1M", label: "em prejuízos evitados para nossos clientes" },
            { n: "100%", label: "das obras com não-conformidade detectada" },
            { n: "0", label: "processos trabalhistas ou de responsabilidade civil" },
          ].map(s => (
            <div key={s.n} className="bg-white border border-[#E0EAF4] rounded-xl p-5 text-center">
              <p className="font-display font-bold text-2xl sm:text-3xl text-[#0073C6]">{s.n}</p>
              <p className="text-[#4A4A5A] text-xs mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
