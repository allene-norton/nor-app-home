import { MessageSquare, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CommunicationAutomationPage() {
  const features = [
    "AI-powered chatbots and virtual assistants",
    "Automated email marketing campaigns",
    "SMS and WhatsApp automation",
    "Customer support ticket routing",
    "Personalized message generation",
    "Multi-channel communication orchestration",
  ]

  const benefits = [
    "Respond to customer inquiries instantly",
    "Reduce support ticket volume by 60%",
    "Increase customer satisfaction scores",
    "Provide 24/7 customer support coverage",
    "Personalize communications at scale",
  ]

  return (
    <main className="min-h-screen">
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <MessageSquare className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Communication Automation</h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Enhance customer interactions with intelligent automated messaging systems that deliver personalized
                communications at scale.
              </p>
            </div>

            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Communication automation interface"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Communication Tools</CardTitle>
                  <CardDescription>Comprehensive automation for all your communication channels</CardDescription>
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
                  <CardTitle>Customer Experience Benefits</CardTitle>
                  <CardDescription>Improved customer satisfaction through automated communication</CardDescription>
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
              <h2 className="text-2xl font-bold">Communication Channels</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {["Email", "SMS", "WhatsApp", "Live Chat", "Voice Calls", "Social Media DMs"].map((channel) => (
                  <div key={channel} className="bg-muted/50 rounded-lg p-4 text-center">
                    <span className="font-medium">{channel}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Implementation Approach</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold">Channel Integration</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Connect all your communication channels to a unified platform
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold">AI Training</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Train AI models on your brand voice and customer interaction patterns
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold">Automated Responses</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Deploy intelligent automation that handles customer communications
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <Link href="#cta" className="text-primary hover:underline font-medium">
                Transform your customer communications →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
