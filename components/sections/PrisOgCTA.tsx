import SectionLabel from "@/components/ui/SectionLabel";

export default function PrisOgCTA() {
  return (
    <section id="pris" className="py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Kom i gang</SectionLabel>
        <h2>Prøv det i 30 dage. Mærk efter selv.</h2>
        <p className="max-w-[520px] text-[#505050]">
          Det tager to minutter at komme i gang. Fuld adgang til alle funktioner. Ingen binding. Ingen installation.
        </p>

        {/* Prisplaner */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-12">

          {/* Månedlig */}
          <div className="p-6 md:p-8 bg-white border border-sand [border-top:2px_solid_rgba(29,58,47,0.2)]">
            <div className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-6">
              Månedlig
            </div>
            <div className="font-serif text-[56px] font-light text-evergreen leading-none tracking-[-0.03em]">
              199<span className="text-[28px]">kr.</span>
            </div>
            <div className="font-sans text-[13px] text-muted mt-1 mb-8 font-light">
              pr. måned ekskl. moms · ingen binding
            </div>
            <div className="font-sans text-[14px] font-light text-[#505050] flex flex-col gap-[10px]">
              <span>Ubegrænsede journaludkast</span>
              <span>BEK 1361/2025</span>
              <span>Databehandleraftale inkluderet</span>
            </div>
          </div>

          {/* Årsabonnement */}
          <div className="p-6 md:p-8 bg-white border border-sand [border-top:2px_solid_rgba(29,58,47,0.2)]">
            <div className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-6">
              Årsabonnement
            </div>
            <div className="font-serif text-[56px] font-light text-evergreen leading-none tracking-[-0.03em]">
              1.999<span className="text-[24px]">kr.</span>
            </div>
            <div className="font-sans text-[13px] text-muted mt-1 mb-[6px] font-light">
              pr. år ekskl. moms · faktureres én gang
            </div>
            <div className="font-sans text-[13px] text-muted font-light mb-8">
              Svarende til 166 kr./md.
            </div>
            <div className="font-sans text-[14px] font-light text-[#505050] flex flex-col gap-[10px]">
              <span>Alt fra månedlig</span>
              <span>Prioriteret support</span>
            </div>
          </div>
        </div>

        {/* CTA-blok */}
        <div className="mt-9 p-6 md:p-8 bg-parchment border border-sand [border-top:2px_solid_rgba(29,58,47,0.2)] grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="font-sans text-[14px] font-light text-[#505050] leading-[1.75]">
            <strong className="font-medium text-evergreen">30 dages gratis prøveperiode</strong>
            {" "}— ingen kreditkort kræves ved opstart. Du opretter en konto, underskriver databehandleraftalen og er i gang. Ingen installation. Ingen oplæring.
          </div>
          <div className="flex flex-col items-start gap-[10px] md:items-end md:flex-shrink-0">
            <a
              href="#"
              className="inline-flex items-center gap-[10px] bg-evergreen text-white font-sans text-[16px] font-medium px-8 py-[18px] hover:bg-[#152e23] transition-colors"
            >
              Prøv gratis i 30 dage
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.3"/>
                <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="white" strokeWidth="1.3" fill="none"/>
              </svg>
            </a>
            <p className="font-sans text-[12px] text-muted italic mt-2 mb-0">
              Diktering som tilkøb (+50 kr./md. ekskl. moms) — lanceres i næste version.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
