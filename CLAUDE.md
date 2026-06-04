# CLAUDE.md — JournalKlar Hjemmeside

## Hvad vi bygger

En statisk marketing landing page for JournalKlar.dk. Ingen database, ingen auth, ingen API-kald fra frontend.

---

## Tech stack

```
Next.js 14+ (App Router)
TypeScript
Tailwind CSS (konfigureret med custom tokens)
Google Fonts: Source Serif 4 + Source Sans 3
Vercel (hosting)
```

Ingen UI-biblioteker. Ingen animations-biblioteker. Byg komponenterne direkte.

---

## Designsystem

Se DESIGN.md for den autoritative og fulde designreference — typografi, spacing, komponenter og forbudte valg. Ved enhver konflikt mellem CLAUDE.md og DESIGN.md gælder DESIGN.md.

### Farver (tailwind.config.ts)

```ts
colors: {
  parchment: '#F7F4EF',   // primær baggrund — aldrig ren hvid
  evergreen: '#1D3A2F',   // headlines, brand, primær tekst
  graphite:  '#2C2C2C',   // brødtekst
  orange:    '#E04500',   // Eyebrow-labels og "Kræver stillingtagen"-markering. Aldrig knapper, links eller brødtekst.
  sand:      '#E8E4DF',   // borders, dividers, sekundære baggrunde
}
```

### Typografi

```
Source Serif 4 (serif)  → h1, h2, store talformater, citater
Source Sans 3 (sans)    → alt andet
```

```
h1:            Source Serif 4 400, clamp(44px, 6vw, 72px), tracking -0.02em
h2:            Source Serif 4 400, clamp(28px, 3.5vw, 44px), tracking -0.015em
section-label: Source Sans 3 500, 11px, tracking 0.14em, UPPERCASE, text-evergreen
body:          Source Sans 3 300, 17px, leading-relaxed

Google Fonts:  https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300;1,8..60,400&family=Source+Sans+3:wght@300;400;500&display=swap
```

### Geometri og spacing

Sharp corners overalt — ingen border-radius på knapper, cards eller bokse.
Undtagelse: app-screenshot frames må have rounded-t-lg.

Sektioner: py-24 px-16. Max-width: max-w-[1100px] mx-auto.
Dividers: border-t border-sand.

---
## Responsivt design

Siden skal fungere på både desktop og mobil. Brug Tailwind breakpoints — md: for tablet og lg: for desktop. Aldrig hardkodede pixel-bredder på layout-elementer. Tommelfingerregler:

Grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Padding: px-6 md:px-12 lg:px-16
Typografi: brug de eksisterende clamp()-størrelser på h1/h2 — de skalerer automatisk
Nav: mobil burger-menu eller collapsed links under md:
Screenshot-preview og app-illustration: fuld bredde på mobil, centreret på desktop

---

## Referencefiler

Filer i /reference er inspirations- og analysefiler. De er ikke bindende krav.

Brug dem kun, når den aktuelle opgave eksplicit handler om deres emne:
- design-review.md bruges ved design- og UI-opgaver
- sikkerhed-analyse.md bruges ved /sikkerhed, data, GDPR og trust-copy
- journalklar-flows.html bruges kun ved teknisk gennemgang, dataflow og arkitektur
- mockup-v2.html bruges som visuel reference, ikke som sandhed for copy eller sikkerhedsclaims

Ved konflikt gælder:
1. Den aktuelle prompt
2. CLAUDE.md
3. Relevante filer i /reference
4. Ældre mockups og tidligere copy

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

Alle sider er bygget og live. Sitestruktur:
/ (forside) · /tilgang · /sikkerhed · /saadan-virker-journalklar
· /om · /faq · /privatlivspolitik · /databehandleraftale · /cookiepolitik

/manifest eksisterer ikke i navigationen og er ikke live.
/gdpr eksisterer ikke — juridiske sider hedder /privatlivspolitik,
/databehandleraftale og /cookiepolitik.

### Filstruktur

```
/app
  layout.tsx
  page.tsx
  /om/page.tsx
  /tilgang/page.tsx
  /sikkerhed/page.tsx
  /saadan-virker-journalklar/page.tsx
  /faq/page.tsx
  /privatlivspolitik/page.tsx
  /databehandleraftale/page.tsx
  /cookiepolitik/page.tsx
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
Målgruppe:     Privatpraktiserende psykologer i Danmark
Lovgrundlag:   BEK nr. 1361 af 24/11/2025
Kerneforskel:  Post-session only — ingen optagelse eller transcription under session
AI-lag:        AWS Bedrock eu-central-1.
               Dine input bruges ikke til modeltræning.
               Klientindhold gemmes ikke som journalindhold efter generering.
               Underleverandører beskrives på /sikkerhed.

Hosting:       Scannet VPS, Skanderborg, ISO 27001
Pris:          199 kr./md. eller 1.999 kr./år (ekskl. moms)
Prøveperiode:  30 dage gratis
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
- Motion: følg DESIGN.md § Motion. Scroll-triggered fade-in og funktionelle overgange er tilladt og specificeret. Ingen scroll-jacking, ingen parallax, ingen auto-play.
- Ingen eksterne UI-biblioteker
- Ingen billeder — illustrationer er HTML/SVG
- Hvis der ikke er leveret konkret copy, brug [PLACEHOLDER]. Hvis promptet indeholder færdig copy, skal den bruges

---

## Forbudte sikkerhedsformuleringer

Brug ikke:
- 100 % sikker
- ingen tredjeparter
- intet gemmes nogensinde
- ingen data gemmes
- dine data forlader aldrig Europa
- automatisk og uden undtagelse

Brug hellere:
- klientindhold gemmes ikke som journalindhold efter generering
- dine input bruges ikke til modeltræning
- klientindhold behandles inden for EU
- teknisk brugsmetadata kan gemmes uden klientindhold

---

## Deploy

Deploy sker via git push — ikke via Vercel CLI. Kør aldrig vercel link eller vercel deploy. Når du vil deploye, kør: git add . && git commit -m '[beskrivelse]' && git push. Vercel auto-deployer fra GitHub.