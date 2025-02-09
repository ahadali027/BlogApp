
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"


export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
          <div>
            <h2 className="text-2xl font-bold mb-4">BloggerX</h2>
            <p className="text-muted-foreground mb-4">
              Discover insightful articles, engage in meaningful discussions, and stay updated with the latest trends
              across various topics.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialIcon href="#" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
              <SocialIcon href="#" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialIcon href="#" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
            </div>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <FooterLink href="/category/technology">Technology</FooterLink>
              <FooterLink href="/category/travel">Travel</FooterLink>
              <FooterLink href="/category/food">Food</FooterLink>
              <FooterLink href="/category/lifestyle">Lifestyle</FooterLink>
              <FooterLink href="/categories">All Categories</FooterLink>
            </ul>
          </div>

       
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">Stay updated with our latest articles and news.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-secondary text-secondary-foreground"
                required
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

     
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">© {currentYear} BloggerX. All rights reserved.</p>
          <div className="flex space-x-4">
            <FooterLink href="/sitemap">Sitemap</FooterLink>
            <FooterLink href="/accessibility">Accessibility</FooterLink>
            <FooterLink href="/cookie-policy">Cookie Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors duration-200">
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

