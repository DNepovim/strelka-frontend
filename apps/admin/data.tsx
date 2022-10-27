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
    slug: "sekce",
    icon: <IoBrowsersOutline />,
    action: {
      title: "Vytvořit novou sekci",
      slug: "sekce/vytvorit",
      icon: <IoAddOutline />,
    },
  },
  {
    title: "Uživatelé",
    slug: "uzivatele",
    icon: <IoPeopleOutline />,
    action: {
      title: "Přidat uživatele",
      slug: "uzivatele/pridat",
      icon: <IoAddOutline />,
    },
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
      title: "Vytvořit novou stránku",
      slug: "stranky/vytvorit",
      icon: <IoAddOutline />,
    },
  },
  {
    title: "Události",
    slug: "",
    icon: <IoCalendarOutline />,
    action: {
      title: "Vytvořit novou událost",
      slug: "",
      icon: <IoAddOutline />,
    },
  },
  {
    title: "Uživatelé",
    slug: "uzivatele",
    icon: <IoPeopleOutline />,
    action: {
      title: "Přidat uživatele",
      slug: "",
      icon: <IoAddOutline />,
    },
  },
  {
    title: "Nastavení",
    slug: "",
    icon: <IoSettingsOutline />,
  },
]
