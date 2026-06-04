'use client';

// Note: metadata cannot be exported from a 'use client' file.
// Move to a server wrapper (app/faq/layout.tsx) if SEO metadata is needed.

import { useState } from 'react';

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    // Hvad JournalKlar er og ikke er
    {
      "@type": "Question",
      "name": "Hvad gør JournalKlar helt konkret?",
      "acceptedAnswer": { "@type": "Answer", "text": "Du skriver eller indtaler dine egne noter efter sessionen: observationer, temaer, interventioner, aftaler. JournalKlar strukturerer dem til et journaludkast baseret på journalføringskravene. Udkastet markerer tydeligt, hvis noget mangler din aktive stillingtagen. Du gennemgår, retter og overfører til dit eget journalsystem. Det er det." },
    },
    {
      "@type": "Question",
      "name": "Optager JournalKlar mine sessioner?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nej. JournalKlar optager hverken lyd, video eller samtalen. Udgangspunktet er altid dine egne noter efter sessionen, ikke en optagelse af det fortrolige rum." },
    },
    {
      "@type": "Question",
      "name": "Er JournalKlar et journalsystem?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nej. JournalKlar er ikke et journalsystem og erstatter ikke dit eksisterende. Det er et arbejdsredskab til ét konkret trin: fra dine rånoter til et struktureret journaludkast, du selv overfører til dit system." },
    },
    {
      "@type": "Question",
      "name": "Kan jeg bruge JournalKlar sammen med mit nuværende journalsystem?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ja. JournalKlar er ikke integreret med andre systemer. Du kopierer eller overfører udkastet manuelt til dit eget journalsystem. Det er en bevidst beslutning: du beholder kontrollen og overblikket." },
    },
    // Faglighed og ansvar
    {
      "@type": "Question",
      "name": "Hvem har ansvaret for journalen?",
      "acceptedAnswer": { "@type": "Answer", "text": "Det har du. JournalKlar leverer et udkast, aldrig en færdig journal. Det er altid dig som psykolog der gennemgår, vurderer, retter og godkender, hvad der overføres til journalen. Det ansvar kan ikke delegeres til et værktøj." },
    },
    {
      "@type": "Question",
      "name": "Hvad sker der, hvis udkastet mangler noget?",
      "acceptedAnswer": { "@type": "Answer", "text": "JournalKlar markerer tydeligt de steder i udkastet, hvor der mangler oplysninger jf. journalføringsbekendtgørelsen eller der kræves aktiv stillingtagen fra dig. Du afgør hvad der skal tilføjes eller justeres." },
    },
    {
      "@type": "Question",
      "name": "Hvorfor starter JournalKlar med mine egne noter og ikke en optagelse af sessionen?",
      "acceptedAnswer": { "@type": "Answer", "text": "Fordi den faglige efterbehandling af en session, der hvor du samler op, udvælger og formulerer din forståelse af klienten og samtalen, ikke bør outsources til en algoritme. Hvis AI'en optager og transskriberer samtalen og derefter udvælger det vigtige, risikerer du at blive passiv redaktør af en maskines forståelse. JournalKlar starter med dit faglige skøn. Ikke med en optagelse." },
    },
    // Journalføringskrav og BEK 1361/2025
    {
      "@type": "Question",
      "name": "Hvad betyder BEK 1361/2025 i praksis?",
      "acceptedAnswer": { "@type": "Answer", "text": "BEK 1361/2025 er den gældende journalføringsbekendtgørelse for psykologer. Den stiller krav til hvad en journal skal indeholde: kontaktårsag, psykisk tilstand, intervention, plan og aftaler. JournalKlar er bygget til at strukturere dine noter op mod disse krav og markere hvis relevante punkter mangler. Læs bekendtgørelsen på retsinformation.dk." },
    },
    {
      "@type": "Question",
      "name": "Markerer JournalKlar manglende oplysninger?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ja. Hvis dine noter ikke indeholder tilstrækkelige oplysninger til at udfylde et journalpunkt, fx konsultationsform eller plan for næste session, markeres det tydeligt i udkastet. Du ser præcist hvad der mangler din stillingtagen, inden du godkender." },
    },
    {
      "@type": "Question",
      "name": "Kan jeg bruge JournalKlar til første-, opfølgnings- og afslutningssamtaler?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ja. JournalKlar understøtter alle tre samtaletyper. Strukturen i udkastet tilpasses automatisk til hvilken type session du angiver." },
    },
    {
      "@type": "Question",
      "name": "Vejledningen til de nye journalføringskrav er forsinket. Hvad gælder i mellemtiden?",
      "acceptedAnswer": { "@type": "Answer", "text": "Fra 1. januar 2026 gælder den nye journalføringsbekendtgørelse. Den fagspecifikke vejledning fra Styrelsen for Patientsikkerhed er dog forsinket. Dansk Psykologforening anbefaler at journalføre som hidtil og altid journalføre ved tvivl. JournalKlar er bygget til at understøtte bekendtgørelsens krav som de foreligger nu." },
    },
    // Data, sikkerhed og fortrolighed
    {
      "@type": "Question",
      "name": "Bliver mine noter gemt i JournalKlar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nej. Dine noter behandles kun for at generere journaludkastet. Når udkastet er leveret, gemmes klientindholdet ikke i JournalKlar. Intet gemmes, intet logges, intet bruges til træning." },
    },
    {
      "@type": "Question",
      "name": "Trænes AI-modellen på mine input?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nej. Den AI-model der genererer dine udkast, bruger ikke dit input til træning. Det er kontraktuelt fastsat med AWS, ikke bare en hensigtserklæring." },
    },
    {
      "@type": "Question",
      "name": "Hvor behandles data?",
      "acceptedAnswer": { "@type": "Answer", "text": "Appen og databasen kører på dansk server i Skanderborg hos Scannet A/S. AI-behandlingen sker hos AWS i Frankfurt, inden for EU." },
    },
    {
      "@type": "Question",
      "name": "Er der databehandleraftale, og hvornår underskriver jeg den?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ja. Du underskriver en databehandleraftale, inden du går i gang. Den beskriver præcist hvad der behandles af hvem, hvor og på hvilket grundlag. Du kan vise den til din fagforening eller den, du samarbejder med om GDPR." },
    },
    {
      "@type": "Question",
      "name": "Hvordan adskiller JournalKlar sig fra at bruge ChatGPT?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tre afgørende forskelle. For det første er ChatGPT, Gemini, Claude og lignende generelle AI-tjenester ikke bygget til sundhedsfaglig dokumentation. Der er ingen databehandleraftale, ingen journalspecifik struktur og ingen markering af manglende oplysninger. For det andet bruger generelle AI-tjenester som udgangspunkt dine input til at forbedre modellerne. Det er grunden til at det ikke er lovligt at indtaste klientoplysninger i dem. I JournalKlar er det kontraktuelt fastsat at input ikke bruges til træning. For det tredje gemmer JournalKlar ikke klientindhold efter generering. Generelle AI-tjenester gemmer samtalerne." },
    },
    // Arbejdsgang i praksis
    {
      "@type": "Question",
      "name": "Hvordan bruger jeg JournalKlar efter en session?",
      "acceptedAnswer": { "@type": "Answer", "text": "Umiddelbart efter sessionen logger du ind og skriver eller indtaler dine noter: det, du som psykolog vurderer, er vigtigt: observationer, temaer, interventioner, aftaler. JournalKlar strukturerer dem til et journaludkast. Du læser det igennem, retter hvad der skal rettes og overfører til dit journalsystem. Det tager typisk få minutter." },
    },
    {
      "@type": "Question",
      "name": "Kan jeg indtale mine noter i stedet for at skrive dem?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ja. Det er en standard stemme-til-tekst-diktat der udelukkende kører i din browser. Du bestemmer selv hvad der dikteres." },
    },
    {
      "@type": "Question",
      "name": "Kan jeg tilpasse udkastet til min egen journalstil?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ja. Du kan tilføje en instruktion pr. notat der fortæller JournalKlar hvordan du ønsker udkastet formuleret, fx tone, detaljeniveau eller særlige hensyn til din praksis. Udkastet er altid et udgangspunkt du redigerer, ikke et færdigt dokument." },
    },
    {
      "@type": "Question",
      "name": "Hvordan overfører jeg udkastet til mit journalsystem?",
      "acceptedAnswer": { "@type": "Answer", "text": "Manuelt. Du kopierer udkastet og indsætter det i dit eget journalsystem. JournalKlar er ikke integreret med andre systemer. Det er en bevidst afgrænsning: du beholder kontrollen og overblikket over hvad der overføres." },
    },
    // Abonnement og prøveperiode
    {
      "@type": "Question",
      "name": "Er der en gratis prøveperiode, og kræver den betalingskort?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ja, der er 30 dages gratis prøveperiode med fuld adgang til alle funktioner. Ingen betalingskort kræves for prøveperioden. Du opretter en konto, underskriver databehandleraftalen og er i gang." },
    },
    {
      "@type": "Question",
      "name": "Hvad koster JournalKlar?",
      "acceptedAnswer": { "@type": "Answer", "text": "199 kr. pr. måned ekskl. moms uden binding, eller 1.999 kr. pr. år ekskl. moms, svarende til 166 kr. pr. måned. Begge abonnementer giver fuld adgang til alle funktioner." },
    },
    {
      "@type": "Question",
      "name": "Kan jeg opsige når som helst?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ja. Det månedlige abonnement kan opsiges når som helst uden varsel. Det årlige abonnement løber perioden ud." },
    },
    {
      "@type": "Question",
      "name": "Kan jeg få faktura?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ja. Du modtager automatisk en faktura pr. mail ved hver betaling. Det oprettes og køres gennem Alunta.com." },
    },
  ],
};
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";

// ─── Types ──────────────────────────────────────────────────────────────

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

type FAQCategory = {
  label: string;
  items: FAQItem[];
};

// ─── Helpers ────────────────────────────────────────────────────────────

function Rule() {
  return <hr className="border-none border-t border-sand m-0" />;
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={`flex-shrink-0 mt-[2px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <polyline
        points="2,5 7,10 12,5"
        stroke="#1D3A2F"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// ─── FAQ Data ────────────────────────────────────────────────────────────

const categories: FAQCategory[] = [
  {
    label: "Hvad JournalKlar er og ikke er",
    items: [
      {
        q: "Hvad gør JournalKlar helt konkret?",
        a: "Du skriver eller indtaler dine egne noter efter sessionen: observationer, temaer, interventioner, aftaler. JournalKlar strukturerer dem til et journaludkast baseret på journalføringskravene. Udkastet markerer tydeligt, hvis noget mangler din aktive stillingtagen. Du gennemgår, retter og overfører til dit eget journalsystem. Det er det.",
      },
      {
        q: "Optager JournalKlar mine sessioner?",
        a: "Nej. JournalKlar optager hverken lyd, video eller samtalen. Udgangspunktet er altid dine egne noter efter sessionen, ikke en optagelse af det fortrolige rum.",
      },
      {
        q: "Er JournalKlar et journalsystem?",
        a: "Nej. JournalKlar er ikke et journalsystem og erstatter ikke dit eksisterende. Det er et arbejdsredskab til ét konkret trin: fra dine rånoter til et struktureret journaludkast, du selv overfører til dit system.",
      },
      {
        q: "Kan jeg bruge JournalKlar sammen med mit nuværende journalsystem?",
        a: "Ja. JournalKlar er ikke integreret med andre systemer. Du kopierer eller overfører udkastet manuelt til dit eget journalsystem. Det er en bevidst beslutning: du beholder kontrollen og overblikket.",
      },
    ],
  },
  {
    label: "Faglighed og ansvar",
    items: [
      {
        q: "Hvem har ansvaret for journalen?",
        a: "Det har du. JournalKlar leverer et udkast, aldrig en færdig journal. Det er altid dig som psykolog der gennemgår, vurderer, retter og godkender, hvad der overføres til journalen. Det ansvar kan ikke delegeres til et værktøj.",
      },
      {
        q: "Hvad sker der, hvis udkastet mangler noget?",
        a: "JournalKlar markerer tydeligt de steder i udkastet, hvor der mangler oplysninger jf. journalføringsbekendtgørelsen eller der kræves aktiv stillingtagen fra dig. Du afgør hvad der skal tilføjes eller justeres.",
      },
      {
        q: "Hvorfor starter JournalKlar med mine egne noter og ikke en optagelse af sessionen?",
        a: "Fordi den faglige efterbehandling af en session, der hvor du samler op, udvælger og formulerer din forståelse af klienten og samtalen, ikke bør outsources til en algoritme. Hvis AI'en optager og transskriberer samtalen og derefter udvælger det vigtige, risikerer du at blive passiv redaktør af en maskines forståelse. JournalKlar starter med dit faglige skøn. Ikke med en optagelse.",
      },
    ],
  },
  {
    label: "Journalføringskrav og BEK 1361/2025",
    items: [
      {
        q: "Hvad betyder BEK 1361/2025 i praksis?",
        a: (
          <>
            BEK 1361/2025 er den gældende journalføringsbekendtgørelse for psykologer. Den stiller krav til hvad en journal skal indeholde: kontaktårsag, psykisk tilstand, intervention, plan og aftaler. JournalKlar er bygget til at strukturere dine noter op mod disse krav og markere hvis relevante punkter mangler. Læs bekendtgørelsen på{" "}
            <a
              href="https://www.retsinformation.dk/eli/lta/2025/1361"
              target="_blank"
              rel="noopener"
              className="text-evergreen border-b border-evergreen/30 hover:border-evergreen transition-colors"
            >
              retsinformation.dk
            </a>
            .{" "}
            <a
              href="/blog/bek-1361-journalnotat-krav"
              className="text-evergreen border-b border-evergreen/30 hover:border-evergreen transition-colors"
            >
              Vi har skrevet en grundig gennemgang af kravene
            </a>
            .
          </>
        ),
      },
      {
        q: "Markerer JournalKlar manglende oplysninger?",
        a: "Ja. Hvis dine noter ikke indeholder tilstrækkelige oplysninger til at udfylde et journalpunkt, fx konsultationsform eller plan for næste session, markeres det tydeligt i udkastet. Du ser præcist hvad der mangler din stillingtagen, inden du godkender.",
      },
      {
        q: "Kan jeg bruge JournalKlar til første-, opfølgnings- og afslutningssamtaler?",
        a: "Ja. JournalKlar understøtter alle tre samtaletyper. Strukturen i udkastet tilpasses automatisk til hvilken type session du angiver.",
      },
      {
        q: "Vejledningen til de nye journalføringskrav er forsinket. Hvad gælder i mellemtiden?",
        a: (
          <>
            Fra 1. januar 2026 gælder den nye journalføringsbekendtgørelse. Den fagspecifikke vejledning fra Styrelsen for Patientsikkerhed er dog forsinket. Dansk Psykologforening anbefaler at journalføre som hidtil og altid journalføre ved tvivl. JournalKlar er bygget til at understøtte bekendtgørelsens krav som de foreligger nu. Læs mere om situationen hos Dansk Psykologforening:{" "}
            <a
              href="https://www.dp.dk/raadgivning/lovgivning/ny-autorisationsmodel/journalfoeringspligt/udarbejdelse/"
              target="_blank"
              rel="noopener"
              className="text-evergreen border-b border-evergreen/30 hover:border-evergreen transition-colors"
            >
              Udarbejdelse af journaler
            </a>
            {" "}og{" "}
            <a
              href="https://www.dp.dk/raadgivning/lovgivning/ny-autorisationsmodel/journalfoeringspligt/"
              target="_blank"
              rel="noopener"
              className="text-evergreen border-b border-evergreen/30 hover:border-evergreen transition-colors"
            >
              Journalføringspligt
            </a>
            .{" "}
            <a
              href="/blog/ai-journalnotat-psykolog-lovligt"
              className="text-evergreen border-b border-evergreen/30 hover:border-evergreen transition-colors"
            >
              Vi gennemgår hvad bekendtgørelsen faktisk siger
            </a>
            .
          </>
        ),
      },
    ],
  },
  {
    label: "Data, sikkerhed og fortrolighed",
    items: [
      {
        q: "Bliver mine noter gemt i JournalKlar?",
        a: "Nej. Dine noter behandles kun for at generere journaludkastet. Når udkastet er leveret, gemmes klientindholdet ikke i JournalKlar. Intet gemmes, intet logges, intet bruges til træning.",
      },
      {
        q: "Trænes AI-modellen på mine input?",
        a: "Nej. Den AI-model der genererer dine udkast, bruger ikke dit input til træning. Det er kontraktuelt fastsat med AWS, ikke bare en hensigtserklæring.",
      },
      {
        q: "Hvor behandles data?",
        a: "Appen og databasen kører på dansk server i Skanderborg hos Scannet A/S. AI-behandlingen sker hos AWS i Frankfurt, inden for EU.",
      },
      {
        q: "Er der databehandleraftale, og hvornår underskriver jeg den?",
        a: "Ja. Du underskriver en databehandleraftale, inden du går i gang. Den beskriver præcist hvad der behandles af hvem, hvor og på hvilket grundlag. Du kan vise den til din fagforening eller den, du samarbejder med om GDPR.",
      },
      {
        q: "Hvordan adskiller JournalKlar sig fra at bruge ChatGPT?",
        a: (
          <>
            <span className="block mb-4">Tre afgørende forskelle. For det første er ChatGPT, Gemini, Claude og lignende generelle AI-tjenester ikke bygget til sundhedsfaglig dokumentation. Der er ingen databehandleraftale, ingen journalspecifik struktur og ingen markering af manglende oplysninger.</span>
            <span className="block mb-4">For det andet bruger generelle AI-tjenester som udgangspunkt dine input til at forbedre modellerne. Det er grunden til at det ikke er lovligt at indtaste klientoplysninger i dem. I JournalKlar er det kontraktuelt fastsat at input ikke bruges til træning.</span>
            <span className="block">For det tredje gemmer JournalKlar ikke klientindhold efter generering. Generelle AI-tjenester gemmer samtalerne.</span>
            <span className="block mt-4"><a href="/blog/journalfoering-faglig-efterbehandling" className="text-evergreen border-b border-evergreen/30 hover:border-evergreen transition-colors">Artiklen om selektion vs. redigering forklarer distinktionen</a>.</span>
          </>
        ),
      },
    ],
  },
  {
    label: "Arbejdsgang i praksis",
    items: [
      {
        q: "Hvordan bruger jeg JournalKlar efter en session?",
        a: "Umiddelbart efter sessionen logger du ind og skriver eller indtaler dine noter: det, du som psykolog vurderer, er vigtigt: observationer, temaer, interventioner, aftaler. JournalKlar strukturerer dem til et journaludkast. Du læser det igennem, retter hvad der skal rettes og overfører til dit journalsystem. Det tager typisk få minutter.",
      },
      {
        q: "Kan jeg indtale mine noter i stedet for at skrive dem?",
        a: "Ja. Det er en standard stemme-til-tekst-diktat der udelukkende kører i din browser. Du bestemmer selv hvad der dikteres.",
      },
      {
        q: "Kan jeg tilpasse udkastet til min egen journalstil?",
        a: "Ja. Du kan tilføje en instruktion pr. notat der fortæller JournalKlar hvordan du ønsker udkastet formuleret, fx tone, detaljeniveau eller særlige hensyn til din praksis. Udkastet er altid et udgangspunkt du redigerer, ikke et færdigt dokument.",
      },
      {
        q: "Hvordan overfører jeg udkastet til mit journalsystem?",
        a: "Manuelt. Du kopierer udkastet og indsætter det i dit eget journalsystem. JournalKlar er ikke integreret med andre systemer. Det er en bevidst afgrænsning: du beholder kontrollen og overblikket over hvad der overføres.",
      },
    ],
  },
  {
    label: "Abonnement og prøveperiode",
    items: [
      {
        q: "Er der en gratis prøveperiode, og kræver den betalingskort?",
        a: "Ja, der er 30 dages gratis prøveperiode med fuld adgang til alle funktioner. Ingen betalingskort kræves for prøveperioden. Du opretter en konto, underskriver databehandleraftalen og er i gang.",
      },
      {
        q: "Hvad koster JournalKlar?",
        a: "199 kr. pr. måned ekskl. moms uden binding, eller 1.999 kr. pr. år ekskl. moms, svarende til 166 kr. pr. måned. Begge abonnementer giver fuld adgang til alle funktioner.",
      },
      {
        q: "Kan jeg opsige når som helst?",
        a: "Ja. Det månedlige abonnement kan opsiges når som helst uden varsel. Det årlige abonnement løber perioden ud.",
      },
      {
        q: "Kan jeg få faktura?",
        a: (
          <>
            Ja. Du modtager automatisk en faktura pr. mail ved hver betaling. Det oprettes og køres gennem{" "}
            <a
              href="https://alunta.com/da/"
              target="_blank"
              rel="noopener"
              className="text-evergreen border-b border-evergreen/30 hover:border-evergreen transition-colors"
            >
              Alunta.com
            </a>
            .
          </>
        ),
      },
    ],
  },
];

// ─── Accordion Item ──────────────────────────────────────────────────────

function AccordionItem({
  id,
  item,
  isOpen,
  onToggle,
}: {
  id: string;
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-sand">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        className="w-full flex items-start justify-between gap-6 py-5 text-left"
      >
        <span className="font-sans text-[15px] font-normal text-evergreen leading-[1.5]">
          {item.q}
        </span>
        <ChevronDown open={isOpen} />
      </button>
      {isOpen && (
        <div
          id={`faq-answer-${id}`}
          role="region"
          className="pb-6 max-w-[620px]"
        >
          <p className="font-sans text-[15px] font-light text-body leading-[1.8] m-0">
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <Nav />
      <main>

        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:pt-[100px] md:pb-[90px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="max-w-[640px]">
              <SectionLabel>FAQ</SectionLabel>
              <h1 className="mb-5">
                De spørgsmål du bør stille, før du bruger AI i psykologisk praksis.
              </h1>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Når et AI-værktøj skal bruges i psykologisk praksis, er det ikke nok, at det virker smart. Du skal kunne forstå, hvad værktøjet gør, hvad det ikke gør, hvor data behandles, og hvor ansvaret ligger.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-5">
                Her finder du svar på de spørgsmål, privatpraktiserende psykologer typisk bør stille, før de tager JournalKlar i brug.
              </p>
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-0">
                JournalKlar er bygget med et enkelt udgangspunkt: dine egne noter først, AI som strukturhjælp bagefter, og altid dig som den fagligt ansvarlige.
              </p>
            </div>
            <p className="font-sans text-[13px] font-normal text-evergreen tracking-[0.04em] text-center mt-8 mb-0">
              Ingen optagelse af sessionen{" "}
              <span className="text-evergreen/40">·</span>
              {" "}Server i Skanderborg{" "}
              <span className="text-evergreen/40">·</span>
              {" "}Altid et udkast
            </p>
          </div>
        </section>

        <Rule />

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            {categories.map((cat, ci) => (
              <div key={cat.label} className={ci < categories.length - 1 ? "mb-16" : ""}>
                <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-5">
                  {cat.label}
                </div>
                <div className="border-t border-sand">
                  {cat.items.map((item, qi) => {
                    const id = `${ci}-${qi}`;
                    return (
                      <AccordionItem
                        key={id}
                        id={id}
                        item={item}
                        isOpen={openId === id}
                        onToggle={() => toggle(id)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Rule />

        {/* ── Afslutning ──────────────────────────────────────────── */}
        <section className="bg-sand py-16 px-6 md:py-[120px] md:px-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="max-w-[660px] mx-auto text-center">
              <p className="font-sans text-[16px] font-light text-body leading-[1.85] mb-8">
                Hvis du er i tvivl om JournalKlar passer til din praksis eller har spørgsmål, du lige skal have et klokkeklart svar på, er du mere end velkommen til at skrive direkte.
              </p>
              <a
                href="mailto:lars@journalklar.dk"
                className="inline-flex items-center gap-[6px] text-evergreen font-sans text-[15px] font-normal border-b border-evergreen/30 pb-[2px] hover:border-evergreen transition-colors"
              >
                Skriv til Lars
              </a>
            </div>

            <div className="border-t border-sand mt-12 pt-8">
              <p className="font-sans text-[13px] font-normal text-muted text-center m-0">
                JournalKlar er et arbejdsredskab. Ikke en automatisk journalfører. Alle udkast kræver din aktive gennemgang og godkendelse.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
