import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import * as yup from "yup"
import {
  blockTitleDef,
  BlockTitleFields,
  blockTitleSchema,
} from "../../../types/BlockTitle"
import { EventProps, eventSchema } from "../../../types/Event"
import { paragraphDefFields } from "../../../types/RichText"

export interface EventListBlock extends Block {
  template: BlockTemplates.EventList
  fields: EventListProps
}

export interface EventListProps extends BlockFields, BlockTitleFields {
  events: EventProps[]
}

export const eventListSchema: yup.SchemaOf<EventListProps> = withBlockSchema(
  yup.object({
    ...blockTitleSchema,
    events: yup.array().of(eventSchema).required(),
  })
)

export const eventListDef: BlockDef<EventListProps> = {
  title: "Seznam událostí",
  template: BlockTemplates.GalleryList,
  schema: eventListSchema,
  adminFields: {
    ...blockTitleDef,
    events: {
      clonable: true,
      fields: {
        name: {
          label: "Název",
          inputType: InputType.Text,
        },
        date: {
          label: "Termín",
          fields: {
            from: {
              label: "Začátek",
              inputType: InputType.Text,
            },
            to: {
              label: "Konec",
              inputType: InputType.Text,
            },
          },
        },
        description: {
          label: "Popis",
          fields: paragraphDefFields,
        },
      },
    },
  },
}
