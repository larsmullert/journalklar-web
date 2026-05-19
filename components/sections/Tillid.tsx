import SectionLabel from "@/components/ui/SectionLabel";

export default function Tillid() {
  return (
    <section className="py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Hvem står bag</SectionLabel>
        <h2>Bygget af en psykolog — til psykologer.</h2>

        <div className="mt-12 max-w-[880px]">
          <div>
            <p className="font-sans text-[16px] font-light text-[#484848] leading-[1.85] max-w-[580px] mb-5">
              JournalKlar er grundlagt af Lars Mullert Pedersen, psykolog (cand.psych., AAU). Motivationen er ikke kompliceret: jeg oplevede selv, at AI-værktøjer gør det nemt at sige &ldquo;godt nok&rdquo; — og at det er et reelt problem, når det er den faglige efterbehandling der ofres. Ingen moralisering over dem der bruger andre løsninger. Blot en bekymring, jeg har udviklet et bud på en løsning på.
            </p>
            <span className="font-serif italic text-[15px] text-evergreen block mb-6">
              — Lars Mullert Pedersen, Psykolog &amp; Grundlægger
            </span>
            <a
              href="/om"
              className="inline-flex items-center gap-[6px] text-evergreen font-sans text-[14px] font-normal border-b border-evergreen/20 pb-[2px] hover:border-evergreen transition-colors"
            >
              Læs mere om baggrunden
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
