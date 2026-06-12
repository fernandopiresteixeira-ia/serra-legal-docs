import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ensureAdmin } from "@/lib/seedAdmin.functions";

export const Route = createFileRoute("/admin/login")({
  ssr: false,
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const seed = useServerFn(ensureAdmin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [seeding, setSeeding] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error("E-mail ou senha inválidos.");
      return;
    }
    toast.success("Bem-vindo!");
    navigate({ to: "/admin" });
  }

  async function handleSeed() {
    if (!email || !password) {
      toast.error("Preencha e-mail e senha primeiro.");
      return;
    }
    setSeeding(true);
    try {
      await seed({ data: { email, password } });
      toast.success("Admin pronto. Tente entrar agora.");
    } catch (err) {
      console.error(err);
      toast.error("Falha ao inicializar admin.");
    } finally {
      setSeeding(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#003D7A] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="font-display text-2xl font-bold text-[#003D7A] text-center">
          Painel Administrativo
        </h1>
        <p className="text-sm text-muted-foreground text-center mt-1">Russell Bedford Brasil</p>
        <form onSubmit={handleLogin} className="space-y-4 mt-8">
          <div className="space-y-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00A3D7] hover:bg-[#0073C6]"
            size="lg"
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled={seeding}
            onClick={handleSeed}
            className="w-full"
            size="sm"
          >
            {seeding ? "Inicializando..." : "Inicializar admin (primeiro acesso)"}
          </Button>
        </form>
      </div>
    </div>
  );
}
