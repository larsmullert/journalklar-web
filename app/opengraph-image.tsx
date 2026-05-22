import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JournalKlar — Journaludkast fra dine egne faglige noter.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#F7F4EF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        {/* Top: logo */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: "28px",
            fontWeight: 400,
            color: "#1D3A2F",
            letterSpacing: "-0.02em",
          }}
        >
          JournalKla<span style={{ color: "#E04500" }}>r</span>
        </div>

        {/* Center: headline + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontFamily: "serif",
              fontSize: "64px",
              fontWeight: 400,
              color: "#1D3A2F",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            Journaludkast fra dine egne faglige noter.
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: "24px",
              fontWeight: 300,
              color: "#505050",
              lineHeight: 1.5,
            }}
          >
            Til privatpraktiserende psykologer. Uden optagelse af sessionen.
          </div>
        </div>

        {/* Bottom: url */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              color: "#8A8580",
            }}
          >
            journalklar.dk
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
