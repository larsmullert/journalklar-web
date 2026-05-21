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
              Ingen optagelse af sessionen · Server i Skanderborg · Altid et udkast
            </p>
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
                <div className="font-sans text-[9px] font-medium tracking-[0.12em] uppercase text-muted mb-[12px]">
                  Rånoter efter sessionen
                </div>
                <div className="font-sans text-[10.5px] font-light text-[#5A5A5A] leading-[1.75] space-y-[8px]">
                  <p>Videosession. 6. session.</p>
                  <p>Arbejder fortsat med angst og undgåelse. Klienten siger: &ldquo;jeg bliver helt låst, når jeg skal tage toget&rdquo;.</p>
                  <div>
                    <p className="mb-[3px]">Siden sidst:</p>
                    <p>— Tog bussen to gange alene.<br />— Sprang togtur over tirsdag.<br />— Sov dårligt aftenen før.<br />— Bange for at få panik og ikke kunne komme væk.</p>
                  </div>
                  <p>Gennemgik eksponeringsplan. Talte om hvad der sker, når hun undgår. Hun kunne godt se, at det hjælper kortvarigt, men gør næste gang sværere.</p>
                  <p>Virkede træt, men samarbejdende. Blev berørt da hun talte om at føle sig &ldquo;barnlig&rdquo;. Ingen selvmordstanker, spurgt direkte.</p>
                  <div>
                    <p className="mb-[3px]">Aftale:</p>
                    <p>Tage toget én station sammen med veninde. Registrere angst 0-10 før, under og efter. Næste tid om 14 dage.</p>
                  </div>
                </div>
              </div>

              {/* Struktureret journaludkast */}
              <div className="px-[20px] py-[18px]">
                <div className="flex items-center gap-[8px] font-sans text-[9px] font-medium tracking-[0.12em] uppercase text-muted mb-[12px]">
                  Struktureret journaludkast
                  <span className="bg-evergreen/[0.08] text-evergreen text-[8px] tracking-[0.08em] px-[6px] py-[1px]">
                    Til godkendelse
                  </span>
                </div>
                <div className="font-sans text-[10.5px] font-light text-[#3A3A3A] leading-[1.7] space-y-[8px]">
                  <p>[DATO]. Sjette session. Videosession.</p>
                  <p>Fortsat behandling med fokus på angst og undgåelse. Klienten beskriver siden sidst at have taget bussen alene to gange, men sprang en planlagt togtur over tirsdag.</p>
                  <p>Klienten beskriver: &ldquo;jeg bliver helt låst, når jeg skal tage toget&rdquo;. Hun forbinder situationen med frygt for at få panik og ikke kunne komme væk. Hun beskriver desuden dårlig søvn aftenen før den planlagte eksponering.</p>
                  <p>Der blev gennemgået eksponeringsplan. Der blev arbejdet med, hvad der sker ved undgåelse, herunder klientens forståelse af, at undgåelse hjælper kortvarigt, men gør næste gang sværere.</p>
                  <p>Klienten fremstod træt, men samarbejdende. Hun blev berørt, da hun talte om at føle sig &ldquo;barnlig&rdquo;.</p>
                  <p>
                    Psykologen vurderer ingen aktuelle selvmordstanker, spurgt direkte.{" "}
                    <span
                      className="font-sans text-[9.5px] font-light"
                      style={{ background: "rgba(245,218,120,0.30)", color: "#7A6020", padding: "1px 5px" }}
                    >
                      MANGLER: samlet faglig vurdering af tilstand og progression
                    </span>
                  </p>
                  <p>Det blev aftalt, at klienten inden næste session tager toget én station sammen med en veninde og registrerer angst 0-10 før, under og efter. Næste session aftalt om 14 dage.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
