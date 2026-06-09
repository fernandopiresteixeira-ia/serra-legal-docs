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
    const texto = `Olá! Sou ${nome}.\nEmail: ${email}\nTelefone: ${telefone}\n\nSituação do imóvel:\n${mensagem}`;
    window.open(`https://wa.me/55XXXXXXXXXXX?text=${encodeURIComponent(texto)}`, "_blank");
    setSent(true);
  };

  const fieldClass =
    "w-full rounded-xl bg-white/[0.08] border border-white/15 px-5 py-4 text-[15px] text-white placeholder:text-white/45 focus:outline-none focus:border-white/50 focus:bg-white/[0.12] transition-colors";

  return (
    <section className="grid lg:grid-cols-2">
      {/* LEFT */}
      <div className="gsap-fade-up bg-[#F4F6F9] px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 flex flex-col justify-center">
        <div className="max-w-xl lg:ml-auto lg:mr-0 w-full">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0073C6]">
            Fale com a gente
          </span>
          <h2 className="mt-4 font-display font-bold text-[#1A1A2E] text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.15] tracking-tight">
            Não deixe a irregularidade travar seu patrimônio
          </h2>
          <p className="mt-5 text-[#4A4A5A] text-base leading-relaxed max-w-md">
            Faça uma análise gratuita e descubra exatamente o que precisa ser regularizado. Sem
            compromisso, sem custo inicial.
          </p>

          <div className="my-8 h-px bg-[#E0EAF4]" />

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex-none mt-0.5 w-10 h-10 rounded-lg bg-[#0073C6]/10 flex items-center justify-center">
                <Icon icon="solar:map-point-linear" className="w-5 h-5 text-[#0073C6]" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#003D7A]">
                  Localização
                </p>
                <p className="mt-1 text-sm text-[#4A4A5A] leading-relaxed">
                  Serra Gaúcha – RS · Atendimento em toda a região
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-none mt-0.5 w-10 h-10 rounded-lg bg-[#0073C6]/10 flex items-center justify-center">
                <Icon icon="solar:chat-round-dots-linear" className="w-5 h-5 text-[#0073C6]" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#003D7A]">
                  Atendimento
                </p>
                <p className="mt-1 text-sm text-[#4A4A5A] leading-relaxed">
                  Resposta ágil pelo WhatsApp
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-none mt-0.5 w-10 h-10 rounded-lg bg-[#0073C6]/10 flex items-center justify-center">
                <Icon icon="solar:clock-circle-linear" className="w-5 h-5 text-[#0073C6]" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#003D7A]">
                  Horário
                </p>
                <p className="mt-1 text-sm text-[#4A4A5A] leading-relaxed">
                  Segunda a sexta, das 8h às 18h
                </p>
              </div>
            </li>
          </ul>

          <a
            href="https://wa.me/55XXXXXXXXXXX"
            className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-semibold text-white hover:bg-[#20BD5A] hover:-translate-y-0.5 transition-all shadow-[0_8px_24px_rgba(37,211,102,0.3)]"
          >
            <Icon icon="solar:chat-round-line-bold" className="w-5 h-5" />
            Falar pelo WhatsApp agora
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative bg-[#2A3F6F] px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0073C6]/25 blur-[120px] pointer-events-none" />
        <div className="relative max-w-xl w-full lg:mr-auto lg:ml-0">
          <h3 className="gsap-fade-up font-display font-semibold text-white text-2xl sm:text-[26px] leading-tight">
            Análise gratuita do seu imóvel
          </h3>
          <p className="gsap-fade-up mt-2 text-sm text-white/60">
            Preencha e retornamos em até 2 horas úteis
          </p>

          {sent ? (
            <div className="gsap-fade-up mt-8 rounded-xl bg-white/[0.08] border border-white/15 p-6 text-white">
              <Icon icon="solar:check-circle-bold" className="w-10 h-10 text-[#F5A623]" />
              <p className="mt-3 font-semibold">Recebemos suas informações!</p>
              <p className="mt-1 text-sm text-white/70">
                Em instantes você será redirecionado ao WhatsApp para finalizar o envio.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="gsap-fade-up mt-8 space-y-3.5">
              <input
                type="text"
                required
                maxLength={100}
                placeholder="Nome completo"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className={fieldClass}
              />
              <input
                type="email"
                required
                maxLength={255}
                placeholder="E-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={fieldClass}
              />
              <input
                type="tel"
                maxLength={30}
                placeholder="Telefone / WhatsApp"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className={fieldClass}
              />
              <textarea
                required
                maxLength={1000}
                rows={4}
                placeholder="Qual é a situação do seu imóvel?"
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className={`${fieldClass} resize-none`}
              />

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#F5A623] hover:bg-[#E69612] hover:-translate-y-0.5 transition-all px-6 py-[18px] text-sm font-bold tracking-wider text-[#1A1A2E] shadow-[0_10px_30px_rgba(245,166,35,0.35)]"
              >
                SOLICITAR ANÁLISE GRATUITA
                <Icon
                  icon="solar:arrow-right-linear"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
              </button>

              <p className="text-xs text-white/50 text-center pt-2 flex items-center justify-center gap-1.5">
                <Icon icon="solar:lock-keyhole-minimalistic-linear" className="w-3.5 h-3.5" />
                Seus dados são tratados com total privacidade
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
