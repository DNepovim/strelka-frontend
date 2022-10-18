import { getDoc, getDocsList, removeDoc, updateDoc } from "./docs"

const collectionName = "section"

export interface Section {
  title: string
  slug: string
  lastEditedBy?: string
  lastEditedTime?: string
}

export type SectionTableItem = Section

export const getSectionsList = getDocsList<SectionTableItem>(collectionName)
export const getSection = getDoc<Section>(collectionName)
export const updateSection = updateDoc<Section>(collectionName)
export const removeSection = removeDoc(collectionName)
