import { Image, imageSchema } from "./Image"
import * as yup from "yup"
import { withBlockSchema } from "../ui/components/Block/Block"

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
