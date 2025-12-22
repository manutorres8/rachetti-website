"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { newsItems } from "@/lib/data"
import { sectionContent, commonTexts } from "@/lib/content"
import { SectionHeader } from "@/components/features/section-header"
import { NewsCard } from "@/components/features/news-card"

export default function AllNewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-muted page-fade-scale">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={sectionContent.news.allNewsTitle}
            subtitle={sectionContent.news.allNewsSubtitle}
            titleClassName="text-navy-dark"
            subtitleClassName="text-navy-dark/70"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <NewsCard
                key={item.id}
                news={item}
                href={`/noticia/${item.id}`}
                actionLabel={commonTexts.buttons.readMore}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
