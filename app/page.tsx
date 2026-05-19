import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import ManifestStrip from "@/components/sections/ManifestStrip";
import Genkendelse from "@/components/sections/Genkendelse";
import Tillid from "@/components/sections/Tillid";
import SaadanVirkerDet from "@/components/sections/SaadanVirkerDet";
import Sikkerhed from "@/components/sections/Sikkerhed";
import IPraksis from "@/components/sections/IPraksis";
import Afgrænsning from "@/components/sections/Afgrænsning";
import PrisOgCTA from "@/components/sections/PrisOgCTA";
import Footer from "@/components/sections/Footer";

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
        <Genkendelse />
        <Rule />
        <SaadanVirkerDet />
        <Rule />
        <IPraksis />
        <Rule />
        <Sikkerhed />
        <Rule />
        <Afgrænsning />
        <Rule />
        <Tillid />
        <Rule />
        <PrisOgCTA />
      </main>
      <Footer />
    </>
  );
}
