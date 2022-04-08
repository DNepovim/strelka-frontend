import * as yup from "yup"
import React from "react"
import { BlockTemplates, AdditonalFieldInputType, InputType } from "./enums"
import { Header } from "./Header/Header"
import { groupDef, GroupListBlock } from "./GroupList/groupListDef"
import { GroupList } from "./GroupList/GroupList"
import { HeaderBlock, headerDef } from "./Header/headerDef"
import { GalleryListBlock, galleryListDef } from "./GalleryList/galleryListDef"
import { GalleryList } from "./GalleryList/GalleryList"
import { HeadingBlock, headingDef } from "./Heading/headingDef"
import { RichTextBlock, richTextDef } from "./RichText/richTextDef"
import { RichText } from "./RichText/RichText"
import { PersonListBlock, personListDef } from "./PersonList/personListDef"
import { PersonList } from "./PersonList/PersonList"
import { GalleryBlock, galleryDef } from "./Gallery/galleryDef"
import { Gallery } from "./Gallery/Gallery"
import { Heading } from "./Heading/Heading"

export type Unarray<T> = T extends Array<infer U> ? U : T

export interface Block {
  id: string
}

export type BlocksDefs =
  | HeadingBlock
  | RichTextBlock
  | GalleryBlock
  | HeaderBlock
  | GroupListBlock
  | GalleryListBlock
  | PersonListBlock

// TODO dynamic import
export const blocksComponentList: Record<BlockTemplates, React.FC<any>> = {
  heading: Heading,
  richText: RichText,
  gallery: Gallery,
  header: Header,
  groupList: GroupList,
  galleryList: GalleryList,
  personList: PersonList,
}

export const blocksDefsList: { [key in BlockTemplates]?: BlockDef<any> } = {
  heading: headingDef,
  richText: richTextDef,
  gallery: galleryDef,
  header: headerDef,
  groupList: groupDef,
  galleryList: galleryListDef,
  personList: personListDef,
}

export const getBlockDef = (template: BlockTemplates): BlockDef<any> | false =>
  template && blocksDefsList[template] ? blocksDefsList[template]! : false

export interface BlockDef<T> {
  title: string
  template: BlockTemplates
  schema?: yup.SchemaOf<T> // TODO required
  inputType?: InputType
  icon?: React.FC
  additionalFields?: AdminFields<T>
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
  inputType: AdditonalFieldInputType
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
