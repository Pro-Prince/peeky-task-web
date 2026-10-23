import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { FeaturesBento } from "@/components/FeaturesBento";
import { EverySurface } from "@/components/EverySurface";
import { ShortcutsSection } from "@/components/ShortcutsSection";
import { WatchItWork } from "@/components/WatchItWork";
import { SpeedMetrics } from "@/components/SpeedMetrics";
import { PrivacySection } from "@/components/PrivacySection";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <MarqueeTicker />
        <FeaturesBento />
        <EverySurface />
        <ShortcutsSection />
        <WatchItWork />
        <SpeedMetrics />
        <PrivacySection />
        <PricingSection />
        <FaqSection />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
