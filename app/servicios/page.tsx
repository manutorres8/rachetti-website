"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { allServices } from "@/lib/data"
import { Briefcase, Building2, FileText, Gavel, Shield, Users2, Scale, Banknote, Home, Users, Award, FolderLock } from "lucide-react"
import { metadataContent } from "@/lib/content"
import { SectionHeader } from "@/components/features/section-header"
import { ServiceCard } from "@/components/features/service-card"

const serviceIcons = [
  FileText, // Derecho Civil y Comercial
  Users, // Derecho de Familia
  Award, // Derecho de Autor y Propiedad Intelectual
  Scale, // Mediación y Arbitraje
  Shield, // Competencia Desleal y Defensa de la Competencia
  Briefcase, // Derecho Administrativo
  Gavel, // Derecho Penal
  FolderLock, // Protección de Datos Personales
  Banknote, // Derecho de los Consumidores
  Home, // Inversión Inmobiliaria
  Building2, // Derecho Corporativo
  Users2, // Derecho Laboral
]

export default function AllServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-navy-dark page-fade-scale">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={metadataContent.pages.services.title.replace(" | Rachetti & Asociados", "")}
            subtitle={metadataContent.pages.services.description}
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                icon={serviceIcons[index] ?? FileText}
                variant="dark"
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
