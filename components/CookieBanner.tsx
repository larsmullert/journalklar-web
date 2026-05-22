"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getConsent, saveConsent } from "@/lib/consent";

type View = "banner" | "customize" | "hidden";

// ─── Toggle ─────────────────────────────────────────────────────────────────

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(!checked)}
      style={{
        width: "44px",
        height: "24px",
        borderRadius: "12px",
        backgroundColor: checked ? "#1D3A2F" : "#E8E4DF",
        border: "none",
        cursor: disabled ? "default" : "pointer",
        position: "relative",
        transition: "background-color 0.2s ease",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "4px",
          left: checked ? "24px" : "4px",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          transition: "left 0.2s ease",
          display: "block",
        }}
      />
    </button>
  );
}

// ─── Knapper ─────────────────────────────────────────────────────────────────

const btnBase: React.CSSProperties = {
  fontFamily: "inherit",
  fontSize: "14px",
  fontWeight: 500,
  border: "none",
  cursor: "pointer",
  padding: "8px 18px",
  lineHeight: 1.4,
};

const btnPrimary: React.CSSProperties = {
  ...btnBase,
  backgroundColor: "#1D3A2F",
  color: "#FFFFFF",
};

const btnSecondary: React.CSSProperties = {
  ...btnBase,
  backgroundColor: "#E8E4DF",
  color: "#1D3A2F",
};

const btnGhost: React.CSSProperties = {
  ...btnBase,
  backgroundColor: "transparent",
  color: "#2C2C2C",
  padding: "8px 4px",
};

// ─── Kategori-række ──────────────────────────────────────────────────────────

function CategoryRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "24px",
        paddingTop: "16px",
        paddingBottom: "16px",
        borderBottom: "1px solid #E8E4DF",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "inherit",
            fontSize: "14px",
            fontWeight: 500,
            color: "#1D3A2F",
            marginBottom: "4px",
          }}
        >
          {title}
          {disabled && (
            <span
              style={{
                marginLeft: "8px",
                fontSize: "11px",
                fontWeight: 400,
                color: "#8A8580",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Altid aktiv
            </span>
          )}
        </div>
        <div
          style={{
            fontFamily: "inherit",
            fontSize: "13px",
            fontWeight: 300,
            color: "#505050",
            lineHeight: 1.6,
          }}
        >
          {description}
        </div>
      </div>
      <Toggle
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        label={title}
      />
    </div>
  );
}

// ─── Hoved-komponent ─────────────────────────────────────────────────────────

export default function CookieBanner() {
  const pathname = usePathname();
  const [view, setView] = useState<View>("hidden");
  const [visible, setVisible] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Vis banner ved første besøg
  useEffect(() => {
    if (pathname === "/cookiepolitik") {
      setView("hidden");
      return;
    }
    const consent = getConsent();
    if (!consent) {
      setView("banner");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))
      );
    }
  }, [pathname]);

  // Genåbn via event (fx fra footer-link)
  useEffect(() => {
    const handler = () => {
      const consent = getConsent();
      if (consent) {
        setStatistics(consent.statistics);
        setMarketing(consent.marketing);
      }
      setVisible(false);
      setView("banner");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))
      );
    };
    window.addEventListener("openCookieSettings", handler);
    return () => window.removeEventListener("openCookieSettings", handler);
  }, []);

  const dismiss = (fn: () => void) => {
    fn();
    setVisible(false);
    setTimeout(() => setView("hidden"), 300);
  };

  const acceptAll = () => dismiss(() => saveConsent(true, true));
  const rejectAll = () => dismiss(() => saveConsent(false, false));
  const saveCustom = () => dismiss(() => saveConsent(statistics, marketing));

  if (view === "hidden") return null;

  return (
    <div
      aria-live="polite"
      role="dialog"
      aria-label="Cookieindstillinger"
      style={{
        position: "fixed",
        bottom: "16px",
        left: "50%",
        width: "auto",
        maxWidth: "860px",
        minWidth: 0,
        zIndex: 9999,
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E8E4DF",
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(calc(100% + 48px))",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        style={{
          width: "fit-content",
          margin: "0 auto",
          padding: "16px 24px",
        }}
      >
        {view === "banner" && (
          <div
            className="flex flex-col sm:flex-row"
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {/* Venstre: titel + brødtekst + link */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "inherit",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#1D3A2F",
                  marginBottom: "10px",
                  lineHeight: 1.4,
                }}
              >
                De ubevidste cookies gjort bevidst
              </div>

              <div
                style={{
                  fontFamily: "inherit",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#2C2C2C",
                  lineHeight: 1.7,
                  marginBottom: "6px",
                }}
              >
                JournalKlar bruger cookies — eller{" "}
                <em>informasjonskapsler</em>, som de hedder i Norge.
              </div>
              <div
                style={{
                  fontFamily: "inherit",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#2C2C2C",
                  lineHeight: 1.7,
                  marginBottom: "6px",
                }}
              >
                De nødvendige cookies får siden til at fungere.<br />
                Med dit samtykke kan vi bruge statistik til at få indblik i, hvordan siden bliver brugt.<br />
                Marketingcookies bruger vi til at måle effekten af vores annoncer.
              </div>
              <div
                style={{
                  fontFamily: "inherit",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#2C2C2C",
                  lineHeight: 1.7,
                  marginBottom: "6px",
                }}
              >
                Du kan acceptere alle, afvise eller vælge formål. Og læse mere om det{" "}
                <a
                  href="/cookiepolitik"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "inherit",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#1D3A2F",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(29,58,47,0.3)",
                    paddingBottom: "1px",
                  }}
                >
                  her →
                </a>
              </div>
            </div>

            {/* Højre: knapper */}
            <div
              style={{
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                alignItems: "stretch",
              }}
            >
              <button style={{ ...btnPrimary, width: "100%" }} onClick={acceptAll}>
                Accepter alle
              </button>
              <button style={{ ...btnSecondary, width: "100%" }} onClick={rejectAll}>
                Afvis alle
              </button>
              <button
                style={{ ...btnGhost, width: "100%" }}
                onClick={() => setView("customize")}
              >
                Tilpas valg
              </button>
            </div>
          </div>
        )}

        {view === "customize" && (
          <>
            {/* Titel */}
            <div
              style={{
                fontFamily: "var(--font-source-serif, serif)",
                fontSize: "18px",
                fontWeight: 400,
                color: "#1D3A2F",
                marginBottom: "4px",
                lineHeight: 1.3,
              }}
            >
              Tilpas dine cookievalg
            </div>
            <div style={{ marginBottom: "4px" }}>
              <a
                href="/cookiepolitik"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "inherit",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#1D3A2F",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(29,58,47,0.3)",
                  paddingBottom: "1px",
                }}
              >
                Læs mere i vores cookiepolitik →
              </a>
            </div>

            {/* Kategorier */}
            <CategoryRow
              title="Nødvendige"
              description="De får siden til at fungere og husker dit cookievalg."
              checked={true}
              disabled={true}
            />
            <CategoryRow
              title="Statistik"
              description="Hjælper os med at forstå, hvordan siden bruges, så vi kan forbedre den."
              checked={statistics}
              onChange={setStatistics}
            />
            <CategoryRow
              title="Marketing"
              description="Hjælper os med at måle effekten af annoncering på fx Google, Meta og LinkedIn."
              checked={marketing}
              onChange={setMarketing}
            />

            {/* Knapper */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <button style={btnPrimary} onClick={saveCustom}>
                Gem valg
              </button>
              <button style={btnSecondary} onClick={rejectAll}>
                Afvis alle
              </button>
              <button style={btnSecondary} onClick={acceptAll}>
                Accepter alle
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
