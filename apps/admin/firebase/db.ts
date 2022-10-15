import { PagesTableItem } from "data"
import { initializeApp } from "firebase/app"
import {
  doc,
  getDoc,
  getFirestore,
  collection,
  getDocs,
  setDoc,
  Timestamp,
} from "firebase/firestore"
import { User } from "~/services/auth.server"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

export const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export const getPagesList = async (): Promise<PagesTableItem[]> => {
  const pages = await getDocs(collection(db, "page"))
  return pages.docs.map((item) => {
    const data = item.data()
    return {
      slug: item.id,
      id: item.id,
      title: data.title,
      lastEditedBy: data.lastEditedBy,
      lastEditedTime: data.lastEditedTime,
    }
  })
}

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

export const getPage = async (slug: string) => getData("page", slug)

export const getData = async (collection: string, page: string) => {
  const docRef = await doc(db, collection, page)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    return
  }
  return docSnap.data()
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
