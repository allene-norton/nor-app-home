"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

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
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </div>
        
        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-4">
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
            <Link href="/book-a-call">
              Booking Form + Schedule Call
            </Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="font-medium bg-transparent text-xs px-2"
            asChild
          >
            <a href="https://clients.nortonapplications.com" target="_blank" rel="noopener noreferrer">
              Portal
            </a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="px-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <SheetTitle className="text-lg font-semibold mb-6">
                Navigation Menu
              </SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  href="/#services" 
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/#process" 
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Process
                </Link>
                <Link 
                  href="/#cta" 
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="/about" 
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <div className="pt-4 border-t">
                  <Button
                    className="w-full font-medium bg-[#065d3b] hover:bg-[#065d3b]/90"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/book-a-call">
                      Book a Call
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}