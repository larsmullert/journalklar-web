import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import PrintButton from "@/components/ui/PrintButton";
import DPAAftaleContent from "@/components/DPAAftaleContent";
import { CURRENT_DPA } from "@/lib/dpa-versions";

export const metadata = {
  title: "Databehandleraftale for psykologer",
  description: "GDPR-korrekt databehandleraftale til din psykologpraksis. Behandling sker inden for EU, server i Skanderborg, ISO 27001. Accepter online som ny abonnent.",
};

export default function DatabehandleraftalePage() {
  return (
    <>
      <style>{`
        @media print {
          nav { display: none !important; }
          footer { display: none !important; }
          .print-hide { display: none !important; }
          body { font-size: 12px; }
        }
      `}</style>

      <Nav />
      <main>
        <section className="py-16 px-6 md:pt-[100px] md:pb-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">

            {/* Header row */}
            <div className="flex items-start justify-between gap-8 mb-10">
              <div>
                <p className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase mb-3" style={{ color: "#E04500" }}>
                  Databehandleraftale
                </p>
                <h1 className="mb-3">
                  Databehandleraftale mellem psykolog og JournalKlar
                </h1>
                <p className="font-sans text-[15px] font-light text-muted leading-[1.7]">
                  Indgås ved oprettelse af konto. Denne side viser den gældende version.
                </p>
              </div>
              <div className="print-hide flex-shrink-0 pt-2">
                <PrintButton />
              </div>
            </div>

            <DPAAftaleContent />

            {/* Dokumentfingeraftryk */}
            <div
              style={{
                marginTop: "56px",
                paddingTop: "24px",
                borderTop: "1px solid #E8E4DF",
                maxWidth: "720px",
              }}
            >
              <p style={{
                fontFamily: "var(--font-source-sans, sans-serif)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#8A8580",
                marginBottom: "12px",
              }}>
                Dokumentfingeraftryk
              </p>
              <p style={{
                fontFamily: "var(--font-source-sans, sans-serif)",
                fontSize: "13px",
                fontWeight: 300,
                color: "#505050",
                lineHeight: 1.7,
                marginBottom: "10px",
              }}>
                Den kanoniske kildekopi af denne aftale er en ren tekstfil. SHA-256-hashen
                nedenfor identificerer præcist det dokument du accepterer ved oprettelse af konto.
                Du kan verificere hashen ved at downloade filen og beregne den selv.
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "6px 20px",
                fontFamily: "var(--font-source-sans, sans-serif)",
                fontSize: "13px",
              }}>
                <span style={{ fontWeight: 500, color: "#1D3A2F", opacity: 0.7 }}>Version</span>
                <span style={{ fontWeight: 300, color: "#505050" }}>{CURRENT_DPA.version}</span>
                <span style={{ fontWeight: 500, color: "#1D3A2F", opacity: 0.7 }}>SHA-256</span>
                <span style={{
                  fontFamily: "monospace",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#505050",
                  wordBreak: "break-all",
                }}>
                  {CURRENT_DPA.sha256}
                </span>
                <span style={{ fontWeight: 500, color: "#1D3A2F", opacity: 0.7 }}>Kildedokument</span>
                <span style={{ fontWeight: 300, color: "#505050" }}>
                  <a
                    href={CURRENT_DPA.textPath}
                    style={{
                      color: "#1D3A2F",
                      borderBottom: "1px solid rgba(29,58,47,0.3)",
                      textDecoration: "none",
                    }}
                  >
                    journalklar.dk{CURRENT_DPA.textPath}
                  </a>
                </span>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
