import { useState } from "react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    q: "Qual é o prazo para tirar o alvará de construção em Caxias do Sul?",
    a: "O prazo legal estabelecido pelo Código de Obras de Caxias do Sul é de 30 dias úteis após o protocolo. Na prática, isso só se cumpre quando toda a documentação e o projeto são entregues corretamente na primeira vez — o que é exatamente o que garantimos.",
  },
  {
    q: "Quanto custa o alvará de construção?",
    a: "As taxas municipais em Caxias do Sul são calculadas sobre a área do projeto: aproximadamente R$0,126/m² para aprovação do projeto + R$0,29/m² para a licença de construção. Além disso, há a ART (Anotação de Responsabilidade Técnica) dos profissionais envolvidos. Imóveis até 70m² têm isenção. O custo total varia conforme o projeto — fazemos uma análise gratuita e apresentamos orçamento fechado antes de qualquer compromisso.",
  },
  {
    q: "Preciso ir à Prefeitura pessoalmente?",
    a: "Não. Cuidamos de todo o processo de forma remota — protocolamos via SMUWEB (sistema online da Prefeitura de Caxias do Sul) e respondemos às exigências sem você precisar se deslocar em nenhuma etapa.",
  },
  {
    q: "Qual a validade do alvará de construção?",
    a: "O alvará tem validade de 12 meses a partir da data de emissão. Se a obra não for concluída nesse período, é possível solicitar renovação. Avisamos com antecedência para que você não perca o prazo.",
  },
  {
    q: "O que acontece se construir sem alvará?",
    a: "Em Caxias do Sul, obra sem alvará pode gerar multa de até R$6.000, embargo imediato da obra (interdição com lacre da Prefeitura) e, em casos graves, ordem de demolição. Além disso, sem alvará você não consegue o Habite-se — o que impede venda, financiamento e regularização do imóvel.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "A documentação varia conforme o tipo de obra, mas em geral: projeto arquitetônico, plantas baixas, cortes e fachadas, projetos complementares (hidráulico, elétrico, estrutural), ART dos responsáveis técnicos, documentos do imóvel (matrícula atualizada) e documentos do proprietário. Ao fazer a análise inicial, listamos exatamente o que é necessário para o seu caso.",
  },
  {
    q: "Vocês atendem apenas Caxias do Sul?",
    a: "Não. Atendemos toda a Serra Gaúcha: Bento Gonçalves, Farroupilha, Flores da Cunha, São Marcos, Garibaldi, Carlos Barbosa e municípios vizinhos. Para municípios menores, avalie com a gente — analisamos caso a caso.",
  },
  {
    q: "É possível regularizar uma obra já construída?",
    a: "Sim. Nesse caso, o processo é de regularização de obra concluída, que pode incluir aprovação retroativa do projeto, levantamento da situação, pagamento das multas vigentes e emissão do Habite-se. Fazemos diagnóstico completo da situação sem custo.",
  },
  {
    q: "Após o alvará, o que é necessário para finalizar a obra legalmente?",
    a: "Após a conclusão da obra, é necessário obter o Habite-se (Certificado de Conclusão de Obra), que atesta que a construção foi executada conforme o projeto aprovado. Também pode ser necessária a averbação no cartório de imóveis. Cuidamos de todo esse processo também.",
  },
];

export function FaqAlvara() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#F4F6F9] border-t border-[#E0EAF4] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="gsap-fade-up text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0073C6]">Dúvidas frequentes</span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E]">
            Perguntas sobre alvará de construção
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="gsap-fade-up bg-white border border-[#E0EAF4] rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display font-medium text-[#1A1A2E] text-sm sm:text-base">{faq.q}</span>
                <Icon
                  icon="solar:alt-arrow-down-linear"
                  className={`w-5 h-5 text-[#0073C6] shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[#4A4A5A] text-sm leading-relaxed border-t border-[#E0EAF4] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
