import { Image, imageDef, imageSchema } from "./Image"
import * as yup from "yup"
import { withBlockSchema } from "../ui/components/Block/Block"
import { InputType } from "../ui/blocks/enums"

export enum Style {
  Bold,
  Italic,
}

export interface TextNode {
  content: string
  style?: Style
  href?: string
}

export interface Paragraph {
  textNodes: TextNode[]
  image?: Image
}

const textNodeSchema: yup.SchemaOf<TextNode> = withBlockSchema(
  yup.object({
    content: yup.string().required(),
    style: yup.mixed().oneOf(Object.values(Style)),
    href: yup.string(),
  })
)

export const paragraphSchema: yup.SchemaOf<Paragraph> = withBlockSchema(
  yup.object({
    textNodes: yup.array().of(textNodeSchema).required(),
    image: imageSchema.default(undefined).optional(),
  })
)

export const paragraphDefFields = {
  image: imageDef,
  textNodes: {
    fields: {
      content: {
        label: "Obsah",
        inputType: InputType.Text,
      },
      style: {
        label: "Styl",
        inputType: InputType.Select,
      },
      href: {
        label: "Odkaz",
        inputType: InputType.Text,
      },
    },
  },
}
