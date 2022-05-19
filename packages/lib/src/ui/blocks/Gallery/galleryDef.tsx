import { BlockTemplates } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import * as yup from "yup"
import { Image, imageDef, imageSchema } from "../../../types/Image"
import {
  blockTitleDef,
  BlockTitleFields,
  blockTitleSchema,
} from "../../../types/BlockTitle"

export interface GalleryBlock extends Block {
  template: BlockTemplates.Gallery
  fields: GalleryProps
}

export interface GalleryProps extends BlockFields, BlockTitleFields {
  images: Image[]
}

export const gallerySchema: yup.SchemaOf<GalleryProps> = withBlockSchema(
  yup.object({
    ...blockTitleSchema,
    images: yup.array().of(imageSchema.required()).required(),
  })
)

export const galleryDef: BlockDef<GalleryProps> = {
  title: "Galerie",
  template: BlockTemplates.Gallery,
  schema: gallerySchema,
  adminFields: {
    ...blockTitleDef,
    images: {
      clonable: true,
      ...imageDef,
    },
  },
}
