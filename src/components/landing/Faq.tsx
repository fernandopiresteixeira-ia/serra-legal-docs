import { useState } from "react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    q: "Por que preciso regularizar meu imóvel?",
    a: "Imóveis irregulares não podem ser financiados por bancos, não podem ser transferidos em herança ou doação, e estão sujeitos a multas e embargo pela Prefeitura. A regularização protege seu patrimônio e aumenta seu valor de mercado.",
  },
  {
    q: "Quanto tempo leva o processo?",
    a: "O prazo varia conforme o tipo de imóvel, os serviços necessários e a demanda dos órgãos competentes. Informamos uma estimativa realista já na análise inicial gratuita.",
  },
  {
    q: "Preciso ir pessoalmente às repartições?",
    a: "Não. Com uma procuração simples, a Russell Bedford Brasil representa você junto à Prefeitura, INSS e Cartório. Você não precisa comparecer pessoalmente em nenhuma etapa.",
  },
  {
    q: "Qual é o custo da regularização?",
    a: "O valor depende do tipo, tamanho e situação atual do imóvel. Por isso oferecemos análise inicial gratuita e sem compromisso, com orçamento detalhado antes de qualquer decisão.",
  },
  {
    q: "Imóvel construído há muitos anos pode ser regularizado?",
    a: "Sim. É possível regularizar construções antigas, desde que atendam aos requisitos técnicos e legais aplicáveis. Avaliamos cada caso individualmente.",
  },
  {
    q: "Quais municípios da Serra Gaúcha vocês atendem?",
    a: "Atendemos Caxias do Sul, Bento Gonçalves, Flores da Cunha, Garibaldi, Carlos Barbosa, Nova Prata, Vacaria, São Marcos, Farroupilha e municípios vizinhos da região serrana.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-[#F4F6F9] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="gsap-fade-up text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0073C6]">
            Dúvidas frequentes
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E]">
            Perguntas frequentes sobre regularização
          </h2>
        </div>

        <div className="gsap-fade-up">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border-b border-[#E0EAF4] transition-colors ${
                  isOpen ? "bg-[#E8F4FB]" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left py-5 px-4 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-[#1A1A2E]">{f.q}</span>
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className={`w-5 h-5 text-[#0073C6] transition-transform shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 text-[#4A4A5A] leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
