const links = [
  { label: "Privatlivspolitik", href: "#" },
  { label: "Databehandleraftale", href: "#" },
  { label: "Sikkerhed", href: "/sikkerhed" },
  { label: "Kontakt", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand py-[52px] px-16 bg-parchment">
      <div className="max-w-[1100px] mx-auto grid grid-cols-[1fr_auto] gap-16 items-start">

        <div>
          <div className="font-serif text-[17px] font-normal text-evergreen mb-[14px] tracking-[-0.01em]">
            JournalKlar
          </div>
          <p className="font-sans text-[12px] font-light text-muted leading-[1.75] max-w-[540px] mb-5">
            JournalKlar er ikke godkendt af Dansk Psykologforening eller Styrelsen for Patientsikkerhed. Det er et fagligt arbejdsredskab under dit ansvar som autoriseret psykolog — på linje med andre digitale hjælpemidler i praksis. Alle outputter er udkast der kræver din aktive gennemgang og godkendelse.
          </p>
          <p className="font-sans text-[12px] text-muted-light mb-0">
            © 2026 JournalKlar · CVR: xxxxxxxxxx · Aalborg, Danmark
          </p>
        </div>

        <div className="flex flex-col gap-[10px] text-right">
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
