import { Icon } from "@iconify/react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/55XXXXXXXXXXX"
      aria-label="Falar pelo WhatsApp"
      className="wa-pulse fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform"
    >
      <Icon icon="ic:baseline-whatsapp" className="w-8 h-8 text-white" />
    </a>
  );
}
