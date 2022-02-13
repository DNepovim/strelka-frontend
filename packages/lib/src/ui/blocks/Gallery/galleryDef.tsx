import { BlockTemplates } from "../enums"
import { Block } from "../blocks"
import { BlockFields } from "../../components/Block/Block"
import { GalleryViewProps } from "./Gallery"

export interface GalleryBlock extends Block {
  template: BlockTemplates.Gallery
  fields: GalleryProps
}

export interface GalleryProps extends BlockFields {
  content: GalleryViewProps[]
}
