import { FileText, GitMerge, Share2, MessageSquare, Code } from "lucide-react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ServicesOverview() {
  const services = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Document Automation",
      description: "Automate document creation, processing, and management with AI-powered tools.",
      path: "/services/document-automation",
    },
    {
      icon: <GitMerge className="h-10 w-10 text-primary" />,
      title: "Process Automation",
      description: "Streamline complex business processes with intelligent workflow automation.",
      path: "/services/process-automation",
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Social Media Automation",
      description: "Optimize your social media presence with AI-driven content and scheduling.",
      path: "/services/social-media-automation",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Communication Automation",
      description: "Enhance customer interactions with automated messaging and response systems.",
      path: "/services/communication-automation",
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Tools & Technologies</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Leverage cutting-edge AI solutions to transform your business operations
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
                    <Link href={service.path} className="inline-block text-sm font-medium text-primary hover:underline">
                      Learn more
                    </Link>
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
