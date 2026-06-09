import { useEffect, useState } from "react";
import logoAsset from "@/assets/russell-bedford-logo.png.asset.json";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setPastHero(y > window.innerHeight);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgStyle = pastHero
    ? {
        background: "rgba(0, 61, 122, 0.92)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }
    : scrolled
    ? {
        background: "rgba(0, 61, 122, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }
    : {
        background: "rgba(0, 61, 122, 0)",
        borderBottom: "1px solid transparent",
      };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        ...bgStyle,
        transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Russell Bedford Brasil">
          <img
            src={logoAsset.url}
            alt="Russell Bedford"
            className="h-7 md:h-9 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
          <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline text-sm text-white/80">(xx) xxxxx-xxxx</span>
          <a
            href="https://wa.me/55XXXXXXXXXXX"
            className="inline-flex items-center rounded-lg bg-[#F5A623] px-4 py-2 text-sm font-semibold text-[#1A1A2E] hover:bg-[#E69612] transition-colors"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </header>
  );
}
