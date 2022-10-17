import { BlockDef } from "@strelka/admin-ui"
import { BlocksDefs } from "./block"
import { BlockTemplates } from "./BlockTemplates"
import { paragraphBlockDef } from "./Paragraph/paragraphBlockDef"

export const blockDefs: BlockDef<BlocksDefs, BlockTemplates>[] = [
  paragraphBlockDef,
]

export const getBlockDef = (template: BlockTemplates) =>
  blockDefs.find((blockDef) => blockDef.template === template)
