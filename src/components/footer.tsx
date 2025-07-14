import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Smile } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="space-y-3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">Norton Applications</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Maximizing productivity with smart automation systems.
            </p>
            <div className="flex space-x-2">
              <Link href="https://www.linkedin.com/company/norton-applications-llc" className="text-gray-500 hover:text-primary dark:text-gray-400" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          {/* <div className="space-y-3">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/services/process-automation" className="hover:text-primary">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-automation" className="hover:text-primary">
                  Social Media Automation
                </Link>
              </li>
              <li>
                <Link href="/services/communication-automation" className="hover:text-primary">
                  Communication Automation
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-primary">
                  Web Development
                </Link>
              </li>
            </ul>
          </div> */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-2">
                <Smile className="h-4 w-4" />
                <span>Norton Applications LLC</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(917) 266-8809</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:admin@nortonapplications.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>admin@nortonapplications.com</span>
                </a>
              </li>
              {/* <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  123 Innovation Drive
                  <br />
                  Tech City, CA 94043
                </span>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Norton Aplications LLC. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/terms" className="hover:text-primary">
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
