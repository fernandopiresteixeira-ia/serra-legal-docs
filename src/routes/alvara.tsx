import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { HeroAlvara } from "@/components/alvara/HeroAlvara";
import { DorAlvara } from "@/components/alvara/DorAlvara";
import { ComoFuncionaAlvara } from "@/components/alvara/ComoFuncionaAlvara";
import { DiferenciaisAlvara } from "@/components/alvara/DiferenciaisAlvara";
import { FaqAlvara } from "@/components/alvara/FaqAlvara";
import { CtaAlvara } from "@/components/alvara/CtaAlvara";

export const Route = createFileRoute("/alvara")({
  head: () => ({
    meta: [
      { title: "Alvará de Construção em Caxias do Sul · Russell Bedford Brasil" },
      {
        name: "description",
        content:
          "Aprovação de projeto e alvará de construção em Caxias do Sul e Serra Gaúcha. Cuidamos de toda a documentação junto à Prefeitura. Análise inicial gratuita.",
      },
      { property: "og:title", content: "Alvará de Construção · Russell Bedford Brasil" },
      {
        property: "og:description",
        content:
          "Aprovação de projeto e alvará de construção na Serra Gaúcha. Do projeto ao habite-se, sem você precisar ir à Prefeitura.",
      },
    ],
  }),
  component: AlvaraPage,
});

function AlvaraPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 4) });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.utils.toArray<HTMLElement>(".gsap-fade-up").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroAlvara />
        <DorAlvara />
        <ComoFuncionaAlvara />
        <DiferenciaisAlvara />
        <FaqAlvara />
        <CtaAlvara />
      </main>
      <Footer />
    </>
  );
}
