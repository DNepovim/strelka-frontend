import { BlockDef } from "@strelka/admin-ui"
import { BlockTemplates } from "./BlockTemplates"
import { ParagraphProps } from "./Paragraph/Paragraph"
import { paragraphBlockDef } from "./Paragraph/paragraphBlockDef"

export const blockDefs: BlockDef<BlocksDefs, BlockTemplates>[] = [
  paragraphBlockDef,
  // personListBlockDef,
]

export interface BlockProps {
  id: string
}

export type BlocksDefs = ParagraphProps
