import SectionLabel from "@/components/ui/SectionLabel";

export default function Tillid() {
  return (
    <section id="om" className="py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Hvem står bag</SectionLabel>
        <h2>Bygget af en psykolog, til psykologer</h2>

        <div className="mt-12 max-w-[880px]">
          <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
            JournalKlar er grundlagt af Lars Mullert Pedersen, psykolog, uddannet fra Aalborg Universitet. Motivationen er klar: AI-værktøjer gør det nemt at sige &lsquo;godt nok&rsquo;, og det er et reelt problem, når det er den faglige efterbehandling der ofres. Ingen moralisering. Blot en bekymring, han har udviklet et bud på en løsning på.
          </p>
          <span className="font-serif italic text-[15px] text-evergreen block mb-6">
            Lars Mullert Pedersen, psykolog &amp; grundlægger
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
    </section>
  );
}
