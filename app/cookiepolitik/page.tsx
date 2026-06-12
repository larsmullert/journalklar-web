import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Cookiepolitik",
  description: "Cookiepolitik for journalklar.dk: JournalKlar bruger kun nødvendige cookies til session og cookievalg. Ingen sporings- eller markeringscookies.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-evergreen/60 mt-12 mb-5">
      {children}
    </h2>
  );
}

function SubHeading({ children, badge }: { children: React.ReactNode; badge?: string }) {
  return (
    <div className="flex items-center gap-3 mt-8 mb-3">
      <span className="font-sans text-[14px] font-medium text-evergreen uppercase tracking-[0.06em]">{children}</span>
      {badge && (
        <span className="font-sans text-[11px] font-medium tracking-[0.08em] uppercase text-muted border border-sand px-2 py-0.5">
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

function ContextHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginTop: "48px", marginBottom: "24px", paddingBottom: "8px", borderBottom: "1px solid #E04500" }}>
      <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E04500", marginBottom: "8px" }}>
        Gælder for
      </p>
      <h2 style={{ fontSize: "28px", fontWeight: 400, color: "#1D3A2F", fontFamily: "var(--font-source-sans, DM Sans, sans-serif)", margin: 0 }}>
        {children}
      </h2>
    </div>
  );
}

function CookieRow({ name, description }: { name: string; description: string }) {
  return (
    <div className="grid grid-cols-[160px_1fr] gap-4 py-3 border-b border-sand">
      <code className="font-mono text-[13px] text-evergreen self-start pt-0.5">{name}</code>
      <span className="font-sans text-[14px] font-light text-body leading-[1.7]">{description}</span>
    </div>
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

              <p className="font-sans text-[17px] font-light text-body leading-[1.85] mb-4">
                Vi forsøger at holde det enkelt. Denne side forklarer præcist hvilke cookies
                journalklar.dk bruger, hvorfor, og hvad du kan gøre ved det.
              </p>
              <p className="font-sans text-[15px] font-light text-body leading-[1.85] mb-0">
                Cookies bruges KUN på journalklar.dk, marketingsitet.
                app.journalklar.dk sætter ingen cookies og tracker ingen besøgende.
              </p>

              <SectionHeading>Hvad er cookies?</SectionHeading>
              <Body>
                Cookies er små tekstfiler der gemmes i din browser når du besøger en hjemmeside.
                De kan bruges til at huske præferencer, forstå hvordan siden bruges, og måle
                effekten af markedsføring.
              </Body>

              <ContextHeading>journalklar.dk · marketingsitet</ContextHeading>

              <SubHeading badge="Altid aktiv">Nødvendige cookies</SubHeading>
              <div className="border-t border-sand mb-4">
                <CookieRow
                  name="jk_consent"
                  description="Gemmer dit cookievalg lokalt i din browser. Ingen data sendes til vores server. Udløber efter 12 måneder."
                />
              </div>

              <SubHeading badge="Kræver samtykke">Statistikcookies</SubHeading>
              <Body>
                Hvis du accepterer statistikcookies, bruger vi Google Analytics 4 til at forstå
                hvordan journalklar.dk bruges: hvilke sider der besøges, hvor besøgende kommer
                fra, og hvor de forlader siden.
              </Body>
              <Body>
                <strong className="font-medium text-evergreen">Vigtigt:</strong> Google Analytics 4 er ikke en traditionel databehandler vi har fuld
                kontrol over. Google Ireland Limited er selvstændig dataansvarlig for en del af
                de data de indsamler. Du accepterer dermed også Googles egne betingelser.
              </Body>
              <Body>
                Data er anonymiserede. Google sletter data efter 14 måneder.
                Databehandler: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </Body>
              <Body>Disse cookies sættes ikke før du har givet samtykke.</Body>

              <SubHeading badge="Kræver samtykke">Marketingcookies</SubHeading>
              <Body>
                Hvis du accepterer marketingcookies, kan vi måle effekten af annoncer på
                Google Ads og Meta. Vi bruger ikke marketingcookies til at opbygge profiler
                eller til retargeting, kun til at måle vores egne annoncer.
              </Body>
              <Body>
                Databehandlere (ved samtykke): Google Ireland Limited og Meta Platforms Ireland Limited.
              </Body>
              <Body>Disse cookies sættes ikke før du har givet samtykke.</Body>

              <ContextHeading>app.journalklar.dk · appen</ContextHeading>
              <SectionHeading>Hvad vi ikke gør</SectionHeading>
              <ul className="font-sans text-[15px] font-light text-body leading-[1.85] space-y-1 list-none p-0 mb-4">
                <li>— Vi bruger ikke cookies i JournalKlar-appen (app.journalklar.dk)</li>
                <li>— Vi sælger ikke data til tredjeparter</li>
                <li>— Vi bruger ikke cookies til at opbygge personprofiler</li>
              </ul>

              <SectionHeading>Google Consent Mode v2</SectionHeading>
              <Body>
                journalklar.dk bruger Google Consent Mode v2. Det betyder at Google som
                udgangspunkt ikke må sætte analyse- eller reklamecookies. Først når du
                aktivt accepterer de relevante kategorier opdateres tilladelsen.
              </Body>

              <SectionHeading>Sådan ændrer du dit valg</SectionHeading>
              <Body>
                Klik på "Cookieindstillinger" i bunden af siden når som helst.
                Du kan også slette cookies i din browser under indstillinger → privatliv → cookies.
              </Body>

              <SectionHeading>Kontakt</SectionHeading>
              <address className="font-sans text-[15px] font-light text-body leading-[1.85] not-italic">
                Lars Mullert<br />
                CVR: 35949542<br />
                Anneberghøj 1,1 · 9000 Aalborg<br />
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
