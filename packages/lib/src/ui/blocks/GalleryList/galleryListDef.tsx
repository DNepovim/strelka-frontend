import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import * as yup from "yup"
import { Image, imageDef, imageSchema } from "../../../types/Image"
import {
  blockTitleDef,
  BlockTitleFields,
  blockTitleSchema,
} from "../../../types/BlockTitle"

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

export interface GalleryListProps extends BlockFields, BlockTitleFields {
  galleries: GalleryProps[]
}

export const galleryListSchema: yup.SchemaOf<GalleryListProps> =
  withBlockSchema(
    yup.object({
      ...blockTitleSchema,
      galleries: yup
        .array()
        .of(
          yup.object({
            name: yup.string().required(),
            address: yup.string().required(),
            image: imageSchema.required(),
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
    ...blockTitleDef,
    galleries: {
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
        image: imageDef,
        comment: {
          label: "Komentář",
          inputType: InputType.Text,
        },
      },
    },
  },
}
