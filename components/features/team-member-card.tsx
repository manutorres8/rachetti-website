"use client"

import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { TeamMember } from "@/lib/types"
import { cn } from "@/lib/utils"

interface TeamMemberCardProps {
  member: TeamMember
  href: string
  variant?: "default" | "compact" | "detailed"
  showSocialIcons?: boolean
  onLinkedInClick?: (member: TeamMember) => void
  onEmailClick?: (member: TeamMember) => void
  className?: string
  imageSize?: "default" | "small" | "large"
}

export function TeamMemberCard({
  member,
  href,
  variant = "default",
  showSocialIcons = true,
  onLinkedInClick,
  onEmailClick,
  className,
  imageSize = "default",
}: TeamMemberCardProps) {
  const imageSizes = {
    small: "h-64",
    default: "h-80",
    large: "h-96",
  }

  const handleLinkedInClick = (e: React.MouseEvent) => {
    if (onLinkedInClick) {
      e.preventDefault()
      onLinkedInClick(member)
    }
  }

  const handleEmailClick = (e: React.MouseEvent) => {
    if (onEmailClick) {
      e.preventDefault()
      onEmailClick(member)
    }
  }

  return (
    <Link href={href} className={cn("group text-center cursor-pointer block", className)}>
      <div className={cn("relative mb-6 overflow-hidden rounded-sm", imageSizes[imageSize])}>
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/10 transition-all duration-300" />
      </div>
      <h3 className="font-serif text-xl font-bold text-navy-dark mb-1 group-hover:text-burgundy transition-colors">
        {member.name}
      </h3>
      <p className="text-burgundy font-medium mb-1">{member.role}</p>
      {variant !== "compact" && (
        <p className="text-navy-dark/60 text-sm mb-4">{member.specialty}</p>
      )}
      {showSocialIcons && (
        <div className="flex items-center justify-center gap-3">
          {onLinkedInClick ? (
            <button
              onClick={handleLinkedInClick}
              className="text-navy-dark/60 group-hover:text-burgundy transition-colors"
              aria-label={`LinkedIn de ${member.name}`}
            >
              <Linkedin className="w-5 h-5" />
            </button>
          ) : (
            <div className="text-navy-dark/60 group-hover:text-burgundy transition-colors" aria-hidden="true">
              <Linkedin className="w-5 h-5" />
            </div>
          )}
          {onEmailClick ? (
            <button
              onClick={handleEmailClick}
              className="text-navy-dark/60 group-hover:text-burgundy transition-colors"
              aria-label={`Email de ${member.name}`}
            >
              <Mail className="w-5 h-5" />
            </button>
          ) : (
            <div className="text-navy-dark/60 group-hover:text-burgundy transition-colors" aria-hidden="true">
              <Mail className="w-5 h-5" />
            </div>
          )}
        </div>
      )}
    </Link>
  )
}

