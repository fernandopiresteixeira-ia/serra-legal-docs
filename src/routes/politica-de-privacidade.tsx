import { createFileRoute, Link } from "@tanstack/react-router";
import pdfAsset from "@/assets/PoliticaDePrivacidadeRussel.pdf.asset.json";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade · Russell Bedford Brasil" },
      {
        name: "description",
        content: "Leia a Política de Privacidade da Russell Bedford Brasil sobre a segurança, privacidade e proteção dos dados dos usuários.",
      },
    ],
  }),
  component: PoliticaDePrivacidade,
});

function PoliticaDePrivacidade() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="bg-white rounded-[20px] p-6 md:p-12 shadow-sm border border-slate-100">
            <h1 className="font-display font-bold text-3xl md:text-4xl text-[#003D7A] mb-6">
              Política de Privacidade
            </h1>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Esta página é mantida pela Russell Bedford Brasil para informar e esclarecer aos nossos clientes e visitantes como coletamos, usamos, armazenamos e protegemos seus dados pessoais de acordo com as leis vigentes.
            </p>

            {/* Seção do PDF */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                    <path d="M10 9H8"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-800">Documento Oficial</h3>
                  <p className="text-sm text-slate-500">Política de Privacidade Russell Bedford Brasil (PDF)</p>
                </div>
              </div>
              <a
                href={pdfAsset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#003D7A] hover:bg-[#002D62] text-white font-medium px-6 py-3 rounded-lg transition-all shadow-sm shadow-blue-900/10 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
                  <path d="M15 3h6v6"/>
                  <path d="M10 14 21 3"/>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                </svg>
                Abrir Documento PDF
              </a>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
              <h2 className="font-display font-semibold text-xl text-slate-800 mt-8">1. Sobre o Tratamento de Dados</h2>
              <p>
                A Russell Bedford Brasil coleta e utiliza informações que você ativamente nos fornece ao preencher formulários para contato ou solicitação de orçamento neste site. Nosso compromisso é tratar esses dados com total segurança e respeito à sua privacidade.
              </p>

              <h2 className="font-display font-semibold text-xl text-slate-800 mt-8">2. Compartilhamento de Dados</h2>
              <p>
                Garantimos que não vendemos ou alugamos seus dados pessoais a terceiros. As informações coletadas são utilizadas exclusivamente pela Russell Bedford Brasil para prestar os serviços contratados ou responder às suas mensagens e solicitações técnicas.
              </p>

              <h2 className="font-display font-semibold text-xl text-slate-800 mt-8">3. Seus Direitos</h2>
              <p>
                A qualquer momento, você possui o direito de solicitar o acesso, retificação, exclusão ou atualização de seus dados pessoais em nossa posse. Caso queira exercer esses direitos ou tenha dúvidas, por favor, entre em contato através dos nossos canais de atendimento indicados abaixo.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <Link to="/" className="text-[#003D7A] hover:underline inline-flex items-center gap-2 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                  <path d="m12 19-7-7 7-7"/>
                  <path d="M19 12H5"/>
                </svg>
                Voltar para a Página Inicial
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
