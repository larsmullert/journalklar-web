import SectionLabel from "@/components/ui/SectionLabel";

export default function Tillid() {
  return (
    <section className="py-[120px] px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>[PLACEHOLDER label]</SectionLabel>
        <h2>[PLACEHOLDER headline]</h2>

        <div className="mt-12 grid grid-cols-[1fr_auto] gap-20 items-end max-w-[880px]">
          <div>
            <p className="font-sans text-[16px] font-light text-[#484848] leading-[1.85] max-w-[580px] mb-5">
              [PLACEHOLDER — to-tre afsnit om baggrunden for produktet. Første person, ærlig tone.]
            </p>
            <p className="font-sans text-[16px] font-light text-[#484848] leading-[1.85] max-w-[580px] mb-5">
              [PLACEHOLDER — andet afsnit.]
            </p>
            <span className="font-serif italic text-[15px] text-evergreen block mb-6">
              — [PLACEHOLDER navn og titel]
            </span>
            <a
              href="/om"
              className="inline-flex items-center gap-[6px] text-evergreen font-sans text-[14px] font-normal border-b border-evergreen/20 pb-[2px] hover:border-evergreen transition-colors"
            >
              [PLACEHOLDER link-tekst]
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.2"/>
                <polyline points="6,2 9,5 6,8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
