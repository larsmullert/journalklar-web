export default function Nav() {
  return (
    <nav className="sticky top-0 z-[500] bg-parchment/[0.94] backdrop-blur-[14px] border-b border-sand">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16 py-5 flex items-center justify-between">

        <a href="/" className="font-serif text-evergreen text-[21px] font-normal tracking-[-0.02em]">
          <span>JournalKla<span style={{ color: "#E04500" }}>r</span></span>
        </a>

        <div className="flex items-center gap-6 md:gap-9">
          <a href="/tilgang" className="hidden md:block font-sans text-[14px] font-normal text-evergreen hover:text-evergreen transition-colors">
            Tilgang
          </a>
          <a href="/sikkerhed" className="hidden md:block font-sans text-[14px] font-normal text-evergreen hover:text-evergreen transition-colors">
            Sikkerhed
          </a>
          <a href="/om" className="hidden md:block font-sans text-[14px] font-normal text-evergreen hover:text-evergreen transition-colors">
            Bag om
          </a>
          <a
            href="/#pris"
            className="inline-flex items-center bg-evergreen text-white font-sans text-[15px] font-normal px-[18px] py-[10px] hover:bg-[#152e23] transition-colors"
          >
            Start prøveperiode
          </a>
        </div>

      </div>
    </nav>
  );
}
