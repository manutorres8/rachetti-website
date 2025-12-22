"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"
import { whatsappContent, commonTexts } from "@/lib/content"

interface WhatsAppFloatingButtonProps {
  phoneNumber: string
  message?: string
  className?: string
}

const DEFAULT_MESSAGE = whatsappContent.defaultMessage

export function WhatsAppFloatingButton({
  phoneNumber,
  message = DEFAULT_MESSAGE,
  className = "",
}: WhatsAppFloatingButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 active:scale-95 ${className}`}
      aria-label={commonTexts.aria.whatsappButton}
      type="button"
    >
      <MessageCircle
        className={`h-7 w-7 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
        strokeWidth={2.5}
      />
    </button>
  )
}
