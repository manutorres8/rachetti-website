interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark mb-4">{title}</h2>
      <div className="w-20 h-1 bg-burgundy mx-auto mb-6" />
      {subtitle && <p className="text-navy-dark/70 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  )
}
