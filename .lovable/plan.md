# Resultados minimalista

Substituir a seção atual "Números que comprovam nossa expertise" (4 cards grandes em fundo azul) por uma faixa única, compacta e minimalista, inspirada na imagem de referência.

## Visual
- Um único card horizontal, fundo escuro (azul-marinho/preto) com leve gradiente, cantos arredondados e sombra suave.
- Números grandes em verde (cor de destaque já usada no site), label em branco/cinza claro em caixa alta abaixo.
- Divisores verticais finos entre os itens.
- Linha de brilho verde discreta abaixo do card (igual à referência).
- Sem título "NOSSOS RESULTADOS", sem headline "Números que comprovam...", sem parágrafo descritivo — apenas a faixa de números.
- Padding vertical bem menor que hoje, mantendo a página mais enxuta.

## Conteúdo (mantém os dados atuais do site)
- **+300** — Imóveis regularizados
- **+R$ 200mi** — Em patrimônio
- **+40** — Municípios atendidos
- **95%** — Processos sem deslocamento

## Layout responsivo
- Desktop: 4 colunas lado a lado com divisores verticais.
- Mobile: grid 2x2, divisores adaptados (ou removidos).

## Arquivos
- Reescrever `src/components/landing/Resultados.tsx` com a nova versão minimalista.
- `src/routes/index.tsx` permanece igual (já usa `<Resultados />` entre Hero e o resto).

Sem mudanças em outras seções, rotas ou backend.
