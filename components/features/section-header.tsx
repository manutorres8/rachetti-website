import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className={cn("font-serif text-4xl md:text-5xl font-bold mb-4", titleClassName)}>{title}</h2>
      <div className="w-20 h-1 bg-burgundy mx-auto mb-6" />
      {subtitle && (
        <p className={cn("text-lg max-w-2xl mx-auto leading-relaxed", subtitleClassName)}>{subtitle}</p>
      )}
    </div>
  )
}

