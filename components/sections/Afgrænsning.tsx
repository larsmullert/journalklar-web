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
        <h2>Et værktøj, ikke en autopilot.</h2>

        <div className="mt-6 max-w-[620px]">
          <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-5">
            Du leverer indholdet. JournalKlar leverer strukturen.
            Det er altid et udkast.
          </p>
          <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-5">
            Der er mange ting, der ikke fanges af en AI-tale-til-tekst-transkription.
          </p>
          <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85]">
            Det er kun dig, der kan og skal vurdere sessionen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-stretch">

          {/* Venstre: evergreen */}
          <div className="bg-evergreen p-10">
            <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-6">
              Hvad JournalKlar gør
            </div>
            <div className="flex flex-col gap-[12px]">
              {goer.map((item) => (
                <div key={item} className="flex items-start gap-3 font-sans text-[14px] font-normal text-parchment/90 leading-[1.7]">
                  <span className="text-parchment/50 flex-shrink-0">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Højre: parchment */}
          <div className="bg-parchment border border-sand p-10">
            <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-6">
              Hvad JournalKlar ikke gør
            </div>
            <div className="flex flex-col gap-[12px]">
              {goerIkke.map((item) => (
                <div key={item} className="flex items-start gap-3 font-sans text-[14px] font-normal text-graphite leading-[1.7]">
                  <span className="text-[#A09890] flex-shrink-0">—</span>
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
