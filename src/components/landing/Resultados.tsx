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
    <div className="flex flex-col items-center text-center px-4 lg:px-6">
      <div className="font-display font-bold text-[#F5A623] text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight tabular-nums">
        {stat.prefix}
        {value}
        {stat.suffix}
      </div>
      <p className="mt-3 text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em]">
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
      className="relative z-20 -mt-[60px] lg:-mt-20 pb-12 lg:pb-16"
    >
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div
          ref={ref}
          className="rounded-2xl bg-[#1A1A2E] shadow-xl px-6 py-10 lg:px-12 lg:py-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:divide-x lg:divide-white/15">
            {stats.map((s, i) => (
              <StatItem key={i} stat={s} start={start} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
