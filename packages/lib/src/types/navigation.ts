import { Image } from "./data"

export interface SubLinksData {
  linkPrefix: string
  data: SubLink[]
}

export interface SubLink {
  name: string
  address: string
  image: { src: string }
  comment?: string
}

export interface NavLink {
  name: string
  address?: string
  subLinks?: SubLinksData
}
