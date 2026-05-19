import SectionLabel from "@/components/ui/SectionLabel";

export default function IPraksis() {
  return (
    <div className="bg-sand py-[120px] px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>I praksis</SectionLabel>
        <h2>Sådan ser det ud</h2>
        <p className="max-w-[520px] text-[#505050]">
          Dine rånoter til venstre. Et komplet journaludkast til højre — med tydelig markering af det, der mangler din aktive stillingtagen.
        </p>

        {/* App-frame */}
        <div className="bg-white border border-[#D4D0CB] shadow-[0_4px_32px_rgba(29,58,47,0.06)] mt-10">

          {/* Topbar */}
          <div className="bg-[#EFECE7] border-b border-[#E0DDD8] px-4 py-[10px] flex items-center gap-[7px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#E0B9B9]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#DFDFB9]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#B9DFC0]" />
            <span className="ml-[10px] font-sans text-[12px] text-muted">JournalKlar — Eksempelsession · Opfølgningssamtale</span>
          </div>

          {/* Panels */}
          <div className="grid grid-cols-2">

            {/* Venstre: rånoter */}
            <div className="px-11 py-12 border-r border-[#F0EDE8]">
              <div className="flex items-center gap-[10px] font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-7">
                Dine rånoter
              </div>
              <div className="font-sans text-[14px] font-light text-[#4A4A4A] leading-[1.8]">
                <p>Pt. mødte til aftalt tid. Virker mere afklaret end sidst — sov bedre denne uge. Fortæller om en situation med sin søster, som hun nu har kunnet rumme anderledes end tidligere.</p>
                <p>Arbejdede videre med eksponeringshierarki. Gennemgik trin 3. Pt. er motiveret men udtrykker stadig en vis tøven over for de næste trin i hierarkiet.</p>
                <p>Informeret samtykke til behandlingsplan er givet mundtligt. Aftalt ny session om 14 dage. Hjemmeopgave: én situation pr. dag uden undgåelsesadfærd, noteres i dagbog.</p>
              </div>
            </div>

            {/* Højre: journaludkast */}
            <div className="px-11 py-12">
              <div className="flex items-center gap-[10px] font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-7">
                Journaludkast
                <span className="bg-evergreen/[0.08] text-evergreen font-sans text-[9px] font-medium tracking-[0.1em] px-[8px] py-[2px]">
                  Til godkendelse
                </span>
              </div>

              <div className="mb-[22px]">
                <div className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-muted mb-[5px]">
                  Dato og sessionsnummer
                </div>
                <div className="font-sans text-[14px] font-light text-[#3A3A3A] leading-[1.65]">
                  11. marts 2026 · Session #14
                </div>
              </div>

              <div className="mb-[22px]">
                <div className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-muted mb-[5px]">
                  Psykisk tilstand
                </div>
                <div className="font-sans text-[14px] font-light text-[#3A3A3A] leading-[1.65]">
                  Patienten fremstår mere afklaret end ved foregående session. Oplyser om bedret søvn. Beskriver øget evne til at rumme konflikt med søskende uden tidligere undgåelsesreaktion.
                </div>
              </div>

              <div className="mb-[22px]">
                <div className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-muted mb-[5px]">
                  Intervention
                </div>
                <div className="font-sans text-[14px] font-light text-[#3A3A3A] leading-[1.65]">
                  Kognitiv adfærdsterapi. Arbejde med eksponeringshierarki, trin 3. Patienten er behandlingsmotiveret men udtrykker ambivalens over for kommende trin.
                </div>
              </div>

              {/* Mangler-blok */}
              <div className="border border-orange/25 bg-orange/[0.03] px-[18px] py-[14px] mb-[18px]">
                <div className="flex items-center gap-[7px] font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-orange mb-[5px]">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                    <circle cx="5.5" cy="5.5" r="5" stroke="#E04500" strokeWidth="1"/>
                    <line x1="5.5" y1="3" x2="5.5" y2="6.5" stroke="#E04500" strokeWidth="1.2" strokeLinecap="round"/>
                    <circle cx="5.5" cy="8.2" r="0.7" fill="#E04500"/>
                  </svg>
                  Mangler — kræver stillingtagen
                </div>
                <div className="font-sans text-[13px] font-light text-[#6A6A6A]">
                  Konsultationsform er ikke angivet. Angiv om sessionen er gennemført ved fysisk fremmøde, telefon eller video.
                </div>
              </div>

              <div className="mb-[22px]">
                <div className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-muted mb-[5px]">
                  Plan og aftaler
                </div>
                <div className="font-sans text-[14px] font-light text-[#3A3A3A] leading-[1.65]">
                  Informeret samtykke til behandlingsplan dokumenteret mundtligt. Hjemmeopgave aftalt: dagbogsregistrering. Ny session planlagt om 14 dage.
                </div>
              </div>

            </div>
          </div>
        </div>

        <p className="font-sans text-[12px] text-muted mt-[22px] italic text-center">
          Eksemplet er anonymiseret og konstrueret. Udviklet med udgangspunkt i journalarbejdsgange i dansk psykologpraksis.
        </p>
      </div>
    </div>
  );
}
