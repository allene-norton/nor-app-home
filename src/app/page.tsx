import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import ProcessSection from "@/components/process-section"
import CtaSection from "@/components/cta-section"
import PlatformIntegrations from "@/components/platform-integrations"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <PlatformIntegrations />
      <ProcessSection />
      <CtaSection />
    </div>
  )
}
