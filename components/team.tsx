"use client"

import { useRef } from "react"
import { teamMembers } from "@/lib/data"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { sectionContent } from "@/lib/content"
import { TeamMemberCard } from "@/components/features/team-member-card"

export default function Team() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(sectionRef)

  const displayedMembers = teamMembers.slice(0, 3)

  return (
    <section ref={sectionRef} id="empleados" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`section-fade ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark mb-4">{sectionContent.team.title}</h2>
            <div className="w-20 h-1 bg-burgundy mx-auto mb-6" />
            <p className="text-navy-dark/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {sectionContent.team.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
            {displayedMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                href={`/empleado/${member.id}`}
                showSocialIcons={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
