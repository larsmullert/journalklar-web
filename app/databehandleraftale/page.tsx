import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import PrintButton from "@/components/ui/PrintButton";
import DPAAftaleContent from "@/components/DPAAftaleContent";

export const metadata = {
  title: "Databehandleraftale",
  description: "JournalKlars databehandleraftale for privatpraktiserende psykologer.",
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

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
