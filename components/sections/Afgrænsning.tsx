import SectionLabel from "@/components/ui/SectionLabel";

const tags = [1, 2, 3, 4, 5];

export default function Afgrænsning() {
  return (
    <section className="py-[120px] px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>[PLACEHOLDER label]</SectionLabel>
        <h2>[PLACEHOLDER headline]</h2>

        <div className="grid grid-cols-2 gap-20 mt-12 items-start">

          {/* Venstre: evergreen statement-boks */}
          <div className="bg-evergreen px-10 py-11">
            <div className="font-serif text-[20px] font-normal text-parchment/90 mb-5 tracking-[-0.01em]">
              [PLACEHOLDER — titel på statement]
            </div>
            <p className="font-sans text-[15px] font-light text-parchment/[0.72] leading-[1.75] mb-[14px]">
              [PLACEHOLDER — første afsnit i statement-boksen.]
            </p>
            <p className="font-sans text-[15px] font-light text-parchment/[0.72] leading-[1.75] mb-[14px]">
              [PLACEHOLDER — andet afsnit.]
            </p>
            <p className="font-sans text-[15px] font-light text-parchment/[0.72] leading-[1.75] mb-0">
              [PLACEHOLDER — tredje afsnit, konklusion.]
            </p>
          </div>

          {/* Højre: detaljer og tags */}
          <div>
            <p className="font-sans text-[15px] font-light text-[#505050] leading-[1.8] mb-[14px]">
              [PLACEHOLDER — første afsnit der uddyber afgrænsningen.]
            </p>
            <p className="font-sans text-[15px] font-light text-[#505050] leading-[1.8] mb-[14px]">
              [PLACEHOLDER — andet afsnit.]
            </p>
            <p className="font-sans text-[14px] font-light text-muted leading-[1.8] mb-0">
              [PLACEHOLDER — afsluttende bemærkning i dæmpet tone.]
            </p>

            <div className="flex flex-wrap gap-2 mt-7">
              {tags.map((t) => (
                <span
                  key={t}
                  className="border border-evergreen/20 py-[7px] px-[15px] font-sans text-[12px] text-evergreen font-normal tracking-[0.02em]"
                >
                  [PLACEHOLDER tag {t}]
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
