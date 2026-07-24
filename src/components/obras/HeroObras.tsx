import { Icon } from "@iconify/react";
import { useState } from "react";
import HeroWave from "@/components/ui/dynamic-wave-canvas-background";
import heroBg from "@/assets/hero-construcao.jpg";
import { LeadFormModal } from "@/components/landing/LeadFormModal";

export function HeroObras() {
  const [open, setOpen] = useState(false);

  return (
    <section id="top" className="relative min-h-screen flex items-center bg-[#1A1A2E] pt-24">
      <img src={heroBg} alt="" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-15 pointer-events-none" />
      <HeroWave className="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay opacity-60" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(26,26,46,0.92) 0%, rgba(0,61,122,0.80) 100%)" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F5A623]/15 border border-[#F5A623]/30 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#F5A623] mb-8">
            <Icon icon="solar:shield-warning-bold" className="w-4 h-4" />
            Acompanhamento de Obra · Caxias do Sul e Serra Gaúcha
          </div>

          <h1 className="font-display font-bold leading-[1.05] text-white text-[36px] sm:text-5xl lg:text-[60px] tracking-tight">
            Tem um engenheiro<br />
            <span className="text-[#F5A623]">do seu lado</span><br />
            na sua obra?
          </h1>

          <p className="mt-6 max-w-lg text-white/75 text-base sm:text-lg leading-relaxed">
            82% das obras residenciais têm pelo menos uma não-conformidade técnica. O problema: você só descobre depois de pagar — quando corrigir custa de 3 a 10× mais.
          </p>

          <div className="mt-3 max-w-lg text-white/60 text-sm leading-relaxed italic">
            A Russell Bedford coloca um engenheiro independente — que trabalha <strong className="text-white/80 not-italic">para você, não para a construtora</strong> — acompanhando cada etapa da sua obra.
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button type="button" onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-6 py-3.5 text-sm font-semibold text-[#1A1A2E] hover:bg-[#E69612] transition-all shadow-lg shadow-[#F5A623]/25">
              Quero um engenheiro na minha obra
              <Icon icon="solar:arrow-right-linear" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="https://wa.me/5554999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20acompanhamento%20de%20obra"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all">
              <Icon icon="logos:whatsapp-icon" className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/55">
            {["Avaliação inicial gratuita", "Engenheiro com CREA-RS", "Relatório a cada visita"].map(t => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Icon icon="solar:check-circle-bold" className="w-3.5 h-3.5 text-[#F5A623]" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Card de impacto à direita */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm space-y-4">
            <div className="bg-red-500/10 border border-red-500/25 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Icon icon="solar:danger-triangle-bold" className="w-5 h-5 text-red-400" />
                </div>
                <span className="font-display font-semibold text-white text-sm">Sem fiscal independente</span>
              </div>
              <ul className="space-y-2">
                {[
                  "Materiais subfaturados pela empreiteira",
                  "Concretagem sem resistência adequada",
                  "Instalações fora de norma fechadas na parede",
                  "Obra atrasada sem justificativa técnica",
                  "Prejuízo médio: R$ 38.000 em reparos",
                ].map(i => (
                  <li key={i} className="flex gap-2 text-red-300/80 text-xs">
                    <Icon icon="solar:close-circle-bold" className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/25 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Icon icon="solar:shield-check-bold" className="w-5 h-5 text-green-400" />
                </div>
                <span className="font-display font-semibold text-white text-sm">Com a Russell Bedford</span>
              </div>
              <ul className="space-y-2">
                {[
                  "Visitas técnicas em cada fase crítica",
                  "Relatório fotográfico por visita",
                  "Poder de paralisar serviço irregular",
                  "Você recebe tudo por WhatsApp",
                  "Custo do serviço < custo de 1 erro",
                ].map(i => (
                  <li key={i} className="flex gap-2 text-green-300/80 text-xs">
                    <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F5A623]/10 border border-[#F5A623]/25 rounded-xl px-5 py-4 text-center">
              <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-wide mb-1">Investimento típico</p>
              <p className="text-white font-display font-bold text-2xl">2–4% do custo da obra</p>
              <p className="text-white/50 text-xs mt-1">um único erro estrutural pode custar 10×</p>
            </div>
          </div>
        </div>
      </div>

      <LeadFormModal open={open} onOpenChange={setOpen} ctaOrigem="hero-obras" />
    </section>
  );
}
