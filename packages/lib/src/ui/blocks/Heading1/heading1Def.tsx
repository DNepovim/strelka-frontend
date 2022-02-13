import * as yup from "yup"
import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { HeadingProps } from "./Heading1"

export interface Heading1Block extends Block {
  template: BlockTemplates.Heading1
  fields: Heading1Props
}

export interface Heading1Props extends BlockFields {
  content: HeadingProps
}

export const Heading1Schema: yup.SchemaOf<Heading1Props> = withBlockSchema(
  yup.object({
    content: yup
      .object({
        content: yup.string().required(),
      })
      .required(),
  })
)

export const heading1Def: BlockDef<Heading1Props> = {
  title: "Nadpis 1",
  template: BlockTemplates.Heading1,
  schema: Heading1Schema,
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
