# Plano: Landing Page Russell Bedford Brasil

Construir uma landing page completa de página única para uma empresa de regularização de imóveis na Serra Gaúcha, seguindo exatamente a estrutura, paleta de cores azul/clara, animações e seções descritas no briefing.

## O que vai ser entregue

Uma página única (rota `/`) com 10 seções, header fixo, botão flutuante do WhatsApp e footer — tudo em português, pronta para revisão visual antes de substituir os textos finais (telefone, CREA, etc).

### Seções na ordem
1. **Header fixo** — logo "Russell Bedford Brasil", navegação, telefone, botão CTA. Ganha sombra ao rolar.
2. **Hero** — fundo azul-marinho `#003D7A`, padrão de pontos sutil, badge âmbar, título grande em duas linhas, parágrafo, 2 CTAs, 3 selos de confiança, indicador de scroll animado.
3. **Diferenciais** — imagem à esquerda, 3 diferenciais com ícones à direita.
4. **Dor → Solução** — duas colunas comparativas (irregular vs regularizado) com check/x.
5. **Serviços** — grid 3×2 com 6 cartões (Habite-se, INSS de Obras, Averbação, Aprovação de Projetos, Regularização Rural, PPCI).
6. **Selos de confiança** — 4 colunas com ícones.
7. **Como funciona** — 6 passos em grid 3×2 com numeração destacada e disclaimer de prazos.
8. **Depoimentos** — marquee horizontal infinito com 3 cartões (duplicados para loop), pausa no hover.
9. **FAQ** — accordion com 6 perguntas, abre/fecha suave.
10. **CTA Final** — fundo `#2A3F6F`, dois botões (análise gratuita + WhatsApp).
11. **Footer** — 4 colunas, disclaimer de compliance, créditos.
12. **WhatsApp flutuante** — canto inferior direito, verde, com pulse.

### Conformidade (Google Ads)
- Sem contagem regressiva nem urgência falsa.
- Linguagem com "pode", "contribui para", "facilita" — sem garantias.
- Disclaimer sobre prazos estimados na seção "Como Funciona".
- Links de Política de Privacidade e Termos no footer (apenas links — páginas podem ser criadas depois).
- Sem pop-ups automáticos. WhatsApp em formato `wa.me`.

## Detalhes técnicos

- **Stack**: já em React + TanStack Start + Tailwind v4. Vou adicionar GSAP, ScrollTrigger e Lenis via `bun add`.
- **Fontes**: Inter + Montserrat carregadas via `<link>` no `__root.tsx` (Tailwind v4 não aceita `@import` de URL).
- **Tokens de cor**: definidos em `src/styles.css` via `@theme` usando os hex exatos do briefing convertidos pra serem usáveis como classes (`bg-primary`, `text-heading`, `bg-ice`, `bg-amber-accent`, etc).
- **Ícones**: `@iconify/react` com conjunto `solar`.
- **Animações**:
  - Hero: GSAP timeline com stagger fade-up no mount.
  - Seções: classe `gsap-fade-up` + ScrollTrigger (entra a 85% da viewport).
  - Header: listener de scroll adiciona sombra acima de 50px.
  - Marquee: `@keyframes` CSS `translateX(-50%)` em 25s linear infinito, `animation-play-state: paused` no hover.
  - FAQ: transição de altura com componente próprio (sem usar shadcn accordion para manter o estilo exato pedido).
- **Lenis**: inicializado em `useEffect` no componente da home, integrado ao `requestAnimationFrame` do GSAP ticker.
- **Imagem dos diferenciais**: gerada via `imagegen` (foto profissional de casa/documentos) e salva em `src/assets/`.
- **SEO**: `head()` da rota `/` com title, description, OG tags em português específicos da empresa.
- **Estrutura de arquivos**:
  - `src/routes/index.tsx` — monta as seções e inicializa Lenis/GSAP.
  - `src/components/landing/` — um arquivo por seção (Header, Hero, Diferenciais, DorSolucao, Servicos, Selos, ComoFunciona, Depoimentos, Faq, CtaFinal, Footer, WhatsAppFloat).
  - `src/styles.css` — tokens novos, scrollbar customizada, keyframes do marquee.

## Placeholders deixados para você substituir depois
- Número de WhatsApp (em todos os links `wa.me/55XXXXXXXXXXX`).
- Telefone do header.
- Email de contato.
- Número CREA-RS e nome do responsável técnico.
- Links sociais (Instagram, Facebook, LinkedIn).
- Links de Política de Privacidade e Termos de Uso (apontados para `#` por enquanto).

Posso seguir e construir?