import { Image } from "./Image"

export interface SubMenuProps {
  items: SubMenuItemProps[]
}

export interface SubMenuItemProps {
  text: string
  to: string
  image: Image
  comment?: string
}

export interface MenuItemProps {
  text: string
  to?: string
  subMenu?: SubMenuProps
}

export interface MenuProps {
  items: MenuItemProps[]
}
