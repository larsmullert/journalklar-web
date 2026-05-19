import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import SikkerhedFAQ from "@/components/sections/SikkerhedFAQ";

export const metadata = {
  title: "Sikkerhed & Fortrolighed — JournalKlar",
  description:
    "Forstå præcist, hvad der sker med dine journalnoter. Ingen optagelse, ingen AI-træning, EU-behandling og databehandleraftale inkluderet.",
};

function Rule() {
  return <hr className="border-none border-t border-sand m-0" />;
}

function CheckIcon({ light = false }: { light?: boolean }) {
  return (
    <svg className="flex-shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <polyline
        points="1.5,6 4.5,9.5 10.5,3"
        stroke={light ? "#B5CEC5" : "#1D3A2F"}
        strokeOpacity={light ? 1 : 0.65}
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="flex-shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <line x1="3" y1="3" x2="9" y2="9" stroke="#A09890" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="9" y1="3" x2="3" y2="9" stroke="#A09890" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

const kortSagt = [
  {
    title: "Vi gemmer ikke dine journalnoter",
    text: "Dine noter bruges til at generere et journaludkast. Når svaret er leveret, gemmes klientindholdet ikke i JournalKlar.",
  },
  {
    title: "AI'en trænes ikke på dine klienter",
    text: "Dine input bruges ikke til at gøre modellen klogere. Det er kontraktuelt fastsat med vores AI-udbyder — ikke bare en hensigtserklæring.",
  },
  {
    title: "Behandling sker inden for EU",
    text: "Både app og AI-behandling er placeret inden for EU. Ingen klientoplysninger behandles uden for EU's databeskyttelsesramme.",
  },
  {
    title: "Du får dokumentation",
    text: "Du kan læse databehandleraftale, underleverandørgennemgang, datatyper og behandlingsgrundlag — og vise det til din DPO.",
  },
];

const steps = [
  {
    num: "1",
    title: "Du skriver dine noter i JournalKlar",
    text: "Du indtaster de oplysninger, du vurderer er relevante for journaludkastet — umiddelbart efter sessionen.",
  },
  {
    num: "2",
    title: "Noterne sendes krypteret til JournalKlar",
    text: "Forbindelsen er beskyttet med HTTPS/TLS 1.3, så data ikke sendes åbent over nettet.",
  },
  {
    num: "3",
    title: "JournalKlar kontrollerer din adgang",
    text: "Systemet tjekker, at du er logget ind, og at din konto har adgang til funktionen.",
  },
  {
    num: "4",
    title: "Noterne sendes til AI-behandling inden for EU",
    text: "JournalKlar bruger en AI-model (AWS Bedrock Sonnet) placeret i eu-central-1 (Frankfurt). Inputtet bruges til at generere udkastet — ikke til træning.",
  },
  {
    num: "5",
    title: "Udkastet kontrolleres for mulige AI-tilføjelser",
    text: "Et ekstra valideringstrin (AWS Bedrock Haiku) markerer formuleringer, der ikke tydeligt kan spores til dine noter.",
  },
  {
    num: "6",
    title: "Du får udkastet tilbage",
    text: "Udkastet vises i din browser. Klientindholdet gemmes ikke i JournalKlar efter genereringen — det forsvinder fra serveren.",
  },
  {
    num: "7",
    title: "Kun teknisk brugsmetadata gemmes",
    text: "JournalKlar gemmer bruger-id, tidspunkt, svartid, tokenforbrug og antal valideringsmarkeringer. Ikke klientnoter. Ikke journaludkast.",
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

const tableRows: {
  area: string;
  sub?: string;
  purpose: string;
  clientData: string | null;
}[] = [
  {
    area: "JournalKlar-app",
    purpose: "Generering, adgang og visning af journaludkast",
    clientData: "Ja, midlertidigt under generering",
  },
  {
    area: "AI-model (Bedrock Sonnet)",
    sub: "eu-central-1, Frankfurt",
    purpose: "Omsætter dine noter til et journaludkast",
    clientData: "Ja, under selve kaldet",
  },
  {
    area: "Valideringsmodel (Bedrock Haiku)",
    sub: "eu-central-1, Frankfurt",
    purpose: "Markerer mulige AI-tilføjelser i udkastet",
    clientData: "Ja, midlertidigt",
  },
  {
    area: "Database (PostgreSQL 16)",
    sub: "Scannet VPS, Danmark",
    purpose: "Login, abonnement og teknisk brugsmetadata",
    clientData: null,
  },
  {
    area: "Betalingssystem (Alunta / Quickpay)",
    sub: "EU",
    purpose: "Betaling og abonnementshåndtering",
    clientData: null,
  },
  {
    area: "Hosting / infrastruktur",
    sub: "Scannet VPS, ISO 27001",
    purpose: "Drift og krypteret forbindelse",
    clientData: null,
  },
];

const gemmes = [
  "Brugerprofil (navn, email)",
  "Login- og sessionsdata",
  "Abonnementsstatus",
  "Teknisk brugsmetadata (tidspunkt, svartid, tokenforbrug, flag-antal)",
  "Fejl- og driftslogs uden klientindhold",
];

const gemmerIkke = [
  "Rå journalnoter efter generering",
  "Journaludkast efter generering",
  "Lydoptagelser",
  "Transskriptioner",
  "Klientnavne som selvstændigt register",
  "Terapeutisk samtaleindhold",
];

const underleverandoerer = [
  {
    name: "Scannet VPS",
    meta: "Danmark · ISO 27001",
    role: "App, database og infrastruktur. JournalKlar-applikationen og PostgreSQL-databasen er hostet her.",
    klientdata: "Databasen indeholder ikke journalnoter",
  },
  {
    name: "AWS Bedrock",
    meta: "eu-central-1, Frankfurt · GDPR-compliant",
    role: "AI-behandling. Modellerne Sonnet (generering) og Haiku (validering) kører i EU-regionen.",
    klientdata: "Klientnoter behandles midlertidigt under generering",
  },
  {
    name: "Quickpay via Alunta",
    meta: "EU · PCI DSS",
    role: "Betalingshåndtering og abonnement. Ingen klientoplysninger deles med betalingssystemet.",
    klientdata: "Ingen klientdata",
  },
];

export default function SikkerhedPage() {
  return (
    <>
      <Nav />
      <main>

        {/* 1. Hero */}
        <section className="py-16 px-6 md:pt-[100px] md:pb-[90px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Data og fortrolighed</SectionLabel>
            <h1 className="max-w-[720px] mb-7">
              Sikkerhed, fortrolighed og data —{" "}
              <span className="italic text-evergreen/80">på almindeligt dansk</span>
            </h1>
            <p className="font-sans text-[16px] font-light text-[#505050] max-w-[580px] leading-[1.75] mb-4">
              JournalKlar er bygget til psykologer, der arbejder med fortrolige klientoplysninger. Derfor skal du ikke bare vide, at vi passer på data. Du skal kunne forstå, hvordan.
            </p>
            <p className="font-sans text-[16px] font-light text-[#505050] max-w-[580px] leading-[1.75] mb-10">
              Vi gemmer ikke dine journalnoter efter generering. AI-modellen lærer ikke af dine klienter. Behandlingen sker inden for EU. Og du underskriver en databehandleraftale, der beskriver det hele.
            </p>
            <div className="flex flex-wrap gap-5 items-center">
              <a
                href="#noter"
                className="inline-flex items-center gap-[10px] bg-evergreen text-white font-sans text-[15px] font-medium px-7 py-[16px] hover:bg-[#152e23] transition-colors"
              >
                Se hvad der sker med dine noter
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.3"/>
                  <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="white" strokeWidth="1.3" fill="none"/>
                </svg>
              </a>
              <a
                href="#databehandleraftale"
                className="inline-flex items-center gap-[6px] text-evergreen font-sans text-[14px] font-normal border-b border-evergreen/20 pb-[2px] hover:border-evergreen transition-colors"
              >
                Hent databehandleraftale
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.2"/>
                  <polyline points="6,2 9,5 6,8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <Rule />

        {/* 2. Kort sagt */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Kort sagt</SectionLabel>
            <h2>Fire ting du bør vide.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12 max-w-[860px]">
              {kortSagt.map(({ title, text }) => (
                <div key={title} className="border border-sand bg-white px-7 py-8">
                  <div className="w-7 h-7 border border-sand flex items-center justify-center mb-5">
                    <CheckIcon />
                  </div>
                  <div className="font-sans text-[15px] font-medium text-evergreen mb-2">{title}</div>
                  <p className="font-sans text-[14px] font-light text-[#505050] leading-[1.7] mb-0">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* 3. Steps */}
        <section id="noter" className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Hvad sker der</SectionLabel>
            <h2 className="max-w-[560px]">Hvad sker der, når du genererer et journaludkast?</h2>
            <p className="max-w-[520px] text-[#505050]">
              Her er syv trin — fra du skriver dine noter til udkastet er genereret og klientindholdet er væk fra serveren.
            </p>

            <div className="mt-12 max-w-[620px]">
              {steps.map(({ num, title, text }, i) => (
                <div key={num} className="flex gap-5">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 border border-sand bg-white flex items-center justify-center">
                      <span className="font-sans text-[12px] font-medium text-muted">{num}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px bg-sand flex-1" style={{ minHeight: "28px" }} />
                    )}
                  </div>
                  <div className={`pt-[10px] ${i < steps.length - 1 ? "pb-9" : ""}`}>
                    <div className="font-sans text-[15px] font-medium text-evergreen mb-[6px]">{title}</div>
                    <p className="font-sans text-[14px] font-light text-[#505050] leading-[1.75] mb-0">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* 4. JournalKlar optager ikke samtalen */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Dataminimering</SectionLabel>
            <h2 className="max-w-[520px]">JournalKlar optager ikke samtalen.</h2>
            <p className="max-w-[520px] text-[#505050]">
              Mange AI-værktøjer til sundhedsfaglig dokumentation starter med at optage eller transskribere hele samtalen. JournalKlar er bygget anderledes: du skriver selv de faglige noter, du vurderer relevante.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-12 max-w-[760px]">
              <div className="border border-sand px-8 py-9">
                <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-6">
                  Transskriptions-AI
                </div>
                <div className="flex flex-col gap-[14px]">
                  {transcriberItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CrossIcon />
                      <span className="font-sans text-[14px] font-light text-[#505050] leading-[1.5] mt-[-1px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-evergreen border border-evergreen/20 md:border-l-0 px-8 py-9">
                <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-parchment/60 mb-6">
                  JournalKlar
                </div>
                <div className="flex flex-col gap-[14px]">
                  {journalklarItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckIcon light />
                      <span className="font-sans text-[14px] font-light text-parchment/90 leading-[1.5] mt-[-1px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="font-sans text-[13px] font-light text-muted mt-6 max-w-[540px] leading-[1.7]">
              Det er ikke kun et teknisk valg. Det er et psykologfagligt valg om dataminimering, fagligt ansvar og respekt for klientens fortrolighed.
            </p>
          </div>
        </section>

        <Rule />

        {/* 5. Hvem rører data */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Systemoverblik</SectionLabel>
            <h2>Hvem rører data?</h2>
            <p className="max-w-[520px] text-[#505050]">
              De systemer, der behandler data, hvad de bruges til — og om klientindhold indgår.
            </p>

            <div className="mt-12 overflow-x-auto">
              <div className="min-w-[580px] max-w-[900px]">
                <div className="grid grid-cols-[2fr_2fr_1.3fr] border border-sand bg-white">
                  {["Område", "Hvad bruges det til", "Klientindhold"].map((h, i) => (
                    <div
                      key={h}
                      className={`px-5 py-3 font-sans text-[11px] font-medium tracking-[0.1em] uppercase text-muted ${i < 2 ? "border-r border-sand" : ""}`}
                    >
                      {h}
                    </div>
                  ))}
                </div>
                {tableRows.map((row, i) => (
                  <div key={i} className="grid grid-cols-[2fr_2fr_1.3fr] border-x border-b border-sand">
                    <div className="px-5 py-4 border-r border-sand">
                      <div className="font-sans text-[14px] font-medium text-evergreen leading-[1.4]">{row.area}</div>
                      {row.sub && (
                        <div className="font-sans text-[11px] text-muted mt-[2px]">{row.sub}</div>
                      )}
                    </div>
                    <div className="px-5 py-4 border-r border-sand">
                      <span className="font-sans text-[13px] font-light text-[#505050] leading-[1.6]">{row.purpose}</span>
                    </div>
                    <div className="px-5 py-4">
                      {row.clientData ? (
                        <span className="font-sans text-[13px] text-[#505050]">{row.clientData}</span>
                      ) : (
                        <span className="font-sans text-[13px] text-muted">Nej</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* 6. Hvad gemmes / gemmes ikke */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Opbevaring</SectionLabel>
            <h2>Hvad gemmes — og hvad gemmes ikke?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-12 max-w-[760px]">
              <div className="border border-sand px-8 py-9">
                <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-6">
                  Gemmes
                </div>
                <div className="flex flex-col gap-[14px]">
                  {gemmes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="font-sans text-[14px] font-light text-[#505050] leading-[1.6] mt-[-1px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-sand md:border-l-0 px-8 py-9">
                <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-6">
                  Gemmes ikke
                </div>
                <div className="flex flex-col gap-[14px]">
                  {gemmerIkke.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CrossIcon />
                      <span className="font-sans text-[14px] font-light text-[#505050] leading-[1.6] mt-[-1px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* 7. Underleverandører */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Leverandørgennemgang</SectionLabel>
            <h2>Underleverandører</h2>
            <p className="max-w-[520px] text-[#505050]">
              Tre leverandører behandler data som en del af JournalKlar. Ingen andre tredjeparter modtager klientoplysninger.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-12 max-w-[900px]">
              {underleverandoerer.map((v, i) => (
                <div
                  key={v.name}
                  className={`border border-sand px-7 py-8 ${i > 0 ? "border-t-0 md:border-t md:border-l-0" : ""}`}
                >
                  <div className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-4 leading-[1.5]">
                    {v.meta}
                  </div>
                  <div className="font-sans text-[17px] font-medium text-evergreen mb-3">{v.name}</div>
                  <p className="font-sans text-[13px] font-light text-[#505050] leading-[1.7] mb-3">{v.role}</p>
                  <div className="font-sans text-[11px] text-muted italic">{v.klientdata}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* 8. Databehandleraftale */}
        <section id="databehandleraftale" className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Dokumentation</SectionLabel>
            <h2 className="max-w-[560px]">Du underskriver databehandleraftalen inden brug.</h2>
            <p className="max-w-[560px] text-[#505050] mt-4">
              Inden du går i gang med JournalKlar, underskrives en databehandleraftale. Den beskriver præcist, hvad der sker med data — og hvad der ikke sker.
            </p>
            <p className="max-w-[560px] text-[#505050] mt-3">
              Aftalen dækker: behandlingsformål, datatyper, behandlingsgrundlag (GDPR art. 28), underleverandørernes rolle, opbevaringsperiode, slettepolitik og dine rettigheder som dataansvarlig. Du kan vise den til din leder, din DPO eller din fagforening.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#"
                className="inline-flex items-center gap-[10px] border border-evergreen text-evergreen font-sans text-[15px] font-normal px-7 py-[15px] hover:bg-evergreen hover:text-white transition-colors"
              >
                Hent databehandleraftale (PDF)
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.3"/>
                  <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                </svg>
              </a>
              <span className="font-sans text-[12px] text-muted italic">
                PDF-link tilføjes ved launch
              </span>
            </div>
          </div>
        </section>

        <Rule />

        {/* 9. FAQ */}
        <SikkerhedFAQ />

      </main>
      <Footer />
    </>
  );
}
