import { Block } from "../blocks"
import { BlockFields } from "../../components/Block/Block"
import { BlockTemplates } from "../enums"
import { NavLinkProps } from "../../components/navigation/NavLinks"

export interface HeaderBlock extends Block {
  template: BlockTemplates.Header
  fields: HeaderProps
}

export interface HeaderProps extends BlockFields {
  content: NavLinkProps[]
}
