export default function Hero() {
  return (
    <div className="pt-16 px-6 pb-14 md:pt-[100px] md:px-16 md:pb-[90px]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[80px] items-center">

          {/* Venstre: copy */}
          <div>
            <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-orange mb-[22px]">
              Til privatpraktiserende psykologer
            </div>

            <h1 className="mb-7 text-[clamp(36px,3.8vw,52px)]">
              Journaludkast fra dine egne faglige noter. Uden optagelse af sessionen.
            </h1>

            <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.75] mb-10">
              JournalKlar hjælper privatpraktiserende psykologer med at strukturere egne noter efter journalføringskravene — så du stadig vurderer, selekterer og godkender.
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-12">
              <a
                href="#pris"
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

            <p className="font-sans text-[13px] font-light text-muted leading-[1.6]">
              Ingen optagelse · Dansk server i Skanderborg · Altid et udkast
            </p>
          </div>

          {/* Højre: split-pane preview */}
          <div className="hidden md:block border border-[#D4D0CB] bg-white">
            <div className="bg-[#EFECE7] border-b border-[#E0DDD8] px-[14px] py-[10px] flex items-center gap-[6px]">
              <div className="w-[9px] h-[9px] rounded-full bg-[#E0B9B9]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#DFDFB9]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#B9DFC0]" />
              <span className="ml-[10px] font-sans text-[11px] text-muted">JournalKlar — Eksempelsession</span>
            </div>
            <div className="grid grid-cols-2">

              {/* Rånoter */}
              <div className="px-[22px] py-6 border-r border-[#F0EDE8]">
                <div className="font-sans text-[10px] font-medium tracking-[0.12em] uppercase text-muted mb-[14px]">Dine rånoter</div>
                <div className="font-sans text-[12px] font-light text-[#5A5A5A] leading-[1.75]">
                  <p>Pt. mødte til aftalt tid. Virker mere afklaret end sidst — sov bedre denne uge.</p>
                  <p>Arbejdede videre med eksponeringshierarki. Gennemgik trin 3. Pt. er motiveret men udtrykker tøven over for de næste trin.</p>
                  <p>Informeret samtykke til behandlingsplan givet mundtligt. Hjemmeopgave: én situation pr. dag i dagbog. Ny session om 14 dage.</p>
                </div>
              </div>

              {/* Journaludkast */}
              <div className="px-[22px] py-6">
                <div className="font-sans text-[10px] font-medium tracking-[0.12em] uppercase text-muted mb-[14px]">Journaludkast</div>

                <div className="mb-[14px]">
                  <div className="font-sans text-[9px] font-medium uppercase tracking-[0.1em] text-muted mb-[4px]">Psykisk tilstand</div>
                  <div className="font-sans text-[11.5px] font-light text-[#3A3A3A] leading-[1.6]">Patienten fremstår mere afklaret. Oplyser om bedret søvn og øget evne til at rumme interpersonel konflikt.</div>
                </div>

                <div className="mb-[14px]">
                  <div className="font-sans text-[9px] font-medium uppercase tracking-[0.1em] text-muted mb-[4px]">Intervention</div>
                  <div className="font-sans text-[11.5px] font-light text-[#3A3A3A] leading-[1.6]">KAT. Eksponeringshierarki, trin 3. Behandlingsmotiveret med ambivalens over for kommende trin.</div>
                </div>

                <div className="border border-orange/[0.28] bg-orange/[0.04] px-3 py-[9px] mb-[12px]">
                  <div className="flex items-center gap-[5px] font-sans text-[9px] font-medium uppercase tracking-[0.08em] text-orange mb-[3px]">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                      <circle cx="4.5" cy="4.5" r="4" stroke="#E04500" strokeWidth="1"/>
                      <line x1="4.5" y1="2.5" x2="4.5" y2="5" stroke="#E04500" strokeWidth="1" strokeLinecap="round"/>
                      <circle cx="4.5" cy="6.5" r="0.6" fill="#E04500"/>
                    </svg>
                    Mangler — kræver stillingtagen
                  </div>
                  <div className="font-sans text-[10.5px] font-light text-[#6A6A6A]">Konsultationsform ikke angivet (fremmøde, telefon eller video).</div>
                </div>

                <div>
                  <div className="font-sans text-[9px] font-medium uppercase tracking-[0.1em] text-muted mb-[4px]">Plan og aftaler</div>
                  <div className="font-sans text-[11.5px] font-light text-[#3A3A3A] leading-[1.6]">Samtykke dokumenteret. Hjemmeopgave aftalt. Ny session om 14 dage.</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
