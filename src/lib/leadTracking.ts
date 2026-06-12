export interface LeadTracking {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  referrer: string | null;
  dispositivo: string;
  user_agent: string;
}

export function captureTracking(): LeadTracking {
  if (typeof window === "undefined") {
    return {
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_content: null,
      utm_term: null,
      referrer: null,
      dispositivo: "unknown",
      user_agent: "",
    };
  }
  const params = new URLSearchParams(window.location.search);
  const ua = navigator.userAgent;
  const mobile = /android|iphone|ipad|ipod|mobile|opera mini/i.test(ua);
  return {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_content: params.get("utm_content"),
    utm_term: params.get("utm_term"),
    referrer: document.referrer || null,
    dispositivo: mobile ? "mobile" : "desktop",
    user_agent: ua,
  };
}
