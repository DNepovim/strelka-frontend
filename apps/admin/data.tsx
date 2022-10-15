import {
  IoPeopleOutline,
  IoSettingsOutline,
  IoAddOutline,
  IoDocumentTextOutline,
} from "react-icons/io5"
import { Navigation } from "~/components/MainNavigation"

export const navigation: Navigation = [
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
    title: "Uživatelé",
    slug: "uzivatele",
    icon: <IoPeopleOutline />,
  },
  {
    title: "Nastavení",
    slug: "nastaveni",
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

export const pages: PagesTableItem[] = [
  {
    title: "Hlavní stránka",
    slug: "hlavni-stranka",
    id: "kkdfjlskdf",
    lastEditedTime: "6. 2. 2022 11:10:10",
    lastEditedBy: "nik@skaut.cz",
  },
  {
    title: "Kontakty",
    slug: "kontakty",
    id: "kkdfjlsdie",
    lastEditedTime: "6. 2. 2022 11:10:10",
    lastEditedBy: "nik@skaut.cz",
  },
  {
    title: "O nás",
    slug: "o-nas",
    id: "kkdfdf",
    lastEditedTime: "6. 2. 2022 11:10:10",
    lastEditedBy: "nik@skaut.cz",
  },
  {
    title: "Kariera",
    slug: "kariera",
    id: "dfjlskdf",
    lastEditedTime: "6. 2. 2022 11:10:10",
    lastEditedBy: "nik@skaut.cz",
  },
  {
    title: "Příběh",
    slug: "pribeh",
    id: "kkdfjlsgebvl",
    lastEditedTime: "6. 2. 2022 11:10:10",
    lastEditedBy: "nik@skaut.cz",
  },
  {
    title: "Další",
    slug: "dalsi",
    id: "kkdfjlf",
    lastEditedTime: "6. 2. 2022 11:10:10",
    lastEditedBy: "nik@skaut.cz",
  },
  {
    title: "Kolo",
    slug: "kolo",
    id: "kkdfjdf",
    lastEditedTime: "6. 2. 2022 11:10:10",
    lastEditedBy: "nik@skaut.cz",
  },
]
