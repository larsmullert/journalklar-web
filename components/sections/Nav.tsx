export default function Nav() {
  return (
    <nav className="sticky top-0 z-[500] bg-parchment/[0.94] backdrop-blur-[14px] border-b border-sand">
      <div className="max-w-[1100px] mx-auto px-16 py-5 flex items-center justify-between">

        <a href="/" className="font-serif text-evergreen text-[21px] font-normal tracking-[-0.02em]">
          [PLACEHOLDER logo]
        </a>

        <div className="flex items-center gap-10">
          <a href="#" className="font-sans text-[14px] font-light text-graphite hover:text-evergreen transition-colors">
            [PLACEHOLDER]
          </a>
          <a href="#" className="font-sans text-[14px] font-light text-graphite hover:text-evergreen transition-colors">
            [PLACEHOLDER]
          </a>
          <a href="#" className="font-sans text-[14px] font-light text-graphite hover:text-evergreen transition-colors">
            [PLACEHOLDER]
          </a>
          <a
            href="#"
            className="font-sans text-[14px] font-normal text-evergreen border-b-[1.5px] border-evergreen pb-[1px]"
          >
            [PLACEHOLDER CTA]
          </a>
        </div>

      </div>
    </nav>
  );
}
