import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import * as yup from "yup"
import { Image } from "../../../types/data"

export interface GalleryProps {
  name: string
  address: string
  image: Image
  comment: string
}

export interface GalleryListBlock extends Block {
  template: BlockTemplates.GalleryList
  fields: GalleryListProps
}

export interface GalleryListProps extends BlockFields {
  content: GalleryProps[]
}

export const galleryListSchema: yup.SchemaOf<GalleryListProps> =
  withBlockSchema(
    yup.object({
      content: yup
        .array()
        .of(
          yup.object({
            name: yup.string().required(),
            address: yup.string().required(),
            image: yup
              .object({
                src: yup.string().required(),
                width: yup.number().required(),
                height: yup.number().required(),
              })
              .required(),
            comment: yup.string().required(),
          })
        )
        .required(),
    })
  )

export const galleryListDef: BlockDef<GalleryListProps> = {
  title: "Galerie",
  template: BlockTemplates.GalleryList,
  schema: galleryListSchema,
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
            width: {
              label: "Šířka",
              inputType: InputType.Number,
            },
            height: {
              label: "Výška",
              inputType: InputType.Number,
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
