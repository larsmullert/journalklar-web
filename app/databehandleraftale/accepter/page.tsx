"use client";

import { useState } from "react";
import DPAAftaleContent from "@/components/DPAAftaleContent";

export default function AccepterDPAPage() {
  const [accepted, setAccepted] = useState(false);
  const [name, setName] = useState("");
  const [cvr, setCvr] = useState("");

  const canSubmit = accepted && name.trim().length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    // TODO: POST /api/dpa/accept — gem i database med userId, version, timestamp, navn og CVR
    const payload = {
      version: "1.0",
      acceptedAt: new Date().toISOString(),
      name: name.trim(),
      cvr: cvr.trim() || undefined,
    };
    console.log("DPA accept payload:", payload);
  }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#F7F4EF" }}>

      {/* Minimal header */}
      <div style={{ borderBottom: "1px solid #E8E4DF", padding: "20px 24px" }}>
        <a
          href="/"
          style={{ fontFamily: "var(--font-source-serif, serif)", fontSize: "19px", fontWeight: 400, color: "#1D3A2F", textDecoration: "none", letterSpacing: "-0.02em" }}
        >
          JournalKla<span style={{ color: "#E04500" }}>r</span>
        </a>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 24px 80px" }}>

        {/* Step indicator */}
        <p style={{ fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E04500", marginBottom: "12px" }}>
          Trin 3 af 3
        </p>

        <h1 style={{ fontFamily: "var(--font-source-serif, serif)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 400, color: "#1D3A2F", lineHeight: 1.2, marginBottom: "20px" }}>
          Læs og accepter databehandleraftalen
        </h1>

        <p style={{ fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "16px", fontWeight: 300, color: "#505050", lineHeight: 1.85, marginBottom: "8px" }}>
          Fordi du som psykolog er dataansvarlig for dine klienters oplysninger, kræver loven at
          du accepterer en databehandleraftale med JournalKlar inden du tager produktet i brug.
        </p>
        <p style={{ fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "16px", fontWeight: 300, color: "#505050", lineHeight: 1.85, marginBottom: "48px" }}>
          Herunder finder du den gældende aftale i fuld længde.
        </p>

        {/* DPA text */}
        <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E4DF", padding: "40px 40px 32px" }}>
          <DPAAftaleContent />
        </div>

        {/* Acceptance form */}
        <form onSubmit={handleSubmit} style={{ marginTop: "40px" }}>

          {/* Checkbox */}
          <label style={{ display: "flex", alignItems: "flex-start", gap: "14px", cursor: "pointer", marginBottom: "28px" }}>
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              style={{ marginTop: "3px", width: "18px", height: "18px", flexShrink: 0, accentColor: "#1D3A2F" }}
            />
            <span style={{ fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "14px", fontWeight: 300, color: "#2C2C2C", lineHeight: 1.7 }}>
              Jeg har læst og accepterer databehandleraftalen (version 1.0, maj 2026).
              Jeg bekræfter at jeg er dataansvarlig for mine klienters oplysninger og at jeg anvender
              JournalKlar som databehandler i henhold til ovenstående vilkår.
            </span>
          </label>

          {/* Name */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "13px", fontWeight: 500, color: "#1D3A2F", marginBottom: "6px" }}>
              Psykologens navn <span style={{ color: "#E04500" }}>*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dit fulde navn"
              required
              style={{
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
              }}
            />
          </div>

          {/* CVR */}
          <div style={{ marginBottom: "32px" }}>
            <label style={{ display: "block", fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "13px", fontWeight: 500, color: "#1D3A2F", marginBottom: "6px" }}>
              CVR-nummer{" "}
              <span style={{ fontWeight: 300, color: "#8A8580" }}>(valgfrit)</span>
            </label>
            <input
              type="text"
              value={cvr}
              onChange={(e) => setCvr(e.target.value)}
              placeholder="12345678"
              style={{
                width: "200px",
                padding: "10px 14px",
                fontFamily: "var(--font-source-sans, sans-serif)",
                fontSize: "15px",
                fontWeight: 300,
                color: "#2C2C2C",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8E4DF",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            style={{
              fontFamily: "var(--font-source-sans, sans-serif)",
              fontSize: "15px",
              fontWeight: 500,
              padding: "14px 32px",
              backgroundColor: canSubmit ? "#1D3A2F" : "#E8E4DF",
              color: canSubmit ? "#FFFFFF" : "#8A8580",
              border: "none",
              cursor: canSubmit ? "pointer" : "not-allowed",
              lineHeight: 1.4,
              transition: "background-color 0.15s ease, color 0.15s ease",
            }}
          >
            Accepter og opret konto
          </button>

        </form>
      </div>
    </main>
  );
}
