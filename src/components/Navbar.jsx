
import { useState} from "react"

import { Menu, Search, ChevronDown, Sun, Moon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-primary font-bold text-2xl">
                BloggerX
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="/">Home</NavLink>
                <NavDropdown title="Categories" items={["Technology", "Travel", "Food", "Lifestyle"]} />
                <NavDropdown title="Trending" items={["This Week", "This Month", "All Time"]} />
                <NavLink href="/about">About</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <SearchBar isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
              <div className="ml-3 flex items-center">
                
                <Button variant="ghost" size="sm" className="ml-2">
                  Login
                </Button>
                <Button variant="default" size="sm" className="ml-2">
                  Register
                </Button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavDropdown title="Categories" items={["Technology", "Travel", "Food", "Lifestyle"]} />
            <MobileNavDropdown title="Trending" items={["This Week", "This Month", "All Time"]} />
            <MobileNavLink href="/about">About</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="flex items-center px-5">
              <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="sm" className="ml-2">
                Login
              </Button>
              <Button variant="default" size="sm" className="ml-2">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
    >
      {children}
    </Link>
  )
}

function NavDropdown({ title, items }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
          {title}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {items.map((item) => (
          <DropdownMenuItem key={item}>
            <Link href={`/${title.toLowerCase()}/${item.toLowerCase().replace(" ", "-")}`}>{item}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function MobileNavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
    >
      {children}
    </Link>
  )
}

function MobileNavDropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-muted-foreground hover:text-foreground w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-between"
      >
        {title}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-1">
          {items.map((item) => (
            <MobileNavLink key={item} href={`/${title.toLowerCase()}/${item.toLowerCase().replace(" ", "-")}`}>
              {item}
            </MobileNavLink>
          ))}
        </div>
      )}
    </div>
  )
}

function SearchBar({ isOpen, setIsOpen }) {
  return (
    <div className="relative">
      {!isOpen ? (
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
          <Search className="h-5 w-5" />
        </Button>
      ) : (
        <div className="absolute right-0 top-0 flex items-center">
          <Input
            type="text"
            placeholder="Search..."
            className="w-64 pr-8 rounded-md bg-secondary text-secondary-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background"
          />
          <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  )
}

