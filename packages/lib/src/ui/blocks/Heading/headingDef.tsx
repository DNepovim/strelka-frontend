import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields } from "../../components/Block/Block"
import FontSizeOutlined from "@ant-design/icons/lib/icons/FontSizeOutlined"

export interface HeadingBlock extends Block {
  template: BlockTemplates.Heading
  fields: HeadingProps
}

export interface HeadingProps extends BlockFields<string> {}

export const headingDef: BlockDef<HeadingProps> = {
  title: "Nadpis",
  template: BlockTemplates.Heading,
  inputs: InputType.Heading,
  icon: FontSizeOutlined,
}
