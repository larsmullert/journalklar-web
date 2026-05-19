export default function Hero() {
  return (
    <div className="pt-[100px] px-16 pb-[90px] relative">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-20 items-center">

        {/* Venstre: Copy */}
        <div>
          <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-orange mb-[22px]">
            [PLACEHOLDER eyebrow]
          </div>

          <h1 className="mb-7">
            [PLACEHOLDER — første linje headline]
            <span className="italic text-evergreen/80"> [PLACEHOLDER — anden linje, eftertænksom]</span>
          </h1>

          <p className="font-sans text-[16px] font-light text-[#505050] max-w-[460px] leading-[1.75] mb-10">
            [PLACEHOLDER — to-tre sætninger. Rolig, præcis, faglig.]
          </p>

          <div className="flex items-center gap-9 flex-wrap mb-12">
            <a
              href="#"
              className="inline-flex items-center gap-[10px] bg-evergreen text-white font-sans text-[15px] font-normal px-[30px] py-[15px] hover:bg-[#152e23] transition-colors"
            >
              [PLACEHOLDER primær CTA]
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.3"/>
                <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="white" strokeWidth="1.3" fill="none"/>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-[6px] text-evergreen font-sans text-[14px] font-normal border-b border-evergreen/20 pb-[2px] hover:border-evergreen transition-colors"
            >
              [PLACEHOLDER sekundær link]
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.2"/>
                <polyline points="6,2 9,5 6,8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
            </a>
          </div>

          <div className="flex items-start gap-[10px] font-sans text-[13px] font-light text-muted max-w-[420px] leading-[1.6]">
            <svg className="flex-shrink-0 mt-[1px]" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M7.5 1.5L2.5 3.8V7.5C2.5 10.5 4.7 13.3 7.5 14C10.3 13.3 12.5 10.5 12.5 7.5V3.8L7.5 1.5Z" stroke="#1D3A2F" strokeWidth="1.2" fill="none"/>
              <polyline points="5,7.5 7,9.5 10,6" stroke="#1D3A2F" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            </svg>
            <span>[PLACEHOLDER trust marker — datasikkerhed, ingen optagelse]</span>
          </div>
        </div>

        {/* Højre: Produkt-preview */}
        <div>
          <div className="bg-white border border-[#D4D0CB] shadow-[0_2px_4px_rgba(29,58,47,0.04),0_12px_40px_rgba(29,58,47,0.07)]">

            {/* Topbar */}
            <div className="bg-[#EFECE7] border-b border-[#E0DDD8] px-[14px] py-[10px] flex items-center gap-[6px]">
              <div className="w-[9px] h-[9px] rounded-full bg-[#E0B9B9]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#DFDFB9]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#B9DFC0]" />
              <span className="ml-[10px] font-sans text-[11px] text-muted">[PLACEHOLDER tab-label]</span>
            </div>

            {/* Panels */}
            <div className="grid grid-cols-2">

              {/* Venstre panel: rånoter */}
              <div className="px-[22px] py-[24px] min-h-[220px] border-r border-[#F0EDE8]">
                <div className="font-sans text-[10px] font-medium tracking-[0.12em] uppercase text-muted mb-[14px]">
                  [PLACEHOLDER panel-titel]
                </div>
                <div className="font-sans text-[12px] font-light text-[#5A5A5A] leading-[1.75]">
                  <p>[PLACEHOLDER rånoter linje 1]</p>
                  <p>[PLACEHOLDER rånoter linje 2]</p>
                  <p>[PLACEHOLDER rånoter linje 3]</p>
                </div>
              </div>

              {/* Højre panel: journaludkast */}
              <div className="px-[22px] py-[24px] min-h-[220px]">
                <div className="font-sans text-[10px] font-medium tracking-[0.12em] uppercase text-muted mb-[14px]">
                  [PLACEHOLDER panel-titel]
                </div>

                <div className="mb-[14px]">
                  <div className="font-sans text-[9px] font-medium uppercase tracking-[0.1em] text-muted mb-[4px]">
                    [PLACEHOLDER felt-label]
                  </div>
                  <div className="font-sans text-[11.5px] font-light text-[#3A3A3A] leading-[1.6]">
                    [PLACEHOLDER felt-værdi]
                  </div>
                </div>

                <div className="mb-[14px]">
                  <div className="font-sans text-[9px] font-medium uppercase tracking-[0.1em] text-muted mb-[4px]">
                    [PLACEHOLDER felt-label]
                  </div>
                  <div className="font-sans text-[11.5px] font-light text-[#3A3A3A] leading-[1.6]">
                    [PLACEHOLDER felt-værdi]
                  </div>
                </div>

                {/* Mangler-markering */}
                <div className="border border-orange/[0.28] bg-orange/[0.04] px-[12px] py-[9px] mb-[12px]">
                  <div className="flex items-center gap-[5px] font-sans text-[9px] font-medium uppercase tracking-[0.08em] text-orange mb-[3px]">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                      <circle cx="4.5" cy="4.5" r="4" stroke="#E04500" strokeWidth="1"/>
                      <line x1="4.5" y1="2.5" x2="4.5" y2="5" stroke="#E04500" strokeWidth="1" strokeLinecap="round"/>
                      <circle cx="4.5" cy="6.5" r="0.6" fill="#E04500"/>
                    </svg>
                    [PLACEHOLDER mangler-label]
                  </div>
                  <div className="font-sans text-[10.5px] font-light text-[#6A6A6A]">
                    [PLACEHOLDER mangler-tekst]
                  </div>
                </div>

                <div className="mb-[14px]">
                  <div className="font-sans text-[9px] font-medium uppercase tracking-[0.1em] text-muted mb-[4px]">
                    [PLACEHOLDER felt-label]
                  </div>
                  <div className="font-sans text-[11.5px] font-light text-[#3A3A3A] leading-[1.6]">
                    [PLACEHOLDER felt-værdi]
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
