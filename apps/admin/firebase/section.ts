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

  const sectionsSlugs = [
    ...(user.roles?.admin ?? []),
    ...(user.roles?.editor ?? []),
  ]

  return Promise.all(sectionsSlugs.map(async (slug) => await getSection(slug)))
}
