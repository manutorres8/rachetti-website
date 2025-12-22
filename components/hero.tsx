"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { sectionContent } from "@/lib/content"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-navy-darker overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/DSC00424EDITADO-scaled.jpg"
          alt={sectionContent.hero.imageAlt}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-darker/80 via-navy-darker/60 to-navy-darker/90" />
      </div>

      <div className={`relative z-10 text-center px-4 ${isVisible ? "animate-blur-fade" : "opacity-0"}`}>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          {sectionContent.hero.title}
        </h1>
        <div className="w-24 h-1 bg-burgundy mx-auto mb-6" />
        <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
          {sectionContent.hero.subtitle}
        </p>
      </div>

      {/* Scroll Indicator */}
      <a href="#nosotros" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </a>
    </section>
  )
}
