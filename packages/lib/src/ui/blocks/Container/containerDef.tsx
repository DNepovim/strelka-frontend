import { v4 as uuid } from "uuid"
import { BlockTemplates, InputType } from "../enums"
import { Block, BlockDef } from "../blocks"
import { BlockFields } from "../../components/Block/Block"
import ProfileOutlined from "@ant-design/icons/lib/icons/ProfileOutlined"

export interface ContainerBlock extends Block {
  template: BlockTemplates.Container
  fields: ContainerProps
}

export interface ContainerProps extends BlockFields<{ id: string }[]> {}

export const containerDef: BlockDef<ContainerProps> = {
  title: "Blok",
  template: BlockTemplates.Container,
  inputs: InputType.Container,
  getDefautlValues: () => ({
    content: [
      {
        id: uuid(),
        template: BlockTemplates.Heading,
        fields: { content: "" },
      },
    ],
  }),
  icon: ProfileOutlined,
}
