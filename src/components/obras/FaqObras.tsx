import { useState } from "react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    q: "Posso contratar o acompanhamento depois que a obra já começou?",
    a: "Sim. Podemos entrar em qualquer fase da obra. Quanto antes, melhor — mas mesmo no meio da obra há muito que pode ser verificado e protegido. Fazemos avaliação do estado atual e do que ainda pode ser fiscalizado nas próximas fases.",
  },
  {
    q: "O que é um fiscal independente? Por que não confiar no engenheiro da construtora?",
    a: "O engenheiro da construtora é contratado e pago pela construtora — ele defende os interesses dela. O fiscal independente é contratado por você e trabalha exclusivamente para seus interesses. Em caso de conflito, o fiscal da construtora não vai te proteger. O nosso, sim.",
  },
  {
    q: "Qual a diferença entre acompanhamento de obra e laudo de vistoria?",
    a: "O laudo de vistoria é uma foto do momento — vai uma vez e registra o que encontra. O acompanhamento é contínuo: cobrimos as fases críticas com visitas regulares, identificamos problemas antes que virem impossíveis de corrigir, e mantemos relação com a construtora ao longo de todo o processo.",
  },
  {
    q: "O que acontece quando vocês encontram uma não-conformidade?",
    a: "Emitimos notificação técnica formal à construtora com prazo para correção. Se o risco for grave (estrutural, por exemplo), temos autoridade para paralisar o serviço até regularização. Você recebe cópia de tudo por WhatsApp no mesmo dia.",
  },
  {
    q: "Vocês acompanham obras de reforma também?",
    a: "Sim. Reformas têm riscos específicos — intervenções estruturais sem projeto, instalações que não estão em norma, uso de materiais inadequados. O processo é similar, adaptado ao escopo da reforma.",
  },
  {
    q: "Quanto custa a avaliação inicial?",
    a: "A avaliação inicial é gratuita. Você nos conta a situação da obra (fase, m², cronograma, projeto disponível) e nós avaliamos o que é necessário, sem cobrar nada por isso.",
  },
  {
    q: "O que é ART e por que é importante para o fiscal?",
    a: "ART é a Anotação de Responsabilidade Técnica, emitida pelo CREA-RS. Ela formaliza que um engenheiro habilitado está tecnicamente responsável pelo serviço. Sem ART, o acompanhamento não tem validade legal e o engenheiro não responde civilmente pelo que assinar.",
  },
  {
    q: "Vocês atendem fora de Caxias do Sul?",
    a: "Atendemos toda a Serra Gaúcha: Bento Gonçalves, Farroupilha, Flores da Cunha, São Marcos, Garibaldi, Carlos Barbosa e municípios próximos. Para projetos em outras regiões do RS, avaliaremos caso a caso.",
  },
];

export function FaqObras() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#F4F6F9] border-t border-[#E0EAF4] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0073C6]">Dúvidas frequentes</span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl leading-tight text-[#1A1A2E]">
            O que você precisa saber antes de contratar
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-[#E0EAF4] rounded-xl overflow-hidden">
              <button type="button" onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="font-display font-medium text-[#1A1A2E] text-sm sm:text-base">{faq.q}</span>
                <Icon icon="solar:alt-arrow-down-linear"
                  className={`w-5 h-5 text-[#0073C6] shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
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
