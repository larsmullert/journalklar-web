export default function AuthorBox() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        borderTop: '1px solid #E8E4DF',
        paddingTop: '2rem',
        marginTop: '2.5rem',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          flexShrink: 0,
          width: 48,
          height: 48,
          backgroundColor: '#1D3A2F',
          color: '#F7F4EF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-source-sans), system-ui, sans-serif',
          fontWeight: 500,
          fontSize: 13,
          letterSpacing: '0.05em',
        }}
      >
        LM
      </div>
      <div>
        <p
          style={{
            fontFamily: 'var(--font-source-sans), system-ui, sans-serif',
            fontWeight: 500,
            color: '#1D3A2F',
            fontSize: 15,
            marginBottom: 4,
          }}
        >
          Lars Mullert Pedersen
        </p>
        <p
          style={{
            fontFamily: 'var(--font-source-sans), system-ui, sans-serif',
            fontWeight: 300,
            color: '#6B6860',
            fontSize: 14,
            marginBottom: 0,
          }}
        >
          Cand.psych., Aalborg Universitet 2025. Grundlægger af JournalKlar.
        </p>
      </div>
    </div>
  )
}
