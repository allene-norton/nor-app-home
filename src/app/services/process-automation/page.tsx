import { GitMerge, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ProcessAutomationPage() {
  const features = [
    "Workflow design and optimization",
    "Task automation and scheduling",
    "Data integration across systems",
    "Real-time monitoring and alerts",
    "Custom business rule implementation",
    "API integrations and webhooks",
  ]

  const benefits = [
    "Increase operational efficiency by 70%",
    "Reduce human error in repetitive tasks",
    "Improve process visibility and control",
    "Enable 24/7 automated operations",
    "Scale processes without proportional cost increases",
  ]

  return (
    <main className="min-h-screen">
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <GitMerge className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Process Automation</h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Streamline complex business processes with intelligent workflow automation that adapts to your unique
                operational needs.
              </p>
            </div>

            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Process automation workflow diagram"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Automation Capabilities</CardTitle>
                  <CardDescription>Comprehensive process automation tools for every business function</CardDescription>
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
                  <CardTitle>Business Impact</CardTitle>
                  <CardDescription>Tangible results from implementing process automation</CardDescription>
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
              <h2 className="text-2xl font-bold">Implementation Process</h2>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold">Analysis</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Map current processes and identify automation opportunities
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold">Design</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Create optimized workflows and automation logic
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold">Deploy</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Implement and test automation solutions</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h3 className="font-semibold">Optimize</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Monitor performance and continuously improve
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <Link href="#cta" className="text-primary hover:underline font-medium">
                Start your Process Automation journey →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
