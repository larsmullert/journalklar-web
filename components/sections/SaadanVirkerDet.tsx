import SectionLabel from "@/components/ui/SectionLabel";

const trin = [
  {
    num: "01",
    title: "Du skriver eller indtaler dine noter",
    text: "Observationer, temaer, interventioner, aftaler. Indtal eller skriv som psykolog og ikke som en sekretær — umiddelbart efter sessionen. Din faglighed er fundamentet.",
  },
  {
    num: "02",
    title: "JournalKlar strukturerer",
    text: "Dine noter omsættes til et struktureret journaludkast baseret på den nye BEK 1361/2025. Manglende oplysninger markeres tydeligt, så du aktivt tager stilling.",
  },
  {
    num: "03",
    title: "Du godkender",
    text: "Du læser igennem og overfører til dit eget journalsystem. Udkastet er altid et udkast. Du afgør hvad der bliver til journal.",
  },
];

export default function SaadanVirkerDet() {
  return (
    <section id="hvordan" className="py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Sådan virker det</SectionLabel>
        <h2>Tre trin. Ingen oplæring.</h2>
        <p className="max-w-[520px] text-[#505050]">
          Arbejdsgangen er designet til at passe ind i det, du allerede gør umiddelbart efter en session — ikke til at erstatte det.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 border border-sand">
          {trin.map(({ num, title, text }, i) => (
            <div
              key={num}
              className={`relative px-7 py-9 md:px-10 md:py-12 bg-white ${i < trin.length - 1 ? "border-b border-sand md:border-b-0 md:border-r md:after:content-['→'] md:after:absolute md:after:top-[50px] md:after:-right-[14px] md:after:text-[16px] md:after:text-muted-light md:after:z-[1]" : ""}`}
            >
              <div className="font-serif text-[52px] font-light text-evergreen opacity-[0.18] leading-none mb-[22px]">
                {num}
              </div>
              <div className="font-sans text-[15px] font-medium text-evergreen mb-[10px]">
                {title}
              </div>
              <p className="font-sans text-[14px] font-light text-[#565656] leading-[1.75] mb-0">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
