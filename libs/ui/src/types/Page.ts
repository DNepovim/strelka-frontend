import { BlockDef } from "@strelka/admin-ui"
import { BlocksDefs } from "../blocks/block"

export interface Page {
  title: string
  slug: string
  lastEditedBy?: string
  lastEditedTime?: string
  blocks: BlocksDefs[]
}
