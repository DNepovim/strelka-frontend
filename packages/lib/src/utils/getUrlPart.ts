type URLParts =
  | "hash"
  | "host"
  | "hostname"
  | "href"
  | "origin"
  | "password"
  | "pathname"
  | "port"
  | "protocol"
  | "search"
  | "username"

export const getUrlPart = (url: string, part: URLParts): string => {
  const urlObject = new URL(url)
  return urlObject[part]
}
