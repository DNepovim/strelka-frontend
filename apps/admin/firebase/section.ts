import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"
import { getDoc, getDocsList, removeDoc, updateDoc } from "./docs"
import { getUser } from "./user"

export const collectionName = "sections"

export interface Section {
  title: string
  slug: string
  lastEditedBy?: string
  lastEditedTime?: string
}

export const getSection = getDoc<Section>(collectionName)
export const updateSection = updateDoc<Section>(collectionName)
export const removeSection = removeDoc(collectionName)

export const getSectionsList = async (email?: string): Promise<Section[]> => {
  if (!email) {
    return await getDocsList<Section>(collectionName)()
  }

  const user = await getUser(email)
  if (user.roles?.superadmin) {
    return await getDocsList<Section>(collectionName)()
  }


  const col = collection(db, collectionName)
  const admins = await query(
    col,
    where(`roles.admins`, "array-contains", email)
  )
  const editors = await query(
    col,
    where(`roles.editors`, "array-contains", email)
  )
  const adminsDocs = await getDocs(admins)
  const editorsDocs = await getDocs(editors)
  return await [...adminsDocs.docs, ...editorsDocs.docs].map((item) => {
    const data = item.data() as Omit<Section, "slug">
    return {
      slug: item.id,
      ...data,
    }
  })
}
