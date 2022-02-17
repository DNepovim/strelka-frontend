import { BlockTemplates } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import * as yup from "yup"
import { Image, imageDef, imageSchema } from "../../../types/Image"

interface GalleryImageProps {
  image: Image
}

export interface GalleryBlock extends Block {
  template: BlockTemplates.Gallery
  fields: GalleryProps
}

export interface GalleryProps extends BlockFields {
  content: GalleryImageProps[]
}

export const gallerySchema: yup.SchemaOf<GalleryProps> = withBlockSchema(
  yup.object({
    content: yup
      .array()
      .of(
        yup.object({
          image: imageSchema,
        })
      )
      .required(),
  })
)

export const galleryDef: BlockDef<GalleryProps> = {
  title: "Galerie",
  template: BlockTemplates.GalleryList,
  schema: gallerySchema,
  adminFields: {
    content: {
      clonable: true,
      fields: {
        image: imageDef,
      },
    },
  },
}
