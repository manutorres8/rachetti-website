"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { sectionContent, formContent, commonTexts } from "@/lib/content"
import { teamMembers } from "@/lib/data"
import type { TeamMember } from "@/lib/types"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 })
  const searchParams = useSearchParams()
  const [selectedEmployee, setSelectedEmployee] = useState<TeamMember | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const empleadoParam = searchParams.get('empleado')
    console.log('🔍 URL parameter empleado:', empleadoParam)
    
    if (empleadoParam) {
      const employee = teamMembers.find(member => member.id === empleadoParam)
      console.log('👤 Found employee:', employee)
      setSelectedEmployee(employee)
      
      // Si hay un empleado seleccionado, ajustar el asunto
      if (employee) {
        setFormData(prev => ({
          ...prev,
          subject: `Consulta sobre ${employee.name}`
        }))
      }
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const emailData = {
      ...formData,
      employeeId: selectedEmployee?.id,
      recipientEmail: selectedEmployee?.email || 'info@rachettiyasoc.com'
    }

    console.log('📤 Sending email data:', emailData)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      })

      if (response.ok) {
        alert(formContent.contact.successMessage)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        const error = await response.json()
        alert(`Error: ${error.error || 'Error al enviar el mensaje'}`)
      }
    } catch (error) {
      alert('Error al enviar el mensaje. Por favor intenta de nuevo.')
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={sectionRef} id="contacto" className="py-24 bg-navy-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${isVisible ? "animate-slide-bottom" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{sectionContent.contact.title}</h2>
            <div className="w-20 h-1 bg-burgundy mx-auto mb-6" />
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
              {sectionContent.contact.subtitle}
            </p>
            {selectedEmployee && (
              <div className="bg-burgundy/20 border border-burgundy/30 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-burgundy font-medium">
                  Estás contactando a <span className="font-bold">{selectedEmployee.name}</span>
                </p>
                <p className="text-white/70 text-sm mt-1">
                  Tu mensaje será enviado directamente a este profesional
                </p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-white mb-2 block">
                  {formContent.contact.labels.name} {commonTexts.labels.required}
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-navy-darker border-white/20 text-white placeholder:text-white/40"
                  placeholder={formContent.contact.placeholders.name}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  {formContent.contact.labels.email} {commonTexts.labels.required}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-navy-darker border-white/20 text-white placeholder:text-white/40"
                  placeholder={formContent.contact.placeholders.email}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone" className="text-white mb-2 block">
                  {formContent.contact.labels.phone}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-navy-darker border-white/20 text-white placeholder:text-white/40"
                  placeholder={formContent.contact.placeholders.phone}
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-white mb-2 block">
                  {formContent.contact.labels.subject} {commonTexts.labels.required}
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-navy-darker border-white/20 text-white placeholder:text-white/40"
                  placeholder={formContent.contact.placeholders.subject}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-white mb-2 block">
                {formContent.contact.labels.message} {commonTexts.labels.required}
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-navy-darker border-white/20 text-white placeholder:text-white/40 min-h-32"
                placeholder={formContent.contact.placeholders.message}
              />
            </div>

            <div className="text-center">
              <Button 
                type="submit" 
                size="lg" 
                className="bg-burgundy hover:bg-burgundy-dark text-white px-12 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : formContent.contact.submitButton}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
