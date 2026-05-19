export default function Hero() {
  return (
    <section className="bg-parchment py-24 px-16">
      <div className="max-w-[1100px] mx-auto">
        <p className="font-sans font-medium text-[11px] tracking-[0.14em] uppercase text-evergreen mb-6">
          [PLACEHOLDER section label]
        </p>

        <h1 className="text-evergreen max-w-3xl mb-6">
          [PLACEHOLDER — primær headline til psykologen]
        </h1>

        <p className="font-sans font-light text-graphite text-[17px] leading-relaxed max-w-xl mb-4">
          [PLACEHOLDER — to-tre sætninger der forklarer kerneværdien. Rolig, præcis, faglig tone.]
        </p>

        <p className="font-sans text-[13px] text-evergreen/70 mb-10">
          [PLACEHOLDER trust marker — fx lovgrundlag eller datasikkerhed]
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="bg-orange text-parchment font-sans font-medium text-sm px-6 py-3"
          >
            [PLACEHOLDER primær CTA]
          </a>
          <a
            href="#"
            className="font-sans font-medium text-sm text-evergreen underline underline-offset-4"
          >
            [PLACEHOLDER sekundær link]
          </a>
        </div>
      </div>
    </section>
  );
}
