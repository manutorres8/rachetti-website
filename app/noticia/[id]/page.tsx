"use client"

import React from "react"
import { notFound } from "next/navigation"
import { Calendar, ArrowLeft, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { newsItems, teamMembers } from "@/lib/data"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollToTop } from "@/hooks/use-scroll-to-top"

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = (React.use(params as Promise<{ id: string }> ) as { id: string })

  useScrollToTop()

  const newsId = typeof rawId === "string" ? decodeURIComponent(rawId) : rawId
  const newsItem = newsItems.find((item) => item.id === newsId)

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-serif font-bold text-navy-dark mb-4">Noticia no encontrada</h1>
          <p className="mb-6 text-navy-dark/70">La noticia que buscas no existe o fue eliminada.</p>
          <Link href="/novedades" className="inline-block px-6 py-3 bg-burgundy text-white rounded-sm">
            Volver a Novedades
          </Link>
        </div>
      </div>
    )
  }

  const relatedMember = newsItem.relatedTeamMember
    ? teamMembers.find((member) => member.id === newsItem.relatedTeamMember)
    : null

  return (
    <div className="min-h-screen bg-white page-slide-bottom">
      <Navigation />

      <main className="pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#novedades">
            <Button variant="ghost" className="mb-8 text-burgundy hover:text-burgundy/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Novedades
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-4 text-burgundy text-sm mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>{newsItem.date}</time>
              </div>
              {relatedMember && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <Link href={`/empleado/${relatedMember.id}`} className="hover:underline">
                    {relatedMember.name}
                  </Link>
                </div>
              )}
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark mb-6">{newsItem.title}</h1>
          </div>

          {newsItem.image && (
            <div className="relative h-96 mb-12 overflow-hidden rounded-sm">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {newsItem.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-navy-dark/80 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {relatedMember && (
            <div className="mt-16 p-8 bg-muted rounded-sm border-l-4 border-burgundy">
              <h3 className="font-serif text-2xl font-bold text-navy-dark mb-4">Autor</h3>
              <div className="flex items-start gap-6">
                <img
                  src={relatedMember.image || "/placeholder.svg"}
                  alt={relatedMember.name}
                  className="w-24 h-24 rounded-sm object-cover"
                />
                <div>
                  <Link href={`/empleado/${relatedMember.id}`}>
                    <h4 className="font-bold text-xl text-navy-dark hover:text-burgundy transition-colors">
                      {relatedMember.name}
                    </h4>
                  </Link>
                  <p className="text-burgundy font-medium">{relatedMember.role}</p>
                  <p className="text-navy-dark/70 mt-2">{relatedMember.specialty}</p>
                </div>
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  )
}
