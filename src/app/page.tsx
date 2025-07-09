import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import ProcessSection from "@/components/process-section"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <ProcessSection />
      <CtaSection />
    </main>
  )
}
