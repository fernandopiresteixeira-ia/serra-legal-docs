export const WHATSAPP_NUMBER = "5554999795685";
export const WHATSAPP_DISPLAY = "(54) 99979-5685";

function isMobile(): boolean {
  if (typeof navigator === "undefined") return false;
  return /android|iphone|ipad|ipod|mobile|opera mini/i.test(navigator.userAgent);
}

export function buildWhatsAppUrl(message?: string): string {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  if (isMobile()) {
    return `whatsapp://send?phone=${WHATSAPP_NUMBER}${
      message ? `&text=${encodeURIComponent(message)}` : ""
    }`;
  }
  return `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}${
    message ? `&text=${encodeURIComponent(message)}` : ""
  }`.replace("&", text ? "&" : "&");
}

export function openWhatsApp(message?: string) {
  const url = buildWhatsAppUrl(message);
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
