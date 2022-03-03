import * as yup from "yup"
import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { Image as ImageType, imageDef, imageSchema } from "../../../types/Image"
import {
  blockTitleDef,
  BlockTitleFields,
  blockTitleSchema,
} from "../../../types/BlockTitle"

export interface PersonProps {
  name: string
  nickname?: string
  image: ImageType
  subtitle?: string
  contact?: {
    email?: string
    phone?: string
  }
}

export interface PersonListBlock extends Block {
  template: BlockTemplates.PersonList
  fields: PersonListProps
}

export interface PersonListProps extends BlockFields, BlockTitleFields {
  people: PersonProps[]
}

export const personListSchema: yup.SchemaOf<PersonListProps> = withBlockSchema(
  yup.object({
    ...blockTitleSchema,
    people: yup
      .array()
      .of(
        yup.object({
          name: yup.string().required(),
          nickname: yup.string(),
          image: imageSchema.required(),
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
    ...blockTitleDef,
    people: {
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
