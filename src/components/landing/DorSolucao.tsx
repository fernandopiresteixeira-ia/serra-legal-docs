import { Icon } from "@iconify/react";

export function DorSolucao() {
  return (
    <section className="bg-[#F4F6F9] border-y border-[#E0EAF4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="gsap-fade-up max-w-3xl mx-auto text-center">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E]">
            Você está passando por alguma dessas situações?
          </h2>
          <p className="mt-4 text-[#4A4A5A] text-lg">
            Imóveis irregulares travam vendas, financiamentos e heranças. A regularização resolve
            tudo isso.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* Irregular */}
          <div className="gsap-fade-up relative bg-white border border-[#E0EAF4] rounded-2xl p-8 overflow-hidden">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#EF4444]" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                <Icon icon="solar:close-circle-linear" className="w-6 h-6 text-[#EF4444]" />
              </div>
              <h3 className="font-display font-semibold text-xl text-[#1A1A2E]">
                Sem regularização
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                "Banco recusa o financiamento",
                "Cartório bloqueia inventário ou doação",
                "Risco de multa e embargo da prefeitura",
                "Não consegue vender pelo valor real",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[#4A4A5A]">
                  <Icon icon="solar:close-circle-bold" className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Regularizado */}
          <div className="gsap-fade-up relative bg-white border border-[#0073C6]/30 rounded-2xl p-8 overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,115,198,0.25)]">
            <span className="absolute left-0 top-0 right-0 h-1 bg-gradient-to-r from-[#0073C6] to-[#00A3D7]" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                <Icon icon="solar:check-read-linear" className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-display font-semibold text-xl text-[#1A1A2E]">
                Imóvel regularizado
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                "Financiamento aprovado pelo banco",
                "Transferência em inventário liberada",
                "Documentação completa e sem pendências",
                "Valorização imediata do patrimônio",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[#4A4A5A]">
                  <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
