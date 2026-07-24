import { Icon } from "@iconify/react";
import { useState } from "react";
import { LeadFormModal } from "@/components/landing/LeadFormModal";

const planos = [
  {
    nome: "Residencial Compacto",
    subtitulo: "Até 150 m²",
    preco: "R$ 900",
    periodo: "/mês",
    destaque: false,
    itens: [
      "2 visitas técnicas por mês",
      "Relatório fotográfico por visita",
      "Acompanhamento via WhatsApp",
      "ART inclusa",
      "Análise do projeto e contrato",
    ],
    nao: ["Poder de paralisação formal", "Laudos específicos por fase"],
  },
  {
    nome: "Residencial Padrão",
    subtitulo: "150–300 m² · Mais escolhido",
    preco: "R$ 1.500",
    periodo: "/mês",
    destaque: true,
    itens: [
      "4 visitas técnicas por mês",
      "Relatório fotográfico por visita",
      "Acompanhamento via WhatsApp",
      "ART inclusa",
      "Análise do projeto e contrato",
      "Poder de paralisação formal",
      "Laudo técnico por fase concluída",
    ],
    nao: [],
  },
  {
    nome: "Residencial Premium / Comercial",
    subtitulo: "Acima de 300 m²",
    preco: "Sob consulta",
    periodo: "",
    destaque: false,
    itens: [
      "Visitas conforme cronograma da obra",
      "Relatório fotográfico por visita",
      "Acompanhamento via WhatsApp",
      "ART inclusa",
      "Análise do projeto e contrato",
      "Poder de paralisação formal",
      "Laudos técnicos completos",
      "Reuniões mensais com o proprietário",
    ],
    nao: [],
  },
];

export function PrecoObras() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0073C6]">Investimento</span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E]">
            Preço transparente.<br />Sem surpresa no meio do caminho.
          </h2>
          <p className="mt-4 text-[#4A4A5A] text-lg">
            Somos o único escritório de Caxias do Sul que divulga valores antes de você ligar. Porque acreditamos que transparência é o primeiro sinal de confiança.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {planos.map((p) => (
            <div key={p.nome} className={`rounded-2xl p-8 relative flex flex-col ${p.destaque ? "bg-[#0073C6] text-white shadow-2xl shadow-[#0073C6]/25 scale-[1.03]" : "bg-[#F4F6F9] border border-[#E0EAF4]"}`}>
              {p.destaque && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5A623] text-[#1A1A2E] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Mais escolhido
                </div>
              )}
              <p className={`font-display font-semibold text-lg ${p.destaque ? "text-white" : "text-[#1A1A2E]"}`}>{p.nome}</p>
              <p className={`text-xs mt-1 mb-5 ${p.destaque ? "text-white/60" : "text-[#4A4A5A]"}`}>{p.subtitulo}</p>
              <div className="mb-7">
                <span className={`font-display font-bold text-4xl ${p.destaque ? "text-white" : "text-[#1A1A2E]"}`}>{p.preco}</span>
                <span className={`text-sm ${p.destaque ? "text-white/60" : "text-[#4A4A5A]"}`}>{p.periodo}</span>
              </div>
              <ul className="space-y-2.5 flex-1 mb-8">
                {p.itens.map(i => (
                  <li key={i} className={`flex gap-2.5 text-sm ${p.destaque ? "text-white/85" : "text-[#4A4A5A]"}`}>
                    <Icon icon="solar:check-circle-bold" className={`w-4 h-4 shrink-0 mt-0.5 ${p.destaque ? "text-green-300" : "text-green-500"}`} />
                    {i}
                  </li>
                ))}
                {p.nao.map(i => (
                  <li key={i} className={`flex gap-2.5 text-sm ${p.destaque ? "text-white/35" : "text-[#4A4A5A]/40"}`}>
                    <Icon icon="solar:minus-circle-linear" className="w-4 h-4 shrink-0 mt-0.5" />
                    {i}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => setOpen(true)}
                className={`w-full rounded-lg py-3 text-sm font-semibold transition-all ${p.destaque ? "bg-[#F5A623] text-[#1A1A2E] hover:bg-[#E69612]" : "bg-[#0073C6] text-white hover:bg-[#005FA3]"}`}>
                Solicitar proposta gratuita
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-[#4A4A5A] text-sm">
          Valores para obras em Caxias do Sul e Serra Gaúcha. Para outros municípios, solicite avaliação gratuita.
        </p>
      </div>

      <LeadFormModal open={open} onOpenChange={setOpen} ctaOrigem="preco-obras" />
    </section>
  );
}
