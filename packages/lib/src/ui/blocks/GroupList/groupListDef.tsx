import { BlockTemplates } from "../enums"
import { Block } from "../blocks"
import { BlockFields } from "../../components/Block/Block"
import { GroupProps } from "./GroupList"

export interface GroupListBlock extends Block {
  template: BlockTemplates.GroupList
  fields: GroupListProps
}

export interface GroupListProps extends BlockFields {
  content: GroupProps[]
}
