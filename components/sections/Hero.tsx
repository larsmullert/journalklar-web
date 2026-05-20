export default function Hero() {
  return (
    <div className="pt-16 px-6 pb-14 md:pt-[100px] md:px-16 md:pb-[90px] relative">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Venstre: Copy */}
        <div>
          <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-orange mb-[22px]">
            Til privatpraktiserende psykologer
          </div>

          <h1 className="mb-7">
            Du vurderer. Du selekterer. Du skriver dine noter.
            <span className="italic text-evergreen/80"> JournalKlar strukturerer dem efter journalføringskravene.</span>
          </h1>

          <p className="font-sans text-[16px] font-light text-[#505050] max-w-[520px] leading-[1.75] mb-10">
            Ingen optagelse af sessionen. Ingen tredjepart i det fortrolige rum.
          </p>

          <div className="flex items-center gap-9 flex-wrap mb-12">
            <a
              href="#hvordan"
              className="inline-flex items-center gap-[6px] text-evergreen font-sans text-[14px] font-normal border-b border-evergreen/20 pb-[2px] hover:border-evergreen transition-colors"
            >
              Se hvordan det virker →
            </a>
          </div>

          <div className="flex items-start gap-[10px] font-sans text-[13px] font-light text-[#505050] max-w-[420px] leading-[1.6]">
            <svg className="flex-shrink-0 mt-[1px]" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M7.5 1.5L2.5 3.8V7.5C2.5 10.5 4.7 13.3 7.5 14C10.3 13.3 12.5 10.5 12.5 7.5V3.8L7.5 1.5Z" stroke="#1D3A2F" strokeWidth="1.2" fill="none"/>
              <polyline points="5,7.5 7,9.5 10,6" stroke="#1D3A2F" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            </svg>
            <span>Ingen lydoptagelser. Ingen AI-træning på dit input. Journalnoter gemmes ikke i JournalKlar efter generering.</span>
          </div>
        </div>

        {/* Højre: Kort */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-evergreen w-full md:max-w-[380px] max-h-[220px] md:max-h-[280px] self-center p-8 flex flex-col justify-between overflow-hidden">

            {/* UI-fragment: Mangler-blok */}
            <div className="border-l-2 border-orange bg-white/5 pl-4 pr-3 py-3">
              <div className="flex items-center gap-[5px] font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-orange mb-[6px]">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                  <circle cx="4.5" cy="4.5" r="4" stroke="#E04500" strokeWidth="1"/>
                  <line x1="4.5" y1="2.5" x2="4.5" y2="5" stroke="#E04500" strokeWidth="1" strokeLinecap="round"/>
                  <circle cx="4.5" cy="6.5" r="0.6" fill="#E04500"/>
                </svg>
                Mangler — kræver stillingtagen
              </div>
              <div className="font-sans text-[12px] font-light text-white/60 leading-[1.6]">
                Konsultationsform ikke angivet (fremmøde, telefon eller video).
              </div>
            </div>

            {/* Skillelinje */}
            <div className="border-t border-evergreen/30 my-6" />

            {/* Tagline */}
            <p className="font-serif text-[22px] font-normal italic text-white leading-snug">
              Dine noter. Vores struktur.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
