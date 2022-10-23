import { Block, BlockDef, InputDefs } from "@strelka/admin-ui"
import { IoMenuOutline } from "react-icons/io5"
import { Paragraph, ParagraphProps } from "./Paragraph"
import { BlockTemplates } from ".."

export type ParagraphBlock = Block<BlockTemplates.Paragraph, ParagraphProps>

export const paragraphBlockDef: BlockDef<ParagraphProps, BlockTemplates> = {
  title: "Text",
  template: BlockTemplates.Paragraph,
  icon: <IoMenuOutline />,
  component: Paragraph,
  fields: {
    title: {
      label: "Nadpis",
      input: InputDefs.Text,
    },
    text: {
      label: "Text",
      input: InputDefs.TextArea,
    },
  },
}
