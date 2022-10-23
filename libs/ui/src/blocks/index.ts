import { BlockDef } from "@strelka/admin-ui"
import {
  ParagraphBlock,
  paragraphBlockDef,
} from "./Paragraph/paragraphBlockDef"

export enum BlockTemplates {
  Paragraph = "paragraph",
  PersonList = "persons",
}

export const blockDefs = [
  paragraphBlockDef,
  // personListBlockDef,
]

export type BlocksDefs = ParagraphBlock
