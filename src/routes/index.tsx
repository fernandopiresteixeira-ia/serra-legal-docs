import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PorQueConfiar } from "@/components/landing/PorQueConfiar";
import { Diferenciais } from "@/components/landing/Diferenciais";
import { DorSolucao } from "@/components/landing/DorSolucao";
import { Servicos } from "@/components/landing/Servicos";
import { Selos } from "@/components/landing/Selos";
import { ComoFunciona } from "@/components/landing/ComoFunciona";

import { Faq } from "@/components/landing/Faq";
import { CtaFinal } from "@/components/landing/CtaFinal";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Russell Bedford Brasil · Regularização de Imóveis na Serra Gaúcha" },
      {
        name: "description",
        content:
          "Habite-se, INSS de Obras, Averbação e Aprovação de Projetos na Serra Gaúcha - RS. Análise gratuita, sem você precisar ir a nenhuma repartição.",
      },
      { property: "og:title", content: "Russell Bedford Brasil · Regularização de Imóveis" },
      {
        property: "og:description",
        content:
          "Regularização completa do seu imóvel na Serra Gaúcha. Sem burocracia para você.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 4) });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      // Hero stagger
      gsap.fromTo(
        ".gsap-reveal",
        { y: 100, opacity: 0, visibility: "hidden" },
        {
          y: 0,
          opacity: 1,
          visibility: "visible",
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      // Scroll fades
      gsap.utils.toArray<HTMLElement>(".gsap-fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />

        <PorQueConfiar />
        <Diferenciais />
        <DorSolucao />
        <Servicos />
        <Selos />
        <ComoFunciona />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
