export default function Hero() {
  return (
    <section className="bg-parchment py-16 px-6 md:py-24 md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-evergreen max-w-[680px] mb-6">
          [PLACEHOLDER — primær headline til psykologen]
        </h1>

        <p className="font-sans font-light text-graphite text-[17px] leading-relaxed max-w-xl mb-4">
          [PLACEHOLDER — to-tre sætninger der forklarer kerneværdien. Rolig, præcis, faglig tone.]
        </p>

        <p className="font-sans text-[13px] text-evergreen/70 mb-10">
          [PLACEHOLDER trust marker — fx lovgrundlag eller datasikkerhed]
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <a
            href="#"
            className="bg-orange text-parchment font-sans font-medium text-sm px-6 py-3 w-full sm:w-auto text-center"
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
