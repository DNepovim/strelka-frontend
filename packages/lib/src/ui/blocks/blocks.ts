import * as yup from "yup"
import React from "react"
import { BlockTemplates, InputType } from "./enums"
import { Header } from "./Header/Header"
import { groupDef, GroupListBlock } from "./GroupList/groupListDef"
import { GroupList } from "./GroupList/GroupList"
import { HeaderBlock, headerDef } from "./Header/headerDef"
import { GalleryListBlock, galleryListDef } from "./GalleryList/galleryListDef"
import { GalleryList } from "./GalleryList/GalleryList"
import { Heading1 } from "./Heading1/Heading1"
import { Heading1Block, heading1Def } from "./Heading1/heading1Def"
import { Heading2Block, heading2Def } from "./Heading2/heading2Def"
import { Heading2 } from "./Heading2/Heading2"
import { PersonListBlock, personListDef } from "./PersonList/personListDef"
import { PersonList } from "./PersonList/PersonList"

export type Unarray<T> = T extends Array<infer U> ? U : T

export interface Block {
  id: string
}

export type BlocksDefs =
  | HeaderBlock
  | GroupListBlock
  | Heading1Block
  | Heading2Block
  | GalleryListBlock
  | PersonListBlock

// TODO dynamic import
export const blocksComponentList: Record<BlockTemplates, React.FC<any>> = {
  header: Header,
  groupList: GroupList,
  galleryList: GalleryList,
  heading1: Heading1,
  heading2: Heading2,
  personList: PersonList,
}

export const blocksDefsList: { [key in BlockTemplates]?: BlockDef<any> } = {
  header: headerDef,
  groupList: groupDef,
  galleryList: galleryListDef,
  heading1: heading1Def,
  heading2: heading2Def,
  personList: personListDef,
}

export const getBlockDef = (template: BlockTemplates): BlockDef<any> | false =>
  template && blocksDefsList[template] ? blocksDefsList[template]! : false

export interface BlockDef<T> {
  title: string
  template: BlockTemplates
  schema: yup.SchemaOf<T>
  adminFields: AdminFields<T>
}

export type AdminFields<T> = {
  [K in keyof T]: AdminField<Unarray<T[K]>>
}

type AdminField<T> = GroupDef<T> | FieldDef

interface GeneralDef {
  label?: string
  clonable?: true
}

interface FieldDef extends GeneralDef {
  inputType: InputType
  options?: {
    // TODO only for select
    value: string | number
    label: string
  }[]
}

interface GroupDef<T> extends GeneralDef {
  fields: AdminFields<T>
}

export const isGroupField = <T extends {}>(
  component: AdminField<T>
): component is GroupDef<T> => "fields" in component
