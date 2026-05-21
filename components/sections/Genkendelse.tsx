import SectionLabel from "@/components/ui/SectionLabel";

const problemer = [
  {
    label: "Nye krav. Samme travle praksis.",
    tekst: "Journalen skal være mere præcis, dækkende og systematisk. Men tiden efter sessionen er stadig kort, hovedet er stadig fyldt, og næste klient venter ofte lige om lidt.",
  },
  {
    label: "AI kan hjælpe — men ikke overtage.",
    tekst: "Mange psykologer kan godt se værdien i et journalværktøj. Problemet opstår, når værktøjet begynder med en fuld optagelse og lader en black-box afgøre, hvad der var vigtigt i samtalen.",
  },
  {
    label: "Det vigtigste kan ikke altid transskriberes.",
    tekst: "En psykologs vurdering bygger ikke kun på ordene i rummet. Den bygger også på pauser, timing, kontakt, affekt, undgåelser, forskydninger og det kliniske blik for, hvad der faktisk betyder noget.",
  },
];

export default function Genkendelse() {
  return (
    <section className="py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Problemet</SectionLabel>
        <h2 className="max-w-[660px]">Journalføringen er blevet mere krævende. Ikke mindre faglig.</h2>
        <p className="max-w-[780px] text-body mb-0">
          Den nye journalføringsbekendtgørelse stiller skarpere krav til, hvad der skal fremgå af journalen. Samtidig mangler mange psykologer stadig en tydelig psykologfaglig praksis for, hvordan kravene omsættes i hverdagen. JournalKlar er bygget til netop det mellemrum: mere struktur — uden at flytte det faglige skøn væk fra psykologen.
        </p>

        <div className="mt-14 max-w-[780px]">
          {problemer.map(({ label, tekst }, i) => (
            <div key={label} className={`py-9 ${i < problemer.length - 1 ? "border-b border-sand" : ""}`}>
              <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-4">
                {label}
              </div>
              <p className="font-sans text-[15px] font-light text-body leading-[1.75] mb-0">
                {tekst}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
