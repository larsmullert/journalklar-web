"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const faqData = [
  {
    q: "Kan JournalKlar se mine klienters oplysninger?",
    a: "JournalKlar behandler de oplysninger, du selv indtaster, mens journaludkastet genereres. Oplysningerne bruges til at lave udkastet og gemmes ikke som journalindhold bagefter.",
  },
  {
    q: "Bliver mine noter brugt til at træne AI?",
    a: "Nej. Dine noter bruges ikke til modeltræning. Det er en del af den måde AI-behandlingen er sat op på kontraktuelt og teknisk med vores udbyder (AWS).",
  },
  {
    q: "Hvorfor er det mere sikkert ikke at optage samtalen?",
    a: "Fordi der behandles færre oplysninger. En fuld samtale kan indeholde mange detaljer, som ikke er nødvendige for journalen. JournalKlar arbejder kun med de noter, du vælger at skrive ind.",
  },
  {
    q: "Hvad sker der, hvis AI'en finder på noget?",
    a: "JournalKlar har et ekstra valideringstrin (Bedrock Haiku), der markerer formuleringer, som ikke tydeligt kan spores til dine noter. Det erstatter ikke dit faglige ansvar, men gør det lettere at opdage mulige AI-tilføjelser.",
  },
  {
    q: "Kan jeg bruge JournalKlar, hvis jeg har tavshedspligt?",
    a: "JournalKlar er bygget med tavshedspligt, dataminimering og journalføringsansvar som centrale hensyn. Som psykolog skal du stadig selv vurdere, hvilke oplysninger du indtaster, og hvordan du anvender det færdige udkast.",
  },
  {
    q: "Hvad logger JournalKlar præcist?",
    a: "Bruger-id, tidspunkt for generering, svartid, tokenforbrug, sessiontype og antal valideringsmarkeringer. Ikke klientnoter. Ikke journaludkast. Ikke klientnavne eller andre personoplysninger om dine klienter.",
  },
  {
    q: "Kan jeg vise dokumentationen til min leder, DPO eller fagforening?",
    a: "Ja. Siden samler databehandleraftale, underleverandørgennemgang, behandlingsformål, datatyper og teknisk flow, så det kan vurderes af andre end dig.",
  },
  {
    q: "Hvem ejer og hoster JournalKlar?",
    a: "JournalKlar er grundlagt og drevet af Lars Mullert Pedersen, uddannet fra Aalborg Universitet. Applikation og database er hostet på Scannet VPS i Danmark (ISO 27001). AI-behandling sker via AWS Bedrock eu-central-1 i Frankfurt.",
  },
  {
    q: "Hvad er det juridiske grundlag for behandling af personoplysninger?",
    a: "Behandlingsgrundlaget er GDPR artikel 28 (databehandleraftale) og artikel 9 (særlige kategorier — sundhedsoplysninger behandles under tavshedspligtbestemmelsen). Databehandleraftalen beskriver grundlaget i detaljer.",
  },
  {
    q: "Hvad sker der med mine data, hvis jeg opsiger?",
    a: "Klientindhold gemmes ikke efter generering og er dermed ikke til stede i JournalKlar at slette. Din brugerprofil og brugsmetadata kan slettes på anmodning. Databehandleraftalen beskriver slettepolitikken.",
  },
];

export default function SikkerhedFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Ofte stillede spørgsmål</SectionLabel>
        <h2 className="max-w-[520px]">De spørgsmål du allerede har.</h2>

        <div className="mt-12 max-w-[780px]">
          {faqData.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div key={q} className={i < faqData.length - 1 ? "border-b border-sand" : ""}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left cursor-pointer hover:bg-sand/30 transition-colors px-2 -mx-2"
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
