import { Icon } from "@iconify/react";

const dores = [
  "Vai construir e não sabe como tirar o alvará",
  "Obra embargada pela fiscalização da Prefeitura",
  "Projeto devolvido com exigências — não sabe o que fazer",
  "Comprou imóvel irregular e precisa regularizar para vender",
  "Quer financiamento mas o banco exige documentação completa",
  "Precisa do Habite-se e não sabe por onde começar",
];

const consequencias = [
  "Multa de até R$6.000 por obra sem alvará em Caxias do Sul",
  "Embargo imediato — obra parada até regularizar",
  "Não consegue vender nem financiar o imóvel",
  "Cartório bloqueia inventário e doações",
  "Desvalorização de até 50% no valor do imóvel",
  "Risco de ordem de demolição em casos graves",
];

export function DorAlvara() {
  return (
    <section className="bg-[#F4F6F9] border-y border-[#E0EAF4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E]">
            Você está passando por alguma dessas situações?
          </h2>
          <p className="mt-4 text-[#4A4A5A] text-lg">
            Construir sem alvará em Caxias do Sul pode gerar consequências sérias — financeiras e jurídicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#E0EAF4] rounded-2xl p-8 relative overflow-hidden">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#EF4444]" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                <Icon icon="solar:danger-circle-linear" className="w-6 h-6 text-[#EF4444]" />
              </div>
              <h3 className="font-display font-semibold text-xl text-[#1A1A2E]">Quem nos procura</h3>
            </div>
            <ul className="space-y-3">
              {dores.map((d) => (
                <li key={d} className="flex gap-3 text-[#4A4A5A]">
                  <Icon icon="solar:arrow-right-linear" className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-[#E0EAF4] rounded-2xl p-8 relative overflow-hidden">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5A623]" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <Icon icon="solar:bill-list-linear" className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="font-display font-semibold text-xl text-[#1A1A2E]">O que acontece sem alvará</h3>
            </div>
            <ul className="space-y-3">
              {consequencias.map((c) => (
                <li key={c} className="flex gap-3 text-[#4A4A5A]">
                  <Icon icon="solar:close-circle-bold" className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
