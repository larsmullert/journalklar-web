import SectionLabel from "@/components/ui/SectionLabel";

const trin = [
  { num: "01" },
  { num: "02" },
  { num: "03" },
];

export default function SaadanVirkerDet() {
  return (
    <section id="hvordan" className="py-[120px] px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>[PLACEHOLDER label]</SectionLabel>
        <h2>[PLACEHOLDER headline]</h2>
        <p className="max-w-[520px] text-[#505050]">
          [PLACEHOLDER — en-to sætninger der forklarer den overordnede arbejdsgang.]
        </p>

        <div className="grid grid-cols-3 mt-12 border border-sand">
          {trin.map(({ num }, i) => (
            <div
              key={num}
              className={`relative px-10 py-12 bg-white ${i < trin.length - 1 ? "border-r border-sand after:content-['→'] after:absolute after:top-[50px] after:-right-[14px] after:text-[16px] after:text-muted-light after:z-[1]" : ""}`}
            >
              <div className="font-serif text-[52px] font-light text-evergreen opacity-[0.18] leading-none mb-[22px]">
                {num}
              </div>
              <div className="font-sans text-[15px] font-medium text-evergreen mb-[10px]">
                [PLACEHOLDER trin-titel]
              </div>
              <p className="font-sans text-[14px] font-light text-[#565656] leading-[1.75] mb-0">
                [PLACEHOLDER — beskrivelse af dette trin i arbejdsgangen.]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
