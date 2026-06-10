export default function BekraeftelsePage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#F7F4EF" }}>

      {/* Minimal header — samme som /tilmeld */}
      <div style={{ borderBottom: "1px solid #E8E4DF", padding: "20px 24px" }}>
        <a
          href="/"
          style={{
            fontFamily: "var(--font-source-serif, serif)",
            fontSize: "19px",
            fontWeight: 400,
            color: "#1D3A2F",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          JournalKla<span style={{ color: "#E04500" }}>r</span>
        </a>
      </div>

      <div style={{ maxWidth: "540px", margin: "0 auto", padding: "60px 24px 80px" }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily: "var(--font-source-sans, sans-serif)",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#E04500",
          marginBottom: "12px",
        }}>
          Konto oprettet
        </p>

        {/* Heading */}
        <h1 style={{
          fontFamily: "var(--font-source-serif, serif)",
          fontSize: "clamp(28px, 3.5vw, 40px)",
          fontWeight: 400,
          color: "#1D3A2F",
          lineHeight: 1.2,
          marginBottom: "28px",
        }}>
          Din konto er klar
        </h1>

        {/* Body */}
        <p style={{
          fontFamily: "var(--font-source-sans, sans-serif)",
          fontSize: "16px",
          fontWeight: 300,
          color: "#505050",
          lineHeight: 1.85,
          marginBottom: "16px",
        }}>
          Vi har sendt en bekræftelsesmail til din indbakke. Tjek eventuelt din spam- eller
          reklame-mappe: den kan godt lande der første gang.
        </p>

        <p style={{
          fontFamily: "var(--font-source-sans, sans-serif)",
          fontSize: "16px",
          fontWeight: 300,
          color: "#505050",
          lineHeight: 1.85,
          marginBottom: "16px",
        }}>
          Klik på linket i mailen for at aktivere din konto. Herefter kan du gå direkte ind
          på{" "}
          <a
            href="https://app.journalklar.dk"
            style={{
              color: "#1D3A2F",
              borderBottom: "1px solid rgba(29,58,47,0.3)",
              textDecoration: "none",
            }}
          >
            app.journalklar.dk
          </a>
          {" "}og begynde at bruge værktøjet.
        </p>

        <p style={{
          fontFamily: "var(--font-source-sans, sans-serif)",
          fontSize: "16px",
          fontWeight: 300,
          color: "#505050",
          lineHeight: 1.85,
          marginBottom: "16px",
        }}>
          De første 30 dage er gratis.
        </p>

        <p style={{
          fontFamily: "var(--font-source-sans, sans-serif)",
          fontSize: "16px",
          fontWeight: 300,
          color: "#505050",
          lineHeight: 1.85,
          marginBottom: "16px",
        }}>
          Vi sender en mail 7 dage inden prøveperioden slutter, så du ikke bliver overrasket.
        </p>

        <p style={{
          fontFamily: "var(--font-source-sans, sans-serif)",
          fontSize: "16px",
          fontWeight: 300,
          color: "#505050",
          lineHeight: 1.85,
          marginBottom: "0",
        }}>
          Det er JournalKlars mål, at du bliver så glad for værktøjet, at du gerne vil betale
          199 kr. om måneden. Det synes vi er en meget fair pris.
        </p>

        {/* Sign-off */}
        <div style={{ marginTop: "40px" }}>
          <p style={{
            fontFamily: "var(--font-source-sans, sans-serif)",
            fontSize: "15px",
            fontWeight: 300,
            color: "#8A8580",
            lineHeight: 1.7,
            marginBottom: "16px",
          }}>
            Med venlig hilsen
          </p>
          <p style={{
            fontFamily: "var(--font-source-serif, serif)",
            fontSize: "17px",
            fontWeight: 400,
            color: "#1D3A2F",
            lineHeight: 1.4,
            marginBottom: "4px",
          }}>
            Lars Mullert Pedersen
          </p>
          <p style={{
            fontFamily: "var(--font-source-sans, sans-serif)",
            fontSize: "14px",
            fontWeight: 300,
            color: "#8A8580",
            lineHeight: 1.6,
          }}>
            Psykolog og grundlægger af JournalKlar
          </p>
        </div>

        {/* PS */}
        <p style={{
          fontFamily: "var(--font-source-sans, sans-serif)",
          fontSize: "13px",
          fontWeight: 300,
          color: "#8A8580",
          lineHeight: 1.75,
          marginTop: "32px",
        }}>
          PS. Om du fortsætter eller ej, må du ikke blive overrasket, hvis du bliver
          kontaktet angående feedback. Det er den eneste måde JournalKlar kan blive bedre.
        </p>

      </div>
    </main>
  );
}
