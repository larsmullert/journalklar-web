export default function Nav() {
  return (
    <nav className="sticky top-0 z-[500] bg-parchment/[0.94] backdrop-blur-[14px] border-b border-sand">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16 py-5 flex items-center justify-between">

        <a href="/" className="font-serif text-evergreen text-[21px] font-normal tracking-[-0.02em]">
          JournalKlar
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          <a href="#hvordan" className="hidden md:block font-sans text-[14px] font-normal text-graphite hover:text-evergreen transition-colors">
            Sådan virker det
          </a>
          <a href="#sikkerhed" className="hidden md:block font-sans text-[14px] font-normal text-graphite hover:text-evergreen transition-colors">
            Sikkerhed
          </a>
          <a
            href="#pris"
            className="font-sans text-[14px] font-normal text-evergreen border-b-[1.5px] border-evergreen pb-[1px]"
          >
            Start prøveperiode
          </a>
        </div>

      </div>
    </nav>
  );
}
