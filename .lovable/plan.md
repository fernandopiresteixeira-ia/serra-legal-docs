## Situação

O lead da **Iza Arse** entrou em **13/07 às 12:18** (ontem). Os logs do servidor só ficam disponíveis pela última **1 hora**, então já não conseguimos ver o que aconteceu com aquele envio específico. Além disso, o código atual da integração RD Station **só imprime erro no console** — nada fica salvo em lugar nenhum. Ou seja: hoje não temos como responder com certeza "foi ou não foi" para nenhum lead antigo.

Para resolver isso de vez, e ao mesmo tempo descobrir o que aconteceu com a Iza, proponho:

## O que vamos fazer

### 1. Criar histórico de envios no banco
Nova tabela `rd_station_sync_logs` guardando, para cada lead enviado:
- lead_id
- status (`success` / `error` / `skipped`)
- código HTTP retornado pela RD (200, 400, 401, 422…)
- corpo da resposta da RD (mensagem de erro, ex.: "email inválido", "conta bloqueada")
- data/hora
- tentativa (nº)

Com RLS: só admin lê.

### 2. Ajustar o envio para gravar esse log
`rdStation.server.ts` passa a retornar sucesso/erro estruturado, e `submitLead` grava a linha em `rd_station_sync_logs` sempre (sucesso ou falha). A falha continua isolada — nunca derruba o cadastro do lead.

### 3. Reenviar a Iza (e permitir reenviar qualquer lead)
Criar botão **"Reenviar para RD Station"** na tela do admin de leads. Ao clicar:
- puxa o lead do banco
- chama a integração
- grava mais uma linha no log
- mostra na tela: enviado com sucesso / erro X

Assim, para responder sua pergunta agora, basta clicar em reenviar no lead da Iza — o resultado aparece na hora com o motivo exato caso a RD recuse.

### 4. Ver o histórico dentro do admin
No detalhe de cada lead, mostrar a lista de tentativas de envio (data, status, mensagem da RD). Passa a ser a fonte da verdade daqui pra frente.

## O que NÃO faz parte desse plano

- Aba "Integrações" para gerenciar tokens (API pública, privada, instância) — fica pra um passo separado, quando você quiser trocar/testar tokens.
- Reprocessamento em massa (botão "reenviar todos os leads antigos") — posso adicionar depois se você quiser.
- Retry automático em background.

## Detalhes técnicos

- Migration cria `public.rd_station_sync_logs` com GRANT para `authenticated` (SELECT) e `service_role` (ALL); RLS com policy `has_role(auth.uid(),'admin')` no SELECT. Insert é feito pelo `supabaseAdmin` no servidor.
- `sendLeadToRdStation` passa a retornar `{ ok, status, body }` em vez de `throw`; `submitLead` insere log com `lead_id` do insert (mudar o insert para `.select('id').single()`).
- Novo `resendLeadToRdStation` (server fn com `requireSupabaseAuth` + checagem `has_role admin`) recebe `lead_id`, refaz o payload a partir da linha da tabela `leads` e grava novo log.
- Admin dashboard: coluna extra "RD" com badge do último status + botão de reenviar; drawer/expand com histórico completo.
