import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
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
  title: "JournalKlar",
  description:
    "Journaludkast fra dine egne faglige noter. Til privatpraktiserende psykologer. Uden optagelse af sessionen.",
  openGraph: {
    title: "JournalKlar",
    description:
      "Journaludkast fra dine egne faglige noter. Til privatpraktiserende psykologer. Uden optagelse af sessionen.",
    url: "https://journalklar.dk",
  },
};

function Rule() {
  return <hr className="border-none border-t border-sand m-0" />;
}

export default function Home() {
  return (
    <>
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
