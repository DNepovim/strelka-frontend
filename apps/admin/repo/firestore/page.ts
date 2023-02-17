import { doc, setDoc } from "@firebase/firestore"
import { deleteDoc } from "firebase/firestore"
import { db } from "repo/firebase"
import { getDocument, getDocsList } from "./docs"
import { collectionName as sectionCollectionName } from "./section"

const collectionName = "pages"
const getCollectionPath = (section: string) =>
  `${sectionCollectionName}/${section}/${collectionName}`

export interface Page {
  title: string
  slug: string
  lastEditedBy?: string
  lastEditedTime?: string
  //TODO
  blocks: any[]
}

export type PagesTableItem = Omit<Page, "blocks">

export const getPage = (section: string, slug: string) =>
  getDocument<Page>(getCollectionPath(section))(slug)

export const updatePage = async (
  section: string,
  slug: string,
  data: Omit<Page, "slug">
) => {
  await setDoc(
    doc(db, getCollectionPath(section), slug),
    { ...data },
    { merge: true }
  )
}
export const removePage = async (section: string, slug: string) => {
  await deleteDoc(doc(db, getCollectionPath(section), slug))
}

export const getPagesList = async (section: string) =>
  getDocsList<PagesTableItem>(getCollectionPath(section))()
