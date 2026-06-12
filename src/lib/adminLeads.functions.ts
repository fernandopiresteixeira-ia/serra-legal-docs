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
    const update: Record<string, unknown> = {};
    if (data.status) update.status = data.status;
    if (data.anotacoes !== undefined) update.anotacoes = data.anotacoes;
    const { error } = await context.supabase.from("leads").update(update).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
