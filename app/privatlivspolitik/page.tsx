import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Privatlivspolitik",
  description: "Læs om hvordan JournalKlar behandler personoplysninger.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-evergreen/60 mt-12 mb-5">
      {children}
    </h2>
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-sans text-[14px] font-medium text-evergreen uppercase tracking-[0.06em] mt-8 mb-3">
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
    <div className="grid grid-cols-[160px_1fr] gap-4 py-3 border-b border-sand">
      <span className="font-sans text-[13px] font-medium text-evergreen/70 self-start pt-0.5">{label}</span>
      <span className="font-sans text-[14px] font-light text-body leading-[1.7]">{value}</span>
    </div>
  );
}

function DataTable({ children }: { children: React.ReactNode }) {
  return <div className="border-t border-sand mb-6">{children}</div>;
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse font-sans text-[14px]">
        <thead>
          <tr className="border-b border-sand">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left font-medium text-evergreen/70 text-[12px] tracking-[0.06em] uppercase py-3 pr-6 last:pr-0"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-sand last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="font-light text-body leading-[1.65] py-3 pr-6 last:pr-0 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
            <div className="max-w-[720px]">

              <h1 className="mb-6">Privatlivspolitik</h1>

              <p className="font-sans text-[17px] font-light text-body leading-[1.85] mb-4">
                Denne politik beskriver hvordan vi behandler personoplysninger i forbindelse
                med journalklar.dk og app.journalklar.dk. Vi behandler kun det vi har brug for,
                og vi sælger ikke data til tredjeparter.
              </p>
              <p className="font-sans text-[15px] font-light text-body leading-[1.85] mb-0">
                Et vigtigt skel: journalklar.dk (marketingsitet) og app.journalklar.dk (appen)
                behandler meget forskellig data, og involverer forskellige leverandører.
                Vi har forsøgt at gøre det tydeligt nedenfor.
              </p>

              {/* ── Dataansvarlig ── */}
              <SectionHeading>Dataansvarlig</SectionHeading>
              <address className="font-sans text-[15px] font-light text-body leading-[1.85] not-italic mb-4">
                Lars Mullert<br />
                CVR: 35949542<br />
                Anneberghøj 1,1<br />
                9000 Aalborg<br />
                Danmark<br />
                <a href="mailto:lars@journalklar.dk" className="text-evergreen border-b border-evergreen/30 hover:border-evergreen no-underline">
                  lars@journalklar.dk
                </a>
              </address>
              <Body>
                <strong className="font-medium text-evergreen">Bemærkning om appen:</strong> Når du som psykolog bruger JournalKlar til at strukturere
                noter om dine klienter, er du dataansvarlig for klientdata. JournalKlar er
                databehandler. Det reguleres af databehandleraftalen der underskrives ved oprettelse.
              </Body>

              {/* ── journalklar.dk ── */}
              <ContextHeading>journalklar.dk · marketingsitet</ContextHeading>

              <SubHeading>Besøgsstatistik</SubHeading>
              <DataTable>
                <DataRow label="Hvad" value="Anonymiserede besøgsdata (sidevisninger, trafikkilde, enhedstype)." />
                <DataRow label="Formål" value="Forstå hvordan marketingsitet bruges så vi kan forbedre det." />
                <DataRow label="Retsgrundlag" value="Samtykke (GDPR art. 6, stk. 1, litra a)." />
                <DataRow label="Opbevaring" value="14 måneder (styret af Google Analytics)." />
                <DataRow label="Bemærkning" value="Behandles kun hvis du har accepteret statistikcookies. Google Ireland Limited er delvist selvstændig dataansvarlig, ikke udelukkende vores databehandler." />
              </DataTable>

              <SubHeading>Tilmelding og betaling</SubHeading>
              <DataTable>
                <DataRow label="Hvad" value="Navn, e-mailadresse, betalingsoplysninger." />
                <DataRow label="Formål" value="Oprette og administrere abonnement, sende kvitteringer." />
                <DataRow label="Retsgrundlag" value="Opfyldelse af aftale (GDPR art. 6, stk. 1, litra b)." />
                <DataRow label="Opbevaring" value="Abonnementets varighed + 5 år (bogføringsloven)." />
                <DataRow label="Bemærkning" value="Kortoplysninger håndteres udelukkende af Quickpay og gemmes aldrig hos os." />
              </DataTable>

              <SubHeading>Direkte henvendelser</SubHeading>
              <DataTable>
                <DataRow label="Hvad" value="Navn og e-mailadresse når du skriver til os." />
                <DataRow label="Formål" value="Besvare henvendelsen." />
                <DataRow label="Retsgrundlag" value="Legitim interesse (GDPR art. 6, stk. 1, litra f)." />
                <DataRow label="Opbevaring" value="Slettes når henvendelsen er afsluttet og ikke længere relevant." />
              </DataTable>

              {/* ── Leverandører marketingsite ── */}
              <SectionHeading>Leverandører · journalklar.dk</SectionHeading>
              <Body>Følgende tredjepart modtager data i forbindelse med journalklar.dk:</Body>
              <Table
                headers={["Leverandør", "Formål", "Data", "Region"]}
                rows={[
                  ["Google Ireland Limited", "Besøgsstatistik (kun ved samtykke)", "Anonymiserede besøgsdata", "EU"],
                  ["Alunta ApS", "Abonnementsadministration", "Navn, email, abonnementsstatus", "Danmark"],
                  ["Quickpay A/S", "Betalingsformidling", "Betalingsoplysninger", "Danmark"],
                ]}
              />
              <Body>
                Google Ireland Limited er ikke en traditionel databehandler, de er delvist
                selvstændig dataansvarlig for data indsamlet via Google Analytics.
              </Body>

              {/* ── app.journalklar.dk ── */}
              <ContextHeading>app.journalklar.dk · appen</ContextHeading>

              <SubHeading>Journalnoter og udkast</SubHeading>
              <DataTable>
                <DataRow label="Hvad" value="De noter du selv skriver i appen." />
                <DataRow label="Formål" value="Generere et struktureret journaludkast." />
                <DataRow label="Retsgrundlag" value="Opfyldelse af aftale (GDPR art. 6, stk. 1, litra b)." />
                <DataRow label="Opbevaring" value="Ingen. Dine noter behandles og slettes uden logning. Klientindhold gemmes ikke, logges ikke og bruges ikke til AI-træning." />
              </DataTable>

              <SubHeading>Brugsmetadata</SubHeading>
              <DataTable>
                <DataRow label="Hvad" value="Tidspunkt, svartid, tokenforbrug, flag-antal." />
                <DataRow label="Formål" value="Drift, fejlfinding og fakturering." />
                <DataRow label="Retsgrundlag" value="Legitim interesse (GDPR art. 6, stk. 1, litra f)." />
                <DataRow label="Opbevaring" value="12 måneder." />
                <DataRow label="Bemærkning" value="Ingen klientindhold indgår i metadata." />
              </DataTable>

              <SubHeading>Brugerprofil</SubHeading>
              <DataTable>
                <DataRow label="Hvad" value="Navn, e-mailadresse, abonnementsstatus." />
                <DataRow label="Formål" value="Login, adgangskontrol og abonnementsstyring." />
                <DataRow label="Retsgrundlag" value="Opfyldelse af aftale (GDPR art. 6, stk. 1, litra b)." />
                <DataRow label="Opbevaring" value="Abonnementets varighed + 5 år (bogføringsloven)." />
              </DataTable>

              {/* ── Leverandører app ── */}
              <SectionHeading>Leverandører · app.journalklar.dk</SectionHeading>
              <Body>
                Følgende leverandører behandler data som en del af appen.
                Ingen af disse leverandører modtager data fra journalklar.dk (marketingsitet).
              </Body>
              <Table
                headers={["Leverandør", "Rolle", "Klientindhold", "Region"]}
                rows={[
                  ["Scannet A/S (team.blue)", "Serverhosting, database, infrastruktur", "Ingen", "Danmark"],
                  ["AWS EMEA SARL", "AI-behandling via Bedrock eu-central-1", "Midlertidigt under generering", "Frankfurt, EU"],
                  ["Alunta ApS", "Abonnementsadministration", "Ingen", "Danmark"],
                  ["Quickpay A/S", "Betalingsformidling", "Ingen", "Danmark"],
                ]}
              />
              <Body>
                "Midlertidigt" betyder at klientindhold behandles under selve genereringen
                og ikke gemmes bagefter. AWS træner ikke modeller på input.
                Vi har databehandleraftaler med Scannet, AWS og Alunta.
              </Body>

              {/* ── Rettigheder ── */}
              <SectionHeading>Dine rettigheder</SectionHeading>
              <Body>Du har efter GDPR ret til at:</Body>
              <ul className="font-sans text-[15px] font-light text-body leading-[1.85] space-y-1 list-none p-0 mb-4">
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
              <Body>Henvendelser rettes til lars@journalklar.dk. Vi svarer inden 30 dage.</Body>

              {/* ── Cookies ── */}
              <SectionHeading>Cookies</SectionHeading>
              <Body>
                Vi bruger kun cookies på journalklar.dk, ikke i appen.
                Læs vores{" "}
                <a href="/cookiepolitik" className="text-evergreen border-b border-evergreen/30 hover:border-evergreen no-underline">
                  cookiepolitik
                </a>{" "}
                for detaljer.
              </Body>

              {/* ── Ændringer ── */}
              <SectionHeading>Ændringer</SectionHeading>
              <Body>
                Vi opdaterer denne politik hvis der sker ændringer i vores behandling.
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
