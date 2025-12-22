/**
 * Contenido de formularios
 */
import { commonTexts } from "./common"

export const formContent = {
  contact: {
    labels: {
      name: commonTexts.labels.name,
      email: commonTexts.labels.email,
      phone: commonTexts.labels.phone,
      subject: commonTexts.labels.subject,
      message: commonTexts.labels.message,
    },
    placeholders: {
      name: commonTexts.placeholders.name,
      email: commonTexts.placeholders.email,
      phone: commonTexts.placeholders.phone,
      subject: commonTexts.placeholders.subject,
      message: commonTexts.placeholders.message,
    },
    submitButton: commonTexts.buttons.submit,
    successMessage: commonTexts.messages.contactSuccess,
  },
} as const

