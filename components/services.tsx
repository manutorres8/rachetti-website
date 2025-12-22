"use client"

import { useRef } from "react"
import { Building2, FileText, Gavel, Shield, Scale, Database, Users2, UserCheck, Home, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { allServices } from "@/lib/data"
import { sectionContent, commonTexts } from "@/lib/content"
import { ServiceCard } from "@/components/features/service-card"

// Mapeo de iconos para servicios (en orden de allServices)
const serviceIcons = [
  Building2,    // Derecho Civil y Comercial
  Scale,        // Mediación y Arbitraje
  Shield,        // Competencia Desleal y Defensa de la Competencia
  Gavel,         // Derecho Administrativo
  FileText,      // Derecho Penal
  Database,      // Protección de Datos Personales
  UserCheck,     // Derecho de los Consumidores
  Home,          // Inversión Inmobiliaria
  Building2,     // Derecho Corporativo
  Users2,        // Derecho Laboral
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)

  // Mostrar solo los primeros 6 servicios en la vista previa
  const displayedServices = allServices.slice(0, 6)

  return (
    <section ref={sectionRef} id="servicios" className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`section-fade ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{sectionContent.services.title}</h2>
            <div className="w-20 h-1 bg-burgundy mx-auto mb-6" />
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              {sectionContent.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {displayedServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                icon={serviceIcons[index]}
                variant="dark"
                animationDelay={index * 100}
                isVisible={isVisible}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/servicios">
              <Button
                size="lg"
                className="bg-burgundy hover:bg-burgundy/90 text-white font-semibold px-8 py-6 text-base"
              >
                {commonTexts.buttons.viewAllServices}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
