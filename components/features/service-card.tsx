"use client"

import { LucideIcon } from "lucide-react"
import { Service } from "@/lib/types"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  service: Service
  icon: LucideIcon
  variant?: "default" | "dark" | "light"
  animationDelay?: number
  isVisible?: boolean
  className?: string
}

export function ServiceCard({
  service,
  icon: Icon,
  variant = "dark",
  animationDelay,
  isVisible = true,
  className,
}: ServiceCardProps) {
  const variantStyles = {
    dark: "bg-navy-darker border-white/10 text-white",
    light: "bg-white border-navy-dark/10 text-navy-dark",
    default: "bg-muted border-navy-dark/20 text-navy-dark",
  }

  const textStyles = {
    dark: {
      title: "text-white",
      description: "text-white/70",
    },
    light: {
      title: "text-navy-dark",
      description: "text-navy-dark/70",
    },
    default: {
      title: "text-navy-dark",
      description: "text-navy-dark/70",
    },
  }

  return (
    <div
      className={cn(
        "p-8 rounded-sm border transition-all hover:transform hover:scale-105 duration-300",
        variantStyles[variant],
        variant === "dark" && "hover:border-burgundy/50",
        variant === "light" && "hover:border-burgundy/30 hover:shadow-lg",
        variant === "default" && "hover:border-burgundy/30 hover:shadow-md",
        isVisible ? "animate-fade-scale" : "opacity-0",
        className
      )}
      style={animationDelay ? { animationDelay: `${animationDelay}ms` } : undefined}
    >
      <Icon className="w-12 h-12 text-burgundy mb-4" aria-hidden="true" />
      <h3 className={cn("font-serif text-xl font-bold mb-3", textStyles[variant].title)}>
        {service.title}
      </h3>
      <p className={cn("leading-relaxed", textStyles[variant].description)}>{service.description}</p>
    </div>
  )
}

