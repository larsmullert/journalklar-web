const produkt = [
  { label: "Sådan virker det", href: "/" },
  { label: "Priser", href: "/#pris" },
  { label: "FAQ", href: "/faq" },
];

const journalklar = [
  { label: "Tilgang", href: "/tilgang" },
  { label: "Om", href: "/om" },
  { label: "Sikkerhed", href: "/sikkerhed" },
];

const juridisk = [
  { label: "Privatlivspolitik", href: "/privatlivspolitik" },
  { label: "Databehandleraftale", href: "/databehandleraftale" },
];

function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-evergreen/60 mb-[14px]">
      {children}
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block font-sans text-[13px] font-normal text-evergreen no-underline hover:underline leading-[1.7]"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#EDEAE4" }} className="pt-16 pb-12 px-6 md:px-16">
      <div className="max-w-[1100px] mx-auto">

        {/* Fire kolonner */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">

          {/* Kolonne 1: Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-serif text-evergreen text-[19px] font-normal tracking-[-0.02em] block mb-4">
              <span>JournalKla<span style={{ color: "#E04500" }}>r</span></span>
            </a>
            <p className="font-sans text-[13px] font-normal text-muted leading-[1.7] m-0">
              Et specialiseret journalværktøj til privatpraktiserende psykologer.
              Bygget og drevet fra Danmark.
            </p>
          </div>

          {/* Kolonne 2: Produkt */}
          <div>
            <ColLabel>Produkt</ColLabel>
            <div className="flex flex-col gap-[6px]">
              {produkt.map(({ label, href }) => (
                <FooterLink key={label} href={href}>{label}</FooterLink>
              ))}
            </div>
          </div>

          {/* Kolonne 3: JournalKlar */}
          <div>
            <ColLabel>JournalKlar</ColLabel>
            <div className="flex flex-col gap-[6px]">
              {journalklar.map(({ label, href }) => (
                <FooterLink key={label} href={href}>{label}</FooterLink>
              ))}
            </div>
          </div>

          {/* Kolonne 4: Juridisk */}
          <div>
            <ColLabel>Juridisk</ColLabel>
            <div className="flex flex-col gap-[6px]">
              {juridisk.map(({ label, href }) => (
                <FooterLink key={label} href={href}>{label}</FooterLink>
              ))}
            </div>
          </div>

        </div>

        {/* Bundlinje */}
        <div className="border-t border-sand mt-12 pt-6 flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          <p className="font-sans text-[12px] font-normal text-muted m-0">
            © 2026 JournalKlar · CVR: xxxxxxxxxx · Aalborg, Danmark
          </p>
          <p className="font-sans text-[12px] font-normal text-muted m-0">
            Bygget af en psykolog — i Danmark 🇩🇰
          </p>
        </div>

      </div>
    </footer>
  );
}
