import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Cookiepolitik",
  description: "Læs om hvordan JournalKlar bruger cookies på journalklar.dk.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-evergreen/60 mt-12 mb-4">
      {children}
    </h2>
  );
}

function SubHeading({ children, badge }: { children: React.ReactNode; badge?: string }) {
  return (
    <div className="flex items-center gap-3 mb-2 mt-8">
      <span className="font-sans text-[15px] font-medium text-evergreen">{children}</span>
      {badge && (
        <span className="font-sans text-[11px] font-medium tracking-[0.1em] uppercase text-muted border border-sand px-2 py-0.5">
          {badge}
        </span>
      )}
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[15px] font-light text-body leading-[1.85] mb-4">
      {children}
    </p>
  );
}

export default function CookiepolitikPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-16 px-6 md:pt-[100px] md:pb-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="max-w-[680px]">

              <h1 className="mb-6">Cookiepolitik</h1>

              <p className="font-sans text-[17px] font-light text-body leading-[1.85] mb-0">
                Vi forsøger at holde det enkelt. Denne side forklarer præcist, hvilke cookies
                journalklar.dk bruger, hvorfor, og hvad du kan gøre ved det.
              </p>

              <SectionHeading>Hvad er cookies?</SectionHeading>
              <Body>
                Cookies er små tekstfiler, der gemmes i din browser, når du besøger en hjemmeside.
                De kan bruges til at huske dine præferencer, forstå hvordan siden bruges, og måle
                effekten af markedsføring.
              </Body>

              <SectionHeading>Hvilke cookies bruger vi?</SectionHeading>

              <SubHeading badge="Altid aktiv">Nødvendige cookies</SubHeading>
              <Body>
                Disse cookies er nødvendige for at siden fungerer. De gemmer dit cookievalg,
                så vi ikke spørger dig igen ved hvert besøg.
              </Body>
              <Body>
                Eksempel: <code className="font-mono text-[13px] bg-sand px-1.5 py-0.5">jk_consent</code> — gemmer dit samtykkevalg lokalt i din browser.
                Ingen data sendes til vores server.
              </Body>

              <SubHeading badge="Kræver samtykke">Statistikcookies</SubHeading>
              <Body>
                Hvis du accepterer statistikcookies, bruger vi Google Analytics 4 til at forstå,
                hvordan journalklar.dk bruges — hvilke sider der besøges, hvor brugere kommer fra,
                og hvor de forlader siden. Dataene er anonymiserede og aggregerede.
              </Body>
              <Body>
                Databehandler: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </Body>
              <Body>
                Disse cookies sættes ikke, før du har givet samtykke.
              </Body>

              <SubHeading badge="Kræver samtykke">Marketingcookies</SubHeading>
              <Body>
                Hvis du accepterer marketingcookies, kan vi bruge annonceringsplatforme som
                Google Ads og Meta til at måle effekten af vores annoncer. Det betyder, at vi
                kan se, om en annonce har ført til et besøg på journalklar.dk.
              </Body>
              <Body>
                Vi bruger ikke marketingcookies til at opbygge profiler på dig eller til
                retargeting på tværs af andre hjemmesider — kun til at måle vores egne annoncer.
              </Body>
              <Body>
                Databehandlere (når samtykke er givet): Google Ireland Limited og Meta Platforms
                Ireland Limited.
              </Body>
              <Body>
                Disse cookies sættes ikke, før du har givet samtykke.
              </Body>

              <SectionHeading>Google Consent Mode v2</SectionHeading>
              <Body>
                journalklar.dk bruger Google Consent Mode v2. Det betyder, at Google som
                udgangspunkt ikke må sætte analyse- eller reklamecookies, når du besøger siden.
                Først når du aktivt accepterer de relevante kategorier, opdateres tilladelsen.
              </Body>

              <SectionHeading>Sådan ændrer du dit valg</SectionHeading>
              <Body>
                Du kan til enhver tid ændre eller trække dit samtykke tilbage ved at klikke på
                "Cookieindstillinger" i bunden af siden.
              </Body>
              <Body>
                Du kan også slette cookies direkte i din browser under indstillinger →
                privatliv → cookies.
              </Body>

              <SectionHeading>Kontakt</SectionHeading>
              <Body>Spørgsmål til vores brug af cookies?</Body>
              <address className="font-sans text-[15px] font-light text-body leading-[1.85] not-italic">
                Lars Mullert<br />
                CVR: 35949542<br />
                Anneberghøj 1,1<br />
                9000 Aalborg<br />
                <a href="mailto:lars@journalklar.dk" className="text-evergreen border-b border-evergreen/30 hover:border-evergreen no-underline">
                  lars@journalklar.dk
                </a>
              </address>

              <p className="font-sans text-[13px] font-light text-muted mt-12">
                Sidst opdateret: Maj 2026
              </p>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
