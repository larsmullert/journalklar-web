import SectionLabel from "@/components/ui/SectionLabel";

const promises = [
  {
    num: "1",
    title: "Vi gemmer ikke dine journalnoter efter generering",
    text: "Dine noter behandles kun for at generere journaludkastet. Når behandlingen er afsluttet, gemmes indholdet ikke i JournalKlar.",
  },
  {
    num: "2",
    title: "AI'en lærer ikke af dine klienter",
    text: "Den AI-model der genererer dine udkast, bruger ikke dit input til træning. Det er forskellen på JournalKlar og en åben tilgængelig AI-chat.",
  },
  {
    num: "3",
    title: "Dansk server i Skanderborg",
    text: "Appen og databasen kører på dansk server i Skanderborg. AI-behandlingen sker gennem AWS i Frankfurt — inden for EU.",
  },
  {
    num: "4",
    title: "Overblik gennem databehandleraftalen",
    text: "Databehandleraftalen er inkluderet fra dag ét. Den beskriver præcist hvad der behandles, af hvem, hvor og på hvilket grundlag. Du kan vise den til din fagforening eller den, du samarbejder med om GDPR.",
  },
];

export default function Sikkerhed() {
  return (
    <section id="sikkerhed" className="bg-evergreen py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Data og fortrolighed</SectionLabel>
        <h2 className="text-parchment">Dine klienters fortrolighed forbliver fortrolig.</h2>
        <p className="max-w-[520px] text-parchment/90 mb-0">
          Det er det eneste der reelt betyder noget. Her er fire ting du bør vide — på almindeligt dansk.
        </p>

        {/* Dataflow */}
        <div className="mt-10 mb-2 overflow-x-auto">
          <div className="flex items-center min-w-max">
            {[
              "app.journalklar.dk (Skanderborg)",
              "Dine noter",
              "AI-behandling (Frankfurt)",
              "Journaludkast",
              "Intet gemmes",
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center">
                <div className="border border-sand bg-white px-4 py-[9px] font-sans text-[12px] font-light text-evergreen whitespace-nowrap">
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <div className="px-3 font-sans text-[14px] text-parchment/70 select-none">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-6 mt-12 items-stretch">

          {/* Venstre: 4 løfter */}
          <div className="border border-sand bg-white">
            {promises.map(({ num, title, text }, i) => (
              <div
                key={num}
                className={`p-6 md:p-8 grid grid-cols-[36px_1fr] gap-5 items-start ${i < promises.length - 1 ? "border-b border-sand" : ""}`}
              >
                <div className="font-serif text-[30px] font-light text-evergreen opacity-[0.22] leading-[1.1]">
                  {num}
                </div>
                <div>
                  <div className="font-sans text-[15px] font-normal text-evergreen mb-[6px]">
                    {title}
                  </div>
                  <p className="font-sans text-[14px] font-light text-body leading-[1.7] mb-0">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Højre: Radikal transparens */}
          <div className="bg-evergreen p-6 md:p-8 flex flex-col">
            <div>
              <div className="flex items-center gap-[12px] font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-7 before:content-[''] before:block before:w-[18px] before:h-px before:bg-parchment/70 before:shrink-0">
                Radikal transparens
              </div>
              <div className="font-serif text-[clamp(20px,1.8vw,24px)] font-normal text-parchment leading-[1.35] tracking-[-0.01em] mb-5">
                Vi skjuler ingenting om, hvordan det virker.
              </div>
              <p className="font-sans text-[14px] font-light text-parchment/90 leading-[1.8] mb-0">
                Serverplacering, kryptering, underleverandører, datastrømme, journaliseringskrav — alt er dokumenteret og tilgængeligt. Ikke fordi vi er nødt til det. Men fordi du har ret til at vide det.
              </p>
            </div>
            <div>
              <hr className="border-none border-t border-parchment/[0.12] my-8" />
              <a
                href="/sikkerhed"
                className="inline-flex items-center gap-[10px] text-parchment font-sans text-[13px] font-normal opacity-80 hover:opacity-100 transition-opacity"
              >
                <span className="w-[28px] h-[28px] border border-parchment/25 flex items-center justify-center flex-shrink-0 hover:border-parchment/60 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <line x1="1" y1="6" x2="11" y2="6" stroke="#F7F4EF" strokeWidth="1.3"/>
                    <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="#F7F4EF" strokeWidth="1.3" fill="none"/>
                  </svg>
                </span>
                Læs den fulde tekniske gennemgang
              </a>
              <a
                href="/databehandleraftale"
                className="inline-flex items-center gap-[10px] text-parchment font-sans text-[13px] font-normal opacity-80 hover:opacity-100 transition-opacity mt-4"
              >
                <span className="w-[28px] h-[28px] border border-parchment/25 flex items-center justify-center flex-shrink-0 hover:border-parchment/60 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <line x1="1" y1="6" x2="11" y2="6" stroke="#F7F4EF" strokeWidth="1.3"/>
                    <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="#F7F4EF" strokeWidth="1.3" fill="none"/>
                  </svg>
                </span>
                Hent databehandleraftale (PDF)
              </a>
              <div className="border-t border-parchment/20 mt-6 pt-6">
                <p className="font-serif italic text-parchment/90 leading-[1.7] mb-3">
                  &ldquo;Det her er vores forsøg på at gøre det ordentligt. Vi håber det mærkes.&rdquo;
                </p>
                <span className="font-sans text-[13px] text-parchment/70">
                  — Lars Mullert, grundlægger af JournalKlar
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
