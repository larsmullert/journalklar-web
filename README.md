# JournalKlar — Marketing Site

Marketing site for [journalklar.dk](https://www.journalklar.dk).
Et specialiseret journalværktøj til privatpraktiserende psykologer i Danmark.

## Tech stack
- Next.js 14+ (App Router) · TypeScript · Tailwind CSS
- Google Fonts: Source Serif 4 + Source Sans 3
- Hosting: Vercel (auto-deploy via GitHub)

## Local dev
npm install
npm run dev
# → http://localhost:3000

## Nøgledokumentation
- CLAUDE.md — tech stack, designsystem, tone og regler for dette projekt
- DESIGN.md — autoritativ designreference (farver, typografi, komponenter)
- DESIGN_LOG.md — historisk log over designbeslutninger og ændringer
- AGENTS.md — workflow-regler for autonome agenter

## Sidestruktur
/ · /tilgang · /sikkerhed · /saadan-virker-journalklar · /om · /faq
/privatlivspolitik · /databehandleraftale · /cookiepolitik

## Deploy
Deploy sker automatisk via git push til main-branch.
Vercel auto-deployer fra GitHub.
Kør aldrig vercel deploy eller vercel link direkte.

## Kontakt
lars@journalklar.dk
