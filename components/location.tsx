"use client"

import { useRef } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { sectionContent, locationContent } from "@/lib/content"

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 })

  const contactInfo = locationContent.contactInfo.map((info, index) => {
    const icons = [MapPin, Phone, Mail, Clock]
    return {
      icon: icons[index],
      title: info.title,
      content: info.content,
    }
  })

  return (
    <section ref={sectionRef} id="ubicacion" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`section-fade ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark mb-4">{sectionContent.location.title}</h2>
            <div className="w-20 h-1 bg-burgundy mx-auto mb-6" />
            <p className="text-navy-dark/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {sectionContent.location.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-burgundy/10 rounded-sm flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-burgundy" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-dark mb-1">{info.title}</h3>
                      <p className="text-navy-dark/70 text-sm whitespace-pre-line leading-relaxed">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-96 bg-muted rounded-sm overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.0308066546218!2d-56.190677199999996!3d-34.9056764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cd348f07a3%3A0x9b68a261d1455cf8!2sCircunvalacion%20Pl.%20Cagancha%201356%2C%2011100%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1766103297671!5m2!1ses!2suy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={sectionContent.location.mapTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
