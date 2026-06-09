import { Icon } from "@iconify/react";
import casalAsset from "@/assets/casal-chaves.png.asset.json";

const services = [
  {
    badge: "Municipal",
    icon: "solar:home-check-linear",
    title: "Habite-se",
    desc: "Aprovação municipal da edificação concluída. Obrigatório para vender, financiar ou alugar legalmente.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=70",
    imageAlt: "Engenheiro analisando plantas em uma mesa de trabalho",
  },
  {
    badge: "Federal",
    icon: "solar:document-bold",
    title: "INSS de Obras (CND)",
    desc: "Regularização previdenciária da construção e emissão da Certidão Negativa de Débitos.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=70",
    imageAlt: "Pessoa assinando documentos oficiais",
  },
  {
    badge: "Cartório",
    icon: "solar:pen-new-square-linear",
    title: "Averbação",
    desc: "Registro oficial da construção na matrícula do imóvel. Sem isso, juridicamente a construção não existe.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=70",
    imageAlt: "Atendimento em balcão de cartório",
  },
  {
    badge: "Projeto",
    icon: "solar:ruler-pen-linear",
    title: "Aprovação de Projetos",
    desc: "Aprovação de projetos novos, reformas e ampliações junto à Prefeitura Municipal.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=70",
    imageAlt: "Arquiteto revisando plantas baixas sobre a mesa",
  },
  {
    badge: "Rural",
    icon: "solar:map-linear",
    title: "Regularização Rural",
    desc: "INCRA, ITR, CCIR, CAR e georreferenciamento para propriedades rurais e rururbanas.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=70",
    imageAlt: "Vista aérea de propriedade rural e plantação",
  },
  {
    badge: "Segurança",
    icon: "solar:fire-linear",
    title: "PPCI",
    desc: "Plano de Proteção Contra Incêndio exigido pelo Corpo de Bombeiros para imóveis comerciais.",
    image:
      "https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=800&q=70",
    imageAlt: "Equipamento de segurança contra incêndio instalado",
  },
];

export function Servicos() {
  return (
    <section
      id="servicos"
      className="relative pt-24 lg:pt-32 pb-32 lg:pb-40 bg-white"
    >
      {/* Bottom half blue layer with ghosted couple photo */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden">
        <img
          src={casalAsset.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0, 115, 198, 0.82)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="gsap-fade-up mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0073C6]">
            Nossos serviços
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E] max-w-2xl">
            Regularização completa do seu imóvel
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((s) => (
            <article
              key={s.title}
              className="gsap-fade-up group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,61,0.15)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="px-7 pt-7 pb-4 flex-1">
                <div className="flex items-start justify-between mb-5">
                  <Icon icon={s.icon} className="w-7 h-7 text-[#0073C6]" />
                  <span className="rounded-full bg-[#F5A623]/15 text-[#B5781A] text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
                    {s.badge}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-[#003D7A]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[#4A4A5A] text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="h-[180px] w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
