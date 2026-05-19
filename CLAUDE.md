# CLAUDE.md — JournalKlar Hjemmeside

## Hvad vi bygger

En statisk marketing landing page for JournalKlar.dk. Ingen database, ingen auth, ingen API-kald fra frontend.

---

## Tech stack

```
Next.js 14+ (App Router)
TypeScript
Tailwind CSS (konfigureret med custom tokens)
Google Fonts: Fraunces + DM Sans
Vercel (hosting)
```

Ingen UI-biblioteker. Ingen animations-biblioteker. Byg komponenterne direkte.

---

## Designsystem

### Farver (tailwind.config.ts)

```ts
colors: {
  parchment: '#F7F4EF',   // primær baggrund — aldrig ren hvid
  evergreen: '#1D3A2F',   // headlines, brand, primær tekst
  graphite:  '#2C2C2C',   // brødtekst
  orange:    '#E04500',   // CTA-knapper og advarselselementer — brug sparsomt
  sand:      '#E8E4DF',   // borders, dividers, sekundære baggrunde
}
```

### Typografi

```
Fraunces (serif)  → h1, h2, store talformater, citater
DM Sans (sans)    → alt andet
```

```
h1:            Fraunces 400, clamp(44px, 6vw, 72px), tracking -0.02em
h2:            Fraunces 400, clamp(28px, 3.5vw, 44px), tracking -0.015em
section-label: DM Sans 500, 11px, tracking 0.14em, UPPERCASE, text-evergreen
body:          DM Sans 300, 17px, leading-relaxed
```

### Geometri og spacing

Sharp corners overalt — ingen border-radius på knapper, cards eller bokse.
Undtagelse: app-screenshot frames må have rounded-t-lg.

Sektioner: py-24 px-16. Max-width: max-w-[1100px] mx-auto.
Dividers: border-t border-sand.

---

## Sidestruktur

```
Nav
Hero                ← headline + sub + trust marker + CTA + screenshot-preview
Genkendelse         ← problemet psykologen kender
Tillid              ← hvem står bag
SaadanVirkerDet     ← 3-trins grid
Sikkerhed           ← dataflow-illustration + tekst
IPraksis            ← app-illustration med eksempelindhold
Afgrænsning         ← hvad produktet ikke er
PrisOgCTA           ← pris + primær CTA
Footer
```

Subpages (bygges efter landing page er godkendt): /om · /manifest · /sikkerhed · /gdpr · /faq

### Filstruktur

```
/app
  layout.tsx
  page.tsx
  /om/page.tsx
  /sikkerhed/page.tsx
  /gdpr/page.tsx
  /faq/page.tsx
/components
  /sections
    Nav.tsx · Hero.tsx · Genkendelse.tsx · Tillid.tsx
    SaadanVirkerDet.tsx · Sikkerhed.tsx · IPraksis.tsx
    Afgrænsning.tsx · PrisOgCTA.tsx · Footer.tsx
  /ui
    Button.tsx · SectionLabel.tsx · Divider.tsx
    AppFrame.tsx · DataFlow.tsx
/lib
  constants.ts
```

---

## Produktfakta

```
Produkt:       AI-assisteret journalnotatværktøj til psykologer i privatpraksis
Målgruppe:     Autoriserede privatpraktiserende psykologer i Danmark (~3.900)
Lovgrundlag:   BEK nr. 1361 af 24/11/2025
Kerneforskel:  Post-session only — ingen optagelse eller transcription under session
AI-lag:        AWS Bedrock eu-central-1 — ingen logning, ingen træning, ingen tredjeparter
Hosting:       DanDomain VPS, Skanderborg, ISO 27001
Pris:          199 kr./md. eller 1.999 kr./år (ekskl. moms)
Prøveperiode:  30 dage gratis
Diktering:     Tilkøb +50 kr./md. — næste version
```

---

## Tone

Siden skal føles som en psykolog der forklarer sit arbejde til en kollega.

Må gerne: faglig, rolig, ærlig, varm, præcis, dansk.
Må ikke: startup-agtig, oversælgende, klinisk kold, engelsk-farvet.
Aldrig: "kraftfuld", "revolutionerende", "seamless", unødvendige adjektiver.

---

## Regler

- Baggrund er altid parchment — aldrig white eller gray-*
- Sharp corners — ingen rounded klasser undtagen på app-frames
- Ingen animationer med mindre det specifikt bedes om
- Ingen eksterne UI-biblioteker
- Ingen billeder — illustrationer er HTML/SVG
- Copy er placeholders — brug [PLACEHOLDER] og spørg ikke om indhold
