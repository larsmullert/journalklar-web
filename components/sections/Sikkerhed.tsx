import SectionLabel from "@/components/ui/SectionLabel";

const promises = [
  { num: "1" },
  { num: "2" },
  { num: "3" },
  { num: "4" },
];

export default function Sikkerhed() {
  return (
    <section id="sikkerhed" className="py-[120px] px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>[PLACEHOLDER label]</SectionLabel>
        <h2>[PLACEHOLDER headline]</h2>
        <p className="max-w-[520px] text-[#505050] mb-0">
          [PLACEHOLDER — intro-sætning der rammesætter de fire løfter.]
        </p>

        <div className="grid grid-cols-[1fr_360px] mt-12 items-stretch">

          {/* Venstre: 4 løfter */}
          <div className="border border-sand border-r-0 bg-white">
            {promises.map(({ num }, i) => (
              <div
                key={num}
                className={`px-10 py-8 grid grid-cols-[36px_1fr] gap-5 items-start ${i < promises.length - 1 ? "border-b border-sand" : ""}`}
              >
                <div className="font-serif text-[30px] font-light text-evergreen opacity-[0.22] leading-[1.1]">
                  {num}
                </div>
                <div>
                  <div className="font-sans text-[15px] font-medium text-evergreen mb-[6px]">
                    [PLACEHOLDER løfte-titel]
                  </div>
                  <p className="font-sans text-[14px] font-light text-[#5A5A5A] leading-[1.7] mb-0">
                    [PLACEHOLDER — en-to sætninger der forklarer dette løfte konkret og uden forbehold.]
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Højre: Radikal transparens */}
          <div className="bg-evergreen px-10 py-12 flex flex-col">
            <div>
              <div className="flex items-center gap-[12px] font-sans text-[11px] font-medium tracking-[0.16em] uppercase text-parchment/40 mb-7 before:content-[''] before:block before:w-[18px] before:h-px before:bg-parchment/30 before:shrink-0">
                [PLACEHOLDER label]
              </div>
              <div className="font-serif text-[clamp(20px,1.8vw,24px)] font-normal text-parchment leading-[1.35] tracking-[-0.01em] mb-5">
                [PLACEHOLDER — titel på transparens-panelet]
              </div>
              <p className="font-sans text-[14px] font-light text-parchment/60 leading-[1.8] mb-0">
                [PLACEHOLDER — to-tre sætninger om åbenhed og dokumentation.]
              </p>
            </div>
            <div>
              <hr className="border-none border-t border-parchment/[0.12] my-8" />
              <a
                href="/sikkerhed"
                className="inline-flex items-center gap-[10px] text-parchment font-sans text-[13px] font-normal opacity-80 hover:opacity-100 transition-opacity tracking-[0.01em]"
              >
                <span className="w-[28px] h-[28px] border border-parchment/25 flex items-center justify-center flex-shrink-0 hover:border-parchment/60 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <line x1="1" y1="6" x2="11" y2="6" stroke="#F7F4EF" strokeWidth="1.3"/>
                    <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="#F7F4EF" strokeWidth="1.3" fill="none"/>
                  </svg>
                </span>
                [PLACEHOLDER link-tekst]
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
