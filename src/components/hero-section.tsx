import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_0.8fr]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Automation and Development for Modern Businesses
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Streamline your business with smart automation and custom web apps— boost efficiency, reduce errors, accelerate growth.
              </p>
            </div>
            {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div> */}
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=700&width=700"
                alt="AI automation dashboard visualization"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
