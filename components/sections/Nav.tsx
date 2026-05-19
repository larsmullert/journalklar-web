export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-parchment border-b border-sand">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16 h-14 md:h-16 flex items-center justify-between">
        <a href="/" className="font-serif text-evergreen text-xl tracking-tight">
          [PLACEHOLDER logo]
        </a>

        <ul className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-graphite">
          <li><a href="#" className="hover:text-evergreen transition-colors">[PLACEHOLDER]</a></li>
          <li><a href="#" className="hover:text-evergreen transition-colors">[PLACEHOLDER]</a></li>
          <li><a href="#" className="hover:text-evergreen transition-colors">[PLACEHOLDER]</a></li>
        </ul>

        <a
          href="#"
          className="font-sans font-medium text-sm text-evergreen underline underline-offset-4"
        >
          [PLACEHOLDER CTA]
        </a>
      </div>
    </nav>
  );
}
