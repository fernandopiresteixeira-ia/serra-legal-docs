import { Icon } from "@iconify/react";
import logoAsset from "@/assets/russell-bedford-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-[#003D7A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <img
              src={logoAsset.url}
              alt="Russell Bedford Brasil"
              className="h-[122px] w-auto object-contain"
            />
            <p className="mt-3 text-white/70 max-w-sm">
              Referência em regularização de imóveis na Serra Gaúcha — Caxias do Sul, Bento
              Gonçalves, Farroupilha, Flores da Cunha, Garibaldi, Carlos Barbosa, Nova Petrópolis
              e São Marcos.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {[
                { i: "solar:instagram-linear", l: "Instagram" },
                { i: "solar:facebook-linear", l: "Facebook" },
                { i: "mdi:linkedin", l: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.l}
                  href="#"
                  aria-label={s.l}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Icon icon={s.i} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#servicos" className="hover:text-white">Habite-se</a></li>
              <li><a href="#servicos" className="hover:text-white">INSS de Obras</a></li>
              <li><a href="#servicos" className="hover:text-white">Averbação</a></li>
              <li><a href="#servicos" className="hover:text-white">Aprovação de Projetos</a></li>
              <li><a href="#servicos" className="hover:text-white">Regularização Rural</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#como-funciona" className="hover:text-white">Como Funciona</a></li>
              <li><a href="#resultados" className="hover:text-white">Resultados</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#contato" className="hover:text-white">Contato</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="tel:+5554999795685" className="hover:text-white">
                  (54) 99979-5685
                </a>
              </li>
              <li className="break-all">
                <a href="mailto:juliana.pletsch@russellbedford.com.br" className="hover:text-white">
                  juliana.pletsch@russellbedford.com.br
                </a>
              </li>
              <li>
                Business Center Auxin<br />
                Av. Independência 2432, Sala 24 / 4º andar<br />
                Quinta São Luiz · Bairro Exposição<br />
                Caxias do Sul - RS
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-[11px] text-white/40 max-w-3xl mx-auto">
          As informações desta página têm caráter informativo. Prazos e valores são estimativas
          sujeitas à análise técnica individual de cada imóvel.
        </p>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© 2025 Russell Bedford Brasil. Todos os direitos reservados.</p>
          <p className="text-white/50">CREA-RS [número] · Responsável Técnico: [Nome]</p>
          <p className="flex gap-4">
            <a href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
