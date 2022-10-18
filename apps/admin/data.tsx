import { NavigationItem } from "@strelka/admin-ui/src/components/Navigation"
import {
  IoPeopleOutline,
  IoSettingsOutline,
  IoAddOutline,
  IoDocumentTextOutline,
  IoBrowsersOutline,
  IoCalendarOutline,
} from "react-icons/io5"

export const adminNavigation: NavigationItem[] = [
  {
    title: "Sekce",
    slug: "",
    icon: <IoBrowsersOutline />,
    action: {
      title: "Vytvořit novou",
      slug: "",
      icon: <IoAddOutline />,
    },
  },
  {
    title: "Uživatelé",
    slug: "uzivatele",
    icon: <IoPeopleOutline />,
  },
  {
    title: "Nastavení",
    slug: "",
    icon: <IoSettingsOutline />,
  },
]

export const navigation: NavigationItem[] = [
  {
    title: "Stránky",
    slug: "",
    icon: <IoDocumentTextOutline />,
    action: {
      title: "Vytvořit novou",
      slug: "stranky/vytvorit",
      icon: <IoAddOutline />,
    },
  },
  {
    title: "Události",
    slug: "",
    icon: <IoCalendarOutline />,
    action: {
      title: "Vytvořit novou",
      slug: "",
      icon: <IoAddOutline />,
    },
  },
  {
    title: "Uživatelé",
    slug: "uzivatele",
    icon: <IoPeopleOutline />,
  },
  {
    title: "Nastavení",
    slug: "",
    icon: <IoSettingsOutline />,
  },
]

export interface PagesTableItem {
  title: string
  slug: string
  id: string
  lastEditedTime: string
  lastEditedBy: string
}
