import * as yup from "yup"
import { AdditonalFieldInputType } from "../ui/blocks/enums"

export interface Image {
  src: string
  width: number
  height: number
}

export const imageSchema = yup
  .object({
    src: yup.string().required(),
    width: yup.number().required(),
    height: yup.number().required(),
  })
  .required()

export const imageDef = {
  label: "Obrázek",
  fields: {
    src: {
      label: "Odkaz",
      inputType: AdditonalFieldInputType.Text,
    },
    width: {
      label: "Šířka",
      inputType: AdditonalFieldInputType.Number,
    },
    height: {
      label: "Výška",
      inputType: AdditonalFieldInputType.Number,
    },
  },
}
