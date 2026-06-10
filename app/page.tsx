import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JournalKlar",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web",
  "description": "AI-assisteret journalværktøj til privatpraktiserende psykologer i Danmark. Strukturerer psykologens egne noter til journaludkast efter BEK 1361/2025.",
  "url": "https://www.journalklar.dk",
  "inLanguage": "da-DK",
  "author": {
    "@type": "Person",
    "name": "Lars Mullert Pedersen",
  },
  "offers": {
    "@type": "Offer",
    "price": "199",
    "priceCurrency": "DKK",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "billingIncrement": 1,
      "unitCode": "MON",
    },
  },
};
import Hero from "@/components/sections/Hero";
import ManifestStrip from "@/components/sections/ManifestStrip";
import SaadanVirkerDet from "@/components/sections/SaadanVirkerDet";
import IPraksis from "@/components/sections/IPraksis";
import Afgrænsning from "@/components/sections/Afgrænsning";
import Sikkerhed from "@/components/sections/Sikkerhed";
import Tillid from "@/components/sections/Tillid";
import PrisOgCTA from "@/components/sections/PrisOgCTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: { absolute: "JournalKlar" },
  description:
    "Journaludkast fra dine egne faglige noter. Til privatpraktiserende psykologer. Uden optagelse af sessionen.",
  alternates: {
    canonical: "https://www.journalklar.dk",
  },
  openGraph: {
    title: "JournalKlar",
    description:
      "Journaludkast fra dine egne faglige noter. Til privatpraktiserende psykologer. Uden optagelse af sessionen.",
    url: "https://www.journalklar.dk",
  },
};

function Rule() {
  return <hr className="border-none border-t border-sand m-0" />;
}

export default function Home() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema} />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Rule />
        <ManifestStrip />
        <Rule />
        <SaadanVirkerDet />
        <Rule />
        <IPraksis />
        <Rule />
        <Afgrænsning />
        <Rule />
        <Sikkerhed />
        <Rule />
        <Tillid />
        <Rule />
        <PrisOgCTA />
        <Rule />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
