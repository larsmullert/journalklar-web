<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure
may all differ from your training data. Read the relevant guide in
node_modules/next/dist/docs/ before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agentregel — JournalKlar Hjemmeside

## Obligatorisk inden kodeændringer
Læs disse filer inden du skriver én linje kode eller CSS:
1. DESIGN.md — autoritativ designreference. Gælder over CLAUDE.md ved konflikt.
2. CLAUDE.md — tech stack, tone, regler og produktfakta.

## Deploy
Deploy sker via git push — aldrig via Vercel CLI.
Kør: git add . && git commit -m '[beskrivelse]' && git push
Kør ALDRIG: vercel deploy, vercel link, vercel pull

## Forbudte operationer
- Rør ikke filer i app.journalklar.dk fra dette repository
- Installer ikke UI-biblioteker (shadcn, radix, headless UI, etc.)
- Brug ikke Inter, Roboto, DM Sans, Fraunces eller andre fonte end Source Serif 4 + Source Sans 3
- Tilføj ikke box-shadow på cards eller komponenter
- Tilføj ikke border-radius på knapper, cards eller bokse (undtagen app-frames)
- Brug ikke orange på andet end eyebrow-labels og "Kræver stillingtagen"-elementer

## Inden commit
- Kør: npm run build (skal være fejlfri)
- Kør: npm run lint (ingen nye fejl)
- Tjek at ingen ny kode bruger Fraunces, DM Sans, Inter eller andre ikke-godkendte fonte

## Filhierarki ved konflikt
DESIGN.md > CLAUDE.md > øvrige filer i /reference
