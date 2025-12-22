import { MapPin, Phone, Mail } from "lucide-react"
import { footerContent } from "@/lib/content"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-darker py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">{footerContent.brand.name}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{footerContent.brand.description}</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{footerContent.sections.location.title}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed whitespace-pre-line">{footerContent.sections.location.address}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{footerContent.sections.contact.title}</h4>
            <div className="space-y-3">
              {footerContent.sections.contact.phones.map((phone, index) => (
                <div key={index} className="flex items-center gap-3 text-white/70 text-sm">
                  <Phone className="w-5 h-5 text-burgundy flex-shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-burgundy transition-colors">
                    {phone}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 text-burgundy flex-shrink-0" />
                <a href={`mailto:${footerContent.sections.contact.email}`} className="hover:text-burgundy transition-colors">
                  {footerContent.sections.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">{footerContent.copyright(currentYear)}</p>
        </div>
      </div>
    </footer>
  )
}
