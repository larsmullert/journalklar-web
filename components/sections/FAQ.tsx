"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const svar: { q: string; a: React.ReactNode }[] = [
  {
    q: "Hvad gør JournalKlar helt konkret?",
    a: "Du skriver eller indtaler dine egne noter efter sessionen: observationer, temaer, interventioner, aftaler. JournalKlar strukturerer dem til et journaludkast baseret på journalføringskravene. Udkastet markerer tydeligt, hvis noget mangler din aktive stillingtagen. Du gennemgår, retter og overfører til dit eget journalsystem. Det er det.",
  },
  {
    q: "Optager JournalKlar mine sessioner?",
    a: "Nej. JournalKlar optager hverken lyd, video eller samtalen. Udgangspunktet er altid dine egne noter efter sessionen, ikke en optagelse af det fortrolige rum.",
  },
  {
    q: "Kan jeg bruge JournalKlar sammen med mit nuværende journalsystem?",
    a: "Ja. JournalKlar er ikke integreret med andre systemer. Du kopierer eller overfører udkastet manuelt til dit eget journalsystem. Det er en bevidst beslutning: du beholder kontrollen og overblikket.",
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
        .
      </>
    ),
  },
  {
    q: "Trænes AI-modellen på mine input?",
    a: "Nej. Den AI-model der genererer dine udkast, bruger ikke dit input til træning. Det er kontraktuelt fastsat med AWS, ikke bare en hensigtserklæring.",
  },
  {
    q: "Hvordan adskiller JournalKlar sig fra at bruge ChatGPT?",
    a: "Tre afgørende forskelle. For det første optager og transskriberer ChatGPT ikke, men det gør JournalKlar heller ikke, og det er pointen. For det andet bruger ChatGPT, Gemini, Claude mm. dine input til modeltræning, hvilket er grunden til, at det ikke er lovligt med klientoplysninger. I JournalKlar er det kontraktuelt fastsat at input ikke bruges til træning. For det tredje er ChatGPT et generelt værktøj uden databehandleraftale, uden journalspecifik struktur og uden markering af manglende oplysninger. JournalKlar er bygget specifikt til dansk psykologpraksis med de forpligtelser det kræver.",
  },
  {
    q: "Er der en gratis prøveperiode, og kræver den betalingskort?",
    a: "Ja, der er 30 dages gratis prøveperiode med fuld adgang til alle funktioner. Ingen betalingskort kræves for prøveperioden. Du opretter en konto, underskriver databehandleraftalen og er i gang.",
  },
  {
    q: "Hvem har ansvaret for journalen?",
    a: "Det har du. JournalKlar leverer et udkast, aldrig en færdig journal. Det er altid dig som psykolog der gennemgår, vurderer, retter og godkender, hvad der overføres til journalen. Det ansvar kan ikke delegeres til et værktøj.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Ofte stillede spørgsmål</SectionLabel>
        <h2 className="max-w-[520px]">De spørgsmål du allerede har.</h2>

        <div className="mt-12 max-w-[780px]">
          {svar.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div
                key={q}
                className={i < svar.length - 1 ? "border-b border-sand" : ""}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-[15px] font-normal text-evergreen leading-[1.5]">
                    {q}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  >
                    <line x1="7" y1="1" x2="7" y2="13" stroke="#1D3A2F" strokeWidth="1.3" strokeLinecap="round"/>
                    <line x1="1" y1="7" x2="13" y2="7" stroke="#1D3A2F" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </button>
                {isOpen && (
                  <p className="font-sans text-[14px] font-light text-body leading-[1.7] pb-7 mt-0 mb-0">
                    {a}
                  </p>
                )}
              </div>
            );
          })}
          <div className="mt-8">
            <a
              href="/faq"
              className="font-sans text-[15px] font-normal text-evergreen hover:opacity-70 transition-opacity"
            >
              Se svar på flere spørgsmål →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
