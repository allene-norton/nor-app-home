import { Share2, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SocialMediaAutomationPage() {
  const features = [
    "AI-powered content creation and curation",
    "Multi-platform scheduling and publishing",
    "Automated engagement and response management",
    "Performance analytics and reporting",
    "Hashtag optimization and trend analysis",
    "Social listening and brand monitoring",
  ]

  const benefits = [
    "Save 15+ hours per week on social media management",
    "Increase engagement rates by up to 40%",
    "Maintain consistent brand presence across platforms",
    "Respond to customer inquiries 24/7",
    "Scale social media efforts without additional staff",
  ]

  return (
    <main className="min-h-screen">
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <Share2 className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Social Media Automation</h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Maximize your social media impact with AI-driven content creation, scheduling, and engagement automation
                across all platforms.
              </p>
            </div>

            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Social media automation dashboard"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Automation Features</CardTitle>
                  <CardDescription>Complete social media management automation suite</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Results You'll See</CardTitle>
                  <CardDescription>Proven outcomes from social media automation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Supported Platforms</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {["Facebook", "Instagram", "Twitter/X", "LinkedIn", "TikTok", "YouTube", "Pinterest", "Reddit"].map(
                  (platform) => (
                    <div key={platform} className="bg-muted/50 rounded-lg p-4 text-center">
                      <span className="font-medium">{platform}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">How It Works</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold">Content Strategy</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    AI analyzes your brand and creates a tailored content strategy
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold">Automated Publishing</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Content is automatically created, scheduled, and published across platforms
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold">Performance Optimization</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    AI continuously optimizes content based on engagement metrics
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <Link href="#cta" className="text-primary hover:underline font-medium">
                Automate your social media presence →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
