import { BlockDef } from "@strelka/admin-ui"
import { BlocksDefs } from "./block"
import { BlockTemplates } from "./BlockTemplates"
import { paragraphBlockDef } from "./Paragraph/paragraphBlockDef"
import { personListBlockDef } from "./PersonList/personListBlockDef"

export const blockDefs: BlockDef<BlocksDefs, BlockTemplates>[] = [
  paragraphBlockDef,
  personListBlockDef,
]
