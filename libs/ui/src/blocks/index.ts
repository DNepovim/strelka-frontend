import { BlockDef } from "@strelka/admin-ui"
import { BlocksDefs } from "./block"
import { BlockTemplates } from "./BlockTemplates"
import { paragraphBlockDef } from "./Paragraph/paragraphBlockDef"
import { personListBlockDef } from "./PersonList/personListBlockDef"
import { ParagraphBlock } from "./Paragraph/Paragraph"

export const blockDefs: BlockDef<BlocksDefs, BlockTemplates>[] = [
  paragraphBlockDef,
  personListBlockDef,
]

export interface BlockProps {
  id: string
}

export type BlocksDefs = ParagraphBlock
