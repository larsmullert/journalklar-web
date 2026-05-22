export type ConsentState = {
  version: 1;
  timestamp: string;
  necessary: true;
  statistics: boolean;
  marketing: boolean;
};

const CONSENT_KEY = "jk_consent";

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveConsent(statistics: boolean, marketing: boolean): void {
  const state: ConsentState = {
    version: 1,
    timestamp: new Date().toISOString(),
    necessary: true,
    statistics,
    marketing,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  applyConsentMode(statistics, marketing);
}

export function applyConsentMode(statistics: boolean, marketing: boolean): void {
  if (typeof window === "undefined" || typeof (window as any).gtag !== "function") return;
  (window as any).gtag("consent", "update", {
    analytics_storage: statistics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  });
}
