import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata = {
  title: "Om JournalKlar",
  description:
    "JournalKlar er udviklet af Lars Mullert Pedersen, psykolog og grundlægger af JournalKlar, som et specialiseret værktøj til privatpraktiserende psykologers journalføringsarbejde.",
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

const trustMarkers = [
  "Psykolog bag produktet",
  "Udviklet til dansk privat praksis",
  "Specialiseret til journaludkast",
  "Bygget og drevet fra Danmark",
];

const principper = [
  {
    title: "Smalt før bredt",
    text: "JournalKlar skal løse én opgave ordentligt, før det udvides.",
  },
  {
    title: "Forståeligt før imponerende",
    text: "Psykologer skal kunne forstå, hvad værktøjet gør, og hvad det ikke gør.",
  },
  {
    title: "Dokumenteret før påstået",
    text: "Sikkerhed, dataflow og afgrænsninger skal kunne læses og undersøges.",
  },
  {
    title: "Fagligt sprog før tech-sprog",
    text: "Produktet skal tale ind i psykologers praksis, ikke ind i AI-branchens buzzwords.",
  },
];

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
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 gap-12 md:grid-cols-[3fr_2fr] md:gap-16 items-stretch">

            {/* Left: copy */}
            <div className="flex flex-col justify-center">
              <SectionLabel>Om JournalKlar</SectionLabel>
              <h1 className="mb-6">Et dansk fagværktøj med en psykolog bag.</h1>
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.8] max-w-[480px] mb-10">
                JournalKlar er udviklet af Lars Mullert Pedersen, psykolog og grundlægger af JournalKlar, som et specialiseret værktøj til privatpraktiserende psykologers journalføringsarbejde.
              </p>
              <div className="flex flex-col gap-[10px]">
                {trustMarkers.map((item) => (
                  <div key={item} className="flex items-start gap-3 font-sans text-[14px] font-light text-[#505050] leading-[1.7]">
                    <span className="text-muted flex-shrink-0">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
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
                  Psykolog
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
        </section>

        <Rule />

        {/* ── 2. Personen bag ─────────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Personen bag</SectionLabel>
            <h2 className="max-w-[540px]">Jeg hedder Lars Mullert Pedersen og er psykolog.</h2>

            <div className="mt-9 max-w-[660px]">
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-5">
                Jeg har bygget JournalKlar, fordi jeg savnede et journalværktøj, der tog psykologers konkrete arbejdssituation alvorligt: kort tid mellem sessioner, høje dokumentationskrav og et fagligt ansvar, der ikke kan outsources.
              </p>
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-5">
                Min baggrund er psykologfaglig, ikke teknologisk. Det betyder ikke, at teknologien er mindre vigtig. Det betyder, at produktet er udviklet med udgangspunkt i psykologens arbejdsgang, ansvar og sprog — ikke i AI som mål i sig selv.
              </p>
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-9">
                JournalKlar er derfor bygget som et smalt værktøj til én konkret opgave: at hjælpe psykologen fra egne noter til et struktureret journaludkast.
              </p>

              <div className="font-serif italic text-[15px] text-evergreen leading-[1.9]">
                Lars Mullert Pedersen<br />
                Psykolog, cand.psych.<br />
                Grundlægger af JournalKlar
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 3. Produktets fokus ─────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Produktets fokus</SectionLabel>
            <h2 className="max-w-[520px]">JournalKlar forsøger ikke at være en platform.</h2>

            <div className="mt-9 max-w-[660px]">
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-5">
                Mange digitale systemer vokser hurtigt i bredden: booking, betaling, klientportal, video, beskeder, journal, skemaer og administration.
              </p>
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-5">
                JournalKlar er valgt smallere.
              </p>
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-5">
                Det er ikke et journalsystem. Det er ikke en behandlingsplatform. Det er ikke et praksisstyringssystem. Det er et arbejdsredskab til det konkrete øjeblik efter sessionen, hvor dine noter skal blive til et journaludkast, du kan gennemgå og overføre til dit eget system.
              </p>
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85]">
                Det fokus er en del af produktets troværdighed.
              </p>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 4. Arbejdsprincipper ────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Hvordan vi bygger</SectionLabel>
            <h2 className="max-w-[480px]">Langsomt, åbent og med tydelige grænser.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {principper.map(({ title, text }) => (
                <div key={title} className="border border-sand p-8">
                  <div className="font-serif text-[18px] font-normal text-evergreen mb-3 leading-[1.35]">
                    {title}
                  </div>
                  <p className="font-sans text-[14px] font-normal text-muted leading-[1.7] m-0">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 5. Gennemsigtighed ──────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Gennemsigtighed</SectionLabel>
            <h2 className="max-w-[520px]">Det skal være nemt at finde ud af, hvem du køber noget af.</h2>

            <div className="mt-9 max-w-[660px]">
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-5">
                Når man bruger et AI-værktøj i psykologisk praksis, bør afsenderen ikke være uklar. Du skal kunne se, hvem der står bag, hvad produktet er bygget til, hvordan det er afgrænset, og hvor du kan finde dokumentationen.
              </p>
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-12">
                Derfor samler JournalKlar ikke det hele i én stor salgstekst. Du kan læse om tilgangen, sikkerheden, databehandlingen og de praktiske spørgsmål hver for sig.
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
                    <p className="font-sans text-[13px] font-light text-[#505050] leading-[1.7] m-0">
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

        {/* ── 6. Afslutning ───────────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Afslutning</SectionLabel>
            <h2 className="max-w-[480px]">Bygget tæt på den praksis, det skal bruges i.</h2>

            <div className="mt-9 max-w-[660px]">
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-5">
                JournalKlar er ikke et stort system med mange løfter. Det er et specialiseret værktøj til en konkret del af psykologers hverdag.
              </p>
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-10">
                Hvis du vil forstå den faglige tanke bag produktet, kan du læse JournalKlars tilgang til AI og journalføring.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="/tilgang"
                  className="inline-flex items-center gap-[10px] bg-evergreen text-white font-sans text-[15px] font-normal px-[30px] py-[15px] hover:bg-[#152e23] transition-colors"
                >
                  Læs tilgangen
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.3" />
                    <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="white" strokeWidth="1.3" fill="none" />
                  </svg>
                </a>
                <a
                  href="/sikkerhed"
                  className="inline-flex items-center gap-[6px] text-evergreen font-sans text-[14px] font-normal border-b border-evergreen/20 pb-[2px] hover:border-evergreen transition-colors"
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
