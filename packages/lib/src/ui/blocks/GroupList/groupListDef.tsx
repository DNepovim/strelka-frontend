import * as yup from "yup"
import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { GroupProps } from "./GroupList"

export interface GroupListBlock extends Block {
  template: BlockTemplates.GroupList
  fields: GroupListProps
}

export interface GroupListProps extends BlockFields {
  content: GroupProps[]
}

export const groupListSchema: yup.SchemaOf<GroupListProps> = withBlockSchema(
  yup.object({
    content: yup
      .array()
      .of(
        yup.object({
          name: yup.string().required(),
          address: yup.string().required(),
          image: yup.object({ src: yup.string().required() }).required(),
          comment: yup.string().required(),
        })
      )
      .required(),
  })
)

export const groupDef: BlockDef<GroupListProps> = {
  title: "Skupina",
  template: BlockTemplates.GroupList,
  schema: groupListSchema,
  adminFields: {
    content: {
      clonable: true,
      fields: {
        name: {
          label: "Název",
          inputType: InputType.Text,
        },
        address: {
          label: "Odkaz",
          inputType: InputType.Text,
        },
        image: {
          label: "Obrázek",
          fields: {
            src: {
              label: "Odkaz",
              inputType: InputType.Text,
            },
          },
        },
        comment: {
          label: "Komentář",
          inputType: InputType.Text,
        },
      },
    },
  },
}
