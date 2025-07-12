import { FileText, Phone, Presentation, Cog } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ProcessSection() {
  const steps = [
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Intake Form",
      description: "You fill out a quick form about your business and automation needs",
      step: "01",
    },
    {
      icon: <Phone className="h-12 w-12 text-primary" />,
      title: "Discovery Call",
      description: "We discuss your goals and current tools in a 30-minute call",
      step: "02",
    },
    {
      icon: <Presentation className="h-12 w-12 text-primary" />,
      title: "Solution Presentation",
      description: "We present custom options, pricing, and timeline in another 30-minute call",
      step: "03",
    },
    {
      icon: <Cog className="h-12 w-12 text-primary" />,
      title: "Implementation",
      description: "We get to work building your automations while keeping you updated",
      step: "04",
    },
  ]

  return (
    <section id="process" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Work Together</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A simple, transparent process designed to deliver results efficiently
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative">
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      <div className="flex justify-center mb-4">{step.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20 transform -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
