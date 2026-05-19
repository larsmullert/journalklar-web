import SectionLabel from "@/components/ui/SectionLabel";

const tags = [
  "Ingen sessionoptagelse",
  "Ingen tredjepart i rummet",
  "Faglig selektion bevaret",
  "Altid et udkast",
  "Du godkender altid",
];

export default function Afgrænsning() {
  return (
    <section className="py-[120px] px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Hvad JournalKlar er — og ikke er</SectionLabel>
        <h2>Et redskab. Ikke en autopilot.</h2>

        <div className="grid grid-cols-2 gap-20 mt-12 items-start">

          {/* Venstre: evergreen statement-boks */}
          <div className="bg-evergreen px-10 py-11">
            <div className="font-serif text-[20px] font-normal text-parchment/90 mb-5 tracking-[-0.01em]">
              Ingen optagelse. Dit faglige skøn intakt.
            </div>
            <p className="font-sans text-[15px] font-light text-parchment/[0.72] leading-[1.75] mb-[14px]">
              JournalKlar optager ikke dine sessioner. Transskriberer ikke. Lytter ikke. Det er et bevidst valg.
            </p>
            <p className="font-sans text-[15px] font-light text-parchment/[0.72] leading-[1.75] mb-[14px]">
              Den faglige selektion — hvad der inkluderes i journalen, og hvad der udelades — er ikke administration. Det er en del af det kliniske arbejde. Det ansvaret forbliver hos dig.
            </p>
            <p className="font-sans text-[15px] font-light text-parchment/[0.72] leading-[1.75] mb-[14px]">
              Med de nyeste løsninger er journalen færdig inden klienten er ude af døren. Det forstår vi godt er tiltrækkende. Men den faglige selektion er ikke noget, der bør foretages af en AI ud fra en fuld optagelse af det, der er sagt. Det er et spørgsmål om, hvem der egentlig laver det faglige arbejde.
            </p>
            <p className="font-sans text-[15px] font-light text-parchment/[0.72] leading-[1.75] mb-0">
              JournalKlar leverer strukturen. Du leverer indholdet.
            </p>
          </div>

          {/* Højre: detaljer og tags */}
          <div>
            <p className="font-sans text-[15px] font-light text-[#505050] leading-[1.8] mb-[14px]">
              JournalKlar erstatter ikke din faglige vurdering. Det producerer ikke journaler, der er klar til at kopiere ind. Og det tager ikke beslutninger på dine vegne.
            </p>
            <p className="font-sans text-[15px] font-light text-[#505050] leading-[1.8] mb-[14px]">
              Det gør én ting: hjælper dig fra dine egne noter til et struktureret udkast, der dækker det der skal med — og markerer tydeligt det der mangler.
            </p>
            <p className="font-sans text-[14px] font-light text-muted leading-[1.8] mb-0">
              Outputtet hedder altid &ldquo;udkast&rdquo;. Hvad der bliver til journal, afgør du.
            </p>

            <div className="flex flex-wrap gap-2 mt-7">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-evergreen/20 py-[7px] px-[15px] font-sans text-[12px] text-evergreen font-normal tracking-[0.02em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
