import { ReactElement } from "react"
import FileOutlined from "@ant-design/icons/lib/icons/FileOutlined"
import LayoutOutlined from "@ant-design/icons/lib/icons/LaptopOutlined"

export interface Route {
  title: (title?: string) => string
  showInMenu: boolean
  menuParentId?: string
  menuIcon?: ReactElement
  getLink: (...param: string[]) => string
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
    getLink: (pageSlug) => `/stranky/${pageSlug}`,
  },
  newPage: {
    title: () => "Nová stránka",
    menuParentId: "pagesList",
    showInMenu: false,
    getLink: () => `/stranky/vytvorit`,
  },
  sitesList: {
    title: () => "Sekce",
    showInMenu: true,
    menuIcon: <LayoutOutlined />,
    getLink: () => "/sekce",
  },
  editSite: {
    title: (title) => `Editace sekce ${title}`,
    menuParentId: "sitesList",
    showInMenu: false,
    getLink: (slug) => `/sekce/${slug}`,
  },
  newSite: {
    title: () => "Nová sekce",
    menuParentId: "sitesList",
    showInMenu: false,
    getLink: () => `/sekce/vytvorit`,
  },
}
