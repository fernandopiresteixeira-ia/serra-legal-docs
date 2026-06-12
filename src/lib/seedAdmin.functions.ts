import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Server function idempotente para garantir que o admin inicial existe.
// Pode ser chamada uma vez; em chamadas seguintes apenas confirma estado.
export const ensureAdmin = createServerFn({ method: "POST" })
  .inputValidator((data: { email: string; password: string }) =>
    z
      .object({
        email: z.string().email(),
        password: z.string().min(8),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Procura usuário existente
    const { data: list, error: listErr } = await supabaseAdmin.auth.admin.listUsers({
      page: 1,
      perPage: 200,
    });
    if (listErr) {
      console.error("[ensureAdmin] listUsers", listErr);
      throw new Error("Falha ao listar usuários");
    }
    let user = list.users.find((u) => u.email?.toLowerCase() === data.email.toLowerCase());

    if (!user) {
      const { data: created, error: createErr } = await supabaseAdmin.auth.admin.createUser({
        email: data.email,
        password: data.password,
        email_confirm: true,
      });
      if (createErr || !created.user) {
        console.error("[ensureAdmin] createUser", createErr);
        throw new Error("Falha ao criar usuário admin");
      }
      user = created.user;
    } else {
      // Atualiza senha (caso já exista) e confirma e-mail
      const { error: updateErr } = await supabaseAdmin.auth.admin.updateUserById(user.id, {
        password: data.password,
        email_confirm: true,
      });
      if (updateErr) {
        console.error("[ensureAdmin] updateUser", updateErr);
      }
    }

    // Garante role admin
    const { error: roleErr } = await supabaseAdmin
      .from("user_roles")
      .upsert({ user_id: user.id, role: "admin" }, { onConflict: "user_id,role" });
    if (roleErr) {
      console.error("[ensureAdmin] roleUpsert", roleErr);
      throw new Error("Falha ao atribuir papel de admin");
    }

    return { ok: true, userId: user.id };
  });
