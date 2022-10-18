import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore"
import { db, getData } from "./db"

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

export const getDoc =
  <T extends {}>(collectionName: string) =>
  async (slug: string): Promise<T> => {
    const document = (await getData(collectionName, slug)) as T
    return {
      slug,
      ...document,
    }
  }
