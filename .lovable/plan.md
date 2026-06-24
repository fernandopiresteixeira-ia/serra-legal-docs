
## O que vamos fazer

Hoje, quando alguém preenche o formulário do site, o lead é salvo apenas no seu banco de dados (Lovable Cloud). Vamos adicionar um passo extra: **assim que o lead for salvo, ele também é enviado automaticamente para a RD Station Marketing**, aparecendo lá como um novo contato/conversão.

A pessoa não percebe diferença nenhuma — continua preenchendo o mesmo formulário. A mágica acontece nos bastidores.

---

## O que você precisa providenciar na RD Station

Para conectar, preciso de **duas informações** que ficam dentro da sua conta RD Station:

### 1. Um "Token de Integração" (chave de acesso)
É como uma senha que autoriza o site a mandar dados pra RD. Você gera assim:

- Entrar na RD Station Marketing
- Menu do usuário (canto superior direito) → **Integrações** → **Apps e Integrações**
- Procurar por **"Token de API público"** (ou "Public API Token")
- Gerar um novo token e copiar o valor

> Observação: a RD tem dois tipos de integração — Token Público (mais simples, ideal para o seu caso) e OAuth (mais complexo, exige criar um "app" no portal de desenvolvedores). Vou usar o **Token Público**, que resolve 100% do que você precisa: enviar leads e conversões.

### 2. Um "Identificador de Conversão" (nome do evento)
É o nome que vai aparecer na RD pra identificar de onde o lead veio. Sugestão:

- `site-russell-bedford` (ou outro nome que você preferir)

Esse nome a gente combina aqui no chat — você não precisa criar nada na RD, ele é criado automaticamente na primeira vez que um lead chegar.

---

## O que eu vou configurar no site

1. **Guardar o token com segurança** num cofre de segredos (não fica visível no código, ninguém de fora consegue ver).
2. **Criar uma função no servidor** que, ao receber um lead novo, manda os dados pra RD Station via API oficial deles (`/platform/conversions`).
3. **Mapear os campos** do formulário para os campos da RD:
   - Nome → `name`
   - E-mail → `email` (identificador principal na RD)
   - Telefone → `mobile_phone`
   - Tipo de serviço → tag ou campo personalizado
   - Mensagem → campo personalizado
   - UTMs (origem, campanha, etc.) → campos de tracking da RD
   - CTA de origem → tag
4. **Tratar falhas com segurança**: se a RD estiver fora do ar ou recusar o lead por algum motivo, o lead **continua sendo salvo no seu banco** (você não perde nenhum contato). A falha fica registrada num log pra eu poder investigar depois.
5. **Não duplicar leads**: a RD usa o e-mail como chave única, então se a mesma pessoa preencher de novo, ela é atualizada (não vira contato novo).

---

## O que NÃO faz parte desse plano

- Importar leads antigos que já estão no banco pra RD (posso fazer num passo separado se quiser).
- Puxar dados da RD pra cá (fluxo é só de saída: site → RD).
- Criar automações/fluxos dentro da RD (isso você configura lá na plataforma depois).

---

## Próximos passos

Se aprovar o plano, eu vou:

1. Pedir o **Token de API público da RD** num campo seguro (você cola e some da tela, não fica salvo em lugar nenhum visível).
2. Confirmar com você o **nome do identificador de conversão** (sugestão: `site-russell-bedford`).
3. Implementar a integração e testar enviando um lead de teste pra você conferir se aparece na RD.

---

## Detalhes técnicos (para referência)

- Endpoint: `POST https://api.rd.services/platform/conversions?api_key={TOKEN}`
- Payload: `{ event_type: "CONVERSION", event_family: "CDP", payload: { conversion_identifier, email, name, mobile_phone, cf_tipo_servico, cf_mensagem, traffic_source, traffic_medium, traffic_campaign, tags: [cta_origem, tipo_servico] } }`
- Chamado dentro de `submitLead` em `src/lib/leads.functions.ts`, **após** o insert no Supabase, dentro de try/catch isolado (falha da RD não derruba o submit).
- Segredo armazenado como `RD_STATION_TOKEN` via `add_secret`, lido com `process.env.RD_STATION_TOKEN` dentro do handler.
- Sem retry/queue nessa primeira versão; se virar problema, depois movemos pra fila assíncrona.
