import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb"
import dateFormat from "dateformat"

export const gptbTimestampToString = (
  date: Timestamp,
  format: string
): string => {
  const dateObject = new Date(date.getSeconds() * 1000)
  return dateFormat(dateObject, format)
}
