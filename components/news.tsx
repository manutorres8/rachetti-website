"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { newsItems } from "@/lib/data"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { sectionContent, commonTexts } from "@/lib/content"
import { NewsCard } from "@/components/features/news-card"

export default function News() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)

  const displayedNews = newsItems.slice(0, 3)

  return (
    <section ref={sectionRef} id="novedades" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`section-fade ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark mb-4">{sectionContent.news.title}</h2>
            <div className="w-20 h-1 bg-burgundy mx-auto mb-6" />
            <p className="text-navy-dark/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {sectionContent.news.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {displayedNews.map((item) => (
              <NewsCard
                key={item.id}
                news={item}
                href={`/noticia/${encodeURIComponent(item.id)}`}
                actionLabel={commonTexts.buttons.readMore}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/novedades">
              <Button
                size="lg"
                className="bg-burgundy hover:bg-burgundy/90 text-white font-semibold px-8 py-6 text-base"
              >
                {commonTexts.buttons.viewAllNews}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
