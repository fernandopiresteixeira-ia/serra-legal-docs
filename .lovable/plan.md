## O que vou construir

Sistema completo de captura de leads com painel administrativo protegido por login.

### 1. WhatsApp sem página intermediária (detecta dispositivo)

Todos os links de WhatsApp do site (botão flutuante, footer, botão de sucesso após formulário) vão detectar o dispositivo e abrir direto:

- **Celular/tablet** → abre o app do WhatsApp instalado (`whatsapp://send?phone=5554999795685&text=...`)
- **Desktop** → abre o WhatsApp Web (`https://web.whatsapp.com/send?phone=5554999795685&text=...`) já conectado no navegador

Sem passar pela página intermediária do `wa.me`. Número usado em todos os pontos: **(54) 99979-5685**.

### 2. Modal de formulário em todos os CTAs

Os botões principais deixam de abrir o WhatsApp direto e passam a abrir um pop-up com os campos:

- **Nome completo** (obrigatório)
- **Telefone / WhatsApp** (obrigatório, com máscara brasileira)
- **E-mail** (obrigatório, validado)
- **Tipo de serviço** (Habite-se, INSS de Obras, Averbação, Aprovação de Projetos, Regularização Rural, PPCI, Outro)
- **Mensagem / descrição rápida** (opcional)
- Honeypot invisível anti-spam

Botões que abrem o modal:
- "Falar com especialista" (header)
- "Análise gratuita" e "Falar no WhatsApp" (Hero)
- "Solicitar análise gratuita" (CTA Final)

Botão flutuante verde continua indo direto pra conversa (com a detecção de dispositivo acima).

### 3. Tela de sucesso após envio

Após gravar o lead, o modal mostra:
- Mensagem de agradecimento
- Botão "Continuar no WhatsApp" → abre app (mobile) ou WhatsApp Web (desktop) com mensagem pré-montada usando os dados do formulário (nome + serviço de interesse)

### 4. Captura automática de origem do lead

Sem o visitante preencher nada, o sistema grava:
- **Origem (UTM)**: Google Ads, Instagram, Meta Ads, e-mail etc.
- **Página de origem** (referrer)
- **Qual CTA** foi clicado (header, hero, cta_final)
- **Data e hora**
- **Dispositivo** (mobile / desktop)

### 5. Banco de dados seguro (Lovable Cloud)

Tabela `leads` com todos os campos acima + status (Novo, Em contato, Convertido, Descartado) + anotações internas.

Segurança:
- Visitantes anônimos só podem **inserir** (não conseguem ler nem listar)
- Só admin autenticado pode **ler, atualizar e excluir**
- Papel de admin em tabela separada `user_roles` — padrão seguro

### 6. Painel administrativo em /admin

Página protegida por login em `/admin/login`.

**Admin inicial já configurado por mim:**
- E-mail: `contato@aisystem.ia.br`
- Senha: `AIsystem@2026`
- Confirmação de e-mail desativada para facilitar primeiro acesso

Funcionalidades:
- Lista de leads ordenada por mais recente
- Filtros por status, origem, tipo de serviço e intervalo de datas
- Busca por nome, telefone ou e-mail
- Detalhe do lead em painel lateral com anotações internas + botões de status
- Ações rápidas: clicar no telefone abre WhatsApp (com mesma detecção acima); clicar no e-mail abre cliente de e-mail
- Indicadores no topo: total, novos hoje, novos na semana
- Exportar CSV dos leads filtrados

## Detalhes técnicos

- Lovable Cloud (PostgreSQL + autenticação) — vou ativar
- Helper `openWhatsApp(phone, message)` centralizado: detecta `navigator.userAgent` e escolhe `whatsapp://` ou `web.whatsapp.com/send`
- Server functions (`createServerFn`) com validação Zod para inserir leads
- Rota pathless `_authenticated/` protegendo `/admin/*`
- Tabelas: `leads`, `user_roles` (enum `app_role`), função security definer `has_role()`
- RLS: insert público em `leads`; demais operações só pra admin via `has_role(auth.uid(), 'admin')`
- Rate limit por IP (máx. 3 envios/hora) anti-abuso

Tudo pronto pra começar. Posso seguir?
