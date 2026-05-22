import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata = {
  title: "Om JournalKlar",
  description:
    "JournalKlar er udviklet af Lars Mullert Pedersen, psykolog og grundlægger, som et specialiseret værktøj til privatpraktiserende psykologers journalføringsarbejde.",
};

function Rule() {
  return <hr className="border-none border-t border-sand m-0" />;
}

function ArrowRight({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true" className="flex-shrink-0">
      <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.3" />
      <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </svg>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────

const gennemsigtighed = [
  {
    title: "Tilgang",
    text: "Læs JournalKlars faglige tilgang til AI og journalføring.",
    href: "/tilgang",
  },
  {
    title: "Sikkerhed",
    text: "Se hvordan klientindhold, drift og underleverandører håndteres.",
    href: "/sikkerhed",
  },
  {
    title: "FAQ",
    text: "Få svar på de mest praktiske og kritiske spørgsmål.",
    href: "/faq",
  },
  {
    title: "Kontakt",
    text: "Skriv direkte, hvis noget er uklart.",
    href: "/kontakt",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────

export default function OmPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── 1. Hero ─────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:pt-[100px] md:pb-[90px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[3fr_2fr] md:gap-16 items-stretch">

              {/* Left: copy */}
              <div className="flex flex-col justify-center">
                <SectionLabel>Psykologen bag værktøjet</SectionLabel>
                <h1 className="mb-5">Et dansk fagværktøj med en psykolog bag.</h1>
                <p className="font-sans text-[16px] font-light text-body leading-[1.85] max-w-[480px] mb-8">
                  JournalKlar er udviklet af Lars Mullert Pedersen, psykolog, som et specialiseret værktøj til privatpraktiserende psykologers journalføringsarbejde.
                </p>
              </div>

              {/* Right: founder card */}
              <div className="flex items-center justify-start md:justify-center">
                <div className="bg-evergreen px-9 py-10 w-full max-w-[300px]">
                  <div className="font-serif text-[48px] font-normal text-parchment leading-none tracking-[-0.02em] mb-7">
                    LMP
                  </div>
                  <div className="w-8 h-px bg-parchment/20 mb-6" />
                  <div className="font-sans text-[14px] font-normal text-parchment leading-[1.9]">
                    Lars Mullert Pedersen
                  </div>
                  <div className="font-sans text-[13px] font-light text-parchment/70 leading-[1.8]">
                    Psykolog, uddannet fra Aalborg Universitet
                  </div>
                  <div className="font-sans text-[13px] font-light text-parchment/70 leading-[1.8]">
                    Grundlægger af JournalKlar
                  </div>
                  <div className="font-sans text-[13px] font-light text-parchment/70 leading-[1.8]">
                    Aalborg, Danmark
                  </div>
                </div>
              </div>

            </div>

            <p className="font-sans text-[13px] font-normal text-evergreen tracking-[0.04em] text-center mt-8 mb-0">
              Ingen optagelse af sessionen{" "}
              <span className="text-evergreen/40">·</span>
              {" "}Server i Skanderborg{" "}
              <span className="text-evergreen/40">·</span>
              {" "}Altid et udkast
            </p>
          </div>
        </section>

        <Rule />

        {/* ── 2. Personen bag ─────────────────────────────────────── */}
        <section className="bg-sand py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Personen bag</SectionLabel>
            <h2 className="max-w-[540px]">Jeg er psykolog — og uddannet bager.</h2>

            <div className="mt-9 max-w-[660px]">
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Jeg er uddannet bager, men fik melallergi. Derfor skulle jeg skifte karriere, og efter forskellige erfaringer fra arbejdslivet, endte jeg (heldigvis) som psykolog.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Det har ikke været den lige vej, men alligevel hænger det sammen.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                I bagerfaget lærer man hurtigt, at gode hjælpemidler ikke erstatter faglig fornemmelse. En maskine kan ælte. En ovn kan holde temperaturen. En opskrift kan give retning. Men den faglige vurdering ligger stadig i hænderne, blikket og erfaringen: hvordan dejen føles, hvordan den hæver, hvornår noget er klar, og hvornår man skal justere.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Den erfaring har fulgt mig.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Teknologi kan være en stor hjælp. Men den skal placeres rigtigt. Det gælder også i psykologisk praksis.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Jeg har selv oplevet, hvor brugbar AI kan være til afgrænsede opgaver. Når opgaven er tydelig og ansvaret for vurderingen stadig ligger hos mennesket, kan AI være et stærkt arbejdsredskab.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Men jeg blev kritisk, da jeg begyndte at se AI-journalværktøjer hvor hele sessionen optages, transskriberes og bearbejdes af en model der udvælger det vigtige fra en fortrolig terapeutisk samtale.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-0">
                Ikke kun på grund af datasikkerhed. Men fordi det rejser et fagligt spørgsmål:
              </p>
              <div className="border-l-[3px] border-orange pl-6 mt-8 mb-0">
                <p
                  className="font-serif italic text-evergreen leading-[1.5] mb-0"
                  style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
                >
                  Hvem skal lave den faglige vurdering og udvælgelse af, hvad der var vigtigt i samtalen?
                </p>
                <p className="font-sans text-[16px] font-normal text-evergreen mt-3 mb-0">
                  Det skal du, selvfølgelig. Det er derfor JournalKlar starter med dine noter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 3. Hvorfor JournalKlar findes ───────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Hvorfor JournalKlar findes</SectionLabel>
            <h2 className="max-w-[660px]">Vi er blevet dårligere til at finde vej, fordi vi bruger GPS. Vi er blevet dårligere til hovedregning, fordi vi bruger lommeregner.</h2>

            <div className="mt-9 max-w-[660px]">
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Det er ikke et argument mod teknologi. Men det er et spørgsmål vi bør stille til AI i psykologers journalarbejde.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                En klassisk tech-founder ser journalføring som et effektiviseringsproblem der gælder alle sundhedsfagpersoner. Jeg kan ikke sige, hvad der er rigtigt for andre fag. Men for psykologer er efterbehandlingen af en session — der hvor du samler op, udvælger og formulerer din forståelse af klienten — ikke sekretærarbejde. Det er faglig efterbehandling. Det er en faglig muskel vi ikke bevidst bør lade sygne hen.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85]">
                Derfor starter JournalKlar med dine egne noter. Ikke med en optagelse.
              </p>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 4. Gennemsigtighed ──────────────────────────────────── */}
        <section className="bg-sand py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Gennemsigtighed</SectionLabel>
            <h2 className="max-w-[520px]">Det skal være nemt at finde ud af, hvem du køber noget af.</h2>

            <div className="mt-9 max-w-[660px]">
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-12">
                Når man bruger et AI-værktøj i psykologisk praksis bør afsenderen ikke være uklar. Du kan læse om den faglige tilgang, sikkerheden og databehandlingen — og du er altid velkommen til at skrive direkte hvis noget er uklart.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gennemsigtighed.map(({ title, text, href }) => (
                <a
                  key={title}
                  href={href}
                  className="group border border-sand bg-white p-8 flex flex-col justify-between gap-6 hover:border-evergreen/40 transition-colors"
                >
                  <div>
                    <div className="font-serif text-[17px] font-normal text-evergreen mb-3 leading-[1.35]">
                      {title}
                    </div>
                    <p className="font-sans text-[13px] font-light text-body leading-[1.7] m-0">
                      {text}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-sans text-[13px] font-normal text-evergreen border-b border-evergreen/20 pb-[2px] self-start group-hover:border-evergreen transition-colors">
                    Læs mere
                    <ArrowRight />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 5. Afslutning ───────────────────────────────────────── */}
        <section className="bg-evergreen py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Afslutning</SectionLabel>
            <h2 className="max-w-[480px] text-parchment">Bygget tæt på den praksis det skal bruges i.</h2>

            <div className="mt-9 max-w-[660px]">
              <p className="font-sans text-[16px] font-light text-parchment/90 leading-[1.85] mb-5">
                Jeg har ikke bygget JournalKlar for at gøre journalføring automatisk. Jeg har bygget det fordi jeg mener vi har brug for værktøjer der tager både dokumentationsbyrden og psykologfagligheden alvorligt — på samme tid.
              </p>
              <p className="font-serif italic text-[17px] text-parchment/90 leading-[1.8] mb-2 mt-10">
                &ldquo;— Lars Mullert Pedersen&rdquo;
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-10">
                <a
                  href="/tilgang"
                  className="inline-flex items-center gap-[10px] bg-parchment text-evergreen font-sans text-[15px] font-normal px-[30px] py-[15px] hover:bg-white transition-colors"
                >
                  Læs tilgangen
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.3" />
                    <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
                  </svg>
                </a>
                <a
                  href="/sikkerhed"
                  className="inline-flex items-center gap-[6px] text-parchment font-sans text-[14px] font-normal border-b border-parchment/30 pb-[2px] hover:border-parchment transition-colors"
                >
                  Se sikkerhed og data
                  <ArrowRight size={10} />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
