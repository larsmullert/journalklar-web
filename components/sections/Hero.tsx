export default function Hero() {
  return (
    <div className="pt-16 px-6 pb-14 md:pt-[100px] md:px-16 md:pb-[90px] relative">
      <div className="max-w-[1100px] mx-auto">

        <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-orange mb-[22px]">
          Til privatpraktiserende psykologer
        </div>

        <h1 className="mb-7 max-w-[720px]">
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
    </div>
  );
}
