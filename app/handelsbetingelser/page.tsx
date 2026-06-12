import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import PrintButton from "@/components/ui/PrintButton";

export const metadata = {
  title: "Handelsbetingelser",
  description: "Handelsbetingelser for JournalKlar: vilkår for abonnement, priser, fortrydelsesret og opsigelse til privatpraktiserende psykologer i Danmark.",
};

// ─── Lokale hjælpekomponenter (samme stil som DPAAftaleContent) ──────────────

function Section({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginTop: "40px", marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid #E04500" }}>
      <h2 style={{ fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "18px", fontWeight: 500, color: "#1D3A2F", margin: 0 }}>
        {children}
      </h2>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "15px", fontWeight: 300, color: "#505050", lineHeight: 1.85, marginBottom: "12px" }}>
      {children}
    </p>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "15px", fontWeight: 300, color: "#505050", lineHeight: 1.85, listStyle: "none", padding: 0, marginBottom: "12px" }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: "4px" }}>— {item}</li>
      ))}
    </ul>
  );
}

// ─── Side ────────────────────────────────────────────────────────────────────

export default function HandelsbetingelserPage() {
  return (
    <>
      <style>{`
        @media print {
          nav { display: none !important; }
          footer { display: none !important; }
          .print-hide { display: none !important; }
          body { font-size: 12px; }
        }
      `}</style>

      <Nav />
      <main>
        <section className="py-16 px-6 md:pt-[100px] md:pb-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">

            {/* Header-række */}
            <div className="flex items-start justify-between gap-8 mb-10">
              <div>
                <p className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase mb-3" style={{ color: "#E04500" }}>
                  Handelsbetingelser
                </p>
                <h1 className="mb-3">
                  Handelsbetingelser for JournalKlar
                </h1>
                <p className="font-sans text-[15px] font-light text-muted leading-[1.7]">
                  Version 1.0 — [indsæt dato] · CVR-nummer: 35949542
                </p>
              </div>
              <div className="print-hide flex-shrink-0 pt-2">
                <PrintButton />
              </div>
            </div>

            {/* ─── Indhold ─────────────────────────────────────────────── */}

            <Section>1. Aftalens parter</Section>
            <Body>
              Disse handelsbetingelser regulerer aftalen mellem JournalKlar (herefter "vi" eller "JournalKlar"),
              CVR 35949542, og den person der opretter en konto og anvender tjenesten (herefter "du" eller "abonnenten").
            </Body>
            <Body>
              JournalKlar er et AI-assisteret journalværktøj til autoriserede psykologer i privat praksis i Danmark.
            </Body>

            <Section>2. Ydelsens karakter</Section>
            <Body>
              JournalKlar er et digitalt abonnementsprodukt. Ved oprettelse af en konto får du adgang til en webbaseret
              tjeneste, der på baggrund af dine egne noter genererer et struktureret journaludkast.
            </Body>
            <Body>
              <strong>Vigtigt:</strong> JournalKlar genererer altid et udkast. Du er som autoriseret psykolog ansvarlig
              for det endelige indhold i din journal i overensstemmelse med BEK nr. 1361 af 24. november 2025 og
              autorisationsloven. JournalKlar erstatter ikke din faglige vurdering og selektering.
            </Body>

            <Section>3. Prøveperiode</Section>
            <Body>
              Ved oprettelse af en ny konto får du 30 dages gratis adgang med fuld funktionalitet.
              Der kræves ikke betalingskort for at starte prøveperioden.
            </Body>
            <Body>
              Prøveperioden kan kun benyttes én gang per person og per virksomhed (CVR-nummer).
            </Body>

            <Section>4. Abonnement og priser</Section>
            <Body>
              Efter prøveperioden kræves et aktivt abonnement for at anvende JournalKlar.
            </Body>
            <Bullets items={[
              <><strong>Månedligt:</strong> 199 kr/md ekskl. moms, faktureret månedligt forud.</>,
              <><strong>Årligt:</strong> 1.999 kr/år ekskl. moms, faktureret årligt forud.</>,
            ]} />
            <Body>
              Alle priser er eksklusiv dansk moms (25%). Den samlede pris inklusiv moms er henholdsvis
              248,75 kr/md og 2.498,75 kr/år.
            </Body>
            <Body>
              Vi forbeholder os ret til at ændre priserne med 30 dages varsel. En prisstigning giver dig ret
              til at opsige abonnementet med øjeblikkelig virkning inden ikrafttrædelsesdatoen.
            </Body>

            <Section>5. Betaling</Section>
            <Body>
              Betaling håndteres af vores betalingsudbyder Alunta (alunta.com) og Quickpay. Du modtager en
              elektronisk faktura ved hver betaling til den e-mailadresse, du har oplyst ved oprettelse.
            </Body>
            <Body>
              Ved manglende betaling vil din adgang blive suspenderet. Vi vil forsøge at opkræve betaling igen
              og kontakte dig via e-mail. Hvis betaling fortsat udebliver, forbeholder vi os ret til at opsige abonnementet.
            </Body>

            <Section>6. Fortrydelsesret</Section>
            <Body>
              Som erhvervsdrivende, der køber en digital ydelse til brug i din erhvervsvirksomhed, gælder
              forbrugeraftalelovens fortrydelsesret ikke for dette køb.
            </Body>
            <Body>
              Hvis du er forbruger, har du 14 dages fortrydelsesret. Ved oprettelse af en konto giver du udtrykkeligt
              samtykke til, at ydelsen starter straks, og at fortrydelsesretten dermed bortfalder fra det tidspunkt,
              ydelsen er taget i brug, jf. forbrugeraftalelovens § 18, stk. 2, nr. 1.
            </Body>

            <Section>7. Opsigelse</Section>
            <Body>
              Du kan til enhver tid opsige dit abonnement. Opsigelsen træder i kraft ved udgangen af den allerede
              betalte periode. Du bevarer adgang til tjenesten frem til periodens udløb. Der refunderes ikke for
              påbegyndte perioder.
            </Body>
            <Body>
              Opsigelse sker via din kontoprofil eller ved henvendelse til os på{" "}
              <a
                href="mailto:lars@journalklar.dk"
                style={{ color: "#1D3A2F", borderBottom: "1px solid rgba(29,58,47,0.3)", textDecoration: "none" }}
              >
                lars@journalklar.dk
              </a>
              .
            </Body>
            <Body>
              Vi kan opsige din konto med 30 dages varsel uden begrundelse. Ved væsentlig misligholdelse kan vi
              opsige kontoen med øjeblikkelig virkning.
            </Body>

            <Section>8. Dine data og behandling af personoplysninger</Section>
            <Body>
              JournalKlar er bygget efter et zero-retention-princip: dine noter og de genererede udkast gemmes ikke
              på vores servere. Al behandling sker i arbejdshukommelsen og slettes umiddelbart efter, at udkastet
              er returneret til dig.
            </Body>
            <Body>
              Vi gemmer udelukkende: kontooplysninger (navn, e-mail), abonnementsstatus og tekniske metadata.
              Der gemmes aldrig klientoplysninger eller journalindhold.
            </Body>
            <Body>
              Databehandling er reguleret i vores databehandleraftale, som du accepterer ved oprettelse af din konto.
              Vores servere er placeret i Skanderborg, Danmark (Scannet A/S, team.blue). AI-behandlingen foregår på
              AWS-servere i Frankfurt, EU (eu-central-1).
            </Body>
            <Body>
              Læs vores fulde privatlivspolitik på{" "}
              <a
                href="/privatlivspolitik"
                style={{ color: "#1D3A2F", borderBottom: "1px solid rgba(29,58,47,0.3)", textDecoration: "none" }}
              >
                journalklar.dk/privatlivspolitik
              </a>
              .
            </Body>

            <Section>9. Ansvarsbegrænsning</Section>
            <Body>
              JournalKlar stiller et redskab til rådighed, der understøtter din journalføring. Vi påtager os ikke
              ansvar for:
            </Body>
            <Bullets items={[
              "indholdet i de genererede udkast",
              "tab opstået som følge af brug eller manglende mulighed for at bruge tjenesten",
              "indirekte tab herunder tabt omsætning og driftstab",
            ]} />
            <Body>
              Vores samlede ansvar er under alle omstændigheder begrænset til det beløb, du har betalt til
              JournalKlar i de seneste 3 måneder forud for det skadesgivende forhold.
            </Body>

            <Section>10. Tilgængelighed og driftsstabilitet</Section>
            <Body>
              Vi bestræber os på at sikre høj tilgængelighed, men garanterer ikke uafbrudt adgang. Vi er ikke
              ansvarlige for driftsafbrydelser som følge af forhold uden for vores kontrol.
            </Body>

            <Section>11. Ændringer i betingelserne</Section>
            <Body>
              Vi kan opdatere disse handelsbetingelser. Væsentlige ændringer varsles pr. e-mail med mindst 30 dages
              varsel. Fortsat brug af tjenesten efter varslingsperiodens udløb betragtes som accept af de opdaterede
              betingelser.
            </Body>

            <Section>12. Kontakt</Section>
            <Body>
              JournalKlar · CVR: 35949542
              <br />
              <a
                href="mailto:lars@journalklar.dk"
                style={{ color: "#1D3A2F", borderBottom: "1px solid rgba(29,58,47,0.3)", textDecoration: "none" }}
              >
                lars@journalklar.dk
              </a>
              {" "}·{" "}
              <a
                href="/"
                style={{ color: "#1D3A2F", borderBottom: "1px solid rgba(29,58,47,0.3)", textDecoration: "none" }}
              >
                journalklar.dk
              </a>
            </Body>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
