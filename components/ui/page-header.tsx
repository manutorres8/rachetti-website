import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PageHeaderProps {
  title: string
  subtitle?: string
  backLink?: string
  backLabel?: string
}

export function PageHeader({ title, subtitle, backLink = "/", backLabel = "Volver al inicio" }: PageHeaderProps) {
  return (
    <div className="text-center mb-16">
      {backLink && (
        <div className="mb-8">
          <Link href={backLink}>
            <Button variant="ghost" className="text-burgundy hover:text-burgundy/80 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {backLabel}
            </Button>
          </Link>
        </div>
      )}
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark mb-4">{title}</h1>
      <div className="w-20 h-1 bg-burgundy mx-auto mb-6" />
      {subtitle && <p className="text-navy-dark/70 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  )
}
