import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const listLeads = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z
      .object({
        status: z.string().optional(),
        utm_source: z.string().optional(),
        tipo_servico: z.string().optional(),
        search: z.string().optional(),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { data: isAdmin } = await supabase.rpc("has_role" as never, {
      _user_id: userId,
      _role: "admin",
    } as never);
    // RLS já garante; checagem extra para retorno limpo
    let q = supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(500);
    if (data.status) q = q.eq("status", data.status as "novo" | "em_contato" | "convertido" | "descartado");
    if (data.utm_source) q = q.eq("utm_source", data.utm_source);
    if (data.tipo_servico) q = q.eq("tipo_servico", data.tipo_servico);
    if (data.search) {
      const s = `%${data.search}%`;
      q = q.or(`nome.ilike.${s},email.ilike.${s},telefone.ilike.${s}`);
    }
    const { data: rows, error } = await q;
    if (error) throw new Error(error.message);
    return { leads: rows ?? [], isAdmin: !!isAdmin };
  });

export const updateLead = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z
      .object({
        id: z.string().uuid(),
        status: z.enum(["novo", "em_contato", "convertido", "descartado"]).optional(),
        anotacoes: z.string().max(5000).optional(),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const update: { status?: "novo" | "em_contato" | "convertido" | "descartado"; anotacoes?: string } = {};
    if (data.status) update.status = data.status;
    if (data.anotacoes !== undefined) update.anotacoes = data.anotacoes;
    const { error } = await context.supabase.from("leads").update(update).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const listRdSyncLogs = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => z.object({ lead_id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { data: rows, error } = await context.supabase
      .from("rd_station_sync_logs")
      .select("*")
      .eq("lead_id", data.lead_id)
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return { logs: rows ?? [] };
  });

export const resendLeadToRd = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => z.object({ lead_id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { userId } = context;
    const { data: isAdmin } = await context.supabase.rpc("has_role" as never, {
      _user_id: userId,
      _role: "admin",
    } as never);
    if (!isAdmin) throw new Error("Acesso negado.");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: lead, error: leadErr } = await supabaseAdmin
      .from("leads")
      .select("*")
      .eq("id", data.lead_id)
      .single();
    if (leadErr || !lead) throw new Error("Lead não encontrado.");

    const { data: prev } = await supabaseAdmin
      .from("rd_station_sync_logs")
      .select("attempt")
      .eq("lead_id", data.lead_id)
      .order("attempt", { ascending: false })
      .limit(1);
    const nextAttempt = ((prev?.[0]?.attempt as number | undefined) ?? 0) + 1;

    const { sendLeadToRdStation } = await import("./rdStation.server");
    const result = await sendLeadToRdStation({
      nome: lead.nome,
      email: lead.email,
      telefone: lead.telefone,
      tipo_servico: lead.tipo_servico,
      mensagem: lead.mensagem,
      cta_origem: lead.cta_origem,
      utm_source: lead.utm_source,
      utm_medium: lead.utm_medium,
      utm_campaign: lead.utm_campaign,
      utm_content: lead.utm_content,
      utm_term: lead.utm_term,
      referrer: lead.referrer,
      conversion_identifier: "site-russell-bedford",
    });
    await supabaseAdmin.from("rd_station_sync_logs").insert({
      lead_id: data.lead_id,
      status: result.status,
      http_status: result.httpStatus,
      response_body: result.body,
      error_message: result.errorMessage,
      attempt: nextAttempt,
    });
    return result;
  });
