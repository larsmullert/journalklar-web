const links = [
  { label: "Om JournalKlar", href: "/om" },
  { label: "Tilgang", href: "/tilgang" },
  { label: "Privatlivspolitik", href: "#" },
  { label: "Databehandleraftale", href: "#" },
  { label: "Sikkerhed", href: "/sikkerhed" },
  { label: "Kontakt", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand py-10 px-6 md:py-[52px] md:px-16 bg-parchment">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:gap-16 items-start">

        <div>
          <div className="font-serif text-[17px] font-normal text-evergreen mb-[14px] tracking-[-0.01em]">
            JournalKlar
          </div>
          <p className="font-sans text-[12px] text-muted-light mb-0">
            © 2026 JournalKlar · CVR: xxxxxxxxxx · Aalborg, Danmark
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-x-5 gap-y-2 md:flex-col md:gap-[10px] md:text-right">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-[13px] text-muted hover:text-evergreen transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
