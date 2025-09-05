import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                About Norton Applications
              </h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Transforming businesses through intelligent automation and
                custom development solutions
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative h-[40%] w-[40%] overflow-hidden rounded-lg">
                <img
                  src="/me-approachable-2.jpg"
                  alt="Allene Norton"
                  className="object-cover w-full h-full"
                />
              </div>

              <p className="text-gray-500 text-sm text-center mt-0">
                Allene Norton, Founder
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">My Story</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Previously head of technical support and developer relations at{" "}
                <a
                  href="https://copilot.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-slate-800 hover:scale-105 transform transition-all duration-200"
                >
                  Copilot
                </a>{" "}
                for over 3 years, I now offer services through my agency and
                specialize in business automation tools, custom web
                applications, marketing sites, and software configuration in
                common productivity tools such as <a
                  href="https://airtable.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-slate-800 hover:scale-105 transform transition-all duration-200"
                >
                  Airtable
                </a> and <a
                  href="https://notion.so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-slate-800 hover:scale-105 transform transition-all duration-200"
                >
                  Notion
                </a>.
              </p>

              <h2 className="text-2xl font-bold">My Mission</h2>
              <p className="text-gray-500 dark:text-gray-400">
                My mission is to help businesses eliminate manual processes and
                optimize their operations through strategic technology
                implementation and custom web development.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                With 5+ years of experience in web development, I have a
                strong foundational understanding of APIs and software
                integration, experience with AI-assisted tools and training
                custom AI chatbots, and have built numerous automations and
                workflows for many small-to-medium sized service businesses.
              </p>

              <p className="text-gray-500 dark:text-gray-400">
                Additionally, I built the public{" "}
                <a
                  href="https://make.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-slate-800 hover:scale-105 transform transition-all duration-200"
                >
                  Make
                </a>{" "}
                integration for{" "}
                <a
                  href="https://copilot.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-slate-800 hover:scale-105 transform transition-all duration-200"
                >
                  Copilot
                </a>{" "}
                comprised of 100+ triggers and actions, leading to a wealth of
                experience that I can provide for businesses looking to share their app integrations with the
                public.
              </p>

              <h2 className="text-2xl font-bold">Expertise</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                 <li>
                  Custom web applications, including {" "}
                  <a
                    href="https://copilot.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-800 hover:scale-105 transform transition-all duration-200"
                  >
                    Copilot
                  </a>{" "}
                  custom apps
                </li>
                <li>
                  Automated workflows that save hours of manual work on
                  platforms such as {" "}
                  <a
                    href="https://zapier.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-800 hover:scale-105 transform transition-all duration-200"
                  >
                    Zapier
                  </a>{" "}
                  and {" "}
                  <a
                    href="https://make.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-800 hover:scale-105 transform transition-all duration-200"
                  >
                    Make
                  </a>{" "}
                </li>
                <li>Well-designed landing pages and marketing sites</li>
                <li><a
                    href="https://retool.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-800 hover:scale-115 transform transition-all duration-200"
                  >
                    Retool
                  </a> apps for rapid internal tool development</li>
                <li>
                  Expert implementation of productivity platforms and
                  integrations
                </li>
                <li>
                  Custom app integration builds for businesses looking to
                  provide their offering on {" "}
                  <a
                    href="https://make.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-800 hover:scale-105 transform transition-all duration-200"
                  >
                    Make
                  </a>{" "}
                </li>
                <li>
                  Top-tier expertise with the {" "}
                  <a
                    href="https://copilot.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-800 hover:scale-105 transform transition-all duration-200"
                  >
                    Copilot
                  </a>{" "}
                  software and integrations
                </li>
              </ul>
              <h2 className="text-2xl font-bold">My Approach</h2>
              <p className="text-gray-500 dark:text-gray-400">
                I believe in building long-term partnerships with my clients,
                providing ongoing support, optimization, and innovation to
                ensure your automation and development solutions continue to deliver value as
                your business evolves.
              </p>

              <h2 className="text-2xl font-bold">My Values</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <strong>Innovation:</strong> I continuously explore new
                  technologies and approaches to deliver cutting-edge solutions.
                </li>
                <li>
                  <strong>Excellence:</strong> I hold myself to the highest
                  standards in everything I do.
                </li>
                <li>
                  <strong>Integrity:</strong> I build trust through honest
                  communication and ethical business practices.
                </li>
                <li>
                  <strong>Client Success:</strong> I measure my success by the
                  success of my clients.
                </li>
                <li>
                  <strong>Collaboration:</strong> I work closely with my clients
                  as true partners in their success.
                </li>
              </ul>
            </div>

            <div className="flex justify-center pt-6">
              <p className="text-gray-500 dark:text-gray-400">
                Ready to transform how your business operates? Let's explore how
                custom development and smart automation can unlock your team's
                potential.
              </p>
              <Link href="/#cta">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
