const stats = [
  { value: "+300", label: "Imóveis regularizados" },
  { value: "+R$ 200mi", label: "Em patrimônio" },
  { value: "+40", label: "Municípios atendidos" },
  { value: "95%", label: "Processos sem deslocamento" },
];

export function Resultados() {
  return (
    <section
      id="resultados"
      className="relative bg-[#003D7A] py-12 lg:py-16 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-5 lg:px-8">
        <div className="gsap-fade-up relative rounded-2xl bg-gradient-to-b from-[#001E3D] to-[#00132A] border border-white/10 shadow-2xl px-6 py-10 lg:px-12 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:divide-x lg:divide-white/10">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center lg:px-6"
              >
                <div className="font-display font-bold text-[#7FD13B] text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight">
                  {s.value}
                </div>
                <p className="mt-3 text-white/80 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Linha de brilho verde */}
        <div className="mt-6 mx-auto h-px w-48 bg-gradient-to-r from-transparent via-[#7FD13B] to-transparent shadow-[0_0_20px_2px_rgba(127,209,59,0.6)]" />
      </div>
    </section>
  );
}
