import * as yup from "yup"
import { InputType } from "../ui/blocks/enums"

export interface BlockTitleFields {
  title: string
  isTopLevel?: boolean
  className?: string
}

export const blockTitleSchema = {
  title: yup.string().required(),
  isTopLevel: yup.boolean().default(false),
  className: yup.string(),
}

export const blockTitleDef = {
  title: {
    label: "Nadpis",
    inputType: InputType.Text,
  },
  isTopLevel: {
    label: "Hlavní nadpis",
    inputType: InputType.Checkbox,
  },
}
