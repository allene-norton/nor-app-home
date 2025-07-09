import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/placeholder.svg?height=40&width=40" alt="AutomateAI Logo" className="h-10 w-10" />
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="/#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/#process" className="text-sm font-medium transition-colors hover:text-primary">
              Process
            </Link>
            <Link href="/#cta" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="font-medium bg-transparent">
            Client Portal
          </Button>
        </div>
      </div>
    </header>
  )
}
