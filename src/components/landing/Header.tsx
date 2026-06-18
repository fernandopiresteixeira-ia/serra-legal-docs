import { useState, useEffect } from "react";
import logoAsset from "@/assets/russell-bedford-logo.png.asset.json";
import { LeadFormModal } from "./LeadFormModal";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#00A3D7]/70 backdrop-blur-md border-b border-white/20 shadow-[0_4px_24px_rgba(0,61,122,0.15)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <a href="#top" className="flex items-center h-full -ml-2 sm:-ml-4 -my-6">
            <img
              src={logoAsset.url}
              alt="Russell Bedford Brasil"
              className="h-[150%] w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-white/90">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#resultados" className="hover:text-white transition-colors">Resultados</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+5554999795685"
              className="hidden lg:inline text-sm text-white/90 hover:text-white transition-colors"
            >
              (54) 99979-5685
            </a>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center rounded-lg bg-white px-3 sm:px-4 py-2 text-sm font-semibold text-[#00A3D7] hover:bg-white/90 transition-colors"
            >
              Falar com especialista
            </button>
          </div>
        </div>
      </header>
      <LeadFormModal open={modalOpen} onOpenChange={setModalOpen} ctaOrigem="header" />
    </>
  );
}
