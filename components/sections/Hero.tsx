export default function Hero() {
  return (
    <div className="pt-16 px-6 pb-14 md:pt-[100px] md:px-16 md:pb-[90px]">
      <div className="max-w-[1100px] mx-auto">

        {/* Sektion 1 — Tekst */}
        <div className="mb-12">
          <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-orange mb-[22px]">
            Til privatpraktiserende psykologer
          </div>

          <h1 className="mb-7">
            Du vurderer. Du selekterer. Du skriver dine noter.<br />
            <span className="italic text-evergreen/80">JournalKlar strukturerer dem efter journalføringskravene.</span>
          </h1>

          <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.75] mb-10">
            Ingen optagelse af sessionen. Ingen tredjepart i det fortrolige rum.
          </p>

          <a
            href="#hvordan"
            className="inline-flex items-center gap-[6px] text-evergreen font-sans text-[14px] font-normal border-b border-evergreen/20 pb-[2px] hover:border-evergreen transition-colors"
          >
            Se hvordan det virker →
          </a>
        </div>

        {/* Sektion 2 — Afskåret app-preview */}
        <div className="relative max-h-[240px] md:max-h-[320px] overflow-hidden border border-sand rounded-t-lg mb-10">

          {/* Topbar */}
          <div className="bg-[#EFECE7] border-b border-[#E0DDD8] px-4 py-[10px] flex items-center gap-[7px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#E0B9B9]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#DFDFB9]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#B9DFC0]" />
            <span className="ml-[10px] font-sans text-[12px] text-muted">JournalKlar — Eksempelsession · Opfølgningssamtale</span>
          </div>

          {/* Journaludkast-panel */}
          <div className="bg-white px-6 py-8 md:px-11 md:py-12">
            <div className="flex items-center gap-[10px] font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-7">
              Journaludkast
              <span className="bg-evergreen/[0.08] text-evergreen font-sans text-[9px] font-medium tracking-[0.1em] px-[8px] py-[2px]">
                Til godkendelse
              </span>
            </div>

            <div className="mb-[22px]">
              <div className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-muted mb-[5px]">
                Psykisk tilstand
              </div>
              <div className="font-sans text-[14px] font-light text-[#3A3A3A] leading-[1.65]">
                Patienten fremstår mere afklaret end ved foregående session. Oplyser om bedret søvn. Beskriver øget evne til at rumme konflikt med søskende uden tidligere undgåelsesreaktion.
              </div>
            </div>

            <div className="mb-[22px]">
              <div className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-muted mb-[5px]">
                Intervention
              </div>
              <div className="font-sans text-[14px] font-light text-[#3A3A3A] leading-[1.65]">
                Kognitiv adfærdsterapi. Arbejde med eksponeringshierarki, trin 3. Patienten er behandlingsmotiveret men udtrykker ambivalens over for kommende trin.
              </div>
            </div>

            {/* Mangler-blok */}
            <div className="border border-orange/25 bg-orange/[0.03] px-[18px] py-[14px]">
              <div className="flex items-center gap-[7px] font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-orange mb-[5px]">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                  <circle cx="5.5" cy="5.5" r="5" stroke="#E04500" strokeWidth="1"/>
                  <line x1="5.5" y1="3" x2="5.5" y2="6.5" stroke="#E04500" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="5.5" cy="8.2" r="0.7" fill="#E04500"/>
                </svg>
                Mangler — kræver stillingtagen
              </div>
              <div className="font-sans text-[13px] font-light text-[#6A6A6A]">
                Konsultationsform er ikke angivet. Angiv om sessionen er gennemført ved fysisk fremmøde, telefon eller video.
              </div>
            </div>
          </div>

          {/* Gradient-afskæring */}
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-parchment to-transparent pointer-events-none" />
        </div>

        {/* Sektion 3 — Trust strip */}
        <div className="border-t border-sand pt-6 text-center">
          <p className="font-sans text-[11px] md:text-[13px] font-light text-graphite/60">
            Ingen optagelse · Ingen AI-træning · Altid et udkast
          </p>
        </div>

      </div>
    </div>
  );
}
