import { BlockDef, InputDefs } from "@strelka/admin-ui"
import { BlockTemplates } from "../BlockTemplates"
import { IoMenuOutline } from "react-icons/io5"
import { Paragraph, ParagraphProps } from "./Paragraph"

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
