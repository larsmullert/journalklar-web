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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[80px] mt-12 items-start">

          {/* Venstre: evergreen statement */}
          <div className="bg-evergreen px-10 py-11">
            <p className="font-sans text-[15px] font-light text-parchment/72 leading-[1.75] mb-[14px]">
              JournalKlar leverer strukturen. Du leverer indholdet. Outputtet hedder altid &ldquo;udkast&rdquo;. Hvad der bliver til journal, afgør du.
            </p>
            <p className="font-sans text-[15px] font-light text-parchment/72 leading-[1.75] mb-0">
              En psykologs vurdering bygger ikke kun på ordene i rummet. Den bygger også på pauser, timing, kontakt, affekt, undgåelser, forskydninger og det kliniske blik for, hvad der faktisk betyder noget.
            </p>
          </div>

          {/* Højre: dash-lister */}
          <div>
            <div className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-orange mb-5">
              Hvad JournalKlar gør
            </div>
            <div className="flex flex-col gap-[10px] mb-10">
              {goer.map((item) => (
                <div key={item} className="flex items-start gap-3 font-sans text-[14px] font-light text-[#505050] leading-[1.7]">
                  <span className="text-muted-light flex-shrink-0">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-orange mb-5">
              Hvad JournalKlar ikke gør
            </div>
            <div className="flex flex-col gap-[10px]">
              {goerIkke.map((item) => (
                <div key={item} className="flex items-start gap-3 font-sans text-[14px] font-light text-[#505050] leading-[1.7]">
                  <span className="text-muted-light flex-shrink-0">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
