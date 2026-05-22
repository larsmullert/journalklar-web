import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Privatlivspolitik",
  description: "Læs om hvordan JournalKlar behandler personoplysninger.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-evergreen/60 mt-12 mb-4">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-sans text-[15px] font-medium text-evergreen mb-2 mt-8">
      {children}
    </h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[15px] font-light text-body leading-[1.85] mb-4">
      {children}
    </p>
  );
}

function DataRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4 py-3 border-b border-sand">
      <span className="font-sans text-[13px] font-medium text-evergreen/70">{label}</span>
      <span className="font-sans text-[14px] font-light text-body leading-[1.7]">{value}</span>
    </div>
  );
}

export default function PrivatlivspolitikPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-16 px-6 md:pt-[100px] md:pb-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="max-w-[680px]">

              <h1 className="mb-6">Privatlivspolitik</h1>

              <p className="font-sans text-[17px] font-light text-body leading-[1.85] mb-0">
                Denne politik beskriver, hvordan vi behandler personoplysninger i forbindelse
                med journalklar.dk og JournalKlar-produktet. Vi behandler kun det, vi har
                brug for, og vi sælger ikke data til tredjeparter.
              </p>

              <SectionHeading>Dataansvarlig</SectionHeading>
              <address className="font-sans text-[15px] font-light text-body leading-[1.85] not-italic">
                Lars Mullert<br />
                CVR: 35949542<br />
                Anneberghøj 1,1<br />
                9000 Aalborg<br />
                Danmark<br />
                <a href="mailto:lars@journalklar.dk" className="text-evergreen border-b border-evergreen/30 hover:border-evergreen no-underline">
                  lars@journalklar.dk
                </a>
              </address>

              <SectionHeading>Hvilke oplysninger behandler vi og hvorfor?</SectionHeading>

              <SubHeading>Besøg på journalklar.dk</SubHeading>
              <div className="border-t border-sand">
                <DataRow label="Hvad" value="Anonymiserede besøgsdata (sidevisninger, trafikkilde, enhedstype)." />
                <DataRow label="Formål" value="Forstå hvordan marketingsitet bruges." />
                <DataRow label="Retsgrundlag" value="Samtykke (cookiebanner)." />
                <DataRow label="Opbevaring" value="Styres af Google Analytics — slettes efter 14 måneder." />
                <DataRow label="Bemærkning" value="Behandles kun hvis du har accepteret statistikcookies." />
              </div>

              <SubHeading>Abonnement og betaling</SubHeading>
              <div className="border-t border-sand">
                <DataRow label="Hvad" value="Navn, e-mailadresse, betalingsoplysninger." />
                <DataRow label="Formål" value="Oprette og administrere dit abonnement, sende kvitteringer." />
                <DataRow label="Retsgrundlag" value="Opfyldelse af aftale (GDPR art. 6, stk. 1, litra b)." />
                <DataRow label="Opbevaring" value="Så længe abonnementet er aktivt + 5 år af hensyn til bogføringsloven." />
                <DataRow label="Bemærkning" value="Kortoplysninger håndteres udelukkende af vores betalingsudbyder og gemmes aldrig hos os." />
              </div>

              <SubHeading>Brug af JournalKlar-appen</SubHeading>
              <div className="border-t border-sand">
                <DataRow label="Hvad" value="De noter du selv skriver i appen til strukturering." />
                <DataRow label="Formål" value="Generere journaludkast." />
                <DataRow label="Retsgrundlag" value="Opfyldelse af aftale (GDPR art. 6, stk. 1, litra b)." />
                <DataRow label="Opbevaring" value="Intet gemmes. Dine noter behandles og slettes uden logning (zero data retention-arkitektur)." />
                <DataRow label="Bemærkning" value="Vi opbevarer ikke klientindhold. Det gælder også AI-behandlingen — intet bruges til træning af modeller." />
              </div>

              <SubHeading>Direkte henvendelser</SubHeading>
              <div className="border-t border-sand">
                <DataRow label="Hvad" value="Navn og e-mailadresse når du skriver til os." />
                <DataRow label="Formål" value="Besvare din henvendelse." />
                <DataRow label="Retsgrundlag" value="Legitim interesse (GDPR art. 6, stk. 1, litra f)." />
                <DataRow label="Opbevaring" value="Slettes når henvendelsen er afsluttet og ikke længere relevant." />
              </div>

              <SectionHeading>Underdatabehandlere</SectionHeading>
              <Body>Vi bruger følgende underdatabehandlere:</Body>
              <ul className="font-sans text-[15px] font-light text-body leading-[1.85] mb-4 space-y-1 list-none p-0">
                <li>Scannet A/S (team.blue group) — serverhosting, Skanderborg, Danmark</li>
                <li>AWS (Amazon Web Services EMEA SARL) — AI-behandling, eu-central-1 (Frankfurt)</li>
                <li>Alunta ApS — abonnementsadministration, Danmark</li>
                <li>Quickpay A/S — betalingsformidling, Danmark</li>
                <li>Google Ireland Limited — analysedata (kun ved samtykke)</li>
              </ul>
              <Body>
                Vi har databehandleraftaler med alle underdatabehandlere.
                Data behandles inden for EU/EØS.
              </Body>

              <SectionHeading>Dine rettigheder</SectionHeading>
              <Body>Du har efter GDPR ret til at:</Body>
              <ul className="font-sans text-[15px] font-light text-body leading-[1.85] mb-4 space-y-1 list-none p-0">
                <li>— Få indsigt i hvilke oplysninger vi har om dig</li>
                <li>— Få forkerte oplysninger rettet</li>
                <li>— Få oplysninger slettet (under visse betingelser)</li>
                <li>— Gøre indsigelse mod behandlingen</li>
                <li>— Trække samtykke tilbage (påvirker ikke tidligere lovlig behandling)</li>
                <li>— Klage til Datatilsynet:{" "}
                  <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-evergreen border-b border-evergreen/30 hover:border-evergreen no-underline">
                    dt.dk
                  </a>
                </li>
              </ul>
              <Body>
                Henvendelser rettes til lars@journalklar.dk. Vi svarer inden 30 dage.
              </Body>

              <SectionHeading>Cookies</SectionHeading>
              <Body>
                Læs vores{" "}
                <a href="/cookiepolitik" className="text-evergreen border-b border-evergreen/30 hover:border-evergreen no-underline">
                  cookiepolitik
                </a>{" "}
                for information om cookies og samtykke.
              </Body>

              <SectionHeading>Ændringer</SectionHeading>
              <Body>
                Vi opdaterer denne politik, hvis der sker ændringer i vores behandling.
                Den gældende version er altid tilgængelig på denne side.
              </Body>

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
