import * as yup from "yup"
import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"

export interface Heading1Block extends Block {
  template: BlockTemplates.Heading1
  fields: Heading1Props
}

export interface Heading1Props extends BlockFields {
  content: string
}

export const Heading1Schema: yup.SchemaOf<Heading1Props> = withBlockSchema(
  yup.object({
    content: yup.string().required(),
  })
)

export const heading1Def: BlockDef<Heading1Props> = {
  title: "Nadpis stránky",
  template: BlockTemplates.Heading1,
  schema: Heading1Schema,
  adminFields: {
    content: {
      label: "Obsah",
      inputType: InputType.Text,
    },
  },
}
