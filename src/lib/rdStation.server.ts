// Server-only helper: envia conversões para a RD Station Marketing
// usando o Token de API público (endpoint /platform/conversions).

interface RdLeadInput {
  nome: string;
  email: string;
  telefone: string;
  tipo_servico: string;
  mensagem?: string | null;
  cta_origem?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  referrer?: string | null;
  conversion_identifier: string;
}

export async function sendLeadToRdStation(input: RdLeadInput): Promise<void> {
  const token = process.env.RD_STATION_TOKEN;
  if (!token) {
    console.warn("[rdStation] RD_STATION_TOKEN ausente; pulando envio.");
    return;
  }

  const tags = [input.cta_origem, input.tipo_servico]
    .filter((t): t is string => !!t && t.trim().length > 0)
    .map((t) => t.toLowerCase().replace(/\s+/g, "-").slice(0, 60));

  const payload = {
    event_type: "CONVERSION",
    event_family: "CDP",
    payload: {
      conversion_identifier: input.conversion_identifier,
      name: input.nome,
      email: input.email,
      mobile_phone: input.telefone,
      personal_phone: input.telefone,
      cf_tipo_servico: input.tipo_servico,
      cf_mensagem: input.mensagem ?? "",
      cf_cta_origem: input.cta_origem ?? "",
      traffic_source: input.utm_source ?? "",
      traffic_medium: input.utm_medium ?? "",
      traffic_campaign: input.utm_campaign ?? "",
      traffic_value: input.utm_content ?? "",
      tags,
      ...(input.referrer ? { client_tracking: { referrer: input.referrer } } : {}),
    },
  };

  const url = `https://api.rd.services/platform/conversions?api_key=${encodeURIComponent(token)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`RD Station respondeu ${res.status}: ${text.slice(0, 500)}`);
  }
}
