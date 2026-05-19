import SectionLabel from "@/components/ui/SectionLabel";

function CheckIcon() {
  return (
    <svg className="flex-shrink-0 mt-[2px] text-evergreen" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <polyline points="2,7 5.5,10.5 12,4" stroke="#1D3A2F" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export default function PrisOgCTA() {
  return (
    <section id="pris" className="py-[120px] px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>[PLACEHOLDER label]</SectionLabel>
        <h2>[PLACEHOLDER headline]</h2>
        <p className="max-w-[520px] text-[#505050]">
          [PLACEHOLDER — en-to sætninger om prøveperioden og adgangsvilkår.]
        </p>

        {/* Prisplaner */}
        <div className="grid grid-cols-2 gap-8 max-w-[860px] mt-12">

          {/* Månedlig */}
          <div className="relative px-11 py-12 bg-white border border-sand">
            <div className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-6">
              [PLACEHOLDER plan-navn]
            </div>
            <div className="font-serif text-[56px] font-light text-evergreen leading-none tracking-[-0.03em]">
              [PLACEHOLDER]<span className="text-[28px]">[PLACEHOLDER enhed]</span>
            </div>
            <div className="font-sans text-[13px] text-muted mt-1 mb-7 font-light">
              [PLACEHOLDER — fakturerings-interval og bindingsinfo]
            </div>
            <div className="font-sans text-[14px] font-light text-graphite leading-[2]">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start gap-[10px] mb-1">
                  <CheckIcon />
                  <span>[PLACEHOLDER feature {i}]</span>
                </div>
              ))}
            </div>
          </div>

          {/* Årsabonnement */}
          <div className="relative px-11 py-12 bg-white border border-evergreen/20">
            <span className="absolute -top-px -right-px bg-evergreen text-white font-sans text-[10px] font-medium tracking-[0.1em] uppercase px-[14px] py-[5px]">
              [PLACEHOLDER badge]
            </span>
            <div className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-6">
              [PLACEHOLDER plan-navn]
            </div>
            <div className="font-serif text-[56px] font-light text-evergreen leading-none tracking-[-0.03em]">
              [PLACEHOLDER]<span className="text-[24px]">[PLACEHOLDER enhed]</span>
            </div>
            <div className="font-sans text-[13px] text-muted mt-1 mb-[6px] font-light">
              [PLACEHOLDER — fakturerings-interval]
            </div>
            <div className="font-sans text-[13px] text-orange font-normal mb-7">
              [PLACEHOLDER — besparelse pr. år]
            </div>
            <div className="font-sans text-[14px] font-light text-graphite leading-[2]">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-[10px] mb-1">
                  <CheckIcon />
                  <span>[PLACEHOLDER feature {i}]</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA-blok */}
        <div className="mt-9 max-w-[860px] px-11 py-9 bg-parchment border border-sand grid grid-cols-[1fr_auto] gap-8 items-center">
          <div className="font-sans text-[14px] font-light text-[#505050] leading-[1.75]">
            <strong className="font-medium text-evergreen">[PLACEHOLDER — fremhævet CTA-tekst]</strong>
            {" "}[PLACEHOLDER — uddybende sætning om hvad der sker når man starter.]
          </div>
          <div className="flex flex-col items-end gap-[10px] flex-shrink-0">
            <a
              href="#"
              className="inline-flex items-center gap-[10px] bg-evergreen text-white font-sans text-[15px] font-normal px-[30px] py-[15px] hover:bg-[#152e23] transition-colors"
            >
              [PLACEHOLDER CTA]
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.3"/>
                <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="white" strokeWidth="1.3" fill="none"/>
              </svg>
            </a>
            <p className="font-sans text-[12px] text-muted italic mt-2 mb-0">
              [PLACEHOLDER — note om tilkøb eller fremtidig funktion]
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
