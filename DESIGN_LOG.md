# JournalKlar — Design Log

Primær reference: `DESIGN.md`

---

## Fase 1 — Forside

### Ændringer

**Orange-brug**
- `SectionLabel` (alle sektioner): `text-muted` → `text-orange`
  *Princip: eyebrow-labels er orange. Gælder Hero, ManifestStrip, SaadanVirkerDet, IPraksis, Afgrænsning, Sikkerhed, Tillid, PrisOgCTA, FAQ.*
- `Hero` eyebrow-div: `text-muted` → `text-orange`
- `Afgrænsning` dashlist-headers ("Hvad JournalKlar gør / ikke gør"): `text-muted` → `text-orange`

**Kontrastbrud (WCAG)**
- `Sikkerhed` → "Radikal transparens"-label: `text-parchment/40` → `text-parchment/70`
  *Kontrastforhold: ~3.3:1 (fail) → ~6.6:1 (pass). Dekorativ linje: parchment/30 → parchment/50.*

**Skriftvægte**
- `SaadanVirkerDet` trin-titler: `font-medium` (500) → `font-normal` (400)
- `Sikkerhed` promise-titler: `font-medium` → `font-normal`
- `Nav` links: `font-light` (300) → `font-normal` (400)
- `PrisOgCTA` CTA-tekst `<strong font-medium>` → `<span font-normal>`
  *Princip: Source Sans 3 weight 400 overalt — 500 kun på labels.*

**Knapspecifikation**
- `Hero` primær CTA: `px-8` (32px) → `px-[30px]` (spec 30px); `font-normal` ✓
- `PrisOgCTA` CTA-knap: `text-[16px] font-medium px-8 py-[18px]` → `text-[15px] font-normal px-[30px] py-[15px]`
  *Princip: DESIGN.md §Knapper — 15px, weight 400, padding 15px 30px.*

### Principper der nu er konsekvent gennemført

| Princip | Status |
|---|---|
| Orange KUN på "Kræver stillingtagen" + eyebrow-labels | ✓ |
| Source Sans 3 weight 400 overalt (500 kun labels) | ✓ |
| Source Serif 4 på H1/H2/H3/logo/pull-quotes | ✓ |
| Box-shadow: ingen | ✓ |
| Skarpe hjørner (ingen border-radius på cards/knapper) | ✓ |
| Primær CTA: evergreen bg, hvid tekst, 15px, 400, 15×30px | ✓ |
| Section labels: orange, 11px, 500, tracking 0.15em, lille streg foran | ✓ |
| WCAG 4.5:1 kontrast minimum | ✓ |

---

## Fase 2 — Undersider

### /om

**Orange-brug**
- Sidebar-label "Hvad JournalKlar gør": `text-muted` → `text-orange`
- "JournalKlar gør"-card header: `text-evergreen` → `text-orange`
- "JournalKlar gør ikke"-card header: `text-evergreen` → `text-orange`

**Topkanter**
- "JournalKlar gør"-kort: `[border-top:4px_solid_#1D3A2F]` → `[border-top:2px_solid_rgba(29,58,47,0.2)]`
- "JournalKlar gør ikke"-kort: `[border-top:4px_solid_#E8E4DF]` → fjernet (kun `border border-sand`)
  *Princip: sitet bruger ensartet 2px evergreen/20 accent — 4px solid var uacceptabelt tung.*

**Skriftvægte**
- Grundlæggernavn i hero-kort: `font-medium` → `font-normal`
- Grundlæggernavn i signaturblok: `font-medium` → `font-normal`
- Korttitler i "Læs mere": `font-medium` → `font-normal`
- Primær CTA "Se hvordan JournalKlar virker": `font-medium/px-7/py-16` → `font-normal/px-[30px]/py-[15px]`

**Signatur**
- Afsluttende signatur: `font-sans italic text-muted` → `font-serif italic text-evergreen`
  *Princip: italic bruges kun på Source Serif 4, og matcher Tillid.tsx-konventionen.*

### /sikkerhed

**Orange-brug**
- "JournalKlar" og "Transskriptions-AI" card-labels (Dataminimering): `text-evergreen` → `text-orange`
- "Gemmes ikke" og "Gemmes" card-labels (Opbevaring): `text-evergreen` → `text-orange`

**Topkanter**
- "JournalKlar"- og "Gemmes ikke"-kort: `[border-top:4px_solid_#1D3A2F]` → `[border-top:2px_solid_rgba(29,58,47,0.2)]`
- "Transskriptions-AI"- og "Gemmes"-kort: `[border-top:4px_solid_#E8E4DF]` → fjernet

**Skriftvægte**
- "Kort sagt" korttitler: `font-medium` → `font-normal`
- Trin-titler i flowdiagram: `font-medium` → `font-normal`
- Systemkort-navne: `font-medium` → `font-normal`
- Leverandørtabel navnekolonne: `font-medium` → `font-normal`
- Hero CTA: `font-medium/px-7/py-[16px]` → `font-normal/px-[30px]/py-[15px]`

**Italic på Source Sans 3 → fjernet**
- "Kort sagt" note-tekster: `italic` fjernet
- Systemoverblik footnote: `italic` fjernet
- PDF-placeholder note: `italic` fjernet; `parchment/40` (WCAG ~3.3:1) → `parchment/70` (~6.6:1)

**Ghost link**
- Hero: `border-evergreen/25` → `border-evergreen/20` (konsistens)

### /tilgang

**Kontrastbrud (WCAG)**
- Hero statement-kort label "Arbejdsdelingen": `text-parchment/40` → `text-parchment/70` (~3.3:1 → ~6.6:1)
- Afgrænsning "Hvad JournalKlar gør" (på evergreen baggrund): `text-parchment/60` → `text-parchment/70`

**Orange-brug**
- Sammenligningskort labels "JournalKlar" og "Transskriptionsbaseret AI": `text-evergreen` → `text-orange`
- "AI med grænser"-section labels "AI må gerne hjælpe med" og "AI bør ikke overtage": `text-muted` → `text-orange`
- Afgrænsning "Hvad JournalKlar ikke gør" (på hvid baggrund): `text-muted` → `text-orange`

**Topkanter**
- "JournalKlar"-kort: `[border-top:4px_solid_#1D3A2F]` → `[border-top:2px_solid_rgba(29,58,47,0.2)]`
- "Transskriptionsbaseret AI"-kort: `[border-top:4px_solid_#E8E4DF]` → fjernet

**Skriftvægte**
- "Her kan AI være hjælpsomt.": `font-medium` → `font-normal`
- "Det er et arbejdsskridt.": `font-medium` → `font-normal`
- Produktprincip-titler (grid): `font-medium` → `font-normal`
- "Men effektivitet er ikke et neutralt mål.": `font-medium` → `font-normal`
- "Men for at gøre det lettere at gøre ordentligt." inline span: `font-medium` → `font-normal`
- "Videre læsning" korttitler: `font-medium` → `font-normal`

**Italic på Source Sans 3 → fjernet**
- Signaturkort "Din vurdering. Vores struktur.": `italic` fjernet