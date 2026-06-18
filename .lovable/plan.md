## O que está acontecendo

**1. Desktop — "+R$ 200mi" passa por cima da divisória**
No card de Resultados, cada número usa `text-5xl` e `whitespace-nowrap`. O texto "+R$ 200mi" é mais largo que a coluna disponível, então invade a linha divisória vertical ao lado. As outras três colunas têm números curtos (+300, +40, 95%) e por isso não mostram o problema.

**2. Mobile — a página "anda" para os lados**
O Hero tem uma composição circular decorativa com `w-[170%]` (170% da largura do container) atrás da imagem do engenheiro, e a própria imagem usa `-translate-x-[5%]`. Isso estoura a largura da tela no celular e cria rolagem horizontal. A `<section>` do Hero não tem `overflow-hidden` para conter esse excesso.

## Ajustes propostos (mobile-first)

**`src/components/landing/Resultados.tsx`**
- Tornar os tamanhos mobile-first: número começa em `text-3xl` no celular e cresce para `text-4xl` em telas médias e `text-[44px]` no desktop (em vez de pular direto para `text-5xl`). Assim "+R$ 200mi" cabe sem invadir a divisória.
- Aumentar o respiro horizontal de cada item no desktop (`lg:px-6`) para que mesmo o texto mais largo nunca encoste na linha divisória.
- Manter `whitespace-nowrap` (a regra de não quebrar "+R$ 200mi" você já pediu).
- Reduzir um pouco o rótulo no celular para acompanhar a hierarquia.

**`src/components/landing/Hero.tsx`**
- Adicionar `overflow-hidden` na `<section>` do Hero. Isso confina a composição circular decorativa e a imagem deslocada dentro da largura da tela, eliminando a rolagem horizontal no celular sem afetar nada visualmente no desktop.

**`src/styles.css`**
- Adicionar `overflow-x: hidden` no `html, body` como rede de segurança, garantindo que nenhuma outra seção futura cause o mesmo problema.

## Validação

Depois das mudanças eu abro o preview em mobile (375px) e em desktop (1280px+) e confirmo:
- Mobile: não há rolagem lateral, conteúdo cabe na tela.
- Desktop: "+R$ 200mi" fica totalmente dentro da sua coluna, sem encostar na divisória.

## Observação

O card já está responsivo (2 colunas no celular, 4 no desktop) — não vou trocar a estrutura, só ajustar tamanhos e respiros. Se você quiser uma versão diferente no celular (ex.: 1 coluna empilhada), me avise antes que eu mudo o layout também.