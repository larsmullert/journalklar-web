# JournalKlar — Design System

Dette dokument er den autoritative designreference for alle frontend-ændringer
på journalklar.dk. Læs det før du skriver én linje kode eller CSS.

---

## Produkt og målgruppe

JournalKlar er et fagligt journalværktøj til privatpraktiserende psykologer i
Danmark. Det bruger AI til at strukturere psykologens egne noter til et
journaludkast — men psykologen vurderer, selekterer og godkender altid selv.

Målgruppen er autoriserede psykologer, 30–55 år, der er vant til faglige
dokumenter, ikke SaaS-produkter. De er skeptiske over for AI og følsomme
over for om et værktøj respekterer deres faglige ansvar.

**Designets opgave:** Skab tillid. Vis faglighed. Reducer friktion.
Imponér ikke.

---

## Æstetisk retning

**Redaktionel dokumentæstetik — ikke SaaS-produkt.**

Siden skal føles som en kombination af:
- et fagligt tidsskrift
- en gennemarbejdet dokumentationsside
- et konkret arbejdsredskab

Tænk: roligt, præcist, dansk, fagligt tilbagetrukket.

Ikke: startup-energi, AI-magi, konverteringspres, dashboard-glans.

---

## Fonte

```
Display / Headlines:  Source Serif 4
                      Vægte: 300 (light), 400 (regular)
                      Stil: optical size auto, italic til pull quotes
                      Bruges til: H1, H2, H3, logo, pull quotes

Body / UI:            Source Sans 3
                      Vægt: 400 regular overalt — ingen bold undtagen labels
                      Bruges til: brødtekst, navigation, knapper, labels, FAQ

Google Fonts import:
https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300;1,8..60,400&family=Source+Sans+3:wght@300;400;500&display=swap
```

**Typografisk princip:** Store spring mellem niveauer. H1 skal føles stor og
rolig — ikke aggressiv. Brødtekst skal være let og luftig, ikke kompakt.
Labels i small caps med letter-spacing, aldrig bold.

---

## Farver

```css
--parchment:      #F7F4EF   /* Dominant baggrund — bruges overalt */
--evergreen:      #1D3A2F   /* Primær tekst, headlines, knapper */
--evergreen-80:   rgba(29,58,47,0.80)
--evergreen-20:   rgba(29,58,47,0.20)
--evergreen-08:   rgba(29,58,47,0.08)
--orange:         #E04500   /* Sparsom accent — KUN til "Kræver stillingtagen" */
--sand:           #E8E4DF   /* Sektionsbaggrunde, borders, dividers */
--graphite:       #2C2C2C   /* Brødtekst på lys baggrund */
--muted:          #8A8580   /* Labels, sekundær tekst */
--muted-light:    #B8B4AF   /* Decorative elementer */
--body:           #505050   /* Primær brødtekst */
--white:          #FFFFFF   /* Kort, panels, app-frames */
```

**Farveprincip:** Parchment dominerer. Evergreen forankrer. Orange er
reserveret til ét element: "Kræver stillingtagen". Brug aldrig orange
andre steder — ikke links, ikke headers, ikke highlights.

Sand bruges til at differentiere sektioner der trænger til kontrast
(manifest-strip, app-demo-baggrund).

---

## Spacing

```
--section-v:    120px   /* Vertikal padding på alle sections */
--section-h:    64px    /* Horisontal padding / container gutter */
--content-max:  1100px  /* Max bredde på indhold */
--text-max:     660px   /* Max bredde på ren tekst */
--gap-xl:       80px
--gap-lg:       48px
--gap-md:       32px
--gap-sm:       16px
```

**Rumprincip:** Meget luft. Sektioner skal have plads til at ånde.
Undgå at elementer presses sammen. 120px section padding er minimum.

---

## Komponenter

### Knapper
```
Primær:   Evergreen baggrund (#1D3A2F), hvid tekst
          Padding: 15px 30px
          Font: Source Sans 3, 15px, weight 400
          Border-radius: 0px (skarpe hjørner — ingen pill, ingen runde)
          Ingen shadow

Sekundær: Ingen baggrund, evergreen tekst
          Border-bottom: 1px solid evergreen-20
          Ingen border-radius
```

### Cards / Panels
```
Border:        1px solid var(--sand)
Border-radius: 0px (skarpe hjørner)
Background:    transparent eller #FFFFFF
Box-shadow:    INGEN — nogensinde
Padding:       32–48px
```

### Section labels
```
Font:           Source Sans 3, 11px, weight 500
Letter-spacing: 0.15em
Text-transform: uppercase
Color:          var(--muted)
Display:        flex med lille streg (22px × 1px, muted-light) foran
```

### "Kræver stillingtagen"-element
```
Background:   rgba(224,69,0,0.04)
Border:       1px solid rgba(224,69,0,0.28)
Padding:      9–12px
Label:        "MANGLER — KRÆVER STILLINGTAGEN"
              Source Sans 3, 9px, uppercase, orange, letter-spacing 0.08em
Tekst:        Source Sans 3, 10.5px, #6A6A6A, weight 300
```

Dette er sidens visuelle signatur. Det er det mest distinkte element.
Det skal bruges i produktmockups og aldrig misbruges som generisk warning.

---

## Layout-principper

**To-kolonne hero:** Tekst til venstre, produktpreview til højre.
Alt synligt above the fold. Preview er ikke dekorativt — det er beviset.

**Sektionsrytme:** Alterné mellem parchment og sand baggrunde for at
skabe visuel rytme uden farver. Parchment → Sand → Parchment → Evergreen
(mørk sektion) → Parchment.

**Produktflader > illustrationer:** Vis det faktiske UI. Ingen abstrakte
netværksgrafikker, ingen floating screenshots, ingen generiske mockup-devices.

**Én sektion, én opgave:** Hver sektion skal kunne besvare: hvad gør
denne sektion for brugeren? Hvis svaret er uklart — fjern sektionen.

---

## Motion

Kun diskret, funktionel animation:
- Scroll-triggered fade-in + translateY(18px) på sektionselementer
- Staggered delays (0.08s per element) — ikke alt på én gang
- Subtil hover på CTA (mørkere evergreen)
- Accordion-toggle på FAQ

**Aldrig:**
- Scroll-jacking
- Parallax
- Auto-play video
- Floating/flying elementer
- Glød eller pulse-effekter

---

## Hvad der ikke må forekomme

Disse valg er forbudte uanset hvad der ellers ser rigtigt ud:

**Fonte:** Inter, Roboto, DM Sans, Fraunces, Plus Jakarta Sans, Space Grotesk

**Farver:** Lilla gradienter, blå cyber-farver, neon accenter, mørk
futuristisk baggrund som primær æstetik, for mange farver på én side

**Komponenter:** Bento grids, glassmorphism, tunge card-shadows,
generiske feature-card-rækker, tre ens cards på én række, badge-spam,
checkmark-featurelister i pricing, "Anbefalet"-badges

**Ikoner:** Skjolde, låse, sparkle/magic, robotter, AI-noder,
abstrakte netværksillustrationer. Sikkerhed bevises med tekst — ikke ikoner.

**Copy-tone:** "Revolutionér", "Boost", "AI-rejse", "Magisk automatisering",
"Fremtidens psykologpraksis". Aldrig.

---

## Visuel test

Stil dette spørgsmål om ethvert element:

> Kunne dette bruges næsten uændret på et generisk AI SaaS-produkt,
> et B2B productivity-tool eller et amerikansk startup-produkt?

Hvis ja: simplificér, fjern, eller reformulér.

Det rigtige slutresultat er en side der giver psykologen følelsen:

> "Det her forstår min praksis.
>  Det her prøver ikke at overtage mit ansvar.
>  Det her kan jeg godt undersøge nærmere."
