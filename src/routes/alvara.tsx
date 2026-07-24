import { createFileRoute } from "@tanstack/react-router";
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
