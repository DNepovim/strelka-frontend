import * as yup from "yup"
import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { HeadingProps } from "./Heading2"

export interface Heading2Block extends Block {
  template: BlockTemplates.Heading2
  fields: Heading2Props
}

export interface Heading2Props extends BlockFields {
  content: HeadingProps
}

export const Heading2Schema: yup.SchemaOf<Heading2Props> = withBlockSchema(
  yup.object({
    content: yup
      .object({
        content: yup.string().required(),
      })
      .required(),
  })
)

export const heading2Def: BlockDef<Heading2Props> = {
  title: "Nadpis 2",
  template: BlockTemplates.Heading2,
  schema: Heading2Schema,
  adminFields: {
    content: {
      fields: {
        content: {
          label: "Obsah",
          inputType: InputType.Text,
        },
      },
    },
  },
}
