"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";
type ApiErrorCode =
  | "EMAIL_EXISTS"
  | "RATE_LIMITED"
  | "MISSING_FIELDS"
  | "ERR_EMAIL"
  | "ERR_SIGNUP"
  | "UNKNOWN";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  fontFamily: "var(--font-source-sans, sans-serif)",
  fontSize: "15px",
  fontWeight: 300,
  color: "#2C2C2C",
  backgroundColor: "#FFFFFF",
  border: "1px solid #E8E4DF",
  outline: "none",
  boxSizing: "border-box",
  borderRadius: 0,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-source-sans, sans-serif)",
  fontSize: "13px",
  fontWeight: 500,
  color: "#1D3A2F",
  marginBottom: "6px",
};

function errorMessage(code: ApiErrorCode): React.ReactNode {
  switch (code) {
    case "EMAIL_EXISTS":
      return (
        <>
          Der er allerede oprettet en konto med denne e-mail.{" "}
          <a
            href="https://app.journalklar.dk"
            style={{ color: "#1D3A2F", borderBottom: "1px solid rgba(29,58,47,0.3)", textDecoration: "none" }}
          >
            Log ind her
          </a>
          .
        </>
      );
    case "RATE_LIMITED":
      return "Du har forsøgt for mange gange. Prøv igen om en time.";
    case "MISSING_FIELDS":
      return "Udfyld venligst alle felter.";
    case "ERR_EMAIL":
      return "Din konto er oprettet, men vi kunne ikke sende bekræftelsesmailen. Kontakt os på hej@journalklar.dk.";
    default:
      return "Noget gik galt. Prøv igen, eller kontakt os på hej@journalklar.dk.";
  }
}

export default function TilmeldPage() {
  const [email, setEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [password, setPassword] = useState("");
  const [dpaAccepted, setDpaAccepted] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [apiError, setApiError] = useState<ApiErrorCode | null>(null);

  const canSubmit =
    state !== "submitting" &&
    email.trim().length > 0 &&
    organizationName.trim().length > 0 &&
    password.length >= 8 &&
    dpaAccepted;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setState("submitting");
    setApiError(null);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          password,
          organizationName: organizationName.trim(),
        }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setState("success");
        return;
      }

      const code = (data?.error ?? "UNKNOWN") as ApiErrorCode;
      setApiError(code);
      setState("error");
    } catch {
      setApiError("UNKNOWN");
      setState("error");
    }
  }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#F7F4EF" }}>

      {/* Minimal header — ingen fuld Nav på formularskærmbilleder */}
      <div style={{ borderBottom: "1px solid #E8E4DF", padding: "20px 24px" }}>
        <a
          href="/"
          style={{
            fontFamily: "var(--font-source-serif, serif)",
            fontSize: "19px",
            fontWeight: 400,
            color: "#1D3A2F",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          JournalKla<span style={{ color: "#E04500" }}>r</span>
        </a>
      </div>

      <div style={{ maxWidth: "480px", margin: "0 auto", padding: "60px 24px 80px" }}>

        {state === "success" ? (

          /* ─── Bekræftelse ──────────────────────────────────────────── */
          <div>
            <p style={{
              fontFamily: "var(--font-source-sans, sans-serif)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#1D3A2F",
              marginBottom: "16px",
            }}>
              Konto oprettet
            </p>
            <h1 style={{
              fontFamily: "var(--font-source-serif, serif)",
              fontSize: "clamp(26px, 3.5vw, 36px)",
              fontWeight: 400,
              color: "#1D3A2F",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}>
              Tjek din indbakke
            </h1>
            <p style={{
              fontFamily: "var(--font-source-sans, sans-serif)",
              fontSize: "16px",
              fontWeight: 300,
              color: "#505050",
              lineHeight: 1.85,
            }}>
              Vi har sendt dig et link til at aktivere din konto.
              Klik på linket i mailen for at komme i gang.
            </p>
          </div>

        ) : (

          /* ─── Formular ─────────────────────────────────────────────── */
          <>
            <p style={{
              fontFamily: "var(--font-source-sans, sans-serif)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#E04500",
              marginBottom: "12px",
            }}>
              Opret konto
            </p>

            <h1 style={{
              fontFamily: "var(--font-source-serif, serif)",
              fontSize: "clamp(26px, 3.5vw, 36px)",
              fontWeight: 400,
              color: "#1D3A2F",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}>
              Kom i gang
            </h1>

            <p style={{
              fontFamily: "var(--font-source-sans, sans-serif)",
              fontSize: "15px",
              fontWeight: 300,
              color: "#505050",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}>
              30 dages fuld adgang. Ingen betalingskort kræves.
            </p>

            <form onSubmit={handleSubmit} noValidate>

              {/* E-mail */}
              <div style={{ marginBottom: "18px" }}>
                <label htmlFor="email" style={labelStyle}>
                  E-mail <span style={{ color: "#E04500" }}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="din@email.dk"
                  required
                  autoComplete="email"
                  style={inputStyle}
                />
              </div>

              {/* Praksisnavn */}
              <div style={{ marginBottom: "18px" }}>
                <label htmlFor="organizationName" style={labelStyle}>
                  Praksisnavn <span style={{ color: "#E04500" }}>*</span>
                </label>
                <input
                  id="organizationName"
                  type="text"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  placeholder="Psykologpraksis Andersen"
                  required
                  autoComplete="organization"
                  style={inputStyle}
                />
                <p style={{
                  fontFamily: "var(--font-source-sans, sans-serif)",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "#8A8580",
                  marginTop: "5px",
                }}>
                  Navnet på din klinik eller enkeltmandsvirksomhed
                </p>
              </div>

              {/* Adgangskode */}
              <div style={{ marginBottom: "28px" }}>
                <label htmlFor="password" style={labelStyle}>
                  Adgangskode <span style={{ color: "#E04500" }}>*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 tegn"
                  required
                  autoComplete="new-password"
                  style={inputStyle}
                />
              </div>

              {/* DPA-checkbox */}
              <label style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                cursor: "pointer",
                marginBottom: "32px",
              }}>
                <input
                  type="checkbox"
                  checked={dpaAccepted}
                  onChange={(e) => setDpaAccepted(e.target.checked)}
                  style={{
                    marginTop: "3px",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                    accentColor: "#1D3A2F",
                  }}
                />
                <span style={{
                  fontFamily: "var(--font-source-sans, sans-serif)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#2C2C2C",
                  lineHeight: 1.7,
                }}>
                  Jeg accepterer{" "}
                  <a
                    href="/databehandleraftale"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#1D3A2F",
                      borderBottom: "1px solid rgba(29,58,47,0.3)",
                      textDecoration: "none",
                    }}
                  >
                    databehandleraftalen
                  </a>
                </span>
              </label>

              {/* Fejlbesked */}
              {state === "error" && apiError && (
                <div style={{
                  backgroundColor: "rgba(224,69,0,0.04)",
                  border: "1px solid rgba(224,69,0,0.28)",
                  padding: "12px 16px",
                  marginBottom: "20px",
                }}>
                  <p style={{
                    fontFamily: "var(--font-source-sans, sans-serif)",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "#2C2C2C",
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    {errorMessage(apiError)}
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={!canSubmit}
                style={{
                  width: "100%",
                  fontFamily: "var(--font-source-sans, sans-serif)",
                  fontSize: "15px",
                  fontWeight: 400,
                  padding: "15px 30px",
                  backgroundColor: canSubmit ? "#1D3A2F" : "#E8E4DF",
                  color: canSubmit ? "#FFFFFF" : "#8A8580",
                  border: "none",
                  borderRadius: 0,
                  cursor: canSubmit ? "pointer" : "not-allowed",
                  lineHeight: 1.4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {state === "submitting" ? (
                  "Opretter konto…"
                ) : (
                  <>
                    Start din gratis prøveperiode
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.3" />
                      <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
                    </svg>
                  </>
                )}
              </button>

              <p style={{
                fontFamily: "var(--font-source-sans, sans-serif)",
                fontSize: "13px",
                fontWeight: 300,
                color: "#8A8580",
                textAlign: "center",
                marginTop: "12px",
              }}>
                Ingen betalingskort kræves · 30 dage gratis adgang
              </p>

            </form>
          </>
        )}
      </div>
    </main>
  );
}
