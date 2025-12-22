"use client"

import { useRef } from "react"
import { Scale, Award, Users } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { sectionContent } from "@/lib/content"

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 })

  const iconMap = [Scale, Award, Users]
  const features = sectionContent.about.features.map((feature, index) => ({
    ...feature,
    icon: iconMap[index],
  }))

  return (
    <section ref={sectionRef} id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`section-fade ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark mb-4">{sectionContent.about.title}</h2>
            <div className="w-20 h-1 bg-burgundy mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-navy-dark/80 leading-relaxed mb-6">
                <span className="font-serif text-2xl text-burgundy">{sectionContent.hero.title}</span>{" "}
                {sectionContent.about.description.paragraph1}
              </p>
              <p className="text-lg text-navy-dark/80 leading-relaxed mb-6">
                {sectionContent.about.description.paragraph2}
              </p>
              <p className="text-lg text-navy-dark/80 leading-relaxed">
                {sectionContent.about.description.paragraph3}
              </p>
            </div>
            <div className="relative h-96">
              <img
                src="/estanteria.png"
                alt={sectionContent.about.imageAlt}
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-muted rounded-sm hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-burgundy mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-navy-dark mb-3">{feature.title}</h3>
                <p className="text-navy-dark/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
