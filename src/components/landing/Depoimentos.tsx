import { Icon } from "@iconify/react";

const reviews = [
  {
    text: "Depois de anos tentando resolver o Habite-se sozinho, a Russell Bedford Brasil resolveu tudo em poucas semanas. Profissionalismo do início ao fim.",
    name: "Marcos T.",
    city: "Caxias do Sul - RS",
  },
  {
    text: "O inventário estava travado por falta de averbação. Eles cuidaram de tudo sem eu precisar ir a nenhuma repartição. Recomendo muito.",
    name: "Ana R.",
    city: "Bento Gonçalves - RS",
  },
  {
    text: "Atendimento pelo WhatsApp muito ágil e transparente. Recebi toda a documentação pronta sem complicação nenhuma.",
    name: "José L.",
    city: "Flores da Cunha - RS",
  },
];

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="w-[340px] sm:w-[380px] shrink-0 bg-[#E8F4FB] border border-[#E0EAF4] rounded-2xl p-6 whitespace-normal">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} icon="solar:star-bold" className="w-4 h-4 text-[#F5A623]" />
        ))}
      </div>
      <p className="text-[#1A1A2E] leading-relaxed">{r.text}</p>
      <div className="mt-5 pt-4 border-t border-[#E0EAF4]">
        <p className="font-semibold text-[#1A1A2E]">{r.name}</p>
        <p className="text-sm text-[#4A4A5A]">{r.city}</p>
      </div>
    </div>
  );
}

export function Depoimentos() {
  const looped = [...reviews, ...reviews];
  return (
    <section id="depoimentos" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center mb-12">
        <h2 className="gsap-fade-up font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#1A1A2E]">
          O que nossos clientes dizem
        </h2>
        <p className="gsap-fade-up mt-3 text-sm text-[#4A4A5A]">
          *Nomes abreviados para preservar a privacidade.
        </p>
      </div>

      <div className="marquee-pause group relative">
        <div className="flex gap-6 animate-marquee w-max">
          {looped.map((r, i) => (
            <Card key={i} r={r} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
