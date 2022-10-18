import { BlocksDefs } from "@strelka/ui"
import { getDoc, getDocsList, removeDoc, updateDoc } from "./docs"

const collectionName = "page"

export interface Page {
  title: string
  slug: string
  lastEditedBy?: string
  lastEditedTime?: string
  blocks: BlocksDefs[]
}

export type PagesTableItem = Omit<Page, "blocks">

export const getPagesList = getDocsList<PagesTableItem>(collectionName)
export const getPage = getDoc<Page>(collectionName)
export const updatePage = updateDoc<Page>(collectionName)
export const removePage = removeDoc(collectionName)
