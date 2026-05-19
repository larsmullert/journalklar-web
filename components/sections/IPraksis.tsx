import SectionLabel from "@/components/ui/SectionLabel";

export default function IPraksis() {
  return (
    <div className="bg-sand py-[120px] px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>[PLACEHOLDER label]</SectionLabel>
        <h2>[PLACEHOLDER headline]</h2>
        <p className="max-w-[520px] text-[#505050]">
          [PLACEHOLDER — en-to sætninger der beskriver hvad illustrationen viser.]
        </p>

        {/* App-frame */}
        <div className="bg-white border border-[#D4D0CB] shadow-[0_4px_32px_rgba(29,58,47,0.06)] mt-10">

          {/* Topbar */}
          <div className="bg-[#EFECE7] border-b border-[#E0DDD8] px-4 py-[10px] flex items-center gap-[7px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#E0B9B9]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#DFDFB9]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#B9DFC0]" />
            <span className="ml-[10px] font-sans text-[12px] text-muted">[PLACEHOLDER tab-label]</span>
          </div>

          {/* Panels */}
          <div className="grid grid-cols-2">

            {/* Venstre: rånoter */}
            <div className="px-11 py-12 border-r border-[#F0EDE8]">
              <div className="flex items-center gap-[10px] font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-7">
                [PLACEHOLDER panel-titel]
              </div>
              <div className="font-sans text-[14px] font-light text-[#4A4A4A] leading-[1.8]">
                <p>[PLACEHOLDER — rånoter, første afsnit. Skriv som psykolog tænker umiddelbart efter session.]</p>
                <p>[PLACEHOLDER — andet afsnit med intervention og observationer.]</p>
                <p>[PLACEHOLDER — tredje afsnit med aftaler og plan.]</p>
              </div>
            </div>

            {/* Højre: journaludkast */}
            <div className="px-11 py-12">
              <div className="flex items-center gap-[10px] font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-7">
                [PLACEHOLDER panel-titel]
                <span className="bg-evergreen/[0.08] text-evergreen font-sans text-[9px] font-medium tracking-[0.1em] px-[8px] py-[2px]">
                  [PLACEHOLDER tag]
                </span>
              </div>

              <div className="mb-[22px]">
                <div className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-muted mb-[5px]">
                  [PLACEHOLDER felt-label]
                </div>
                <div className="font-sans text-[14px] font-light text-[#3A3A3A] leading-[1.65]">
                  [PLACEHOLDER felt-værdi]
                </div>
              </div>

              <div className="mb-[22px]">
                <div className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-muted mb-[5px]">
                  [PLACEHOLDER felt-label]
                </div>
                <div className="font-sans text-[14px] font-light text-[#3A3A3A] leading-[1.65]">
                  [PLACEHOLDER felt-værdi]
                </div>
              </div>

              {/* Mangler-blok */}
              <div className="border border-orange/25 bg-orange/[0.03] px-[18px] py-[14px] mb-[18px]">
                <div className="flex items-center gap-[7px] font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-orange mb-[5px]">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                    <circle cx="5.5" cy="5.5" r="5" stroke="#E04500" strokeWidth="1"/>
                    <line x1="5.5" y1="3" x2="5.5" y2="6.5" stroke="#E04500" strokeWidth="1.2" strokeLinecap="round"/>
                    <circle cx="5.5" cy="8.2" r="0.7" fill="#E04500"/>
                  </svg>
                  [PLACEHOLDER mangler-label]
                </div>
                <div className="font-sans text-[13px] font-light text-[#6A6A6A]">
                  [PLACEHOLDER — præcis beskrivelse af hvad der mangler psykologens stillingtagen.]
                </div>
              </div>

              <div className="mb-[22px]">
                <div className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-muted mb-[5px]">
                  [PLACEHOLDER felt-label]
                </div>
                <div className="font-sans text-[14px] font-light text-[#3A3A3A] leading-[1.65]">
                  [PLACEHOLDER felt-værdi]
                </div>
              </div>

            </div>
          </div>
        </div>

        <p className="font-sans text-[12px] text-muted mt-[22px] italic text-center">
          [PLACEHOLDER caption — note om at eksemplet er anonymiseret]
        </p>
      </div>
    </div>
  );
}
