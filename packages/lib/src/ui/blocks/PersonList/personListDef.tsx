import * as yup from "yup"
import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { PersonProps } from "./PersonList"
import { imageDef, imageSchema } from "../../../types/Image"

export interface PersonListBlock extends Block {
  template: BlockTemplates.PersonList
  fields: PersonListProps
}

export interface PersonListProps extends BlockFields {
  content: PersonProps[]
}

export const personListSchema: yup.SchemaOf<PersonListProps> = withBlockSchema(
  yup.object({
    content: yup
      .array()
      .of(
        yup.object({
          name: yup.string().required(),
          nickname: yup.string(),
          image: imageSchema,
          subtitle: yup.string(),
          contact: yup.object({
            email: yup.string(),
            phone: yup.string(),
          }),
        })
      )
      .required(),
  })
)

export const personListDef: BlockDef<PersonListProps> = {
  title: "Skupina",
  template: BlockTemplates.GroupList,
  schema: personListSchema,
  adminFields: {
    content: {
      clonable: true,
      fields: {
        name: {
          label: "Jméno",
          inputType: InputType.Text,
        },
        nickname: {
          label: "Přezdívka",
          inputType: InputType.Text,
        },
        image: imageDef,
        subtitle: {
          label: "Funkce",
          inputType: InputType.Text,
        },
        contact: {
          label: "Kontaktní informace",
          fields: {
            email: {
              label: "Email",
              inputType: InputType.Text,
            },
            phone: {
              label: "Telefonní číslo",
              inputType: InputType.Text,
            },
          },
        },
      },
    },
  },
}
