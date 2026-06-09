import { Icon } from "@iconify/react";

const services = [
  { badge: "Municipal", icon: "solar:home-check-linear", title: "Habite-se", desc: "Aprovação municipal da edificação concluída. Obrigatório para vender, financiar ou alugar legalmente." },
  { badge: "Federal", icon: "solar:document-bold", title: "INSS de Obras (CND)", desc: "Regularização previdenciária da construção e emissão da Certidão Negativa de Débitos." },
  { badge: "Cartório", icon: "solar:pen-new-square-linear", title: "Averbação", desc: "Registro oficial da construção na matrícula do imóvel. Sem isso, juridicamente a construção não existe." },
  { badge: "Projeto", icon: "solar:ruler-pen-linear", title: "Aprovação de Projetos", desc: "Aprovação de projetos novos, reformas e ampliações junto à Prefeitura Municipal." },
  { badge: "Rural", icon: "solar:map-linear", title: "Regularização Rural", desc: "INCRA, ITR, CCIR, CAR e georreferenciamento para propriedades rurais e rururbanas." },
  { badge: "Segurança", icon: "solar:fire-linear", title: "PPCI", desc: "Plano de Proteção Contra Incêndio exigido pelo Corpo de Bombeiros para imóveis comerciais." },
];

export function Servicos() {
  return (
    <section id="servicos" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="gsap-fade-up flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0073C6]">
              Nossos serviços
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E] max-w-2xl">
              Regularização completa do seu imóvel
            </h2>
          </div>
          <a href="#como-funciona" className="text-sm font-medium text-[#0073C6] hover:text-[#003D7A] transition-colors">
            Ver todos os serviços →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="gsap-fade-up group relative bg-[#E8F4FB] border border-[#E0EAF4] rounded-2xl p-6 hover:border-[#0073C6]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Icon icon={s.icon} className="w-7 h-7 text-[#0073C6]" />
                </div>
                <span className="rounded-full bg-[#F5A623]/15 text-[#B5781A] text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
                  {s.badge}
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl text-[#1A1A2E]">{s.title}</h3>
              <p className="mt-2 text-[#4A4A5A] text-sm leading-relaxed">{s.desc}</p>
              <a
                href="https://wa.me/55XXXXXXXXXXX"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#0073C6] group-hover:gap-2.5 transition-all"
              >
                Saiba mais <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
