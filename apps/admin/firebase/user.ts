import { getDocs, collection, setDoc, doc, Timestamp } from "firebase/firestore"
import { db } from "./db"
import { getDoc } from "./docs"

export interface Roles {
  superadmin?: boolean
  admin?: string[]
  editor?: string[]
}

export interface User {
  email: string
  image?: string
  name?: string
  lastLoggedIn?: string
  roles?: Roles
}

const collectionName = "users"

export const getUsersList = async (): Promise<User[]> => {
  const users = await getDocs(collection(db, collectionName))
  return users.docs.map((item) => {
    const data = item.data() as Omit<User, "email">
    return {
      email: item.id,
      ...data,
    }
  })
}

export const getUser = getDoc<User>(collectionName, "email")

export const setUser = async (user: User) => {
  const { email, ...restData } = user
  if (!email) {
    throw new Error("No user email.")
  }
  await setDoc(
    doc(db, collectionName, email),
    {
      ...restData,
      lastLoggedIn: Timestamp.now(),
    },
    { merge: true }
  )
}
