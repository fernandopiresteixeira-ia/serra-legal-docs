# Plano de alterações — Russell Bedford Brasil

## 1. Nova seção "Resultados" (substitui Depoimentos)
- Remover o componente `Depoimentos` da home (`src/routes/index.tsx`) e deletar `src/components/landing/Depoimentos.tsx`.
- Criar `src/components/landing/Resultados.tsx` com um grid em destaque (4 cards grandes em azul, números em tipografia bold/gigante) contendo:
  - **+300** imóveis regularizados
  - **+R$ 200 milhões** em patrimônio regularizado
  - **+40** municípios atendidos
  - **95%** dos processos concluídos sem deslocamento do cliente
- Atualizar âncora `#depoimentos` para `#resultados` no `Header` e `Footer` (label: "Resultados").

## 2. Cobertura geográfica
- Onde o texto cita "Serra Gaúcha" de forma genérica em contexto de cobertura, listar as cidades: **Caxias do Sul, Bento Gonçalves, Farroupilha, Flores da Cunha, Garibaldi, Carlos Barbosa, Nova Petrópolis e São Marcos**.
- Arquivos: `Hero.tsx` (badge "Atendemos toda a Serra Gaúcha"), `Faq.tsx` (resposta sobre municípios), `Footer.tsx`, `Selos.tsx`, `Diferenciais.tsx`.
- Manter "Serra Gaúcha" no título principal/SEO e onde for posicionamento regional (não substituir tudo cegamente).

## 3. Headline do bloco Especialistas
- Em `Diferenciais.tsx`, trocar "Especialistas em regularização na Serra Gaúcha" e textos do tipo "Fazemos regularização…" por: **"Somos referência em regularização de imóveis na Serra Gaúcha"**.

## 4. Reposicionamento de autoridade no copy
- Trocar verbos em primeira pessoa do plural por linguagem de autoridade quando fizer sentido:
  - "Fazemos" → "Somos referência em"
  - "Atendemos" → "Reconhecidos por atender" / "Especialistas que atuam em"
  - "Oferecemos" → "Especialistas em" / "Reconhecidos por"
- Aplica em `Hero.tsx`, `Diferenciais.tsx`, `Faq.tsx`, `DorSolucao.tsx`, `Servicos.tsx`, `CtaFinal.tsx`.

## 5. Remoção total do WhatsApp
- Deletar `src/components/landing/WhatsAppFloat.tsx` e remover importação/uso em `src/routes/index.tsx`.
- Remover botões "Falar pelo WhatsApp" e textos relacionados em `Hero.tsx`, `CtaFinal.tsx`, `Footer.tsx`, `LeadFormModal.tsx`, `Header.tsx`.
- Substituir CTAs por **"Solicitar análise gratuita"** que abrem o `LeadFormModal` (mantido por enquanto, salvando no Lovable Cloud, conforme você escolheu) ou rolam para a âncora `#contato`.
- Remover o botão WhatsApp do modal de lead (`LeadFormModal.tsx`) — só botão "Enviar".
- Limpar referências em `Footer.tsx` (linha "WhatsApp: (54) 99979-5685" → trocar por e-mail/telefone normal, sem WhatsApp).
- `src/lib/whatsapp.ts` continua existindo apenas porque o painel admin (`_authenticated/admin.tsx`) ainda usa para acionar contato com o lead — **não mexer** no admin nesse turno.

## 6. Nada de RD Station agora
Conforme sua escolha, mantemos o formulário atual (Lovable Cloud) e deixamos a integração com RD Station para depois.

---

### Detalhes técnicos
- A seção "Por que confiar na Russell Bedford Brasil?" (item 1 do prompt original) já existe (`PorQueConfiar.tsx`) e está renderizada — sem alteração.
- Paleta azul existente: `#0073C6`, `#E8F4FB`, `#1A1A2E`. Ícones via `@iconify/react` (`solar:*`), consistente com o resto.
- Nenhum schema de banco será alterado.
