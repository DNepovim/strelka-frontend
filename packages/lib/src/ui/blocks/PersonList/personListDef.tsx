import * as yup from "yup"
import { BlockTemplates, AdditonalFieldInputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { Image as ImageType, imageDef, imageSchema } from "../../../types/Image"

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

export interface PersonListProps extends BlockFields {
  persons: PersonProps[]
}

export const personListSchema: yup.SchemaOf<PersonListProps> = withBlockSchema(
  yup.object({
    persons: yup
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
  additionalFields: {
    persons: {
      clonable: true,
      fields: {
        name: {
          label: "Jméno",
          inputType: AdditonalFieldInputType.Text,
        },
        nickname: {
          label: "Přezdívka",
          inputType: AdditonalFieldInputType.Text,
        },
        image: imageDef,
        subtitle: {
          label: "Funkce",
          inputType: AdditonalFieldInputType.Text,
        },
        contact: {
          label: "Kontaktní informace",
          fields: {
            email: {
              label: "Email",
              inputType: AdditonalFieldInputType.Text,
            },
            phone: {
              label: "Telefonní číslo",
              inputType: AdditonalFieldInputType.Text,
            },
          },
        },
      },
    },
  },
}
