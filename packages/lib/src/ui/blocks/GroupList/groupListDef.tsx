import * as yup from "yup"
import { BlockTemplates, AdditonalFieldInputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { GroupProps } from "./GroupList"
import { imageDef, imageSchema } from "../../../types/Image"

export interface GroupListBlock extends Block {
  template: BlockTemplates.GroupList
  fields: GroupListProps
}

export interface GroupListProps extends BlockFields {
  groups: GroupProps[]
}

export const groupListSchema: yup.SchemaOf<GroupListProps> = withBlockSchema(
  yup.object({
    groups: yup
      .array()
      .of(
        yup.object({
          name: yup.string().required(),
          address: yup.string().required(),
          image: imageSchema,
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
  additionalFields: {
    groups: {
      clonable: true,
      fields: {
        name: {
          label: "Název",
          inputType: AdditonalFieldInputType.Text,
        },
        address: {
          label: "Odkaz",
          inputType: AdditonalFieldInputType.Text,
        },
        image: imageDef,
        comment: {
          label: "Komentář",
          inputType: AdditonalFieldInputType.Text,
        },
      },
    },
  },
}
