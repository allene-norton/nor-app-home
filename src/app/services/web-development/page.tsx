import { Code, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function WebDevelopmentPage() {
  const features = [
    "Custom web application development",
    "Responsive design and mobile optimization",
    "API development and third-party integrations",
    "Database design and optimization",
    "Cloud deployment and scaling",
    "Automated testing and quality assurance",
  ]

  const benefits = [
    "Launch web applications 50% faster",
    "Built-in automation capabilities from day one",
    "Scalable architecture for future growth",
    "Seamless integration with existing systems",
    "Ongoing maintenance and support included",
  ]

  const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "Python & Django",
    "PostgreSQL & MongoDB",
    "AWS & Vercel",
    "Docker & Kubernetes",
  ]

  return (
    <main className="min-h-screen">
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <Code className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Web Development</h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Create powerful, responsive web applications with integrated automation capabilities that drive business
                growth and efficiency.
              </p>
            </div>

            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Web development workspace"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Development Services</CardTitle>
                  <CardDescription>Full-stack web development with automation integration</CardDescription>
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
                  <CardTitle>Project Benefits</CardTitle>
                  <CardDescription>Advantages of our integrated development approach</CardDescription>
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
              <h2 className="text-2xl font-bold">Technology Stack</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {technologies.map((tech) => (
                  <div key={tech} className="bg-muted/50 rounded-lg p-4 text-center">
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Development Process</h2>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold">Discovery</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Understand requirements and plan the architecture
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold">Design</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Create user experience and technical specifications
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold">Development</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Build and integrate automation features</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h3 className="font-semibold">Launch</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Deploy, test, and provide ongoing support</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <Link href="#cta" className="text-primary hover:underline font-medium">
                Start your web development project →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
