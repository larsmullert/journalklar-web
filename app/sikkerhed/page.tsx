import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import SikkerhedFAQ from "@/components/sections/SikkerhedFAQ";

export const metadata = {
  title: "Sikkerhed & Fortrolighed — JournalKlar",
  description:
    "Forstå præcist, hvad der sker med dine journalnoter. Ingen optagelse · server i Skanderborg · ingen AI-træning · databehandleraftale inkluderet.",
};

function Rule() {
  return <hr className="border-none border-t border-sand m-0" />;
}

function CheckSm({ light = false }: { light?: boolean }) {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true" className="flex-shrink-0">
      <polyline
        points="1.5,5.5 4,8 9.5,2.5"
        stroke={light ? "#B5CEC5" : "#1D3A2F"}
        strokeOpacity={light ? 1 : 0.7}
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossSm() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true" className="flex-shrink-0">
      <line x1="3" y1="3" x2="8" y2="8" stroke="#A09890" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="8" y1="3" x2="3" y2="8" stroke="#A09890" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function Badge({
  children,
  variant = "neutral",
}: {
  children: React.ReactNode;
  variant?: "neutral" | "positive" | "caution";
}) {
  const styles = {
    neutral:  "bg-sand text-muted",
    positive: "bg-evergreen/[0.08] text-evergreen",
    caution:  "bg-sand text-evergreen/60",
  };
  return (
    <span className={`inline-block font-sans text-[10px] font-medium tracking-[0.15em] uppercase px-[8px] py-[3px] ${styles[variant]}`}>
      {children}
    </span>
  );
}

function TechChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-sans text-[10px] font-medium bg-sand text-muted px-[8px] py-[3px] mt-[6px]">
      {children}
    </span>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────

const trustItems = [
  "Ingen optagelse af sessionen",
  "Ingen AI-træning på dine input",
  "Dansk server i Skanderborg",
  "Journalnoter gemmes ikke efter generering",
];

const kortSagt = [
  {
    title: "Vi gemmer ikke dine journalnoter",
    text: "Dine noter bruges til at generere et journaludkast. Når svaret er leveret, gemmes klientindholdet ikke i JournalKlar.",
    note: "Klientindhold fjernes fra serveren umiddelbart efter generering",
  },
  {
    title: "AI'en trænes ikke på dine klienter",
    text: "Dine input bruges ikke til at forbedre modellen. Det er kontraktuelt fastsat med vores AI-udbyder — ikke bare en hensigtserklæring.",
    note: "Kontraktuelt fastsat med AWS — ikke bare hensigtserklæring",
  },
  {
    title: "Server i Skanderborg — AI i Frankfurt",
    text: "Appen og databasen kører på dansk server i Skanderborg. AI-behandlingen sker hos AWS i Frankfurt — inden for EU.",
    note: "AWS Bedrock eu-central-1, Frankfurt · Scannet VPS, Danmark",
  },
  {
    title: "Du får fuld dokumentation",
    text: "Du kan læse databehandleraftale, underleverandørgennemgang, datatyper og behandlingsgrundlag — og vise det til din DPO.",
    note: "Databehandleraftale, underleverandøroversigt og teknisk flow tilgængeligt",
  },
];

const steps: { num: string; title: string; text: string; chip: string }[] = [
  {
    num: "1",
    title: "Du skriver dine noter",
    text: "Du indtaster de oplysninger, du vurderer er relevante for journaludkastet — umiddelbart efter sessionen.",
    chip: "Kun det du selv skriver ind",
  },
  {
    num: "2",
    title: "Noterne sendes krypteret",
    text: "Forbindelsen er beskyttet, så data ikke sendes åbent over nettet.",
    chip: "HTTPS · TLS 1.3",
  },
  {
    num: "3",
    title: "JournalKlar kontrollerer din adgang",
    text: "Systemet tjekker, at du er logget ind og at din konto har adgang til funktionen.",
    chip: "Session-tjek · Adgangskontrol",
  },
  {
    num: "4",
    title: "Noterne sendes til AI-behandling inden for EU",
    text: "En AI-model strukturerer dine noter til et journaludkast. Inputtet bruges kun til at generere — ikke til modeltræning.",
    chip: "AWS Bedrock Sonnet · eu-central-1, Frankfurt",
  },
  {
    num: "5",
    title: "Udkastet kontrolleres for mulige AI-tilføjelser",
    text: "Et ekstra valideringstrin markerer formuleringer, der ikke tydeligt kan spores til dine noter.",
    chip: "Bedrock Haiku · Hallucinationsvalidering",
  },
  {
    num: "6",
    title: "Du får udkastet tilbage",
    text: "Udkastet vises i din browser. Klientindholdet gemmes ikke i JournalKlar efter genereringen.",
    chip: "No-cache · No-store · RAM cleared",
  },
  {
    num: "7",
    title: "Kun teknisk brugsmetadata gemmes",
    text: "JournalKlar gemmer tidspunkt, svartid og tokenforbrug. Ikke klientnoter. Ikke journaludkast.",
    chip: "userId · latency · tokens · flag_count",
  },
];

const transcriberItems = [
  "Optager hele samtalen",
  "Fanger også irrelevante og følsomme detaljer",
  "Sorterer og vurderer bagefter",
  "Mere data i omløb",
];

const journalklarItems = [
  "Du udvælger selv input",
  "Ingen lydoptagelse",
  "Ingen fuld transskription",
  "Mindre data i omløb",
  "Fagligt skøn før AI-behandling",
];

const systemCards: {
  name: string;
  sub?: string;
  role: string;
  region: string;
  clientData: "midlertidigt" | "ingen";
}[] = [
  {
    name: "JournalKlar-app",
    role: "Generering, adgang og visning af journaludkast",
    region: "Danmark",
    clientData: "midlertidigt",
  },
  {
    name: "Bedrock Sonnet",
    sub: "AWS · AI-generering",
    role: "Omsætter dine noter til et struktureret journaludkast",
    region: "eu-central-1, Frankfurt",
    clientData: "midlertidigt",
  },
  {
    name: "Bedrock Haiku",
    sub: "AWS · Validering",
    role: "Markerer formuleringer der ikke kan spores til dine noter",
    region: "eu-central-1, Frankfurt",
    clientData: "midlertidigt",
  },
  {
    name: "PostgreSQL 16",
    sub: "Database",
    role: "Login, abonnement og teknisk brugsmetadata — ingen journalnoter",
    region: "Scannet VPS, Danmark",
    clientData: "ingen",
  },
  {
    name: "Alunta / Quickpay",
    sub: "Betaling",
    role: "Abonnementshåndtering og betalingstransaktioner",
    region: "EU · PCI DSS",
    clientData: "ingen",
  },
  {
    name: "Scannet VPS",
    sub: "Hosting · ISO 27001",
    role: "Infrastruktur, drift og krypteret forbindelse",
    region: "Danmark",
    clientData: "ingen",
  },
];

const gemmerIkke = [
  "Rå journalnoter efter generering",
  "Journaludkast efter generering",
  "Lydoptagelser",
  "Transskriptioner",
  "Klientnavne som selvstændigt register",
  "Terapeutisk samtaleindhold",
];

const gemmes = [
  "Brugerprofil (navn, email)",
  "Login- og sessionsdata",
  "Abonnementsstatus",
  "Brugsmetadata (tidspunkt, svartid, tokenforbrug, flag-antal)",
  "Driftslogs uden klientindhold",
];

const leverandoerer = [
  {
    navn: "Scannet VPS",
    rolle: "App, database og infrastruktur",
    region: "Danmark",
    klientindhold: "Ingen",
    status: "ISO 27001",
  },
  {
    navn: "AWS Bedrock",
    rolle: "AI-generering (Sonnet) og validering (Haiku)",
    region: "EU · Frankfurt",
    klientindhold: "Midlertidigt",
    status: "GDPR-compliant · CRIS EU",
  },
  {
    navn: "Alunta / Quickpay",
    rolle: "Abonnement og betalingstransaktioner",
    region: "EU",
    klientindhold: "Ingen",
    status: "PCI DSS",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────

export default function SikkerhedPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── 1. Hero ─────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:pt-[100px] md:pb-[90px] md:px-16">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr] md:gap-14 items-stretch">

            {/* Left: copy */}
            <div className="flex flex-col justify-center">
              <SectionLabel>Data og fortrolighed</SectionLabel>
              <h1 className="max-w-[560px] mb-5">
                Sikkerhed, fortrolighed og data —{" "}
                <span className="italic text-evergreen/60">på almindeligt dansk</span>
              </h1>
              <p className="font-sans text-[16px] font-light text-body max-w-[480px] leading-[1.85] mb-8">
                JournalKlar er bygget til psykologer, der arbejder med fortrolige klientoplysninger. Du skal kunne forstå, hvad der sker med dine data — ikke bare have tillid til, at vi håndterer det.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
                <a
                  href="#noter"
                  className="inline-flex items-center gap-[10px] bg-evergreen text-white font-sans text-[15px] font-normal px-[30px] py-[15px] hover:bg-[#152e23] transition-colors"
                >
                  Se hvad der sker med dine noter
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.3"/>
                    <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="white" strokeWidth="1.3" fill="none"/>
                  </svg>
                </a>
                <a
                  href="#databehandleraftale"
                  className="inline-flex items-center gap-[6px] text-evergreen font-sans text-[14px] font-normal border-b border-evergreen/20 pb-[2px] hover:border-evergreen transition-colors mt-1"
                >
                  Hent databehandleraftale
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.2"/>
                    <polyline points="6,2 9,5 6,8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  </svg>
                </a>
              </div>
              <p className="font-sans text-[13px] font-normal text-evergreen tracking-[0.04em] text-center mt-7 mb-0">
                Ingen optagelse af sessionen{" "}
                <span className="text-evergreen/40">·</span>
                {" "}Server i Skanderborg{" "}
                <span className="text-evergreen/40">·</span>
                {" "}Altid et udkast
              </p>
            </div>

            {/* Right: trust panel */}
            <div className="bg-evergreen px-8 py-10 flex flex-col justify-center">
              <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-parchment/70 mb-7">
                Fire garantier
              </div>
              <div className="flex flex-col gap-5">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="font-sans text-[14px] font-light text-parchment/60 leading-[1.55] flex-shrink-0">—</span>
                    <span className="font-sans text-[14px] font-light text-parchment/90 leading-[1.55]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <Rule />

        {/* ── 2. Kort sagt ────────────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Kort sagt</SectionLabel>
            <h2>Fire ting du bør vide.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {kortSagt.map(({ title, text, note }) => (
                <div
                  key={title}
                  className="border border-sand bg-white [border-top:2px_solid_rgba(29,58,47,0.2)] p-6 md:p-8 "
                >
                  <div className="w-7 h-7 border border-sand flex items-center justify-center mb-5">
                    <CheckSm />
                  </div>
                  <div className="font-sans text-[15px] font-normal text-evergreen mb-2">{title}</div>
                  <p className="font-sans text-[14px] font-light text-body leading-[1.7] mb-3">{text}</p>
                  <div className="font-sans text-[11px] text-muted leading-[1.5]">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 3. Hvad sker der ────────────────────────────────────── */}
        <section id="noter" className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Hvad sker der</SectionLabel>
            <h2 className="max-w-[540px]">Hvad sker der, når du genererer et journaludkast?</h2>
            <p className="max-w-[520px] text-body">
              Syv trin — fra du skriver dine noter til udkastet er genereret og klientindholdet er fjernet fra serveren.
            </p>

            <div className="mt-14 max-w-[720px]">
              {steps.map(({ num, title, text, chip }, i) => (
                <div key={num} className="flex gap-5">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 border border-sand bg-white flex items-center justify-center">
                      <span className="font-sans text-[12px] font-medium text-muted">{num}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px bg-sand flex-1" style={{ minHeight: "24px" }} />
                    )}
                  </div>
                  <div className={`pt-[10px] ${i < steps.length - 1 ? "pb-9" : ""}`}>
                    <div className="font-sans text-[15px] font-normal text-evergreen mb-[6px]">{title}</div>
                    <p className="font-sans text-[14px] font-light text-body leading-[1.7] mb-0">{text}</p>
                    <TechChip>{chip}</TechChip>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 4. Sammenligning ────────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Dataminimering</SectionLabel>
            <h2 className="max-w-[500px]">JournalKlar optager ikke samtalen.</h2>
            <p className="max-w-[520px] text-body">
              Mange AI-værktøjer til sundhedsfaglig dokumentation starter med at optage eller transskribere hele samtalen. JournalKlar er bygget anderledes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

              {/* JournalKlar — venstre */}
              <div className="bg-white border border-sand [border-top:2px_solid_rgba(29,58,47,0.2)] p-6 md:p-8">
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-6">
                  JournalKlar
                </div>
                <div className="flex flex-col gap-4">
                  {journalklarItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-[4px]" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <polyline points="2,7 5.5,10.5 12,4" stroke="#1D3A2F" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
                      </svg>
                      <span className="font-sans text-[16px] font-light text-graphite leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transskriptions-AI — højre */}
              <div className="bg-white border border-sand p-6 md:p-8">
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-6">
                  Transskriptions-AI
                </div>
                <div className="flex flex-col gap-4">
                  {transcriberItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-[4px]" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <line x1="3.5" y1="3.5" x2="10.5" y2="10.5" stroke="#2C2C2C" strokeWidth="1.3" strokeOpacity="0.4" strokeLinecap="round"/>
                        <line x1="10.5" y1="3.5" x2="3.5" y2="10.5" stroke="#2C2C2C" strokeWidth="1.3" strokeOpacity="0.4" strokeLinecap="round"/>
                      </svg>
                      <span className="font-sans text-[16px] font-light text-graphite leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <p className="font-sans text-[14px] font-light text-graphite/60 border-t border-sand pt-6 mt-6 max-w-[680px]">
              Det er ikke kun et teknisk valg. Det er et psykologfagligt valg om dataminimering, fagligt ansvar og respekt for klientens fortrolighed.
            </p>
          </div>
        </section>

        <Rule />

        {/* ── 5. Hvem rører data ──────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Systemoverblik</SectionLabel>
            <h2>Hvem rører data?</h2>
            <p className="max-w-[520px] text-body">
              De systemer der behandler data, hvad de bruges til — og om klientindhold indgår.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {systemCards.map((card) => (
                <div
                  key={card.name}
                  className="border border-sand bg-white [border-top:2px_solid_rgba(29,58,47,0.2)] p-6 md:p-8 "
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="font-sans text-[14px] font-normal text-evergreen leading-[1.3]">{card.name}</div>
                      {card.sub && (
                        <div className="font-sans text-[11px] text-muted mt-[2px]">{card.sub}</div>
                      )}
                    </div>
                    <Badge variant={card.clientData === "ingen" ? "positive" : "caution"}>
                      {card.clientData === "ingen" ? "Ingen" : "Midlertidigt"}
                    </Badge>
                  </div>
                  <p className="font-sans text-[13px] font-light text-body leading-[1.6] mb-3">{card.role}</p>
                  <div className="font-sans text-[11px] text-muted">{card.region}</div>
                </div>
              ))}
            </div>

            <p className="font-sans text-[11px] text-muted mt-5">
              "Midlertidigt" indikerer at klientindhold behandles under selve genereringen og ikke gemmes bagefter.
            </p>
          </div>
        </section>

        <Rule />

        {/* ── 6. Gemmes / Gemmes ikke ─────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Opbevaring</SectionLabel>
            <h2>Hvad gemmes — og hvad gemmes ikke?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

              {/* Gemmes ikke — venstre */}
              <div className="bg-white border border-sand [border-top:2px_solid_rgba(29,58,47,0.2)] p-6 md:p-8">
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-6">
                  Gemmes ikke
                </div>
                <div className="flex flex-col gap-4">
                  {gemmerIkke.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-[4px]" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <polyline points="2,7 5.5,10.5 12,4" stroke="#1D3A2F" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
                      </svg>
                      <span className="font-sans text-[16px] font-light text-graphite leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gemmes — højre */}
              <div className="bg-white border border-sand p-6 md:p-8">
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-6">
                  Gemmes
                </div>
                <div className="flex flex-col gap-4">
                  {gemmes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-[4px]" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <line x1="3.5" y1="3.5" x2="10.5" y2="10.5" stroke="#2C2C2C" strokeWidth="1.3" strokeOpacity="0.4" strokeLinecap="round"/>
                        <line x1="10.5" y1="3.5" x2="3.5" y2="10.5" stroke="#2C2C2C" strokeWidth="1.3" strokeOpacity="0.4" strokeLinecap="round"/>
                      </svg>
                      <span className="font-sans text-[16px] font-light text-graphite leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        <Rule />

        {/* ── 7. Underleverandører ────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Leverandørgennemgang</SectionLabel>
            <h2>Underleverandører</h2>
            <p className="max-w-[520px] text-body">
              Tre leverandører behandler data som en del af JournalKlar. Ingen andre tredjeparter modtager klientoplysninger.
            </p>

            <div className="mt-12 overflow-x-auto">
              <div className="min-w-[620px] max-w-[960px]">

                {/* Header */}
                <div className="grid grid-cols-[1.8fr_2.2fr_1.2fr_1fr_1.2fr] border border-sand bg-white">
                  {["Leverandør", "Rolle", "Region", "Klientindhold", "Dokumentation"].map((h, i) => (
                    <div
                      key={h}
                      className={`px-5 py-3 font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-muted ${i < 4 ? "border-r border-sand" : ""}`}
                    >
                      {h}
                    </div>
                  ))}
                </div>

                {leverandoerer.map((row, i) => (
                  <div
                    key={row.navn}
                    className="grid grid-cols-[1.8fr_2.2fr_1.2fr_1fr_1.2fr] border-x border-b border-sand hover:bg-sand/20 transition-colors"
                  >
                    <div className="px-5 py-4 border-r border-sand">
                      <div className="font-sans text-[14px] font-normal text-evergreen">{row.navn}</div>
                    </div>
                    <div className="px-5 py-4 border-r border-sand">
                      <span className="font-sans text-[13px] font-light text-body leading-[1.5]">{row.rolle}</span>
                    </div>
                    <div className="px-5 py-4 border-r border-sand">
                      <Badge variant="neutral">{row.region}</Badge>
                    </div>
                    <div className="px-5 py-4 border-r border-sand">
                      <Badge variant={row.klientindhold === "Ingen" ? "positive" : "caution"}>
                        {row.klientindhold}
                      </Badge>
                    </div>
                    <div className="px-5 py-4">
                      <span className="font-sans text-[12px] text-muted">{row.status}</span>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 8. Databehandleraftale ──────────────────────────────── */}
        <section id="databehandleraftale" className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Dokumentation</SectionLabel>

            <div className="bg-evergreen p-6 md:p-8 max-w-[760px]">
              <h3 className="text-parchment mb-4" style={{ color: "#F7F4EF" }}>
                Databehandleraftalen underskrives inden brug.
              </h3>
              <p className="font-sans text-[14px] font-light text-parchment/90 leading-[1.8] mb-5">
                Inden du går i gang med JournalKlar, underskrives en databehandleraftale. Den beskriver præcist, hvad der sker med data — og hvad der ikke sker.
              </p>
              <p className="font-sans text-[14px] font-light text-parchment/70 leading-[1.8] mb-8">
                Aftalen dækker: behandlingsformål, datatyper, behandlingsgrundlag (GDPR art. 28), underleverandørernes rolle, opbevaringsperiode og slettepolitik. Du kan vise den til din leder, DPO eller fagforening.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#"
                  className="inline-flex items-center gap-[10px] border border-parchment/35 text-parchment font-sans text-[14px] font-normal px-6 py-[14px] hover:bg-parchment hover:text-evergreen transition-colors"
                >
                  Hent databehandleraftale (PDF)
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.3"/>
                    <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                  </svg>
                </a>
                <span className="font-sans text-[12px] text-parchment/70">
                  PDF-link tilføjes ved launch
                </span>
              </div>
            </div>

          </div>
        </section>

        <Rule />

        {/* ── 9. FAQ ──────────────────────────────────────────────── */}
        <SikkerhedFAQ />


      </main>
      <Footer />
    </>
  );
}
