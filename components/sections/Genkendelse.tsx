import SectionLabel from "@/components/ui/SectionLabel";

const problemer = [
  {
    titel: "Nye krav. Samme travle praksis.",
    tekst: "Journalen skal være mere præcis, dækkende og systematisk. Men tiden efter sessionen er stadig kort, hovedet er stadig fyldt, og næste klient venter ofte lige om lidt.",
  },
  {
    titel: "AI kan hjælpe — men ikke overtage.",
    tekst: "Mange psykologer kan godt se værdien i et journalværktøj. Problemet opstår, når værktøjet begynder med en fuld optagelse og lader en black-box afgøre, hvad der var vigtigt i samtalen.",
  },
  {
    titel: "Det vigtigste kan ikke altid transskriberes.",
    tekst: "En psykologs vurdering bygger ikke kun på ordene i rummet. Den bygger også på pauser, timing, kontakt, affekt, undgåelser, forskydninger og det kliniske blik for, hvad der faktisk betyder noget.",
  },
];

export default function Genkendelse() {
  return (
    <section className="py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Problemet</SectionLabel>
        <h2 className="max-w-[660px]">Journalføringen er blevet mere krævende. Ikke mindre faglig.</h2>
        <p className="max-w-[780px] text-[#505050] mb-0">
          Den nye journalføringsbekendtgørelse stiller skarpere krav til, hvad der skal fremgå af journalen. Samtidig mangler mange psykologer stadig en tydelig psykologfaglig praksis for, hvordan kravene omsættes i hverdagen. JournalKlar er bygget til netop det mellemrum: mere struktur — uden at flytte det faglige skøn væk fra psykologen.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          {problemer.map(({ titel, tekst }, i) => (
            <div key={titel} className="border-t-2 border-evergreen/20 pt-7">
              <div className="font-serif text-[28px] font-light text-evergreen/20 leading-none mb-5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="font-sans text-[15px] font-medium text-evergreen mb-3">
                {titel}
              </p>
              <p className="font-sans text-[14px] font-light text-[#505050] leading-[1.75] mb-0">
                {tekst}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
