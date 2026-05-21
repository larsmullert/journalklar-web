import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata = {
  title: "Om JournalKlar — Bygget af en psykolog",
  description:
    "JournalKlar er udviklet af Lars Mullert Pedersen, psykolog, til danske privatpraktiserende psykologer. Læs om personen bag og tankerne bag produktet.",
};

function Rule() {
  return <hr className="border-none border-t border-sand m-0" />;
}

function CheckSm() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true" className="flex-shrink-0">
      <polyline
        points="1.5,5.5 4,8 9.5,2.5"
        stroke="#1D3A2F"
        strokeOpacity={0.7}
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

function ArrowRight({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="flex-shrink-0">
      <line x1="1" y1="6" x2="11" y2="6" stroke={color} strokeWidth="1.3"/>
      <polyline points="7.5,2.5 11,6 7.5,9.5" stroke={color} strokeWidth="1.3" fill="none"/>
    </svg>
  );
}

const gørItems = [
  "Strukturerer dine egne noter",
  "Markerer manglende oplysninger",
  "Hjælper med journaludkast",
  "Bevarer din godkendelse",
  "Passer ind i dit eksisterende journalsystem",
];

const gørIkkeItems = [
  "Optager sessionen",
  "Transskriberer samtalen",
  "Vurderer klienten for dig",
  "Erstatter dit faglige skøn",
  "Fungerer som journalsystem",
];

const laesMore = [
  {
    title: "Fagligt manifest",
    text: "Hvorfor JournalKlar starter med psykologens egne noter — ikke en fuld optagelse af sessionen.",
    linkText: "Læs manifestet",
    href: "/tilgang",
  },
  {
    title: "Sikkerhed og data",
    text: "Hvordan JournalKlar behandler noter, hvor data behandles, og hvad der ikke gemmes.",
    linkText: "Læs om sikkerhed",
    href: "/sikkerhed",
  },
  {
    title: "Teknisk gennemgang",
    text: "For dig, din leder, DPO eller fagforening, der vil se den konkrete arkitektur og datastrøm.",
    linkText: "Se teknisk gennemgang",
    href: "/sikkerhed#teknisk-gennemgang",
  },
  {
    title: "Sådan virker det",
    text: "Se hvordan dine egne rånoter bliver til et struktureret journaludkast.",
    linkText: "Se arbejdsgangen",
    href: "/#saadan-virker-det",
  },
];

export default function OmPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── 1. Hero ─────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:pt-[100px] md:pb-[90px] md:px-16">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr] md:gap-14 items-stretch">

            {/* Left: copy */}
            <div className="flex flex-col justify-center">
              <SectionLabel>Om JournalKlar</SectionLabel>
              <h1 className="max-w-[520px] mb-6">
                Bygget af en psykolog.<br />
                Til psykologers journalarbejde.
              </h1>
              <p className="font-sans text-[16px] font-light text-[#505050] max-w-[480px] leading-[1.8] mb-9">
                JournalKlar er udviklet af Lars Mullert Pedersen, psykolog, til danske privatpraktiserende psykologer, der vil bruge AI til at lette journalføringen — uden at flytte det faglige ansvar væk fra psykologen.
              </p>
              <div className="flex flex-col gap-3">
                {["Psykolog bag produktet", "Bygget til dansk privat praksis", "Egne noter først"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="font-sans text-[13px] text-evergreen/40 flex-shrink-0">—</span>
                    <span className="font-sans text-[14px] font-light text-[#505050]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: founder card */}
            <div className="flex items-center justify-start md:justify-center">
              <div className="border border-sand bg-white px-9 py-10 w-full max-w-[300px]">
                <div className="font-serif text-[44px] font-normal text-evergreen leading-none tracking-[-0.02em] mb-7">
                  LMP
                </div>
                <div className="w-8 h-px bg-sand mb-6" />
                <div className="font-sans text-[15px] font-normal text-evergreen mb-1">
                  Lars Mullert Pedersen
                </div>
                <div className="font-sans text-[13px] font-light text-muted leading-[1.75]">
                  Psykolog, cand.psych.
                </div>
                <div className="font-sans text-[13px] font-light text-muted leading-[1.75]">
                  Grundlægger af JournalKlar
                </div>
                <div className="font-sans text-[13px] font-light text-muted leading-[1.75]">
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
            <h2 className="max-w-[520px]">Jeg hedder Lars Mullert Pedersen og er psykolog.</h2>

            <div className="mt-9 grid grid-cols-1 gap-10 md:grid-cols-[1fr_260px] md:gap-14 items-start">

              {/* Venstre: personlig tekst */}
              <div>
                <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-6">
                  Jeg har udviklet JournalKlar med udgangspunkt i et konkret problem i psykologisk praksis: Journalføring skal være fagligt præcis, juridisk forsvarlig og mulig at nå i en travl hverdag.
                </p>
                <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-6">
                  AI kan hjælpe med noget af det arbejde. Men kun hvis værktøjet er bygget med respekt for psykologens faglige skøn, klientens fortrolighed og det ansvar, der følger med journalen.
                </p>
                <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-10">
                  JournalKlar er mit bud på et værktøj, der hjælper med strukturen — uden at overtage vurderingen.
                </p>
                <div className="border-l-2 border-sand pl-6">
                  <div className="font-sans text-[15px] font-normal text-evergreen">Lars Mullert Pedersen</div>
                  <div className="font-sans text-[13px] font-light text-muted mt-[2px]">Psykolog, cand.psych.</div>
                  <div className="font-sans text-[13px] font-light text-muted">Grundlægger af JournalKlar</div>
                </div>
              </div>

              {/* Højre: produktfokus */}
              <div className="border border-sand bg-sand [border-top:2px_solid_rgba(29,58,47,0.2)] p-6 md:p-8">
                <div className="font-sans text-[10px] font-medium tracking-[0.16em] uppercase text-orange mb-5">
                  Hvad JournalKlar gør
                </div>
                <p className="font-sans text-[13px] font-light text-[#505050] leading-[1.7] mb-6">
                  Et specialiseret redskab til ét trin: fra psykologens egne noter til et struktureret journaludkast.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Egne noter som udgangspunkt",
                    "Ingen sessionoptagelse",
                    "Altid journaludkast — aldrig færdig journal",
                    "Psykologen godkender",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true" className="flex-shrink-0 mt-[3px]">
                        <polyline points="1.5,5.5 4,8 9.5,2.5" stroke="#1D3A2F" strokeOpacity="0.65" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-sans text-[13px] font-light text-[#505050] leading-[1.55]">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-sand">
                  <a href="/tilgang" className="inline-flex items-center gap-[6px] text-evergreen font-sans text-[13px] font-normal border-b border-evergreen/20 pb-[2px] hover:border-evergreen transition-colors">
                    Læs om tilgangen
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.2"/>
                      <polyline points="6,2 9,5 6,8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Rule />

        {/* ── 3. Hvorfor JournalKlar findes ───────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Hvorfor JournalKlar findes</SectionLabel>
            <h2 className="max-w-[480px]">Det begyndte med en faglig bekymring.</h2>

            <div className="mt-9 max-w-[760px]">
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-6">
                Da AI-værktøjer for alvor blev brugbare, blev det tydeligt, hvor hurtigt de kan gøre en opgave færdig. Det er en stor styrke. Men i journalføring rejser det også et vigtigt spørgsmål:
              </p>

              {/* Pull quote */}
              <blockquote className="my-10 py-8 px-8 border-l-2 border-evergreen/30 bg-white border border-sand border-l-2">
                <p className="font-serif text-[22px] font-normal text-evergreen leading-[1.5] tracking-[-0.01em] m-0">
                  Hvilken del af arbejdet må AI egentlig overtage?
                </p>
              </blockquote>

              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-6">
                JournalKlar er bygget ud fra den tanke, at psykologen selv skal vælge, hvad der er fagligt væsentligt at journalføre. Derfor starter JournalKlar ikke med en fuld optagelse af samtalen. Det starter med psykologens egne noter.
              </p>
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85]">
                Det er ikke en afvisning af AI. Det er et forsøg på at bruge AI med de rigtige grænser.
              </p>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 4. Hvad JournalKlar er ──────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Produktet</SectionLabel>
            <h2 className="max-w-[540px]">Et specialiseret arbejdsredskab — ikke et nyt journalsystem.</h2>
            <p className="max-w-[540px] text-[#505050] mt-4">
              JournalKlar gør én ting: hjælper psykologen fra rå noter efter sessionen til et struktureret journaludkast.
            </p>
            <p className="max-w-[540px] text-[#505050] mt-3">
              Det er ikke et bookingsystem, ikke et økonomisystem, ikke en behandlingsplatform og ikke et generelt AI-chatværktøj. Det er et fagligt hjælpeværktøj til det konkrete øjeblik, hvor dine noter skal blive til et journaludkast, du kan gennemgå og overføre til dit eget journalsystem.
            </p>

            {/* Gør / Gør ikke */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

              {/* Gør */}
              <div className="bg-white border border-sand [border-top:2px_solid_rgba(29,58,47,0.2)] p-6 md:p-8">
                <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-orange mb-6">
                  JournalKlar gør
                </div>
                <div className="flex flex-col gap-4">
                  {gørItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-[4px]" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <polyline points="2,7 5.5,10.5 12,4" stroke="#1D3A2F" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
                      </svg>
                      <span className="font-sans text-[16px] font-light text-graphite leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gør ikke */}
              <div className="bg-white border border-sand p-6 md:p-8">
                <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-orange mb-6">
                  JournalKlar gør ikke
                </div>
                <div className="flex flex-col gap-4">
                  {gørIkkeItems.map((item) => (
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

        {/* ── 5. Læs mere ─────────────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Læs mere</SectionLabel>
            <h2 className="max-w-[460px]">JournalKlar skal kunne undersøges.</h2>
            <p className="max-w-[520px] text-[#505050]">
              Hvis du overvejer at bruge et AI-værktøj i din praksis, skal du ikke bare mødes med påstande. Du skal kunne se, hvordan værktøjet er tænkt, bygget og afgrænset.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {laesMore.map(({ title, text, linkText, href }) => (
                <a
                  key={title}
                  href={href}
                  className="group border border-sand bg-white [border-top:2px_solid_rgba(29,58,47,0.2)] p-6 md:p-8 flex flex-col justify-between gap-6"
                >
                  <div>
                    <div className="font-sans text-[15px] font-normal text-evergreen mb-3">{title}</div>
                    <p className="font-sans text-[14px] font-light text-[#505050] leading-[1.7] m-0">{text}</p>
                  </div>
                  <div className="flex items-center gap-[8px] font-sans text-[13px] font-normal text-evergreen border-b border-evergreen/20 pb-[2px] self-start group-hover:border-evergreen transition-colors">
                    {linkText}
                    <ArrowRight />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 6. Personlig afslutning ─────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>En personlig note</SectionLabel>
            <h2 className="max-w-[560px]">Jeg har ikke bygget JournalKlar for at gøre journalføring automatisk.</h2>

            <div className="mt-9 max-w-[760px]">
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-6">
                Jeg har bygget det, fordi jeg tror, vi får brug for værktøjer, der både tager dokumentationsbyrden og fagligheden alvorligt.
              </p>
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-6">
                AI kommer til at blive en del af psykologers arbejdsliv. Spørgsmålet er ikke kun, om det kan spare tid. Spørgsmålet er, hvilke dele af arbejdet vi lader det overtage.
              </p>
              <p className="font-sans text-[16px] font-light text-[#505050] leading-[1.85] mb-10">
                JournalKlar er mit svar på det spørgsmål.
              </p>

              {/* Signature */}
              <p className="font-serif text-[15px] font-normal italic text-evergreen mb-10">
                — Lars Mullert Pedersen, psykolog og grundlægger
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="/#saadan-virker-det"
                  className="inline-flex items-center gap-[10px] bg-evergreen text-white font-sans text-[15px] font-normal px-[30px] py-[15px] hover:bg-[#152e23] transition-colors"
                >
                  Se hvordan JournalKlar virker
                  <ArrowRight color="white" />
                </a>
                <a
                  href="/tilgang"
                  className="inline-flex items-center gap-[6px] text-evergreen font-sans text-[14px] font-normal border-b border-evergreen/25 pb-[2px] hover:border-evergreen transition-colors self-center sm:self-auto mt-1"
                >
                  Læs manifestet
                  <ArrowRight />
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
