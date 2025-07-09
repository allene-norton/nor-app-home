import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About AutomateAI</h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Transforming businesses through intelligent automation solutions
              </p>
            </div>

            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Our team at work"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-gray-500 dark:text-gray-400">
                At AutomateAI, our mission is to empower businesses of all sizes with cutting-edge automation solutions
                that drive efficiency, reduce costs, and accelerate growth. We believe that intelligent automation is
                the key to unlocking the full potential of modern businesses in today's fast-paced digital landscape.
              </p>

              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Founded in 2020, AutomateAI was born from a simple observation: businesses were spending too much time
                on repetitive tasks and not enough time on strategic growth. Our founders, with backgrounds in AI,
                software development, and business operations, came together with a shared vision of making powerful
                automation tools accessible to businesses of all sizes.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                What started as a small team working with local businesses has grown into a comprehensive automation
                solution provider serving clients across multiple industries. Our journey has been driven by a
                commitment to innovation, excellence, and client success.
              </p>

              <h2 className="text-2xl font-bold">Our Approach</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We take a consultative approach to every client engagement, starting with a deep understanding of your
                business processes, challenges, and goals. Our team of experts then designs custom automation solutions
                that integrate seamlessly with your existing systems and workflows.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                We believe in building long-term partnerships with our clients, providing ongoing support, optimization,
                and innovation to ensure your automation solutions continue to deliver value as your business evolves.
              </p>

              <h2 className="text-2xl font-bold">Our Values</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <strong>Innovation:</strong> We continuously explore new technologies and approaches to deliver
                  cutting-edge solutions.
                </li>
                <li>
                  <strong>Excellence:</strong> We hold ourselves to the highest standards in everything we do.
                </li>
                <li>
                  <strong>Integrity:</strong> We build trust through honest communication and ethical business
                  practices.
                </li>
                <li>
                  <strong>Client Success:</strong> We measure our success by the success of our clients.
                </li>
                <li>
                  <strong>Collaboration:</strong> We work closely with our clients as true partners in their success.
                </li>
              </ul>
            </div>

            <div className="flex justify-center pt-6">
              <Link href="#cta">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
