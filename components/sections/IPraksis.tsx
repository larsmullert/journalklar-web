import SectionLabel from "@/components/ui/SectionLabel";

export default function IPraksis() {
  return (
    <div className="bg-sand py-16 px-6 md:py-[120px] md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>I praksis</SectionLabel>
        <h2>Sådan ser det ud i praksis</h2>
        <p className="max-w-[560px] text-body">
          Dine rånoter til venstre. Et journaludkast til højre — skrevet i løbende prosa, med klientens egne ord bevaret og tydelig markering af det, der kræver din aktive stillingtagen.
        </p>

        {/* App-frame */}
        <div className="bg-white border border-[#D4D0CB] mt-10">

          {/* Topbar */}
          <div className="bg-[#EFECE7] border-b border-[#E0DDD8] px-4 py-[10px] flex items-center gap-[7px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#E0B9B9]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#DFDFB9]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#B9DFC0]" />
            <span className="ml-[10px] font-sans text-[12px] text-muted">JournalKlar — Eksempelsession · Opfølgende samtale</span>
          </div>

          {/* Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Venstre: rånoter — skjult på mobil */}
            <div className="hidden md:block px-11 py-12 border-r border-[#F0EDE8]">
              <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-7">
                Rånoter efter sessionen
              </div>
              <div className="font-sans text-[13px] font-light text-body leading-[1.8] space-y-[12px]">
                <p>Videosession. 6. session.</p>
                <p>Arbejder fortsat med angst og undgåelse. Klienten siger: &ldquo;jeg bliver helt låst, når jeg skal tage toget&rdquo;.</p>
                <div>
                  <p className="mb-[5px]">Siden sidst:</p>
                  <p>— Tog bussen to gange alene.<br />— Sprang togtur over tirsdag.<br />— Sov dårligt aftenen før.<br />— Bange for at få panik og ikke kunne komme væk.</p>
                </div>
                <p>Gennemgik eksponeringsplan. Talte om hvad der sker, når hun undgår. Hun kunne godt se, at det hjælper kortvarigt, men gør næste gang sværere.</p>
                <p>Virkede træt, men samarbejdende. Blev berørt da hun talte om at føle sig &ldquo;barnlig&rdquo;. Ingen selvmordstanker, spurgt direkte.</p>
                <div>
                  <p className="mb-[5px]">Aftale:</p>
                  <p>Tage toget én station sammen med veninde. Registrere angst 0-10 før, under og efter. Næste tid om 14 dage.</p>
                </div>
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
                <p>[DATO]. Sjette session. Videosession.</p>
                <p>Fortsat behandling med fokus på angst og undgåelse. Klienten beskriver siden sidst at have taget bussen alene to gange, men sprang en planlagt togtur over tirsdag.</p>
                <p>Klienten beskriver: &ldquo;jeg bliver helt låst, når jeg skal tage toget&rdquo;. Hun forbinder situationen med frygt for at få panik og ikke kunne komme væk. Hun beskriver desuden dårlig søvn aftenen før den planlagte eksponering.</p>
                <p>Der blev gennemgået eksponeringsplan. Der blev arbejdet med, hvad der sker ved undgåelse, herunder klientens forståelse af, at undgåelse hjælper kortvarigt, men gør næste gang sværere.</p>
                <p>Klienten fremstod træt, men samarbejdende. Hun blev berørt, da hun talte om at føle sig &ldquo;barnlig&rdquo;.</p>
                <p>Psykologen vurderer ingen aktuelle selvmordstanker, spurgt direkte.</p>
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
                  Samlet faglig vurdering af tilstand og progression mangler. Tilføj din vurdering inden journalen godkendes.
                </div>
              </div>

              <div className="font-sans text-[14px] font-light text-body leading-[1.65]">
                <p>Det blev aftalt, at klienten inden næste session tager toget én station sammen med en veninde og registrerer angst 0-10 før, under og efter. Næste session aftalt om 14 dage.</p>
              </div>

            </div>
          </div>
        </div>

        <p className="font-sans text-[13px] text-muted mt-[22px] italic">
          Eksemplet er anonymiseret og konstrueret. JournalKlar skriver ikke journalen for dig — det laver et udkast, som du vurderer, redigerer og godkender.
        </p>
      </div>
    </div>
  );
}
