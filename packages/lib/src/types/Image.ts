import * as yup from "yup"
import { InputType } from "../ui/blocks/enums"

export interface Image {
  src: string
  width: number
  height: number
}

export const imageSchema = yup.object({
  src: yup.string().required(),
  width: yup.number().required(),
  height: yup.number().required(),
})

export const imageDef = {
  label: "Obrázek",
  fields: {
    src: {
      label: "Odkaz",
      inputType: InputType.Text,
    },
    width: {
      label: "Šířka",
      inputType: InputType.Number,
    },
    height: {
      label: "Výška",
      inputType: InputType.Number,
    },
  },
}
