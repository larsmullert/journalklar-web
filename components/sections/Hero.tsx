export default function Hero() {
  return (
    <div className="pt-16 px-6 pb-14 md:pt-[100px] md:px-16 md:pb-[90px]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[80px] items-center">

          {/* Venstre: copy */}
          <div>
            <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-[22px]">
              Til privatpraktiserende psykologer
            </div>

            <h1 className="mb-5">
              Journaludkast fra dine egne faglige noter - uden optagelse af sessionen
            </h1>

            <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-8">
              JournalKlar hjælper privatpraktiserende psykologer med at strukturere egne noter efter journalføringskravene, så du stadig vurderer, selekterer og godkender.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <a
                href="/tilmeld"
                data-track="cta-tilmeld"
                data-location="hero"
                className="inline-flex items-center gap-[10px] bg-evergreen text-white font-sans text-[15px] font-normal px-[30px] py-[15px] hover:bg-[#152e23] transition-colors"
              >
                Prøv gratis i 30 dage
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.3"/>
                  <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="white" strokeWidth="1.3" fill="none"/>
                </svg>
              </a>
              <a
                href="#hvordan"
                className="inline-flex items-center gap-[6px] text-evergreen font-sans text-[14px] font-normal border-b border-evergreen/20 pb-[2px] hover:border-evergreen transition-colors"
              >
                Se hvordan det virker
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.2"/>
                  <polyline points="6,2 9,5 6,8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Højre: split-pane preview med fade */}
          <div
            className="hidden md:block border border-[#D4D0CB] bg-white relative"
            style={{ maxHeight: "440px", overflow: "hidden" }}
          >
            {/* Fade overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none z-10"
              style={{ background: "linear-gradient(to bottom, transparent, #F7F4EF)" }}
            />

            {/* Browser bar */}
            <div className="bg-[#EFECE7] border-b border-[#E0DDD8] px-[14px] py-[10px] flex items-center gap-[6px]">
              <div className="w-[9px] h-[9px] rounded-full bg-[#E0B9B9]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#DFDFB9]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#B9DFC0]" />
              <span className="ml-[10px] font-sans text-[11px] text-muted">JournalKlar — Eksempelsession</span>
            </div>

            <div className="grid grid-cols-2">

              {/* Rånoter */}
              <div className="px-[20px] py-[18px] border-r border-[#F0EDE8]">
                <div className="font-sans text-[9px] font-medium tracking-[0.15em] uppercase text-muted mb-[12px]">
                  Rånoter efter sessionen
                </div>
                <div className="font-sans text-[10.5px] font-light text-body leading-[1.75] space-y-[8px]">
                  <p>Første samtale. Mand, 34. Henvist af læge pga. depression. Sygemeldt 3 mdr fra job som projektleder.</p>
                  <p>Beskriver nedsat energi, søvnproblemer, tab af lyst. Haft det sådan ca 6 mdr. Udløst af samlivskonflikt og høj arbejdsbelastning.</p>
                  <p>Ingen selvmordsrisiko, spurgt direkte.</p>
                  <p>Tidligere set psykolog for 5 år siden, god oplevelse. Motiveret for forløb.</p>
                  <p>Aftalte KAT-baseret tilgang, 10 sessioner. Næste tid om 1 uge. Informeret om journalføring og rammer.</p>
                </div>
              </div>

              {/* Struktureret journaludkast */}
              <div className="px-[20px] py-[18px]">
                <div className="flex items-center gap-[8px] font-sans text-[9px] font-medium tracking-[0.15em] uppercase text-muted mb-[12px]">
                  Struktureret journaludkast
                  <span className="bg-evergreen/[0.08] text-evergreen text-[11px] tracking-[0.15em] px-[6px] py-[1px]">
                    Til godkendelse
                  </span>
                </div>
                <div className="font-sans text-[10.5px] font-light text-body leading-[1.7] space-y-[8px]">
                  <p className="text-muted">[STAMDATA: Udfyldes i journalsystem]</p>
                  <p>[DATO]. Første samtale.</p>
                  <p>Klienten er en 34-årig mand henvist af egen læge med henblik på behandling af depression. Han er aktuelt sygemeldt fra sit job som projektleder, sygemeldingen har varet tre måneder.</p>
                  <p>Klienten beskriver nedsat energi, søvnproblemer og tab af lyst. Symptomerne har været til stede i ca. seks måneder og beskrives som udløst af en samlivskonflikt og høj arbejdsbelastning.</p>
                  <p>Ingen selvmordsrisiko, spurgt direkte.</p>
                  <p>
                    Klienten er informeret om journalføring og rammerne for forløbet.{" "}
                    <span
                      className="font-sans text-[11px] font-light"
                      style={{ background: "rgba(245,218,120,0.30)", color: "#7A6020", padding: "1px 5px" }}
                    >
                      MANGLER: bekræft informeret samtykke til tavshedspligt
                    </span>
                  </p>
                  <p>Der er aftalt en kognitiv adfærdsterapeutisk tilgang over ti sessioner. Næste session aftalt om en uge.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <p className="font-sans text-[13px] font-normal text-evergreen tracking-[0.04em] text-center mt-8 mb-0">
          Ingen optagelse af sessionen{" "}
          <span className="text-evergreen/40">·</span>
          {" "}Server i Skanderborg{" "}
          <span className="text-evergreen/40">·</span>
          {" "}Altid et udkast
        </p>
      </div>
    </div>
  );
}
