import { Paragraph, paragraphSchema } from "./RichText"
import * as yup from "yup"

export interface EventProps {
  name: string
  date: {
    from: string
    to: string
  }
  description?: Paragraph[]
}

export const eventSchema = yup.object({
  name: yup.string().required(),
  date: yup
    .object({
      from: yup.string().required(),
      to: yup.string().required(),
    })
    .required(),
  description: yup.array().of(paragraphSchema.required()).required(),
})
