import LogoBenja from "../images/groups/benjaminci.jpg"
import LogoSvetlusky from "../images/groups/svetlusky.jpg"
import LogoVlcata from "../images/groups/vlcata.jpg"
import LogoSkautky from "../images/groups/skautky.jpg"
import LogoSkauti from "../images/groups/skauti.jpg"
import LogoRoveri from "../images/groups/roveri.jpg"
import LogoOldskauti from "../images/groups/oldskauti.jpg"

import Gallery1 from "../images/gallery/2e0sFeVt.webp"
import Gallery2 from "../images/gallery/eVPQDxHt.webp"
import Gallery3 from "../images/gallery/gWxHWOCt.webp"
import Gallery4 from "../images/gallery/zmrWAoUt.webp"

import { NavLink } from "../../../types/navigation"
import { HeadingProps } from "../../blocks/Heading1/Heading1"

export const groupData = [
  {
    name: "Benjamínci",
    address: "benjaminci",
    image: LogoBenja,
    comment: "kluci a holky od 6 do 10 let",
  },
  {
    name: "Světlušky",
    address: "svetlusky",
    image: LogoSvetlusky,
    comment: "holky od 10 do 16 let",
  },
  {
    name: "Vlčata",
    address: "vlcata",
    image: LogoVlcata,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Skautky",
    address: "skautky",
    image: LogoSkautky,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Skauti",
    address: "skauti",
    image: LogoSkauti,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Roveři",
    address: "roveri",
    image: LogoRoveri,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Oldskauti",
    address: "oldskauti",
    image: LogoOldskauti,
    comment: "kluci od 10 do 15 let",
  },
]

export const linkData: NavLink[] = [
  { name: "Úvod", address: "/" },
  {
    name: "Oddíly",
    subLinks: {
      linkPrefix: "/oddily/",
      data: groupData,
    },
  },
  {
    name: "Základny",
    subLinks: {
      linkPrefix: "/zakladny/",
      data: [
        {
          name: "Dřevomorka",
          address: "drevomorka",
          image: LogoSkauti,
          comment: "Chata na úpatí Lužických hor",
        },
        {
          name: "Puchverk",
          address: "puchverk",
          image: LogoSkautky,
          comment: "Tábořiště daleko kterého nevíme jestli chceme",
        },
        {
          name: "Bára",
          address: "bara",
          image: LogoBenja,
          comment: "Skautský dům v Kralupech nad Vltavou",
        },
      ],
    },
  },
  {
    name: "Historie",
    address: "/historie",
  },
  {
    name: "Kontakt",
    address: "/kontakt",
  },
  {
    name: "English",
    address: "/english",
  },
]

export const galleryListData = [
  {
    name: "Tábor 2023",
    address: "benjaminci",
    image: Gallery1,
    comment: "kluci a holky od 6 do 10 let",
  },
  {
    name: "Silvestr na Dřevomorce",
    address: "svetlusky",
    image: Gallery3,
    comment: "holky od 10 do 16 let",
  },
  {
    name: "Křižem krážem Českou Republikou",
    address: "vlcata",
    image: Gallery4,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Zahajovácí výprava",
    address: "skautky",
    image: Gallery2,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Jak jsem potkal ryby",
    address: "skauti",
    image: Gallery3,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Výprava na Ivančenu",
    address: "roveri",
    image: Gallery1,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Tábor 2080",
    address: "oldskauti",
    image: Gallery2,
    comment: "kluci od 10 do 15 let",
  },
]

export const headerData: HeadingProps = {
  content: "Galerie",
}
