import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/nalogo3.png"
              alt="Norton Applications Logo"
              className="h-16 w-auto"
            />
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
          <Button
            variant="outline"
            className="font-medium bg-transparent"
            asChild
          >
            <a href="https://clients.nortonapplications.com" target="_blank" rel="noopener noreferrer">
              Client Portal
            </a>
          </Button>
          <Button
            className="font-medium bg-[#065d3b] hover:bg-[#065d3b]/90"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              Booking Form
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
