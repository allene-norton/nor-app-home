import { Card } from "@/components/ui/card"
import { FileText, GitMerge, Share2, MessageSquare, Code } from "lucide-react"

export default function ComprehensiveSolutions() {
  const solutions = [
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Document Automation",
      description:
        "Transform your document workflows with AI-powered automation. Create, process, and manage documents with unprecedented efficiency and accuracy.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <GitMerge className="h-12 w-12 text-primary" />,
      title: "Process Automation",
      description:
        "Eliminate manual tasks and streamline complex business processes. Our intelligent workflow automation solutions adapt to your unique business needs.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Share2 className="h-12 w-12 text-primary" />,
      title: "Social Media Automation",
      description:
        "Maximize your social media impact with AI-driven content creation, scheduling, and analytics. Maintain a consistent presence across all platforms.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      title: "Communication Automation",
      description:
        "Enhance customer interactions with automated messaging systems. Deliver personalized communications at scale while maintaining the human touch.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Website Development",
      description:
        "Create powerful, responsive web applications with integrated automation capabilities. Build digital experiences that drive business growth.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="solutions" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comprehensive Solutions</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              End-to-end automation solutions tailored to your business needs
            </p>
          </div>
        </div>
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative h-64 w-full overflow-hidden md:h-full">
                    <img
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{solution.description}</p>
                  <a href="#" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                    Learn more
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
