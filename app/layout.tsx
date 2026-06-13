import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"
import { metadataContent } from "@/lib/content"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-mont" })

export const metadata: Metadata = {
  title: metadataContent.site.title,
  description: metadataContent.site.description,
  generator: metadataContent.site.generator,
  icons: {
    icon: "/miniatura logo.png",
    apple: "/miniatura logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${playfair.variable} ${montserrat.variable} antialiased`}>
        {children}
        <WhatsAppFloatingButton phoneNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "59898851719"} />
        <Analytics />
      </body>
    </html>
  )
}
