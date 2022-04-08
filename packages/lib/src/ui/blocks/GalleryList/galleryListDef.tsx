import { BlockTemplates, AdditonalFieldInputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import * as yup from "yup"
import { Image, imageDef, imageSchema } from "../../../types/Image"

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
  galleryList: GalleryProps[]
}

export const galleryListSchema: yup.SchemaOf<GalleryListProps> =
  withBlockSchema(
    yup.object({
      galleryList: yup
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

export const galleryListDef: BlockDef<GalleryListProps> = {
  title: "Galerie",
  template: BlockTemplates.GalleryList,
  schema: galleryListSchema,
  additionalFields: {
    galleryList: {
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
