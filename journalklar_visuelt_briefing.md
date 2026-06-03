# JournalKlar — Visuelt Redesign Briefing til Claude Code

**Version:** 2.0  
**Formål:** Komplet briefing til Claude Code for visuel forbedring af journalklar-web (Next.js + Tailwind, Vercel). Gælder kun marketingsitet — ikke app.journalklar.dk.  
**Udgangspunkt:** Design-DNA-dokument (`journalklar_design_dna_referencer.md`) + analyse af nuværende site (PDF + live URLs).

---

## 0. Kernepræmis

JournalKlar er et fagligt dansk journalværktøj til privatpraktiserende psykologer. Det bruger AI, men designet må ikke kommunikere AI-magi, startup-hype eller SaaS-glans.

**Designambition i ét sætning:**  
Papir frem for plastik. Journal frem for dashboard. Faglig ro frem for konverteringsstøj.

**Visuel test (brug den løbende):**  
Hvis siden ville fungere næsten uændret til et AI-mødeopsummeringsværktøj, en B2B productivity-app eller et generisk SaaS-produkt — er designet forkert.

---

## 1. Hvad der allerede er rigtigt (RØR IKKE)

Disse elementer er korrekte og skal bevares præcis som de er:

### 1.1 Farvepalette ✓
```
--color-bg:         #F7F4EF   (Parchment — dominerende baggrund)
--color-text:       #1D3A2F   (Evergreen — primær tekst + accenter)
--color-orange:     #E04500   (sparsom accent)
--color-border:     lys varm grå
--color-text-muted: varm grå
```
Paletten er korrekt. Evergreen som tekstfarve er det rigtige valg.

### 1.2 Typografi ✓
- **Fraunces** (serif) til H1/H2/H3 — giver journalagtig, redaktionel tone
- **DM Sans** til brødtekst, labels, navigation — klar og læsbar
- Section labels i small caps med letter-spacing (fx "SÅDAN VIRKER DET") — præcis rigtigt

### 1.3 "Kræver stillingtagen"-elementet ✓
Orange ramme, ikon, label + forklarende tekst. Fungerer som en faglig margin-note. Præcis den rigtige tone — ikke en fejl, ikke en alarm. Bevar implementeringen.

### 1.4 Produktmockup (split-pane) ✓
Rånoter til venstre, journaludkast til højre. Det er den stærkeste sektion på siden. Vis et konkret produkt, ikke abstrakte illustrationer. Bevar strukturen.

### 1.5 Copy-tonen ✓
"Du vurderer. Du selekterer. Du skriver dine noter. JournalKlar strukturerer dem." — præcis rigtig. Rør ikke ved copy uden eksplicit instruktion.

### 1.6 Navigationen ✓
Enkel sticky nav. Fungerer. Ingen ændringer nødvendige.

---

## 2. Hvad der skal ændres (prioriteret liste)

### PRIORITET 1 — Kritiske DNA-brud

#### 2.1 Fjern "ANBEFALET"-badge fra pricing

**Problem:** "ANBEFALET"-labelen på årskortet er klassisk SaaS-konverteringspsykologi. Design-DNA'en siger eksplicit: *"Undgå overdrevne 'mest populær'-badges."*

**Løsning:**
- Fjern ANBEFALET-labelen helt
- De to prisplaner skal fremstå som ligeværdige valgmuligheder
- Sekundær information (besparelse) kan beholdes som neutral tekst, IKKE som orange fremhævning
- Ingen visuel "vinder" i pricing

```
FØR:  [ANBEFALET] header på årskortet, orange "Spar 389 kr." tekst
EFTER: Ingen badge. "Svar til 166 kr./md." som dæmpet grå tekst, ikke orange.
```

#### 2.2 Fjern checkmark-featurelister fra pricing-kortene

**Problem:** Checkmarks med punktlister er standard SaaS-konverteringsmønstre. Design-DNA'en: *"Undgå lange featurelister."*

**Løsning:**
- Månedlig: ét kort, pris, tre linjer max tekst, én CTA
- Årsabonnement: ét kort, pris, "Alt fra månedlig, plus:" + maks to ekstra punkter som ren tekst — ingen checkmarks
- CTA-knap: én per kort, rolig Evergreen-farve

**Nyt pricing-layout:**
```
MÅNEDLIG                    ÅRSABONNEMENT
199 kr./md.                 1.999 kr./år
ekskl. moms · ingen binding ekskl. moms · faktureres én gang
                            Svarende til 166 kr./md.

Ubegrænsede journaludkast   Alt fra månedlig
BEK 1361/2025               Prioriteret support
Databehandleraftale inkl.

[Prøv gratis i 30 dage]     [Vælg årsabonnement]
```

#### 2.3 Redesign "Problem"-sektionens tre kolonner

**Problem:** "01 Nye krav. 02 AI kan hjælpe. 03 Det vigtigste..." er præcis det klassiske "tre feature cards"-layout som design-DNA'en eksplicit afviser: *"Undgå generiske 'how it works'-blokke med tre ens kort."*

**Løsning — vælg én af disse:**

**Option A (anbefalet):** Løs tekst-sektion — ingen cards
```
[H2] Journalføringen er blevet mere krævende. Ikke mindre faglig.

[Ingress-tekst]

[Delelement 1 som et afsnit med label]
NYE KRAV. SAMME TRAVLE PRAKSIS.
Journalen skal være mere præcis...

[Delelement 2 som et afsnit med label]
AI KAN HJÆLPE — MEN IKKE OVERTAGE.
Mange psykologer...

[Delelement 3 som et afsnit med label]
DET VIGTIGSTE KAN IKKE ALTID TRANSSKRIBERES.
En psykologs vurdering...
```

**Option B:** Én bred tekstblok med tre afsnit adskilt af tynde borders — ingen box-model, ingen shadow, ingen card-logik.

---

### PRIORITET 2 — Visuel støj der skal reduceres

#### 2.4 Orange farve bruges for hyppigt

**Problem:** Orange bruges på: "Kræver stillingtagen", "Hvad JournalKlar gør"-header, "Hvad JournalKlar ikke gør"-header, "Spar 389 kr.", prøveperiode-bold-tekst. Det er for mange steder. Orange mister sin signalværdi.

**Regel:** Orange bruges KUN til "Kræver stillingtagen"-elementet. Alle andre steder erstattes med Evergreen eller muted grå.

```
FØR:  Orange "Hvad JournalKlar gør" / "Hvad JournalKlar ikke gør"
EFTER: Evergreen eller plain label-tekst i muted
```

#### 2.5 "Hvad JournalKlar er — og ikke er"-sektionen

**Problem:** To-kolonner med orange headers og checkmarks/kryds er ved at glide mod SaaS-feature-sammenligning.

**Løsning:**
- Fjern orange headers
- Fjern checkmarks og X-ikoner (eller brug subtile ikoner, ikke neon checkmarks)
- Brug simple labels: "Gør" og "Gør ikke" i small caps / muted
- Eller: omformuler til én prosatekst der forklarer afgrænsningen — refer til /tilgang-siden for detaljer

#### 2.6 "Radikal Transparens"-blokken i sikkerhedssektionen

**Problem:** Tekst vises med meget lav kontrast (lys grå mod hvid/parchment). WCAG-brud. 

**Løsning:** Teksten skal have minimum 4.5:1 kontrastforhold. Brug `--color-text-muted` men sikr kontrasten. Overvej Evergreen-farven direkte.

---

### PRIORITET 3 — Layout og rytme

#### 2.7 "Tre trin. Ingen oplæring."-sektionen

**Nuværende:** Tre bordered cards med fade-numre. Det er relativt diskret — cards er ikke tunge.

**Forbedring:** De tre cards er acceptable, men overvej alternativet: numererede afsnit i en enkelt kolonne med tydelige labels. Det ville føles mere som et fagligt dokument.

Hvis cards beholdes:
- Borders skal være tynde og varme (ikke kold grå)
- Ingen shadow
- Fadede numre (01, 02, 03) er fine — de er dekorative, ikke badges

#### 2.8 Sektionsluft og rytme

Design-DNA'en: *"Meget luft. Ingen pynt uden funktion."*

- Øg vertical spacing mellem sektioner (sections bør have min. 120px padding top/bottom)
- Undgå at sektioner presser sig op mod hinanden
- Produktmockup-sektionen kan med fordel fylde mere i bredden (max-width op til 1100px på desktop)

#### 2.9 CTA-knapper

**Nuværende:** "Start din gratis prøveperiode" fremstår meget afdæmpet/ghostet — muligvis for usynlig.

**Regel:**
- Primær CTA: solid Evergreen baggrund, hvid tekst — tydelig men ikke råbende
- Sekundær CTA: outline / tekst-link stil
- ALDRIG: "Boost din praksis", "Start din AI-rejse", "Revolutionér din journalføring"
- Korrekt primær CTA-tekst: `Prøv gratis i 30 dage`

```css
.cta-primary {
  background: #1D3A2F;
  color: white;
  padding: 14px 28px;
  font-family: DM Sans;
  font-weight: 500;
  border-radius: 4px; /* skarpe hjørner, ikke pill */
  letter-spacing: 0;
}
```

---

## 3. Hvad der IKKE skal tilføjes

Disse elementer må ikke tilføjes selv om de "forbedrer konvertering":

- Gradients (hverken lilla, grøn eller nogen anden)
- Glow-effekter eller box-shadow på hero-elementer
- Social proof section med logoer eller citater (medmindre ægte og relevante)
- Animerede tal/counters
- "Trusted by X psychologists" badges
- Testimonial-cards
- Scroll-triggered animationer udover simple fade-in
- Bento grid layouts
- Glassmorphism på nogen elementer
- Mørk mode / dark hero sections
- AI-relaterede ikoner (sparkle ✨, robot, neural network illustrations)
- Låse-ikoner til at signalere sikkerhed (brug tekst i stedet)

---

## 4. Komponentregler

### 4.1 Cards

Hvis cards bruges:
```
border: 1px solid #E5E0D8  (varm lys grå)
border-radius: 4px          (moderate, skarpe snarere end pill)
background: transparent eller #FDFBF7
box-shadow: INGEN
padding: 24-32px
```

### 4.2 Labels / Section identifiers

```
font-size: 11-12px
font-weight: 500
letter-spacing: 0.1em
text-transform: uppercase
color: var(--color-text-muted)
margin-bottom: 16px
```

### 4.3 Ikoner

Brug kun Lucide-ikoner (eller tilsvarende simple lineære). Maks 1-2 ikoner pr. sektion. Ingen:
- Skjolde som sikkerhedsikoner
- Låse
- Sparkle/magic icons
- Robotter

### 4.4 Dataflow-diagram (sikkerhedssektionen)

Design-DNA'en foreslår et konkret flow frem for trust-cards:

```
Dine noter → JournalKlar-app → EU-baseret AI-behandling → Journaludkast → Ingen varig opbevaring
```

Implementer dette som en horisontal flow med pile (→) og tekst. Simpel HTML/CSS. Ingen fancy diagrambibliotek.

---

## 5. Tilstandselementer og UI-states

### 5.1 "Kræver stillingtagen"-komponenten (bevar, men standardisér)

```
background: lys amber/gul-beige (#FFF8F0 eller lignende)
border-left: 3px solid #E04500
border-radius: 2-4px
padding: 12-16px
label: "MANGLER — KRÆVER STILLINGTAGEN" (small caps, orange)
tekst: DM Sans, normal weight, Evergreen
```

Dette er produktets visuelle DNA-element. Det skal fremstå konsekvent overalt.

### 5.2 "Journaludkast · Til godkendelse"-badge

Grøn/Evergreen baggrund, lille pill — viser status. Acceptabelt som det er.

---

## 6. Mobil

Prioritér:
- Hero: H1 max 2 linjer, stor nok til mobilskærm
- Produktmockup: stack vertikalt (rånoter over journaludkast)
- Pricing: stack kortene vertikalt, primær CTA under hvert kort
- FAQ: stor tap target (min 44px høj per accordion)
- Navigation: hamburger eller komprimeret

---

## 7. Accessibility (WCAG)

- Al tekst: minimum 4.5:1 kontrastforhold (brug contrast checker)
- Focus states: synlige, Evergreen outline
- Alle knapper: har accessible label
- Accordion (FAQ): korrekt aria-expanded
- Produktmockup: alt-tekst eller aria-label der beskriver indholdet

---

## 8. Sektionsrækkefølge (forsiden)

Brug denne rækkefølge — den er korrekt:

1. **Hero** — produktbeskrivelse + primær CTA + sekundær trust-link
2. **Faglig præmis** — "Det at skrive dine egne noter..." (beholdes som det er)
3. **Problem** — restruktureres fra cards til tekst (se 2.3)
4. **Sådan virker det** — tre trin (let optimeret)
5. **I praksis** — produktmockup split-pane (bevar)
6. **Data og fortrolighed** — fire punkter + flow-diagram
7. **Et redskab. Ikke en autopilot.** — redesign (se 2.5)
8. **Hvem står bag** — beholdes
9. **Pricing** — redesign (se 2.1-2.2)
10. **FAQ** — beholdes

---

## 9. Subpage-specifikt

### /sikkerhed

Prioritér:
- Dokumentationsæstetik (ikke marketing)
- Konkrete udsagn frem for trust-badges
- Teknisk dataflow-diagram
- Underleverandørtabel (Scannet, AWS, Alunta, Quickpay)
- Ingen låse-ikoner

### /om

Beholdes stort set. Personlig, rolig tone. Lars' navn og titel uden overdreven design.

### /tilgang

Beholdes. Prosa-tung side — det er korrekt.

---

## 10. Endelig designtest (brug denne løbende)

Stil dig selv spørgsmålet:

> Kan denne sektion, dette kort, denne farve, dette ikon eller denne animation bruges næsten uændret på et generisk SaaS-produkt?

Hvis ja: simplificér, fjern, eller reformulér.

Det korrekte slutresultat er en side, der giver psykologen følelsen:

> "Det her forstår min praksis. Det her prøver ikke at overtage mit ansvar. Det her kan jeg godt undersøge nærmere."

---

*Briefing udarbejdet på baggrund af live site-analyse (journalklar-web.vercel.app), PDF-screenshot af forside, og design-DNA-dokument (journalklar_design_dna_referencer.md).*
