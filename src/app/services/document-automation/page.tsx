import { FileText, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function DocumentAutomationPage() {
  const features = [
    "Automated document generation from templates",
    "AI-powered content extraction and processing",
    "Digital signature integration",
    "Document workflow management",
    "Version control and audit trails",
    "Multi-format support (PDF, Word, Excel, etc.)",
  ]

  const benefits = [
    "Reduce document processing time by up to 90%",
    "Eliminate manual data entry errors",
    "Ensure compliance with industry standards",
    "Improve document security and access control",
    "Scale document operations without additional staff",
  ]

  return (
    <main className="min-h-screen">
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <FileText className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Document Automation</h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Transform your document workflows with intelligent automation solutions that eliminate manual processes
                and ensure accuracy.
              </p>
            </div>

            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Document automation workflow"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                  <CardDescription>
                    Comprehensive document automation capabilities designed for modern businesses
                  </CardDescription>
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
                  <CardTitle>Business Benefits</CardTitle>
                  <CardDescription>Measurable improvements to your document management processes</CardDescription>
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
              <h2 className="text-2xl font-bold">How It Works</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold">Setup & Integration</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We integrate with your existing systems and configure automation rules
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold">Automated Processing</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Documents are automatically generated, processed, and routed based on your workflows
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold">Monitor & Optimize</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Track performance and continuously improve your document workflows
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <Link href="#cta" className="text-primary hover:underline font-medium">
                Get started with Document Automation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
