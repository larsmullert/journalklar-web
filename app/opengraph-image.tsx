import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'JournalKlar'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F7F4EF',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px 100px',
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: '#E04500',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 32,
            fontFamily: 'serif',
          }}
        >
          TIL PRIVATPRAKTISERENDE PSYKOLOGER
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: '#1D3A2F',
            lineHeight: 1.1,
            fontFamily: 'serif',
            marginBottom: 32,
          }}
        >
          JournalKlar
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#2C2C2C',
            fontFamily: 'sans-serif',
            fontWeight: 300,
          }}
        >
          Journaludkast fra dine egne faglige noter.
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 100,
            fontSize: 22,
            color: '#1D3A2F',
            fontFamily: 'sans-serif',
            opacity: 0.5,
          }}
        >
          journalklar.dk
        </div>
      </div>
    ),
    { ...size }
  )
}
