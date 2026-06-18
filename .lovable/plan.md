## Problema

No desktop, as 4 colunas do card têm largura igual (`lg:grid-cols-4`), mas o valor "+R$ 200mi" é mais largo que os outros. Como ele tem `whitespace-nowrap`, ele transborda da coluna e fica por cima da linha divisória (`lg:divide-x`).

## Solução

Tornar a coluna do "+R$ 200mi" mais larga que as outras, mantendo as divisórias centralizadas entre cada item, sem alterar nada mais do card.

### Mudança única em `src/components/landing/Resultados.tsx`

Trocar a classe do grid:

- De: `grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/20 gap-y-6 lg:gap-y-0`
- Para: `grid grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr_1fr] lg:divide-x lg:divide-white/20 gap-y-6 lg:gap-y-0`

Com isso, no desktop a segunda coluna (a do "+R$ 200mi") ganha 50% mais largura que as demais, o número cabe inteiro dentro da coluna e a divisória vertical fica corretamente entre o "+R$ 200mi" e o "+40", sem sobrepor nenhum número.

No mobile não muda nada: continua `grid-cols-2` sem divisórias (o `divide-x` só se aplica a partir de `lg`), e os valores continuam dentro de cada célula.

### O que NÃO muda

- O wrapper do card (padding, gradiente, blur, borda, sombra, bordas arredondadas) fica exatamente como está.
- O componente `StatItem` (fonte, tamanho, cor, `whitespace-nowrap`, label) não é tocado.
- O posicionamento dentro do Hero não muda.
