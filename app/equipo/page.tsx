"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { teamMembers } from "@/lib/data"
import { sectionContent } from "@/lib/content"
import { SectionHeader } from "@/components/features/section-header"
import { TeamMemberCard } from "@/components/features/team-member-card"

export default function AllTeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white page-slide-bottom">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={sectionContent.team.fullTeamTitle}
            subtitle={sectionContent.team.fullTeamSubtitle}
            titleClassName="text-navy-dark"
            subtitleClassName="text-navy-dark/70"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                href={`/empleado/${member.id}`}
                showSocialIcons={true}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
