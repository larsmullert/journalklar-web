import SectionLabel from "@/components/ui/SectionLabel";

const goer = [
  "Strukturerer dine noter",
  "Markerer mangler tydeligt",
  "Laver struktureret udkast",
  "Understøtter BEK 1361/2025",
  "Bevarer dit faglige workflow",
];

const goerIkke = [
  "Optager sessionen",
  "Transskriberer samtalen",
  "Vurderer klinisk relevans alene",
  "Gemmer journalnoter efter generering",
  "Erstatter din godkendelse",
];

export default function Afgrænsning() {
  return (
    <section className="py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Hvad JournalKlar er — og ikke er</SectionLabel>
        <h2>Et redskab. Ikke en autopilot.</h2>
        <p className="font-sans text-[15px] font-light text-[#505050] max-w-[560px] leading-[1.75] mt-4 mb-0">
          JournalKlar leverer strukturen. Du leverer indholdet. Outputtet hedder altid &ldquo;udkast&rdquo;. Hvad der bliver til journal, afgør du.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

          {/* Gør */}
          <div className="bg-evergreen p-10">
            <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-parchment/60 mb-6">
              Hvad JournalKlar gør
            </div>
            <div className="flex flex-col gap-5">
              {goer.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="flex-shrink-0 mt-[4px]" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <polyline points="2,7 5.5,10.5 12,4" stroke="#F7F4EF" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
                  </svg>
                  <span className="font-sans text-[16px] font-light text-parchment/90 leading-[1.6]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gør ikke */}
          <div className="bg-white border border-sand p-10">
            <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-6">
              Hvad JournalKlar ikke gør
            </div>
            <div className="flex flex-col gap-5">
              {goerIkke.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="flex-shrink-0 mt-[4px]" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <line x1="3.5" y1="3.5" x2="10.5" y2="10.5" stroke="#2C2C2C" strokeWidth="1.3" strokeOpacity="0.4" strokeLinecap="round"/>
                    <line x1="10.5" y1="3.5" x2="3.5" y2="10.5" stroke="#2C2C2C" strokeWidth="1.3" strokeOpacity="0.4" strokeLinecap="round"/>
                  </svg>
                  <span className="font-sans text-[16px] font-light text-graphite leading-[1.6]">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
