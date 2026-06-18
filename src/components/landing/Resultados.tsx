import { useEffect, useRef, useState } from "react";

type Stat = {
  prefix: string;
  target: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { prefix: "+", target: 300, suffix: "", label: "Imóveis regularizados" },
  { prefix: "+R$ ", target: 200, suffix: "mi", label: "Em patrimônio" },
  { prefix: "+", target: 40, suffix: "", label: "Municípios atendidos" },
  { prefix: "", target: 95, suffix: "%", label: "Processos sem deslocamento" },
];

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useCountUp(target: number, start: boolean, duration = 2000) {
  const reduced = typeof window !== "undefined" && prefersReducedMotion();
  const [value, setValue] = useState<number>(reduced ? target : 0);

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration, reduced]);

  return value;
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.target, start);
  return (
    <div className="flex flex-col items-center text-center px-4 lg:px-6 py-2 lg:py-0">
      <div className="font-display font-bold text-[#F5A623] text-4xl lg:text-6xl leading-none tracking-tight tabular-nums">
        {stat.prefix}
        {value}
        {stat.suffix}
      </div>
      <p className="mt-3 text-[#1A1A2E] text-[10px] lg:text-xs font-bold uppercase tracking-widest leading-relaxed">
        {stat.label}
      </p>
    </div>
  );
}

export function Resultados() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const node = ref.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) {
      setStart(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStart(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="resultados"
      className="relative z-20 -mt-[60px] lg:-mt-20 bg-transparent"
    >
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className="rounded-[20px] px-6 py-8 lg:px-12 lg:py-12"
          style={{
            background: 'linear-gradient(90deg, rgba(0, 163, 215, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
            backgroundColor: 'rgba(255, 255, 255, 0.10)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/20 gap-y-6 lg:gap-y-0">
            {stats.map((s, i) => (
              <div key={i}>
                <StatItem stat={s} start={start} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
