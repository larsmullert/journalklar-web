"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const svar = [
  {
    q: "Optager JournalKlar mine sessioner?",
    a: "Nej. JournalKlar optager ingenting. Du skriver eller indstaler dine egne noter efter sessionen — produktet hører aldrig det, der foregår i rummet.",
  },
  {
    q: "Bliver mine noter gemt i JournalKlar?",
    a: "Nej. Dine noter og det genererede journaludkast gemmes ikke i JournalKlar efter generering. Behandlingen sker og indholdet forsvinder.",
  },
  {
    q: "Trænes AI-modellen på mine input?",
    a: "Nej. Det er kontraktuelt fastsat med vores AI-udbyder. Dine klientdata bruges aldrig til at forbedre eller træne modeller.",
  },
  {
    q: "Kan jeg bruge det sammen med mit nuværende journalsystem?",
    a: "Ja. JournalKlar genererer et tekstudkast, som du kopierer ind i dit eget system. Det kræver ingen integration og fungerer med alle journalsystemer.",
  },
  {
    q: "Er JournalKlar godkendt af Dansk Psykologforening?",
    a: "JournalKlar er ikke godkendt af Dansk Psykologforening eller Styrelsen for Patientsikkerhed. Det er et fagligt arbejdsredskab under dit ansvar som autoriseret psykolog — på linje med andre digitale hjælpemidler i praksis.",
  },
  {
    q: "Hvad sker der, hvis udkastet mangler noget?",
    a: "JournalKlar markerer tydeligt de felter, der mangler din stillingtagen. Du får aldrig et udkast der foregiver at være komplet — mangler er synlige, ikke skjulte.",
  },
  {
    q: "Kan jeg bruge det til første-, opfølgnings- og afslutningssamtaler?",
    a: "Ja. JournalKlar understøtter alle tre samtaletyper og tilpasser strukturen i journaludkastet herefter.",
  },
  {
    q: "Hvad betyder BEK 1361/2025 i praksis?",
    a: "Den nye journalføringsbekendtgørelse stiller skarpere krav til, hvad der skal fremgå af den psykologfaglige journal. JournalKlar er bygget til at dække disse krav og markerer manglende påkrævede oplysninger.",
  },
  {
    q: "Skal jeg bruge kreditkort for at prøve det?",
    a: "Nej. Prøveperioden på 30 dage kræver ingen betalingsoplysninger. Du opretter en konto og er i gang.",
  },
  {
    q: "Kan jeg få en databehandleraftale?",
    a: "Ja — og du skal have én. Databehandleraftalen underskrives som en del af oprettelsesprocessen, inden du går i gang. Du kan vise den til din leder, din DPO eller din fagforening.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-[120px] px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Ofte stillede spørgsmål</SectionLabel>
        <h2 className="max-w-[520px]">De spørgsmål du allerede har.</h2>

        <div className="mt-12 max-w-[720px]">
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
                  <span className="font-sans text-[15px] font-medium text-evergreen leading-[1.5]">
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
                  <p className="font-sans text-[14px] font-light text-[#505050] leading-[1.75] pb-7 mt-0 mb-0">
                    {a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
