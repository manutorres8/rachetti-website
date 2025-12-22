"use client"

import React, { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { teamMembers, newsItems } from "@/lib/data"
import { ArrowLeft, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { useScrollToTop } from "@/hooks/use-scroll-to-top"

export default function EmpleadoPage() {
  const params = useParams()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useScrollToTop()

  const empleadoId = typeof params.id === "string" ? params.id : undefined
  const empleado = empleadoId ? teamMembers.find((member) => member.id === empleadoId) : undefined
  const noticiasRelacionadas = empleadoId ? newsItems.filter((news) => news.relatedTeamMember === empleadoId) : []

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!empleado) {
    return (
      <div className="min-h-screen bg-navy-darker flex items-center justify-center">
        <div className="text-center animate-blur-fade">
          <h1 className="text-2xl font-serif text-white mb-4">Empleado no encontrado</h1>
          <Link href="/" className="text-burgundy hover:text-burgundy/80 transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-navy-darker">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-navy-darker/95 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </button>
        </div>
      </nav>

      <div className={`pt-24 pb-16 ${mounted ? "animate-slide-right" : "opacity-0"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-navy-dark rounded-lg overflow-hidden mb-12 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12 items-stretch">
              {/* Image */}
              <div className="md:col-span-1 flex">
                <div className="relative overflow-hidden rounded-sm w-full h-full">
                  <img
                    src={empleado.image || "/placeholder.svg"}
                    alt={empleado.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-2 text-white">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">{empleado.name}</h1>
                <p className="text-burgundy text-xl font-medium mb-2">{empleado.role}</p>
                <p className="text-white/60 text-lg mb-8">{empleado.specialty}</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                    <Mail className="w-5 h-5 text-burgundy" />
                    <a href={`mailto:${empleado.email}`} className="group-hover:underline">
                      {empleado.email}
                    </a>
                  </div>

                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={empleado.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-burgundy hover:bg-burgundy/80 text-white rounded-sm transition-all hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="/#contacto"
                    className="px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-sm transition-all hover:scale-105"
                  >
                    Contactar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-xl">
            <h2 className="font-serif text-3xl font-bold text-navy-dark mb-6">Sobre {empleado.name.split(" ")[1]}</h2>
            <div className="w-20 h-1 bg-burgundy mb-6" />
            <p className="text-navy-dark/80 text-lg leading-relaxed">{empleado.description}</p>
          </div>

          {noticiasRelacionadas.length > 0 && (
            <div>
              <h2 className="font-serif text-3xl font-bold text-white mb-8">Noticias Relacionadas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {noticiasRelacionadas.map((noticia, index) => (
                  <div
                    key={noticia.id}
                    className="bg-navy-dark rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-xl group opacity-0 animate-fade-scale"
                    style={{
                      animationDelay: `${index * 150 + 300}ms`,
                    }}
                  >
                   {noticia.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={noticia.image || "/placeholder.svg"}
                        alt={noticia.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent" />
                    </div>
                    )}
                    <div className="p-6">
                      <p className="text-burgundy text-sm font-medium mb-2">{noticia.date}</p>
                       <Link href={`/noticia/${noticia.id}`}>
                          <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-burgundy transition-colors">
                            {noticia.title}
                          </h3>
                      </Link>
                      <p className="text-white/70 leading-relaxed">{noticia.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
