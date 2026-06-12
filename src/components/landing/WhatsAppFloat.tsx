import { Icon } from "@iconify/react";
import { openWhatsApp } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <button
      type="button"
      onClick={() =>
        openWhatsApp(
          "Olá! Vim pelo site da Russell Bedford e quero falar sobre regularização de imóvel.",
        )
      }
      aria-label="Falar pelo WhatsApp"
      className="wa-pulse fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
    >
      <Icon icon="ic:baseline-whatsapp" className="w-8 h-8 text-white" />
    </button>
  );
}
