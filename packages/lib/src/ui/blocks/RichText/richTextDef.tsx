import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import * as yup from "yup"
import { imageDef } from "../../../types/Image"
import { Paragraph, paragraphSchema } from "../../../types/RichText"

export interface RichTextBlock extends Block {
  template: BlockTemplates.RichText
  fields: RichTextProps
}

export interface RichTextProps extends BlockFields {
  paragraphs: Paragraph[]
}

export const richTextSchema: yup.SchemaOf<RichTextProps> = withBlockSchema(
  yup.object({ paragraphs: yup.array().of(paragraphSchema) })
)

export const richTextDef: BlockDef<RichTextProps> = {
  title: "Textový obsah",
  template: BlockTemplates.RichText,
  schema: richTextSchema,
  adminFields: {
    paragraphs: {
      clonable: true,
      label: "Odstavec",
      fields: {
        image: imageDef,
        textNodes: {
          clonable: true,
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
      },
    },
  },
}
