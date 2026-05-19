import SectionLabel from "@/components/ui/SectionLabel";

export default function Genkendelse() {
  return (
    <section className="py-[120px] px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>[PLACEHOLDER label]</SectionLabel>
        <h2 className="max-w-[660px]">[PLACEHOLDER headline]</h2>
        <p className="max-w-[520px] text-[#505050] mb-0">
          [PLACEHOLDER — intro-sætning der sætter konteksten for problemet.]
        </p>

        <div className="grid grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-t-2 border-sand pt-6">
              <p className="font-sans text-[15px] font-medium text-evergreen mb-2">
                [PLACEHOLDER — problemtitel {i}]
              </p>
              <p className="font-sans text-[14px] font-light text-[#505050] leading-[1.75] mb-0">
                [PLACEHOLDER — beskrivelse af det konkrete problem psykologen genkender.]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
