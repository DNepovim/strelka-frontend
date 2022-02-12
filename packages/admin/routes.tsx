import { ReactElement } from "react"
import FileOutlined from "@ant-design/icons/lib/icons/FileOutlined"

export interface Route {
  title: (title?: string) => string
  showInMenu: boolean
  menuParentId?: string
  menuIcon?: ReactElement
  getLink: (param?: string) => string
}

export type Routes = Record<string, Route>

export const routes: Routes = {
  pagesList: {
    title: () => "Stránky",
    showInMenu: true,
    menuIcon: <FileOutlined />,
    getLink: () => "/",
  },
  editPage: {
    title: (title) => `Editace stránky ${title}`,
    menuParentId: "pagesList",
    showInMenu: false,
    getLink: (slug) => `/stranky/${slug}`,
  },
  newPage: {
    title: () => "Nová stránka",
    menuParentId: "pagesList",
    showInMenu: false,
    getLink: () => `/stranky/nova`,
  },
}
