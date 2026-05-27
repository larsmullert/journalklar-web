import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata = {
  title: "Sådan virker det — JournalKlar",
  description:
    "Se hvordan JournalKlar hjælper privatpraktiserende psykologer fra egne noter til et struktureret journaludkast. Tre trin. Ingen oplæring. Ingen optagelse.",
  openGraph: {
    title: "Sådan virker det — JournalKlar",
    description:
      "Se hvordan JournalKlar hjælper privatpraktiserende psykologer fra egne noter til et struktureret journaludkast. Tre trin. Ingen oplæring. Ingen optagelse.",
    url: "https://journalklar.dk/saadan-virker-JournalKlar",
  },
};

function Rule() {
  return <hr className="border-none border-t border-sand m-0" />;
}

function AppTopBar() {
  return (
    <div className="bg-[#EFECE7] border-b border-[#E0DDD8] px-4 py-[10px] flex items-center gap-[7px]">
      <div className="w-[10px] h-[10px] rounded-full bg-[#E0B9B9]" />
      <div className="w-[10px] h-[10px] rounded-full bg-[#DFDFB9]" />
      <div className="w-[10px] h-[10px] rounded-full bg-[#B9DFC0]" />
      <span className="ml-[10px] font-sans text-[12px] text-muted">
        JournalKlar — Eksempelsession · Første samtale
      </span>
    </div>
  );
}

function MangleBadge() {
  return (
    <div className="border border-orange/25 bg-orange/[0.03] px-[18px] py-[14px] my-[18px]">
      <div className="flex items-center gap-[7px] font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-orange mb-[5px]">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
          <circle cx="5.5" cy="5.5" r="5" stroke="#E04500" strokeWidth="1" />
          <line x1="5.5" y1="3" x2="5.5" y2="6.5" stroke="#E04500" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="5.5" cy="8.2" r="0.7" fill="#E04500" />
        </svg>
        Mangler — kræver stillingtagen
      </div>
      <div className="font-sans text-[13px] font-light text-body">
        Bekræft om informeret samtykke til tavshedspligt og oplysningspligt indgik i informationen.
      </div>
    </div>
  );
}

function RaaNoter() {
  return (
    <div className="font-sans text-[13px] font-light text-body leading-[1.8] space-y-[12px]">
      <p>Første samtale. Mand, 34. Henvist af læge pga. depression. Sygemeldt 3 mdr fra job som projektleder.</p>
      <p>Beskriver nedsat energi, søvnproblemer, tab af lyst. Haft det sådan ca 6 mdr. Udløst af samlivskonflikt og høj arbejdsbelastning.</p>
      <p>Ingen selvmordsrisiko, spurgt direkte.</p>
      <p>Tidligere set psykolog for 5 år siden, god oplevelse. Motiveret for forløb.</p>
      <p>Aftalte KAT-baseret tilgang, 10 sessioner som udgangspunkt. Næste tid om 1 uge.</p>
      <p>Informeret om journalføring og rammer.</p>
    </div>
  );
}

function JournalUdkast() {
  return (
    <>
      <div className="font-sans text-[14px] font-light text-body leading-[1.65] space-y-[14px]">
        <p className="text-muted">[STAMDATA: Udfyldes i journalsystem — navn, CPR, psykologens navn/titel/arbejdssted, dato]</p>
        <p>[DATO]. Første samtale.</p>
        <p>
          Klienten er en 34-årig mand henvist af egen læge med henblik på
          behandling af depression. Han er aktuelt sygemeldt fra sit job som
          projektleder, sygemeldingen har varet tre måneder.
        </p>
        <p>
          Klienten beskriver nedsat energi, søvnproblemer og tab af lyst.
          Symptomerne har været til stede i ca. seks måneder og beskrives som
          udløst af en samlivskonflikt og høj arbejdsbelastning.
        </p>
        <p>Ingen selvmordsrisiko, spurgt direkte.</p>
        <p>
          Klienten har tidligere haft et psykologforløb for ca. fem år siden og
          beskriver det som en god oplevelse. Han fremstår motiveret for det
          aktuelle forløb.
        </p>
        <p>Klienten er informeret om journalføring og rammerne for forløbet.</p>
      </div>
      <MangleBadge />
      <div className="font-sans text-[14px] font-light text-body leading-[1.65]">
        <p>
          Der er aftalt en kognitiv adfærdsterapeutisk tilgang over ti sessioner
          som udgangspunkt. Næste session er aftalt om en uge.
        </p>
      </div>
    </>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────

export default function SaadanVirkerDetPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:pt-[100px] md:pb-[90px] md:px-16">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr] md:gap-14 items-stretch">

            {/* Left: copy */}
            <div className="flex flex-col justify-center">
              <SectionLabel>Sådan virker det</SectionLabel>
              <h1 className="mb-6">
                Fra dine noter til et journaludkast. På få minutter.
              </h1>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-0">
                JournalKlar er bygget til at passe ind i det du allerede gør
                efter en session. Du skriver dine noter. JournalKlar strukturerer
                dem. Du godkender udkastet og overfører til dit journalsystem.
              </p>
            </div>

            {/* Right: evergreen boks */}
            <div className="bg-evergreen px-8 py-10 flex flex-col justify-center">
              <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-7">
                I praksis
              </div>
              <div className="flex flex-col gap-5">
                {[
                  "Journaludkast umiddelbart efter sessionen",
                  "Skriv eller tal som psykolog, ikke som sekretær",
                  "Struktureret efter journalføringsbekendtgørelsen",
                  "Manglende oplysninger markeret automatisk",
                  "Du kopierer til dit eget journalsystem",
                  "Intet klientindhold gemmes",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="font-sans text-[14px] font-light text-parchment/70 leading-[1.55] flex-shrink-0">—</span>
                    <span className="font-sans text-[14px] font-light text-parchment/90 leading-[1.55]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <Rule />

        {/* ── Arbejdsgangen intro ─────────────────────────────────── */}
        <section className="bg-sand py-16 px-6 md:pt-[80px] md:pb-[60px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Arbejdsgangen</SectionLabel>
            <h2 className="max-w-[480px]">Tre trin. Ingen oplæring.</h2>
            <p className="font-sans text-[16px] font-light text-body leading-[1.85] max-w-[520px] mt-4 mb-0">
              Det tager to minutter at lære. Derefter er det bare en del af din
              arbejdsdag.
            </p>
          </div>
        </section>

        <Rule />

        {/* ── Trin 1: Du skriver (parchment) ──────────────────────── */}
        <section className="py-16 px-6 md:py-[100px] md:px-16">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-14 items-start">
            <div>
              <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-4">
                Du skriver
              </div>
              <h3 className="mb-4">Du skriver dine noter som du plejer.</h3>
              <p className="font-sans text-[15px] font-light text-body leading-[1.85]">
                Umiddelbart efter sessionen skriver eller indtaler du det du
                som psykolog vurderer er vigtigt: observationer, temaer,
                intervention, aftaler, plan. Skriv som psykolog, ikke som
                sekretær. Det er dine faglige noter, ikke en færdig journal.
              </p>
              <p className="font-sans text-[15px] font-light text-body leading-[1.85] mb-0">
                Diktering er ikke det samme som at optage sessionen. Når du dikterer, taler du dine egne noter ind efter sessionen er slut. Ingen optager samtalen. Ingen lytter med.
              </p>
            </div>
            <div className="bg-white border border-[#D4D0CB]">
              <AppTopBar />
              <div className="px-8 py-9">
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-6">
                  Rånoter efter sessionen
                </div>
                <RaaNoter />
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── Trin 2: JournalKlar strukturerer (sand) ─────────────── */}
        <section className="bg-sand py-16 px-6 md:py-[100px] md:px-16">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-14 items-start">
            <div>
              <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-4">
                JournalKlar strukturerer
              </div>
              <h3 className="mb-4">
                JournalKlar omsætter dine noter til et struktureret
                journaludkast.
              </h3>
              <p className="font-sans text-[15px] font-light text-body leading-[1.85] mb-5">
                Dine noter omsættes til et journaludkast baseret på
                journalføringsbekendtgørelsens krav. Manglende oplysninger
                markeres tydeligt, så du aktivt tager stillingtagen.
              </p>
              <p className="font-sans text-[15px] font-light text-body leading-[1.85] mb-0">
                Inden du ser udkastet, kører JournalKlar et ekstra
                sikkerhedstrin. Noget vi har døbt et &lsquo;hallucinationstjek&rsquo;. Det
                markerer formuleringer der ikke tydeligt kan spores til dine
                rånoter. Det sker lynhurtigt, så det er ikke noget du lægger
                mærke til.
              </p>
            </div>
            <div className="bg-white border border-[#D4D0CB]">
              <AppTopBar />
              <div className="px-8 py-9">
                <div className="flex items-center gap-[10px] font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-6">
                  Journaludkast
                  <span className="bg-evergreen/[0.08] text-evergreen font-sans text-[9px] font-medium tracking-[0.15em] px-[8px] py-[2px]">
                    Til godkendelse
                  </span>
                </div>
                <JournalUdkast />
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── Trin 3: Du godkender (parchment) ────────────────────── */}
        <section className="py-16 px-6 md:py-[100px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-14 items-start mb-10">
              <div>
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-4">
                  Du godkender
                </div>
                <h3 className="mb-4">
                  Du læser igennem, retter og overfører til dit journalsystem.
                </h3>
                <p className="font-sans text-[15px] font-light text-body leading-[1.85] mb-5">
                  Udkastet er altid et udgangspunkt, aldrig en færdig journal.
                  Du afgør hvad der bliver til journal. Når du er tilfreds,
                  kopierer du udkastet over i dit eget journalsystem.
                </p>
                <p className="font-sans text-[15px] font-light text-body leading-[1.85] mb-0">
                  JournalKlar gemmer ikke udkastet efter du har lukket siden.
                </p>
              </div>
              <div className="hidden md:block" />
            </div>
            {/* Full split mockup */}
            <div className="bg-white border border-[#D4D0CB]">
              <AppTopBar />
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="hidden md:block px-8 py-9 border-r border-[#F0EDE8]">
                  <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-6">
                    Rånoter efter sessionen
                  </div>
                  <RaaNoter />
                </div>
                <div className="px-6 py-8 md:px-8 md:py-9">
                  <div className="flex items-center gap-[10px] font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-6">
                    Journaludkast
                    <span className="bg-evergreen/[0.08] text-evergreen font-sans text-[9px] font-medium tracking-[0.15em] px-[8px] py-[2px]">
                      Til godkendelse
                    </span>
                  </div>
                  <JournalUdkast />
                </div>
              </div>
            </div>
            <p className="font-sans text-[13px] text-muted mt-5">
              Eksemplet er anonymiseret og konstrueret. JournalKlar skriver
              ikke journalen for dig — det laver et udkast, som du vurderer,
              redigerer og godkender.
            </p>
          </div>
        </section>

        <Rule />

        {/* ── Et muligt workflow ──────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Et muligt workflow</SectionLabel>
            <h2 className="max-w-[520px]">En dag med fire til seks sessioner.</h2>
            <p className="font-sans text-[16px] font-light text-body leading-[1.85] max-w-[580px] mt-4 mb-0">
              Psykologers journalføringsflow er meget forskelligt. Her er ét
              forslag til hvordan JournalKlar kan passe ind i en travl dag, ikke
              som en anbefaling, men som et konkret eksempel på hvad der kan
              fungere.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

              <div className="border-t-[2px] border-evergreen/20 pt-8">
                <div className="font-serif text-[32px] font-normal text-evergreen/20 leading-none mb-6">1</div>
                <div className="font-sans text-[15px] font-normal text-evergreen mb-3">
                  Umiddelbart efter hver session (2–3 min)
                </div>
                <p className="font-sans text-[14px] font-light text-body leading-[1.75] mb-0">
                  Du har måske 10–15 minutter inden næste klient. Du åbner
                  JournalKlar, skriver eller indtaler dine noter fra sessionen
                  mens de stadig er friske, og genererer et udkast. Det gemmes
                  ikke i JournalKlar, men du kan kopiere det direkte over i dit
                  journalsystem som en kladde.
                </p>
              </div>

              <div className="border-t-[2px] border-evergreen/20 pt-8">
                <div className="font-serif text-[32px] font-normal text-evergreen/20 leading-none mb-6">2</div>
                <div className="font-sans text-[15px] font-normal text-evergreen mb-3">
                  Sidst på dagen (15–20 min)
                </div>
                <p className="font-sans text-[14px] font-light text-body leading-[1.75] mb-0">
                  Når alle sessioner er færdige, har du allerede et udkast til
                  hver journal liggende i dit journalsystem. I stedet for at
                  skulle huske og rekonstruere seks sessioner fra bunden,
                  gennemgår du, justerer og godkender dem én ad gangen. Det der
                  mangler er allerede markeret.
                </p>
              </div>

              <div className="border-t-[2px] border-evergreen/20 pt-8">
                <div className="font-serif text-[32px] font-normal text-evergreen/20 leading-none mb-6">3</div>
                <div className="font-sans text-[15px] font-normal text-evergreen mb-3">
                  Resultatet
                </div>
                <p className="font-sans text-[14px] font-light text-body leading-[1.75] mb-0">
                  To minutter pr. session umiddelbart efter. Én samlet
                  gennemgang sidst på dagen. Journalerne skrives på den dag
                  sessionen fandt sted, hvilket er i overensstemmelse med Dansk
                  Psykologforenings anbefalinger om løbende journalføring.
                </p>
              </div>

            </div>
          </div>
        </section>

        <Rule />

        {/* ── Vigtigt at vide ─────────────────────────────────────── */}
        <section className="bg-evergreen py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Vigtigt at vide</SectionLabel>
            <h2 className="max-w-[520px] text-parchment">
              JournalKlar skriver ikke journalen for dig.
            </h2>
            <div className="mt-8 max-w-[580px]">
              <p className="font-sans text-[16px] font-light text-parchment/90 leading-[1.85] mb-5">
                Outputtet hedder altid &lsquo;udkast&rsquo;. JournalKlar strukturerer det du
                selv har skrevet, det erstatter ikke din faglige vurdering, dit
                kliniske blik eller dit ansvar for den endelige journal.
              </p>
              <p className="font-sans text-[16px] font-light text-parchment/90 leading-[1.85] mb-0">
                Det er en bevidst afgrænsning. Ikke en begrænsning.
              </p>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── Under motorhjelmen ──────────────────────────────────── */}
        <section className="bg-sand py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Under motorhjelmen</SectionLabel>
            <h2 className="max-w-[400px]">Hvad sker der præcist?</h2>

            <div className="mt-12 max-w-[680px] flex flex-col gap-0">

              <div className="flex gap-6 py-7 border-b border-sand">
                <span className="font-serif text-[15px] flex-shrink-0 w-5 mt-[2px]" style={{ color: "#E04500" }}>1</span>
                <div>
                  <div className="font-sans text-[15px] font-normal text-evergreen mb-1">Du skriver</div>
                  <p className="font-sans text-[14px] font-light text-body leading-[1.7] mb-0">Dine noter sendes krypteret til JournalKlars server i Skanderborg.</p>
                </div>
              </div>

              <div className="flex gap-6 py-7 border-b border-sand">
                <span className="font-serif text-[15px] flex-shrink-0 w-5 mt-[2px]" style={{ color: "#E04500" }}>2</span>
                <div>
                  <div className="font-sans text-[15px] font-normal text-evergreen mb-1">AI strukturerer</div>
                  <p className="font-sans text-[14px] font-light text-body leading-[1.7] mb-0">En AI-model omsætter dine noter til et journaludkast. Inputtet bruges kun til at generere, ikke til modeltræning. JournalKlars bearbejdning tager typisk 10-15 sekunder.</p>
                </div>
              </div>

              <div style={{ marginTop: 32, marginBottom: 32 }}>
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-3">
                  Kollegatesten
                </div>
                <p className="font-serif italic text-evergreen mb-0" style={{ fontSize: "clamp(17px, 1.6vw, 21px)", marginBottom: 10 }}>
                  &ldquo;Hvad ville en kollega have brug for at vide, hvis de skulle overtage behandlingen af denne klient i morgen? Hverken mere eller mindre.&rdquo;
                </p>
                <p className="font-sans text-[14px] font-normal text-muted mb-0">
                  Det er det spørgsmål der styrer hvad JournalKlar skriver — og ikke skriver.
                </p>
              </div>

              <div className="flex gap-6 py-7 border-b border-sand">
                <span className="font-serif text-[15px] flex-shrink-0 w-5 mt-[2px]" style={{ color: "#E04500" }}>3</span>
                <div>
                  <div className="font-sans text-[15px] font-normal text-evergreen mb-1">Hallucinationstjek</div>
                  <p className="font-sans text-[14px] font-light text-body leading-[1.7] mb-0">Et ekstra trin markerer formuleringer der ikke kan spores til dine noter.</p>
                </div>
              </div>

              <div className="flex gap-6 py-7">
                <span className="font-serif text-[15px] flex-shrink-0 w-5 mt-[2px]" style={{ color: "#E04500" }}>4</span>
                <div>
                  <div className="font-sans text-[15px] font-normal text-evergreen mb-1">Intet gemmes</div>
                  <p className="font-sans text-[14px] font-light text-body leading-[1.7] mb-0">Klientindholdet fjernes fra serveren umiddelbart efter du modtager udkastet.</p>
                </div>
              </div>

            </div>

            <div className="mt-8">
              <a
                href="/sikkerhed"
                className="font-sans text-[15px] font-normal text-evergreen hover:opacity-70 transition-opacity"
              >
                Læs den fulde tekniske gennemgang →
              </a>
            </div>
          </div>
        </section>

        <Rule />

        {/* ── Afslutning ──────────────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="max-w-[380px]">Prøv det i 30 dage.</h2>
            <p className="font-sans text-[16px] font-light text-body leading-[1.85] max-w-[480px] mt-5 mb-10">
              Det tager to minutter at komme i gang. Ingen binding. Ingen
              betalingskort ved opstart.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="/#pris"
                className="inline-flex items-center gap-[10px] bg-evergreen text-white font-sans text-[15px] font-normal px-[30px] py-[15px] hover:bg-[#152e23] transition-colors"
              >
                Prøv gratis i 30 dage
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.3" />
                  <polyline points="7.5,2.5 11,6 7.5,9.5" stroke="white" strokeWidth="1.3" fill="none" />
                </svg>
              </a>
              <a
                href="/sikkerhed"
                className="font-sans text-[14px] font-normal text-evergreen border-b border-evergreen/20 pb-[2px] hover:border-evergreen transition-colors"
              >
                Spørgsmål om sikkerhed og data →
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
