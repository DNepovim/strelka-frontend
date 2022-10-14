import { Image } from "./Image"

export interface SubLinksData {
  linkPrefix: string
  data: SubLink[]
}

export interface SubLink {
  name: string
  address: string
  image: Image
  comment?: string
}

export interface NavLink {
  name: string
  address?: string
  subLinks?: SubLinksData
}
