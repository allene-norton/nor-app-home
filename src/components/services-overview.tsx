import { MessageSquare, Code, PersonStanding, ClipboardType, FolderCheck, CircleDollarSign, SquareCheckBig } from "lucide-react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ServicesOverview() {
  const services = [
    {
      icon: <PersonStanding className="h-10 w-10 text-primary" />,
      title: "Client Onboarding Automation",
      description: "Streamline client onboarding processes with intelligent workflow automation.",
      path: "/services/process-automation",
    },
    {
      icon: <ClipboardType className="h-10 w-10 text-primary" />,
      title: "Forms and Contracts Automation",
      description: "Streamline sending forms, digital signatures, and automated approval workflows.",
      path: "/services/forms-contracts-automation",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Communication Automation",
      description: "Enhance customer interactions with automated messaging and response systems.",
      path: "/services/communication-automation",
    },
    {
      icon: <FolderCheck className="h-10 w-10 text-primary" />,
      title: "File Sharing Automation",
      description: "Streamline document workflows with automated file sharing and syncing.",
      path: "/services/file-automation",
    },
    {
      icon: <CircleDollarSign className="h-10 w-10 text-primary" />,
      title: "Invoicing and Payments Automation",
      description: "Automate invoice generation, payment processing, and financial reporting to reduce errors and accelerate cash flow.",
      path: "/services/invoicing-payments-automation",
    },
    {
      icon: <SquareCheckBig className="h-10 w-10 text-primary" />,
      title: "Project and Task Management Automation",
      description: "Optimize project workflows with automated task assignment, progress tracking, and deadline management for enhanced productivity.",
      path: "/services/project-task-automation",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "Create powerful web applications with integrated automation capabilities.",
      path: "/services/web-development",
    },
  ]

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Automate. Optimize. Grow.</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Leverage cutting-edge solutions to transform your business operations
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl space-y-4 py-12">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                    {/* <Link href={service.path} className="inline-block text-sm font-medium text-primary hover:underline">
                      Learn more
                    </Link> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
