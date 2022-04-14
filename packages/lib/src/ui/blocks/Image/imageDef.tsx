import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields } from "../../components/Block/Block"
import PictureOutlined from "@ant-design/icons/lib/icons/PictureOutlined"
import { RawDraftContentState } from "draft-js"

export interface ImageBlock extends Block {
  template: BlockTemplates.Image
  fields: ImageProps
}

export interface ImageProps extends BlockFields<RawDraftContentState> {}

export const imageDef: BlockDef<ImageProps> = {
  title: "Obrázek",
  template: BlockTemplates.Image,
  inputType: InputType.Image,
  icon: PictureOutlined,
}
