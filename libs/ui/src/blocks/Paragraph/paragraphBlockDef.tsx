import { Block, BlockDef, InputDefs } from "@strelka/admin-ui"
import { IoMenuOutline } from "react-icons/io5"
import { Paragraph, ParagraphProps } from "./Paragraph"

export type ParagraphBlock = Block<ParagraphProps>

export const paragraphBlockDef: BlockDef<ParagraphProps> = {
  title: "Text",
  template: "paragraph",
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
