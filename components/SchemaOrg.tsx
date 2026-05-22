const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JournalKlar",
  "url": "https://journalklar.dk",
  "description": "AI-assisteret journalværktøj til privatpraktiserende psykologer i Danmark. Strukturerer psykologens egne noter til journaludkast efter BEK 1361/2025. Ingen sessionoptagelse — psykologens faglige selektion bevares.",
  "applicationCategory": "MedicalApplication",
  "operatingSystem": "Web",
  "inLanguage": "da-DK",
  "audience": {
    "@type": "Audience",
    "audienceType": "Privatpraktiserende autoriserede psykologer i Danmark",
  },
  "offers": [
    {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "DKK",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "billingDuration": "P1M",
      },
      "description": "Månedligt abonnement",
    },
    {
      "@type": "Offer",
      "price": "1999",
      "priceCurrency": "DKK",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "billingDuration": "P1Y",
      },
      "description": "Årligt abonnement",
    },
  ],
  "author": {
    "@type": "Person",
    "name": "Lars Mullert Pedersen",
    "jobTitle": "Psykolog og grundlægger",
    "url": "https://journalklar.dk/om",
  },
  "publisher": {
    "@type": "Organization",
    "name": "JournalKlar",
    "url": "https://journalklar.dk",
  },
  "featureList": [
    "Ingen sessionoptagelse",
    "Strukturerer psykologens egne noter",
    "BEK 1361/2025-kompatibelt journaludkast",
    "Markerer manglende oplysninger",
    "Zero data retention — intet gemmes eller logges",
    "Server i Danmark",
  ],
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lars Mullert Pedersen",
  "jobTitle": "Psykolog",
  "description": "Grundlægger af JournalKlar. Psykolog uddannet fra Aalborg Universitet.",
  "url": "https://journalklar.dk/om",
  "worksFor": {
    "@type": "Organization",
    "name": "JournalKlar",
    "url": "https://journalklar.dk",
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Aalborg Universitet",
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Aalborg",
    "addressCountry": "DK",
  },
};

export default function SchemaOrg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
