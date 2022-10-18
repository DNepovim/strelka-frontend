import { User } from "@strelka/admin-ui"
import { getDocs, collection, setDoc, doc, Timestamp } from "firebase/firestore"
import { db } from "./db"

export const getUsersList = async (): Promise<User[]> => {
  const users = await getDocs(collection(db, "users"))
  return users.docs.map((item) => {
    const data = item.data()
    return {
      email: item.id,
      ...data,
    }
  })
}

export const setUser = async (user: User) => {
  const { email, ...restData } = user
  if (!email) {
    throw new Error("No user email.")
  }
  await setDoc(
    doc(db, "users", email),
    {
      ...restData,
      lastLoggedIn: Timestamp.now(),
    },
    { merge: true }
  )
}
