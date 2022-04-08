import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields } from "../../components/Block/Block"
import AlignLeftOutlined from "@ant-design/icons/lib/icons/AlignLeftOutlined"
import { RawDraftContentState } from "draft-js"

export interface RichTextBlock extends Block {
  template: BlockTemplates.RichText
  fields: RichTextProps
}

export interface RichTextProps extends BlockFields<RawDraftContentState> {}

export const richTextDef: BlockDef<RichTextProps> = {
  title: "Text",
  template: BlockTemplates.RichText,
  inputType: InputType.RichText,
  icon: AlignLeftOutlined,
}
