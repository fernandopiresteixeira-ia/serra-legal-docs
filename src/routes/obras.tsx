import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { HeroObras } from "@/components/obras/HeroObras";
import { ProvasSociaisObras } from "@/components/obras/ProvasSociaisObras";
import { DorObras } from "@/components/obras/DorObras";
import { ComoFuncionaObras } from "@/components/obras/ComoFuncionaObras";
import { DiferenciaisObras } from "@/components/obras/DiferenciaisObras";
import { PrecoObras } from "@/components/obras/PrecoObras";
import { FaqObras } from "@/components/obras/FaqObras";
import { CtaObras } from "@/components/obras/CtaObras";

export const Route = createFileRoute("/obras")({
  head: () => ({
    meta: [
      { title: "Acompanhamento de Obra em Caxias do Sul · Russell Bedford Brasil" },
      {
        name: "description",
        content:
          "Fiscal independente para sua obra em Caxias do Sul e Serra Gaúcha. Engenheiro com CREA-RS acompanhando cada fase — relatório por visita, poder de paralisação, a partir de R$ 900/mês.",
      },
      { property: "og:title", content: "Acompanhamento de Obra · Russell Bedford Brasil Engenharia" },
      {
        property: "og:description",
        content:
          "Um engenheiro independente do seu lado na sua obra. 82% das obras têm não-conformidades. Evite R$ 38.000 em prejuízo médio com fiscalização profissional.",
      },
    ],
  }),
  component: ObrasPage,
});

function ObrasPage() {
  return (
    <>
      <Header />
      <main>
        <HeroObras />
        <ProvasSociaisObras />
        <DorObras />
        <ComoFuncionaObras />
        <DiferenciaisObras />
        <PrecoObras />
        <FaqObras />
        <CtaObras />
      </main>
      <Footer />
    </>
  );
}
