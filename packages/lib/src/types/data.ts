import { BlocksDefs } from "../ui/blocks/blocks"

export interface Image {
  src: string
  width: number
  height: number
}

export interface Page {
  title?: string
  lastEditedBy?: string
  lastEditedTime?: string
  blocks: BlocksDefs[]
}
