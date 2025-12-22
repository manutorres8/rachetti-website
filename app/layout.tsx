import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"
import { metadataContent } from "@/lib/content"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: metadataContent.site.title,
  description: metadataContent.site.description,
  generator: metadataContent.site.generator,
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${playfair.variable} antialiased`}>
        {children}
        <WhatsAppFloatingButton phoneNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5491112345678"} />
        <Analytics />
      </body>
    </html>
  )
}
