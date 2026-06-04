import SectionLabel from "@/components/ui/SectionLabel";

export default function IPraksis() {
  return (
    <div className="bg-sand py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>I praksis</SectionLabel>
        <h2>Sådan ser det ud i praksis</h2>
        <p className="max-w-[560px] text-body">
          Dine rånoter til venstre. Et journaludkast til højre, skrevet i løbende prosa, med klientens egne ord bevaret og tydelig markering af det, der kræver din aktive stillingtagen.
        </p>

        {/* App-frame */}
        <div className="bg-white border border-[#D4D0CB] mt-10">

          {/* Topbar */}
          <div className="bg-[#EFECE7] border-b border-[#E0DDD8] px-4 py-[10px] flex items-center gap-[7px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#E0B9B9]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#DFDFB9]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#B9DFC0]" />
            <span className="ml-[10px] font-sans text-[12px] text-muted">JournalKlar — Eksempelsession · Første samtale</span>
          </div>

          {/* Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Venstre: rånoter — skjult på mobil */}
            <div className="hidden md:block px-11 py-12 border-r border-[#F0EDE8]">
              <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-7">
                Rånoter efter sessionen
              </div>
              <div className="font-sans text-[13px] font-light text-body leading-[1.8] space-y-[12px]">
                <p>Første samtale. Mand, 34. Henvist af læge pga. depression. Sygemeldt 3 mdr fra job som projektleder.</p>
                <p>Beskriver nedsat energi, søvnproblemer, tab af lyst. Haft det sådan ca 6 mdr. Udløst af samlivskonflikt og høj arbejdsbelastning.</p>
                <p>Ingen selvmordsrisiko, spurgt direkte.</p>
                <p>Tidligere set psykolog for 5 år siden, god oplevelse. Motiveret for forløb.</p>
                <p>Aftalte KAT-baseret tilgang, 10 sessioner som udgangspunkt. Næste tid om 1 uge.</p>
                <p>Informeret om journalføring og rammer.</p>
              </div>
            </div>

            {/* Højre: journaludkast */}
            <div className="px-6 py-8 md:px-11 md:py-12">
              <div className="flex items-center gap-[10px] font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-7">
                Journaludkast
                <span className="bg-evergreen/[0.08] text-evergreen font-sans text-[9px] font-medium tracking-[0.15em] px-[8px] py-[2px]">
                  Til godkendelse
                </span>
              </div>

              <div className="font-sans text-[14px] font-light text-body leading-[1.65] space-y-[14px]">
                <p className="text-muted">[STAMDATA: Udfyldes i journalsystem — navn, CPR, psykologens navn/titel/arbejdssted, dato]</p>
                <p>[DATO]. Første samtale.</p>
                <p>Klienten er en 34-årig mand henvist af egen læge med henblik på behandling af depression. Han er aktuelt sygemeldt fra sit job som projektleder, sygemeldingen har varet tre måneder.</p>
                <p>Klienten beskriver nedsat energi, søvnproblemer og tab af lyst. Symptomerne har været til stede i ca. seks måneder og beskrives som udløst af en samlivskonflikt og høj arbejdsbelastning.</p>
                <p>Ingen selvmordsrisiko, spurgt direkte.</p>
                <p>Klienten har tidligere haft et psykologforløb for ca. fem år siden og beskriver det som en god oplevelse. Han fremstår motiveret for det aktuelle forløb.</p>
                <p>Klienten er informeret om journalføring og rammerne for forløbet.</p>
              </div>

              {/* Mangler-blok */}
              <div className="border border-orange/25 bg-orange/[0.03] px-[18px] py-[14px] my-[18px]">
                <div className="flex items-center gap-[7px] font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-orange mb-[5px]">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                    <circle cx="5.5" cy="5.5" r="5" stroke="#E04500" strokeWidth="1"/>
                    <line x1="5.5" y1="3" x2="5.5" y2="6.5" stroke="#E04500" strokeWidth="1.2" strokeLinecap="round"/>
                    <circle cx="5.5" cy="8.2" r="0.7" fill="#E04500"/>
                  </svg>
                  Mangler — kræver stillingtagen
                </div>
                <div className="font-sans text-[13px] font-light text-body">
                  Bekræft om informeret samtykke til tavshedspligt og oplysningspligt indgik i informationen.
                </div>
              </div>

              <div className="font-sans text-[14px] font-light text-body leading-[1.65]">
                <p>Der er aftalt en kognitiv adfærdsterapeutisk tilgang over ti sessioner som udgangspunkt. Næste session er aftalt om en uge.</p>
              </div>

            </div>
          </div>
        </div>

        <p className="font-sans text-[13px] text-muted mt-[22px]">
          Eksemplet er anonymiseret og konstrueret. JournalKlar skriver ikke journalen for dig — det laver et udkast, som du vurderer, redigerer og godkender.
        </p>
      </div>
    </div>
  );
}
