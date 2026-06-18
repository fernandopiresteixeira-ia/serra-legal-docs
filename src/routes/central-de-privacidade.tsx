import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { toast } from "sonner";
import pdfAsset from "@/assets/PoliticaDePrivacidadeRussel.pdf.asset.json";

export const Route = createFileRoute("/central-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Central de Privacidade · Russell Bedford Brasil" },
      {
        name: "description",
        content: "Canal estruturado para atender solicitações relacionadas à Lei Geral de Proteção de Dados (LGPD) da Russell Bedford Brasil.",
      },
    ],
  }),
  component: CentralDePrivacidade,
});

function CentralDePrivacidade() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    requestType: "",
    message: "",
    declareIsOwner: false,
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.declareIsOwner) {
      toast.error("Você precisa declarar que é o titular dos dados vinculados para enviar.");
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      toast.success("Sua solicitação foi enviada com sucesso ao nosso DPO!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        cpf: "",
        requestType: "",
        message: "",
        declareIsOwner: false,
      });
      setLoading(false);
    }, 1200);
  };

  const faqs = [
    {
      q: "Quais são os direitos do titular de dados pessoais?",
      a: "De acordo com a LGPD (Lei nº 13.709/2018), você tem direito a confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, entre outros.",
    },
    {
      q: "Como faço uma solicitação relacionada à LGPD?",
      a: "Você pode preencher o formulário oficial presente nesta Central de Privacidade, ou se preferir, enviar um e-mail diretamente para o nosso DPO no endereço dpo@russellbedford.com.br.",
    },
    {
      q: "Quais são as atribuições do Encarregado de Dados (DPO)?",
      a: "O DPO (Data Protection Officer) atua como canal de comunicação entre a nossa instituição, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD), garantindo a conformidade e respondendo às dúvidas de privacidade.",
    },
    {
      q: "Será necessário confirmar minha identidade?",
      a: "Sim. Para garantir a segurança dos seus próprios dados e evitar que terceiros não autorizados tenham acesso a eles, podemos solicitar informações ou documentos complementares para validação da sua identidade antes de atender à requisição.",
    },
    {
      q: "Como a Russell Bedford Brasil cuida da privacidade dos dados pessoais?",
      a: "Adotamos medidas técnicas, administrativas e de segurança organizacional para proteger seus dados contra acessos não autorizados, perdas ou qualquer forma de tratamento inadequado ou ilícito.",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-[#003D7A] text-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <span className="text-white/60 uppercase tracking-widest text-xs font-bold font-display">PRIVACIDADE E PROTEÇÃO DE DADOS</span>
            <h1 className="font-display font-bold text-4xl lg:text-5xl mt-2 mb-4 leading-tight">
              Central de Privacidade
            </h1>
            <p className="text-white/80 max-w-2xl text-base lg:text-lg mb-6 leading-relaxed">
              Este canal foi estruturado para atender solicitações relacionadas à Lei Geral de Proteção de Dados (LGPD), bem como permitir o contato com o Encarregado pelo Tratamento de Dados Pessoais (DPO) da Russell Bedford Brasil.
            </p>
            <a
              href="#formulario-dpo"
              className="inline-flex items-center justify-center bg-[#F5A623] hover:bg-[#E0941B] text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Falar com o DPO
            </a>
          </div>
        </section>

        {/* Atendimento ao Titular */}
        <section className="py-12 max-w-7xl mx-auto px-5 lg:px-8">
          <div className="bg-white rounded-[20px] p-6 lg:p-10 shadow-sm border border-slate-100 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <span className="text-[#003D7A] uppercase tracking-wider text-[11px] font-bold">CANAL LGPD</span>
              <h2 className="font-display font-bold text-2xl text-[#003D7A] mt-1 mb-4">
                Atendimento ao titular de dados e à ANPD
              </h2>
              <div className="text-slate-600 text-sm space-y-4 leading-relaxed">
                <p>
                  A Russell Bedford Brasil disponibiliza esta Central de Privacidade para o exercício dos direitos dos titulares de dados pessoais, em conformidade com a Lei nº 13.709/2018 – Lei Geral de Proteção de Dados (LGPD).
                </p>
                <p>
                  Por meio deste canal, poderão ser encaminhadas solicitações relacionadas aos direitos previstos no art. 18 da LGPD, bem como demandas de confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade, oposição, revogação do consentimento e demais assuntos pertinentes.
                </p>
                <p>
                  Nos casos aplicáveis, o atendimento poderá observar os critérios de validação de identidade do solicitante, em atenção à segurança das informações e à adequada proteção dos dados pessoais tratados.
                </p>
              </div>
              <a
                href="#formulario-dpo"
                className="mt-6 inline-flex items-center justify-center border border-[#003D7A] text-[#003D7A] hover:bg-slate-50 font-bold px-5 py-2.5 rounded-lg text-xs transition-colors"
              >
                Falar com o DPO
              </a>
            </div>

            <div className="md:col-span-5 bg-sky-50/50 rounded-xl p-6 border border-sky-100/50">
              <h3 className="font-display font-bold text-slate-800 text-sm mb-4">Base legal e orientações</h3>
              <ul className="space-y-4 text-xs text-slate-600">
                <li className="flex gap-3 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500 shrink-0 mt-0.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  <span>Canal destinado ao atendimento de titulares de dados pessoais e comunicações relacionadas à privacidade.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500 shrink-0 mt-0.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  <span>Atendimento em conformidade com a LGPD, especialmente em relação aos direitos previstos no art. 18.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500 shrink-0 mt-0.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  <span>Informações complementares poderão ser solicitadas para validação da demanda e proteção dos dados envolvidos.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500 shrink-0 mt-0.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  <span>Este canal também pode ser utilizado para contato com o Encarregado pelo Tratamento de Dados Pessoais (DPO).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fale com o DPO / Form */}
        <section id="formulario-dpo" className="py-12 max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Contatos à esquerda */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">FALE COM O NOSSO DPO</span>
              </div>
              
              <div className="bg-white rounded-xl p-5 border border-slate-100 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h4 className="font-display font-semibold text-slate-800 text-xs">Encarregado de Dados</h4>
                <p className="text-sm font-bold text-[#003D7A] mt-1">Deiverson Viegas</p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-100 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <h4 className="font-display font-semibold text-slate-800 text-xs">E-mail</h4>
                <a href="mailto:dpo@russellbedford.com.br" className="text-sm font-bold text-[#003D7A] mt-1 break-all hover:underline">
                  dpo@russellbedford.com.br
                </a>
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-100 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <h4 className="font-display font-semibold text-slate-800 text-xs">Telefone / WhatsApp</h4>
                <a href="https://wa.me/5551999572043" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#003D7A] mt-1 hover:underline">
                  +55 51 99957-2043
                </a>
              </div>
            </div>

            {/* Formulário à direita */}
            <div className="lg:col-span-8 bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-slate-100">
              <span className="text-sky-500 uppercase tracking-wider text-[10px] font-bold">SOLICITAÇÃO DE ATENDIMENTO DPO</span>
              <h3 className="font-display font-bold text-xl text-slate-800 mt-1 mb-6">
                Envie sua solicitação para o Encarregado de Dados (DPO)
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Seu nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-lg px-4 py-2.5 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Seu melhor e-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="exemplo@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-lg px-4 py-2.5 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Seu telefone</label>
                    <input
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-lg px-4 py-2.5 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Seu CPF</label>
                    <input
                      type="text"
                      required
                      placeholder="000.000.000-00"
                      value={formData.cpf}
                      onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-lg px-4 py-2.5 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Selecione o tipo de solicitação</label>
                  <select
                    required
                    value={formData.requestType}
                    onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                    className="w-full text-sm bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-lg px-4 py-2.5 outline-none transition-all"
                  >
                    <option value="">Selecione uma opção...</option>
                    <option value="confirmacao">Confirmação de tratamento de dados</option>
                    <option value="acesso">Acesso aos meus dados pessoais</option>
                    <option value="correcao">Correção de dados desatualizados/incorretos</option>
                    <option value="exclusao">Eliminação/Exclusão dos dados pessoais</option>
                    <option value="outros">Outros assuntos relacionados à LGPD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Descreva sua solicitação</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Escreva aqui detalhadamente a sua solicitação..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-sm bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-lg px-4 py-2.5 outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex gap-3 items-start cursor-pointer group">
                    <input
                      type="checkbox"
                      required
                      checked={formData.declareIsOwner}
                      onChange={(e) => setFormData({ ...formData, declareIsOwner: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-sky-500 focus:ring-sky-500 w-4 h-4 cursor-pointer"
                    />
                    <span className="text-[11px] text-slate-500 leading-normal select-none group-hover:text-slate-700">
                      Declaro que sou titular dos dados vinculados ao CPF acima mencionado e que todas as informações prestadas neste formulário são verdadeiras.
                    </span>
                  </label>
                </div>

                <p className="text-[10px] text-slate-400 leading-normal mt-4">
                  Ao enviar este formulário, seus dados serão utilizados exclusivamente para atender sua solicitação como titular de dados, sendo tratados de forma segura e conforme a LGPD. Para mais informações, consulte nossa <a href="/politica-de-privacidade" className="text-sky-500 hover:underline">Política de Privacidade</a>.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 disabled:bg-sky-400 text-white font-bold px-6 py-3 rounded-lg text-sm transition-all shadow-sm shadow-sky-500/10"
                >
                  {loading ? "Enviando..." : "Enviar solicitação"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* F.A.Q. */}
        <section className="py-12 max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[#003D7A] uppercase tracking-wider text-[11px] font-bold">PERGUNTAS FREQUENTES</span>
            <h2 className="font-display font-bold text-2xl lg:text-3xl text-slate-800 mt-1">F.A.Q.</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm group">
                <summary className="font-display font-semibold text-slate-800 hover:text-[#003D7A] cursor-pointer list-none flex items-center justify-between text-sm">
                  <span>{faq.q}</span>
                  <span className="text-slate-400 transition-transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 pt-3 border-t border-slate-50 text-slate-600 text-xs leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Banner Consultar Políticas */}
        <section className="py-12 max-w-7xl mx-auto px-5 lg:px-8">
          <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">INFORMAÇÕES COMPLEMENTARES</span>
              <h3 className="font-display font-bold text-xl text-slate-800 mt-1 mb-2">
                Consulte nossas políticas e diretrizes institucionais
              </h3>
              <p className="text-slate-500 text-xs max-w-xl">
                Para informações adicionais sobre diretrizes internas, integridade, privacidade e documentos institucionais, acesse a página de Política de Privacidade da Russell Bedford Brasil.
              </p>
            </div>
            <a
              href="/politica-de-privacidade"
              className="w-full md:w-auto inline-flex items-center justify-center bg-[#003D7A] hover:bg-[#002D62] text-white font-bold px-6 py-3 rounded-lg transition-colors text-xs shrink-0"
            >
              Acessar Política de Privacidade
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
