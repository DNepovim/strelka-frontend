import { Timestamp } from "firebase/firestore"

export const timestampToDisplay = (timestamp: Timestamp) => {
  const object = new Timestamp(timestamp.seconds, timestamp.nanoseconds)
  const data = object.toDate()

  return `${data.toLocaleDateString("cs-CZ")}, ${data.toLocaleTimeString(
    "cs-CZ"
  )}`
}
