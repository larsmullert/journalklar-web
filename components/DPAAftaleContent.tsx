function DPASection({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginTop: "40px", marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid #E04500" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 500, color: "#1D3A2F", fontFamily: "var(--font-source-sans, sans-serif)", margin: 0 }}>
        {children}
      </h2>
    </div>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "13px", fontWeight: 500, color: "#1D3A2F", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px", marginTop: "20px" }}>
      {children}
    </p>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "15px", fontWeight: 300, color: "#505050", lineHeight: 1.85, marginBottom: "12px" }}>
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "15px", fontWeight: 300, color: "#505050", lineHeight: 1.85, listStyle: "none", padding: 0, marginBottom: "12px" }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: "4px" }}>— {item}</li>
      ))}
    </ul>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "16px", padding: "10px 0", borderBottom: "1px solid #E8E4DF" }}>
      <span style={{ fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "13px", fontWeight: 500, color: "#1D3A2F", opacity: 0.7 }}>{label}</span>
      <span style={{ fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "14px", fontWeight: 300, color: "#505050", lineHeight: 1.7 }}>{value}</span>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: "auto", marginBottom: "16px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-source-sans, sans-serif)", fontSize: "14px" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #E8E4DF" }}>
            {headers.map((h) => (
              <th key={h} style={{ textAlign: "left", fontWeight: 500, color: "#1D3A2F", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", padding: "10px 16px 10px 0", opacity: 0.7 }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid #E8E4DF" : "none" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ fontWeight: 300, color: "#505050", lineHeight: 1.65, padding: "10px 16px 10px 0", verticalAlign: "top" }}>
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

export default function DPAAftaleContent() {
  return (
    <div style={{ maxWidth: "720px" }}>

      {/* Parterne */}
      <DPASection>Parterne</DPASection>

      <SubLabel>Dataansvarlig</SubLabel>
      <Body>Den psykolog der opretter og anvender en JournalKlar-konto. Herefter kaldet "den dataansvarlige".</Body>

      <SubLabel>Databehandler</SubLabel>
      <div style={{ borderTop: "1px solid #E8E4DF" }}>
        <DataRow label="Navn" value="Lars Mullert" />
        <DataRow label="CVR" value="35949542" />
        <DataRow label="Adresse" value="Anneberghøj 1,1, 9000 Aalborg, Danmark" />
        <DataRow label="E-mail" value="lars@journalklar.dk" />
      </div>
      <Body>Herefter kaldet "databehandleren".</Body>

      {/* 1 */}
      <DPASection>1. Baggrund og formål</DPASection>
      <Body>
        Databehandleren stiller JournalKlar til rådighed: et AI-assisteret værktøj der hjælper
        privatpraktiserende psykologer med at strukturere egne noter til journaludkast i
        overensstemmelse med BEK nr. 1361 af 24/11/2025.
      </Body>
      <Body>
        I forbindelse med brug af JournalKlar behandler databehandleren personoplysninger på vegne
        af den dataansvarlige. Denne aftale regulerer vilkårene for denne behandling i
        overensstemmelse med GDPR artikel 28.
      </Body>

      {/* 2 */}
      <DPASection>2. Behandlingens genstand og varighed</DPASection>

      <SubLabel>Genstand</SubLabel>
      <Body>
        Databehandleren behandler de rånoter og kliniske oplysninger som den dataansvarlige selv
        skriver ind i JournalKlar med henblik på generering af et struktureret journaludkast.
      </Body>

      <SubLabel>Varighed</SubLabel>
      <Body>
        Aftalen er gældende så længe den dataansvarlige har et aktivt abonnement på JournalKlar.
        Ved opsigelse ophører aftalen automatisk.
      </Body>

      {/* 3 */}
      <DPASection>3. Behandlingens karakter og formål</DPASection>

      <SubLabel>Karakter</SubLabel>
      <Body>
        AI-assisteret strukturering af psykologens egne kliniske noter til et journaludkast.
        Behandlingen sker i RAM og klientindhold gemmes ikke efter generering.
      </Body>

      <SubLabel>Formål</SubLabel>
      <Body>
        At reducere den administrative byrde ved journalføring for den dataansvarlige, uden at den
        dataansvarliges kliniske selektion og faglige ansvar overtages af et automatiseret system.
      </Body>

      {/* 4 */}
      <DPASection>4. Type af personoplysninger og kategorier af registrerede</DPASection>

      <SubLabel>Type af personoplysninger</SubLabel>
      <Body>
        Kliniske oplysninger om psykologens klienter, herunder potentielt helbredsoplysninger og
        andre særligt følsomme personoplysninger i henhold til GDPR artikel 9.
      </Body>

      <SubLabel>Kategorier af registrerede</SubLabel>
      <Body>Klienter hos den dataansvarlige psykolog.</Body>

      <Body>
        <strong style={{ fontWeight: 500, color: "#1D3A2F" }}>Bemærkning:</strong> Databehandleren opfordrer den dataansvarlige til at anvende
        dataminimering, dvs. kun at skrive de oplysninger ind i JournalKlar der er nødvendige for
        at generere et fagligt forsvarligt journaludkast.
      </Body>

      {/* 5 */}
      <DPASection>5. Den dataansvarliges instruks</DPASection>
      <Body>
        Databehandleren må alene behandle personoplysninger efter dokumenteret instruks fra den
        dataansvarlige.
      </Body>

      <SubLabel>Den dataansvarliges instruks er</SubLabel>
      <BulletList items={[
        "At strukturere de indskrevne noter til et journaludkast",
        "At markere manglende oplysninger med [MANGLER: ...]",
        "At returnere udkastet til den dataansvarlige",
        "At slette klientindholdet umiddelbart efter generering",
      ]} />

      <SubLabel>Databehandleren må ikke</SubLabel>
      <BulletList items={[
        "Gemme, logge eller persistere rånoter eller journaludkast",
        "Anvende klientindhold til træning af AI-modeller",
        "Videregive klientindhold til tredjeparter",
        "Behandle klientindhold til andre formål end journaludkastgenerering",
      ]} />

      {/* 6 */}
      <DPASection>6. Fortrolighed</DPASection>
      <Body>
        Databehandleren sikrer at personer med adgang til personoplysninger er underlagt
        tavshedspligt. Databehandleren er forpligtet til ikke at videregive oplysninger om den
        dataansvarliges klienter til uvedkommende.
      </Body>

      {/* 7 */}
      <DPASection>7. Sikkerhed</DPASection>
      <Body>
        Databehandleren træffer i henhold til GDPR artikel 32 passende tekniske og organisatoriske
        foranstaltninger, herunder:
      </Body>
      <BulletList items={[
        "Klientindhold behandles udelukkende i RAM og slettes via try/finally cleanup efter hver generering, aldrig skrevet til disk eller database",
        "Forbindelser beskyttet med HTTPS/TLS 1.3",
        "Input valideres og saniteres inden AI-behandling",
        "Adgangskontrol med bcrypt-hashede adgangskoder og session-tokens",
        "PostgreSQL query-logging deaktiveret for genereringsrequests",
        "Response headers: no-cache, no-store, must-revalidate",
        "AI-behandling sker inden for EU (AWS Bedrock, eu-central-1, Frankfurt)",
        "Serverinfrastruktur: Scannet A/S, Skanderborg, Danmark, ISO 27001-certificeret og med en ISAE 3402 Type 2-revisionserklæring",
      ]} />

      {/* 8 */}
      <DPASection>8. Underdatabehandlere</DPASection>
      <Body>
        Databehandleren anvender følgende underdatabehandlere til behandling af klientindhold:
      </Body>
      <Table
        headers={["Underdatabehandler", "Rolle", "Region", "Klientindhold"]}
        rows={[
          ["Scannet A/S (team.blue)", "Serverhosting og infrastruktur", "Danmark", "Transiterer krypteret"],
          ["Amazon Web Services EMEA SARL", "AI-behandling via Bedrock eu-central-1", "Frankfurt, EU", "Midlertidigt under generering, træner ikke modeller"],
        ]}
      />
      <Body>
        Følgende leverandører er tilknyttet abonnement og betaling og modtager IKKE klientindhold:
      </Body>
      <Table
        headers={["Leverandør", "Rolle", "Region"]}
        rows={[
          ["Alunta ApS", "Abonnementsadministration", "Danmark"],
          ["Quickpay A/S", "Betalingsformidling", "Danmark"],
        ]}
      />
      <Body>
        Databehandleren har indgået databehandleraftaler med Scannet A/S og Amazon Web Services EMEA SARL.
      </Body>
      <Body>
        Ved ændringer i underdatabehandlere varsles den dataansvarlige på lars@journalklar.dk med
        mindst 30 dages varsel. Den dataansvarlige kan i denne periode gøre indsigelse. Fortsættes
        brugen af JournalKlar efter fristens udløb anses ændringen for accepteret.
      </Body>

      {/* 9 */}
      <DPASection>9. Den registreredes rettigheder</DPASection>
      <Body>
        Databehandleren bistår den dataansvarlige med at overholde forpligtelserne i henhold til
        GDPR artikel 32-36, herunder indsigtsanmodninger og anmodninger om sletning fra registrerede
        (klienter).
      </Body>
      <Body>
        Da klientindhold ikke gemmes efter generering, vil JournalKlar i de fleste tilfælde ikke
        have data at udlevere eller slette ud over brugsmetadata uden klientidentifikation.
      </Body>

      {/* 10 */}
      <DPASection>10. Sletning ved ophør</DPASection>
      <Body>Ved opsigelse af abonnement:</Body>
      <BulletList items={[
        "Brugerprofil og teknisk metadata slettes 30 dage efter opsigelse",
        "Klientindhold er aldrig gemt og kan ikke slettes (eksisterer ikke)",
        "Betalingsdata opbevares i 5 år i henhold til bogføringsloven",
      ]} />
      <Body>
        Den dataansvarlige kan anmode om øjeblikkelig sletning af brugerprofil ved at skrive til
        lars@journalklar.dk.
      </Body>

      {/* 11 */}
      <DPASection>11. Audit og dokumentation</DPASection>
      <Body>
        Databehandleren stiller de oplysninger til rådighed der er nødvendige for at påvise
        overholdelse af artikel 28, og giver mulighed for audit og inspektion foretaget af den
        dataansvarlige eller en af denne bemyndiget revisor med rimeligt varsel.
      </Body>

      {/* 12 */}
      <DPASection>12. Lovvalg og tvister</DPASection>
      <Body>
        Aftalen er underlagt dansk ret. Tvister søges løst i mindelighed. Kan parterne ikke nå til
        enighed, afgøres tvisten ved de danske domstole med Aalborg Byret som værneting.
      </Body>
      <Body>
        Klager over behandling af personoplysninger kan indgives til Datatilsynet:{" "}
        <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" style={{ color: "#1D3A2F", borderBottom: "1px solid rgba(29,58,47,0.3)", textDecoration: "none" }}>
          dt.dk
        </a>
      </Body>

      {/* Versionering */}
      <DPASection>Versionering</DPASection>
      <div style={{ borderTop: "1px solid #E8E4DF" }}>
        <DataRow label="Version" value="1.0" />
        <DataRow label="Ikrafttrædelse" value="Maj 2026" />
        <DataRow label="Opdateres" value="Ved væsentlige ændringer i behandling eller underdatabehandlere." />
      </div>

    </div>
  );
}
