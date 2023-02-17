import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore"
import { db } from "../firebase"

export const getData = async (collection: string, page: string) => {
  const docRef = await doc(db, collection, page)
  const docSnap = getDoc(docRef)

  if (!(await docSnap).exists()) {
    return
  }
  return (await docSnap).data()
}

export const getDocsList =
  <T extends {}>(collectionName: string) =>
  async (): Promise<T[]> => {
    const docs = await getDocs(collection(db, collectionName))
    return docs.docs.map((item) => {
      const data = item.data() as T
      return {
        slug: item.id,
        ...data,
      }
    })
  }

export const removeDoc = (collectionName: string) => async (slug: string) => {
  await deleteDoc(doc(db, collectionName, slug))
}

export const updateDoc =
  <T extends {}>(collectionName: string) =>
  async (slug: string, data: Partial<T>) => {
    await setDoc(doc(db, collectionName, slug), data, { merge: true })
  }

export const getDocument =
  <T extends {}>(collectionName: string, key?: string) =>
  async (slug: string): Promise<T | undefined> => {
    const document = (await getData(collectionName, slug)) as T
    if (!document) {
      return
    }
    return {
      [key ?? "slug"]: slug,
      ...document,
    }
  }
