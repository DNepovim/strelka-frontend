import { BlocksDefs } from "../ui/blocks/blocks"

export interface Page {
  title?: string
  lastEditedBy?: string
  lastEditedTime?: string
  blocks: BlocksDefs[]
}
