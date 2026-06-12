import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getRequestIP } from "@tanstack/react-start/server";

const LeadSchema = z.object({
  nome: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  telefone: z.string().trim().min(8).max(40),
  tipo_servico: z.string().trim().min(1).max(80),
  mensagem: z.string().trim().max(2000).optional().nullable(),
  cta_origem: z.string().trim().max(80).optional().nullable(),
  utm_source: z.string().trim().max(120).optional().nullable(),
  utm_medium: z.string().trim().max(120).optional().nullable(),
  utm_campaign: z.string().trim().max(160).optional().nullable(),
  utm_content: z.string().trim().max(160).optional().nullable(),
  utm_term: z.string().trim().max(160).optional().nullable(),
  referrer: z.string().trim().max(500).optional().nullable(),
  dispositivo: z.string().trim().max(40).optional().nullable(),
  user_agent: z.string().trim().max(500).optional().nullable(),
  // Honeypot — deve vir vazio
  website: z.string().max(0).optional().nullable(),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website && data.website.length > 0) {
      return { ok: true };
    }
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    let ip: string | null = null;
    try {
      ip = getRequestIP({ xForwardedFor: true }) ?? null;
    } catch {
      ip = null;
    }
    const { website, ...rest } = data;
    void website;
    const insertRow = {
      ...rest,
      user_agent: rest.user_agent ? `${rest.user_agent}${ip ? ` | ip:${ip}` : ""}` : ip,
    };
    const { error } = await supabaseAdmin.from("leads").insert(insertRow);
    if (error) {
      console.error("[submitLead]", error);
      throw new Error("Não foi possível enviar agora. Tente novamente em instantes.");
    }
    return { ok: true };
  });
