import { BlockTemplates } from "../enums"
import { Block } from "../blocks"
import { BlockFields } from "../../components/Block/Block"

export interface GalleryViewProps {
  name: string
  address: string
  image: { src: string }
  comment: string
}

export interface GalleryBlock extends Block {
  template: BlockTemplates.Gallery
  fields: GalleryProps
}

export interface GalleryProps extends BlockFields {
  content: GalleryViewProps[]
}
