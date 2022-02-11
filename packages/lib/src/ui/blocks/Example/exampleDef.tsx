import * as yup from "yup"
import { Block, BlockDef } from "../blocks"
import { enumToSchemaOptions } from "../../../utils/enumToSchemaOptions"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { BlockTemplates, InputType } from "../enums"

export interface ExampleBlock extends Block {
  template: BlockTemplates.Example
  fields: ExampleProps
}

export interface ExampleProps extends BlockFields {
  title: string
  button: {
    label: string
    link: string
  }
}

export const exampleSchema = withBlockSchema(
  yup.object().shape({
    title: yup.string().required("Musíš vyplnit nadpis").max(80),
    button: yup.object({
      label: yup.string().required(),
      link: yup.string().required(),
    }),
  })
)

export const exampleDef: BlockDef<ExampleProps> = {
  title: "Sloupce",
  template: BlockTemplates.Example,
  schema: exampleSchema,
  adminFields: {
    title: {
      label: "Nadpis",
      inputType: InputType.Text,
    },
    button: {
      label: "Sloupce",
      fields: {
        label: {
          label: "Popis",
          inputType: InputType.Text,
        },
        link: {
          label: "Odkaz",
          inputType: InputType.TextArea,
        },
      },
    },
  },
}
