import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#E0EAF4] transition-shadow ${
        scrolled ? "shadow-[0_4px_24px_rgba(0,61,122,0.08)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-wide text-[15px]">
          <span className="text-[#1A1A2E]">Russell Bedford</span>{" "}
          <span className="text-[#0073C6]">Brasil</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#4A4A5A]">
          <a href="#servicos" className="hover:text-[#0073C6] transition-colors">Serviços</a>
          <a href="#como-funciona" className="hover:text-[#0073C6] transition-colors">Como Funciona</a>
          <a href="#depoimentos" className="hover:text-[#0073C6] transition-colors">Depoimentos</a>
          <a href="#faq" className="hover:text-[#0073C6] transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline text-sm text-[#4A4A5A]">(xx) xxxxx-xxxx</span>
          <a
            href="https://wa.me/55XXXXXXXXXXX"
            className="inline-flex items-center rounded-lg bg-[#0073C6] px-4 py-2 text-sm font-medium text-white hover:bg-[#005FA3] transition-colors"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </header>
  );
}
