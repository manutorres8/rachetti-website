"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { navigationContent } from "@/lib/content"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "#inicio", label: navigationContent.menu.inicio },
    { href: "#nosotros", label: navigationContent.menu.nosotros },
    { href: "#servicios", label: navigationContent.menu.servicios },
    { href: "#empleados", label: navigationContent.menu.empleados },
    { href: "#novedades", label: navigationContent.menu.novedades },
    { href: "#ubicacion", label: navigationContent.menu.ubicacion },
    { href: "#contacto", label: navigationContent.menu.contacto },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy-darker/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logoBlanco.png" alt={navigationContent.brand.logoAlt} className="h-12 w-12" />
            <span className="text-xl font-serif font-bold text-white">{navigationContent.brand.name}</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-burgundy transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-darker/98 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-white/90 hover:text-burgundy transition-colors py-2 text-sm uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
