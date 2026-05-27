import SectionLabel from "@/components/ui/SectionLabel";

export default function PrisOgCTA() {
  return (
    <section id="pris" className="bg-sand py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Kom i gang</SectionLabel>
        <h2>Prøv det i 30 dage. Mærk selv efter</h2>
        <p className="max-w-[520px] text-body">
          Det tager to minutter at komme i gang. Fuld adgang til alle funktioner. Ingen binding. Ingen installation.
        </p>

        {/* Prisplaner */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-12">

          {/* Månedlig */}
          <div className="p-6 md:p-8 bg-white border border-sand [border-top:2px_solid_rgba(29,58,47,0.2)]">
            <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-6">
              Månedlig
            </div>
            <div className="font-serif text-[56px] font-light text-evergreen leading-none tracking-[-0.03em]">
              199<span className="text-[28px]">kr.</span>
            </div>
            <div className="font-sans text-[13px] text-muted mt-1 mb-8 font-light">
              pr. måned ekskl. moms · ingen binding
            </div>
            <div className="font-sans text-[14px] font-light text-body flex flex-col gap-[10px] mb-8">
              <span>Ubegrænsede journaludkast</span>
              <span>Ingen binding</span>
            </div>
            <a
              href="/tilmeld"
              className="inline-flex items-center gap-[10px] bg-evergreen text-white font-sans text-[15px] font-normal px-[30px] py-[15px] hover:bg-[#152e23] transition-colors"
            >
              Prøv gratis i 30 dage
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.3"/>
                <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="white" strokeWidth="1.3" fill="none"/>
              </svg>
            </a>
          </div>

          {/* Årsabonnement */}
          <div className="p-6 md:p-8 bg-white border border-sand [border-top:2px_solid_rgba(29,58,47,0.2)]">
            <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-6">
              Årsabonnement
            </div>
            <div className="font-serif text-[56px] font-light text-evergreen leading-none tracking-[-0.03em]">
              1.999<span className="text-[28px]">kr.</span>
            </div>
            <div className="font-sans text-[13px] text-muted mt-1 mb-8 font-light">
              pr. år ekskl. moms · faktureres én gang
            </div>
            <div className="font-sans text-[14px] font-light text-body flex flex-col gap-[10px] mb-8">
              <span>Ubegrænsede journaludkast</span>
              <span>Svarende til 166 kr./md.</span>
            </div>
            <a
              href="/tilmeld"
              className="inline-flex items-center gap-[10px] bg-evergreen text-white font-sans text-[15px] font-normal px-[30px] py-[15px] hover:bg-[#152e23] transition-colors"
            >
              Prøv gratis i 30 dage
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.3"/>
                <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="white" strokeWidth="1.3" fill="none"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Prøveperiode-boks */}
        <div
          className="bg-parchment border border-sand [border-top:2px_solid_rgba(29,58,47,0.2)]"
          style={{ width: "fit-content", padding: "32px", marginTop: "36px", marginLeft: "auto", marginRight: "auto" }}
        >
          <p className="font-serif text-[14px] font-normal text-evergreen leading-snug mb-3">
            30 dages gratis prøveperiode
          </p>
          <p className="font-sans text-[14px] font-light text-body leading-[1.75] mb-2">
            Ingen betalingskort kræves for prøveperioden.
          </p>
          <p className="font-sans text-[14px] font-light text-body leading-[1.75] mb-8">
            Du opretter en konto, underskriver databehandleraftalen og er i gang.{" "}
            Ingen installation, ingen oplæring.
          </p>
          <a
            href="/tilmeld"
            className="inline-flex items-center gap-[10px] bg-evergreen text-white font-sans text-[15px] font-normal px-[30px] py-[15px] hover:bg-[#152e23] transition-colors"
          >
            Prøv gratis i 30 dage
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.3"/>
              <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="white" strokeWidth="1.3" fill="none"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
