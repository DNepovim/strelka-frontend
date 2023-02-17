import { getStorage } from "firebase/storage"
import { firebaseApp } from "./firebase"

export const storage = getStorage(
  firebaseApp,
  `gs://${process.env.FIREBASE_STORAGE_BUCKET}`
)
