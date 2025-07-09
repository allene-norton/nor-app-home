import { Card, CardContent } from "@/components/ui/card"

export default function PlatformIntegrations() {
  const platforms = [
    { name: "Make.com", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Airtable", logo: "/placeholder.svg?height=80&width=160" },
    { name: "DocuSign", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Copilot.app", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Zapier", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Microsoft", logo: "/placeholder.svg?height=80&width=160" },
  ]

  return (
    <section id="integrations" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Powered by Industry-Leading Platforms</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Seamlessly integrate with the tools you already use
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-6">
          {platforms.map((platform, index) => (
            <Card key={index} className="border-0 shadow-none bg-transparent">
              <CardContent className="flex items-center justify-center p-4">
                <div className="relative h-16 w-32">
                  <img
                    src={platform.logo || "/placeholder.svg"}
                    alt={`${platform.name} logo`}
                    className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
