import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata = {
  title: "JournalKlars tilgang til AI og journalføring",
  description:
    "JournalKlars faglige tilgang til AI, journalføring og psykologens ansvar: egne noter først, ingen sessionoptagelse og altid journaludkast.",
  openGraph: {
    title: "JournalKlars tilgang til AI og journalføring",
    description:
      "JournalKlars faglige tilgang til AI, journalføring og psykologens ansvar: egne noter først, ingen sessionoptagelse og altid journaludkast.",
    url: "https://journalklar.dk/tilgang",
  },
};

function Rule() {
  return <hr className="border-none border-t border-sand m-0" />;
}

function ArrowRight({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="flex-shrink-0">
      <line x1="1" y1="6" x2="11" y2="6" stroke={color} strokeWidth="1.3"/>
      <polyline points="7.5,2.5 11,6 7.5,9.5" stroke={color} strokeWidth="1.3" fill="none"/>
    </svg>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────

const videreLinks = [
  {
    title: "Sådan virker det",
    text: "Se arbejdsgangen fra egne noter til journaludkast.",
    linkText: "Se arbejdsgangen",
    href: "/",
  },
  {
    title: "Sikkerhed og data",
    text: "Læs hvordan JournalKlar behandler klientindhold, underleverandører og databehandleraftale.",
    linkText: "Læs om sikkerhed",
    href: "/sikkerhed",
  },
  {
    title: "Om JournalKlar",
    text: "Læs om Lars Mullert Pedersen, psykologen bag JournalKlar.",
    linkText: "Læs om JournalKlar",
    href: "/om",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────

export default function TilgangPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── 1. Hero ─────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:pt-[100px] md:pb-[90px] md:px-16">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr] md:gap-14 items-stretch">

            {/* Left: copy */}
            <div className="flex flex-col justify-center">
              <SectionLabel>JournalKlars tilgang</SectionLabel>
              <h1 className="max-w-[560px] mb-5">
                AI må gerne hjælpe med journalføring.{" "}
                <span className="italic text-evergreen/60">Men ikke alt bør automatiseres.</span>
              </h1>
              <p className="font-sans text-[16px] font-light text-body max-w-[480px] leading-[1.85] mb-4">
                JournalKlar er bygget ud fra et enkelt fagligt standpunkt: AI kan godt hjælpe psykologer med struktur, overblik og formulering — men den første faglige selektion skal blive hos psykologen.
              </p>
              <p className="font-sans text-[16px] font-light text-body max-w-[480px] leading-[1.85] mb-8">
                Derfor optager JournalKlar ikke sessionen. Det transskriberer ikke samtalen. Det starter med dine egne noter efter sessionen.
              </p>
              <p className="font-sans text-[13px] font-normal text-evergreen tracking-[0.04em] text-center mt-7 mb-0">
                Ingen optagelse af sessionen{" "}
                <span className="text-evergreen/40">·</span>
                {" "}Server i Skanderborg{" "}
                <span className="text-evergreen/40">·</span>
                {" "}Altid et udkast
              </p>
            </div>

            {/* Right: statement card */}
            <div className="flex items-center justify-start md:justify-center">
              <div className="bg-evergreen px-9 py-10 w-full max-w-[300px]">
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-parchment/70 mb-7">
                  Arbejdsdelingen
                </div>
                <div className="font-serif text-[28px] font-normal text-parchment leading-[1.35] tracking-[-0.01em]">
                  Din vurdering.
                </div>
                <div className="font-serif text-[28px] font-normal text-parchment/70 leading-[1.35] tracking-[-0.01em] mb-7">
                  Vores struktur.
                </div>
                <div className="w-8 h-px bg-parchment/20 mb-6" />
                <p className="font-sans text-[13px] font-light text-parchment/90 leading-[1.7] m-0">
                  Psykologens faglige skøn er første led. Ikke et efterbehandlingstrin.
                </p>
              </div>
            </div>

          </div>
        </section>

        <Rule />

        {/* ── 2. To legitime AI-veje ──────────────────────────────── */}
        <section className="bg-sand py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>To AI-veje</SectionLabel>
            <h2 className="max-w-[520px]">Der findes mere end én måde at bruge AI i journalføring.</h2>

            <div className="mt-9 max-w-[760px]">
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Mange AI-værktøjer til sundhedsfaglig dokumentation starter med at optage eller transskribere samtalen. Psykologen får derefter et færdigt forslag, som kan redigeres bagefter.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Det er en effektiv arbejdsgang. Og vi forstår godt, hvorfor den er tiltrækkende.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Når næste klient venter, og journalen kan være klar på få minutter, er det svært ikke at se værdien.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-8">
                JournalKlar bygger bare på en anden præmis.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                I psykologisk praksis handler journalføring ikke kun om at fastholde, hvad der blev sagt. Det handler også om at vurdere, hvad der var fagligt væsentligt. Hvad der skal med. Hvad der skal udelades. Hvad der skal formuleres nøgternt, præcist og forsvarligt.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-10">
                Den vurdering bør ikke starte i en transskription. Den bør starte hos psykologen.
              </p>

              {/* Callout */}
              <div className="border border-sand bg-white px-7 py-6">
                <p className="font-sans text-[15px] font-light text-evergreen leading-[1.75] m-0">
                  JournalKlar er ikke et argument mod AI. Det er et argument for at bruge AI på en måde, hvor psykologens faglige skøn bliver ved med at være første led.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 3. Faglig efterbehandling ───────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Faglig efterbehandling</SectionLabel>
            <h2 className="max-w-[600px]">
              Det vigtigste arbejde sker ikke nødvendigvis i selve formuleringen.{" "}
              <span className="italic text-evergreen/60">Det sker i udvælgelsen.</span>
            </h2>

            <div className="mt-9 max-w-[760px]">
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Efter en session ved psykologen mere, end der kan stå i journalen.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Der har været ord, pauser, skift i kontakt, affekt, undgåelser, timing, kropslig uro, tilbageholdenhed, fremskridt, gentagelser og små forskydninger, som først får betydning, når de holdes op imod forløbet som helhed.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-8">
                Ikke alt skal journalføres.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-10">
                Noget er klinisk centralt. Noget er kontekst. Noget er vigtigt i relationen, men ikke nødvendigvis relevant i journalen. Noget skal formuleres varsomt. Noget skal udelades.
              </p>

              {/* Pull quote */}
              <blockquote className="my-8 bg-evergreen px-8 py-7 border-0 m-0">
                <p className="font-serif text-[20px] font-normal text-parchment leading-[1.6] tracking-[-0.01em] m-0 mb-2">
                  Det er dig, der destillerer.
                </p>
                <p className="font-serif text-[20px] font-normal text-parchment leading-[1.6] tracking-[-0.01em] m-0 mb-2">
                  Det er dig, der vælger.
                </p>
                <p className="font-serif text-[20px] font-normal text-parchment leading-[1.6] tracking-[-0.01em] m-0">
                  Det er dig, der foretager den første faglige bearbejdning.
                </p>
              </blockquote>

              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5 mt-10">
                JournalKlar hjælper først bagefter. Når du har skrevet eller indtalt dine egne noter, kan systemet hjælpe med at strukturere dem til et journaludkast.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Det er ikke fordi AI ikke kan formulere. Det kan den godt.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85]">
                Spørgsmålet er, hvem der skal vælge, hvad der er værd at formulere.
              </p>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 4. Ingen optagelse ──────────────────────────────────── */}
        <section className="bg-sand py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Ingen optagelse</SectionLabel>
            <h2 className="max-w-[480px]">Vi har ikke bygget JournalKlar til at lytte med.</h2>

            <div className="mt-9 max-w-[720px]">
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                JournalKlar optager ikke sessionen. Det er ikke en teknisk begrænsning. Det er et bevidst valg.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Den psykologiske samtale er et fortroligt rum. Ikke bare fordi der bliver sagt følsomme ting, men fordi rummet i sig selv er en del af arbejdet.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Når et system optager hele samtalen, bliver alt potentielt til data: det relevante, det irrelevante, det foreløbige, det sårbare, det misforståelige og det, som aldrig skulle have været journalført.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                JournalKlar arbejder med mindre.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Det arbejder kun med det, psykologen selv vælger at skrive eller indtale efter sessionen.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-12">
                Det betyder, at den første afgrænsning sker før AI-behandlingen — ikke bagefter.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-12">
                Det samme gælder for klientoplysninger generelt: JournalKlar behandler dem i det tidsrum det tager at generere udkastet. Ikke længere.
              </p>
            </div>

            {/* Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* JournalKlar — venstre */}
              <div className="bg-white border border-sand [border-top:2px_solid_rgba(29,58,47,0.2)] p-6 md:p-8">
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-6">
                  JournalKlar
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    "Optager ikke samtalen",
                    "Starter med psykologens egne noter",
                    "Strukturerer det udvalgte",
                    "Markerer mangler og kræver godkendelse",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-[4px]" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <polyline points="2,7 5.5,10.5 12,4" stroke="#1D3A2F" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
                      </svg>
                      <span className="font-sans text-[16px] font-light text-graphite leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transskriptionsbaseret AI — højre */}
              <div className="bg-white border border-sand p-6 md:p-8">
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-6">
                  Transskriptionsbaseret AI
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    "Optager samtalen",
                    "Fanger alt først",
                    "Sorterer bagefter",
                    "Lader systemet foreslå, hvad der var vigtigt",
                  ].map((item) => (
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

            <p className="font-sans text-[14px] font-light text-muted border-t border-sand pt-6 mt-6 max-w-[680px]">
              Det er ikke kun et datasikkerhedsvalg. Det er et fagligt valg.
            </p>
          </div>
        </section>

        <Rule />

        {/* ── 5. Sådan er JournalKlar bygget ──────────────────────── */}
        <section className="bg-sand py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>JournalKlar i Praksis</SectionLabel>
            <h2 className="max-w-[480px]">Sådan er JournalKlar instrueret.</h2>

            <div className="mt-9 max-w-[680px]">
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-0">
                Når du sender dine noter til JournalKlar, modtager systemet ikke bare dine noter. Det modtager også præcise faglige instruktioner der beskriver hvad JournalKlar skal gøre, hvad det ikke må gøre og hvilke principper der styrer outputtet.
              </p>
            </div>

            <div className="mt-14 max-w-[680px] flex flex-col" style={{ gap: 32 }}>

              <div>
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange" style={{ marginBottom: 8 }}>
                  Kollegatesten
                </div>
                <p className="font-sans text-[16px] font-normal text-body leading-[1.85] m-0">
                  JournalKlar skriver efter ét spørgsmål: hvad ville en kollega have brug for at vide, hvis de skulle overtage behandlingen af denne klient i morgen? Hverken mere eller mindre.
                </p>
              </div>

              <div>
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange" style={{ marginBottom: 8 }}>
                  Klientgenkendelighed
                </div>
                <p className="font-sans text-[16px] font-normal text-body leading-[1.85] m-0">
                  Klientens egne ord og udtryk bevares. Ikke omskrives til klinisk sprog.
                </p>
              </div>

              <div>
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange" style={{ marginBottom: 8 }}>
                  Bøjning — ikke oversættelse
                </div>
                <p className="font-sans text-[16px] font-normal text-body leading-[1.85] m-0">
                  JournalKlar må gerne bøje dine ord fra talesprog til skriftsprog. Det må ikke oversætte din kliniske vurdering til noget andet.
                </p>
              </div>

              <div>
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange" style={{ marginBottom: 8 }}>
                  Markering af mangler
                </div>
                <p className="font-sans text-[16px] font-normal text-body leading-[1.85] mb-5">
                  Nogle oplysninger er juridisk nødvendige. Informeret samtykke. Grundlag for videregivelse. Stamdata. Mangler de, markerer JournalKlar det tydeligt med [MANGLER] — det kræver din aktive stillingtagen.
                </p>
                <p className="font-sans text-[16px] font-normal text-body leading-[1.85] m-0">
                  Andre oplysninger indgår typisk i en session, men fraværet kan være et bevidst fagligt valg. En faglig vurdering. En behandlingsplan-status. Her skriver JournalKlar [IKKE I DINE NOTER] — ikke som en fejl, men som en påmindelse. Du afgør om det skal med.
                </p>
              </div>

            </div>

          </div>
        </section>

        <Rule />

        {/* ── 6. Standpunktet ─────────────────────────────────────── */}
        <section className="bg-evergreen py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Standpunktet</SectionLabel>
            <h2 className="max-w-[480px] text-parchment">
              Vi vil gerne bruge AI.{" "}
              <span className="italic text-parchment/60">Bare ikke ukritisk.</span>
            </h2>

            <div className="mt-9 max-w-[760px]">
              <p className="font-sans text-[16px] font-light text-parchment/90 leading-[1.85] mb-5">
                JournalKlar er bygget, fordi AI kan gøre noget reelt nyttigt for psykologer.
              </p>
              <p className="font-sans text-[16px] font-light text-parchment/90 leading-[1.85] mb-5">
                Det kan spare tid. Det kan skabe struktur. Det kan mindske friktion i en dokumentationsopgave, som mange oplever som tung, gentagende og svær at få gjort ordentligt i en travl hverdag.
              </p>
              <p className="font-sans text-[15px] font-normal text-parchment leading-[1.85] mb-5">
                Men effektivitet er ikke et neutralt mål.
              </p>
              <p className="font-sans text-[16px] font-light text-parchment/90 leading-[1.85] mb-5">
                Når et værktøj gør det meget let at sige "godt nok", skal vi være særligt opmærksomme på, hvilke dele af arbejdet der bliver lettere at springe over.
              </p>
              <p className="font-sans text-[16px] font-light text-parchment/90 leading-[1.85] mb-5">
                I journalføring er den faglige efterbehandling ikke en luksus. Den er en del af arbejdet.
              </p>
              <p className="font-sans text-[16px] font-light text-parchment/90 leading-[1.85] mb-5">
                Derfor har vi bygget JournalKlar sådan, at AI først kommer ind efter psykologens egen selektion.
              </p>
              <p className="font-sans text-[16px] font-light text-parchment/90 leading-[1.85] mb-5">
                Ikke for at gøre journalføring automatisk.{" "}
                <span className="font-normal text-parchment">Men for at gøre det lettere at gøre ordentligt.</span>
              </p>
              <p className="font-sans text-[16px] font-light text-parchment/90 leading-[1.85] mb-12">
                Outputtet fra JournalKlar er altid et journaludkast. Ikke en journal. Ikke en vurdering. Ikke en beslutning.
              </p>

              {/* Signature card */}
              <div className="border border-parchment/20 bg-white px-7 py-7 max-w-[400px]">
                <div className="font-serif text-[17px] font-normal text-evergreen tracking-[-0.01em] mb-2">
                  JournalKlar
                </div>
                <div className="font-sans text-[14px] font-light text-muted">
                  Din vurdering. Vores struktur.
                </div>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── 7. Videre læsning ───────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Videre læsning</SectionLabel>
            <h2 className="max-w-[440px]">Undersøg selv, hvordan JournalKlar er bygget.</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {videreLinks.map(({ title, text, linkText, href }) => (
                <a
                  key={title}
                  href={href}
                  className="group border border-sand bg-white [border-top:2px_solid_rgba(29,58,47,0.2)] p-6 md:p-8 flex flex-col justify-between gap-6"
                >
                  <div>
                    <div className="font-sans text-[15px] font-normal text-evergreen mb-3">{title}</div>
                    <p className="font-sans text-[14px] font-light text-body leading-[1.7] m-0">{text}</p>
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

      </main>
      <Footer />
    </>
  );
}
