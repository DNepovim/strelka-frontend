import { ReactElement } from "react"
import FileOutlined from "@ant-design/icons/lib/icons/FileOutlined"

export interface Route {
  title: (title?: string) => string
  key: string
  showInMenu: boolean
  menuIcon?: ReactElement
  getLink: (param?: string) => string
}

export const routes: Route[] = [
  {
    title: () => "Stránky",
    key: "pages",
    showInMenu: true,
    menuIcon: <FileOutlined />,
    getLink: () => "/",
  },
  {
    title: (title) => `Editace stránky ${title}`,
    key: "pages",
    showInMenu: false,
    getLink: (slug) => `/stranky/${slug}`,
  },
]
