/**
 * Contenido del footer
 */
import { locationContent } from "./location"

export const footerContent = {
  brand: {
    name: "Rachetti & Asociados",
    description: "Estudio jurídico especializado en soluciones legales integrales para empresas y particulares.",
  },
  sections: {
    location: {
      title: "Ubicación",
      address: locationContent.address.full,
    },
    contact: {
      title: "Contacto",
      phones: locationContent.contact.phones,
      email: locationContent.contact.email,
    },
  },
  copyright: (year: number) => `© ${year} Rachetti & Asociados. Todos los derechos reservados.`,
} as const

