"use client"

import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NewsItem } from "@/lib/types"
import { cn } from "@/lib/utils"
import { commonTexts } from "@/lib/content"

interface NewsCardProps {
  news: NewsItem
  href: string
  actionLabel?: string
  variant?: "default" | "featured" | "compact"
  showDate?: boolean
  showAction?: boolean
  className?: string
  imageHeight?: "small" | "medium" | "large"
}

export function NewsCard({
  news,
  href,
  actionLabel = commonTexts.buttons.readMore,
  variant = "default",
  showDate = true,
  showAction = true,
  className,
  imageHeight = "medium",
}: NewsCardProps) {
  const imageHeights = {
    small: "h-32",
    medium: "h-48",
    large: "h-64",
  }

  const variantStyles = {
    default: "bg-white shadow-lg hover:shadow-xl",
    featured: "bg-white shadow-xl hover:shadow-2xl border-2 border-burgundy/20",
    compact: "bg-white shadow-md hover:shadow-lg",
  }

  return (
    <article className={cn("rounded-sm overflow-hidden transition-shadow group", variantStyles[variant], className)}>
      {news.image && (
        <div className={cn("relative overflow-hidden", imageHeights[imageHeight])}>
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {showDate && (
          <div className="flex items-center gap-2 text-burgundy text-sm mb-3">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <time dateTime={news.date}>{news.date}</time>
          </div>
        )}
        <h3 className="font-serif text-xl font-bold text-navy-dark mb-3 group-hover:text-burgundy transition-colors">
          {news.title}
        </h3>
        <p className="text-navy-dark/70 mb-4 leading-relaxed">{news.excerpt}</p>
        {showAction && (
          <Link href={href}>
            <Button variant="link" className="text-burgundy p-0 h-auto group/btn">
              {actionLabel}
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        )}
      </div>
    </article>
  )
}

