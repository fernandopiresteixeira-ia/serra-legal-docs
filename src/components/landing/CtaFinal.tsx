import { Icon } from "@iconify/react";
import { useState } from "react";

export function CtaFinal() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nome = form.nome.trim().slice(0, 100);
    const email = form.email.trim().slice(0, 255);
    const telefone = form.telefone.trim().slice(0, 30);
    const mensagem = form.mensagem.trim().slice(0, 1000);
    if (!nome || !email || !mensagem) return;
    const texto = `Olá! Sou ${nome}.%0AEmail: ${email}%0ATelefone: ${telefone}%0A%0A${mensagem}`;
    window.open(`https://wa.me/55XXXXXXXXXXX?text=${encodeURIComponent(texto)}`, "_blank");
    setSent(true);
  };

  return (
    <section className="relative grid lg:grid-cols-2 overflow-hidden">
      {/* Coluna esquerda - clara com headline */}
      <div className="gsap-fade-up bg-[#EEF2F7] px-6 sm:px-10 lg:px-16 py-20 lg:py-28 flex flex-col justify-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0073C6]">
          Fale com a gente
        </span>
        <h2 className="mt-4 font-display font-bold text-[#1A1A2E] text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-tight">
          Não deixe a irregularidade travar seu patrimônio
        </h2>
        <p className="mt-5 text-[#4A4A5A] text-base lg:text-lg leading-relaxed max-w-md">
          Faça uma análise gratuita e descubra exatamente o que precisa ser regularizado. Sem
          compromisso, sem custo inicial.
        </p>

        <div className="mt-10 space-y-5 text-[#1A1A2E]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#003D7A]">
              Localização
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Serra Gaúcha – RS<br />
              Atendimento em toda a região
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#003D7A]">
              Atendimento
            </p>
            <p className="mt-2 text-sm leading-relaxed">Resposta ágil pelo WhatsApp</p>
          </div>
        </div>
      </div>

      {/* Coluna direita - azul com formulário */}
      <div className="relative bg-[#2A3F6F] px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#0073C6]/25 blur-[100px] pointer-events-none" />
        <div className="relative max-w-md mx-auto lg:mx-0">
          <h3 className="gsap-fade-up font-display font-bold text-white text-3xl sm:text-4xl leading-tight">
            Formulário de Contato
          </h3>

          {sent ? (
            <div className="gsap-fade-up mt-8 rounded-lg bg-white/10 border border-white/20 p-6 text-white">
              <Icon icon="solar:check-circle-bold" className="w-10 h-10 text-[#F5A623]" />
              <p className="mt-3 font-semibold">Recebemos suas informações!</p>
              <p className="mt-1 text-sm text-white/70">
                Em instantes você será redirecionado ao WhatsApp para finalizar o envio.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="gsap-fade-up mt-8 space-y-4">
              <input
                type="text"
                required
                maxLength={100}
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full rounded-md bg-white px-4 py-3 text-sm text-[#1A1A2E] placeholder:text-[#7a7a8a] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
              />
              <input
                type="email"
                required
                maxLength={255}
                placeholder="Seu e-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md bg-white px-4 py-3 text-sm text-[#1A1A2E] placeholder:text-[#7a7a8a] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
              />
              <input
                type="tel"
                maxLength={30}
                placeholder="Telefone / WhatsApp"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full rounded-md bg-white px-4 py-3 text-sm text-[#1A1A2E] placeholder:text-[#7a7a8a] focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
              />
              <textarea
                required
                maxLength={1000}
                rows={4}
                placeholder="Conte um pouco sobre seu imóvel"
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full rounded-md bg-white px-4 py-3 text-sm text-[#1A1A2E] placeholder:text-[#7a7a8a] focus:outline-none focus:ring-2 focus:ring-[#F5A623] resize-none"
              />

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-[#2A3F6F] transition-colors"
              >
                Enviar
                <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
              </button>

              <p className="text-xs text-white/60 text-center pt-2">
                Ou fale direto pelo{" "}
                <a
                  href="https://wa.me/55XXXXXXXXXXX"
                  className="text-[#F5A623] hover:underline font-semibold"
                >
                  WhatsApp
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
