import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 h-[75vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/igor-saikin-8LE9Z6Kx7XQ-unsplash.jpg"
          alt="Computer terminal photo by Igor Saikin - Unsplash"
          className="object-cover w-full h-full"
              />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Automation and Development for Modern Businesses
            </h1>
        <p className="max-w-[800px] mx-auto text-xl md:text-2xl text-gray-200">
              Streamline your business with smart automation and custom web apps— boost efficiency, reduce errors, accelerate growth.
            </p>
      </div>
        </div>
      </div>
    </section>
  )
}