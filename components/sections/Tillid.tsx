import SectionLabel from "@/components/ui/SectionLabel";

export default function Tillid() {
  return (
    <section className="py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Hvem står bag</SectionLabel>
        <h2>Bygget af en psykolog — til psykologer.</h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_280px] md:gap-14 items-start">

          {/* Venstre: founder-tekst */}
          <div>
            <p className="font-sans text-[16px] font-light text-[#484848] leading-[1.85] mb-5">
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

          {/* Højre: produkt-fakta */}
          <div className="bg-evergreen px-7 py-8">
            <div className="font-sans text-[10px] font-medium tracking-[0.16em] uppercase text-parchment/40 mb-5">
              Om produktet
            </div>
            <div className="flex flex-col gap-4">
              {[
                "Ingen sessionoptagelse",
                "Klientindhold gemmes ikke efter generering",
                "Databehandleraftale inkluderet",
                "AI-behandling inden for EU",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true" className="flex-shrink-0 mt-[3px]">
                    <polyline points="1.5,5.5 4,8 9.5,2.5" stroke="#B5CEC5" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-sans text-[13px] font-light text-parchment/85 leading-[1.55]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 pt-6 border-t border-parchment/15">
              <a
                href="/sikkerhed"
                className="inline-flex items-center gap-[6px] text-parchment font-sans text-[13px] font-normal border-b border-parchment/30 pb-[2px] hover:border-parchment transition-colors"
              >
                Se teknisk dokumentation
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.2"/>
                  <polyline points="6,2 9,5 6,8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
