import LogoBenja from "../assets/images/groups/benjaminci.jpg"
import LogoSvetlusky from "../assets/images/groups/svetlusky.jpg"
import LogoVlcata from "../assets/images/groups/vlcata.jpg"
import LogoSkautky from "../assets/images/groups/skautky.jpg"
import LogoSkauti from "../assets/images/groups/skauti.jpg"
import LogoRoveri from "../assets/images/groups/roveri.jpg"
import LogoOldskauti from "../assets/images/groups/oldskauti.jpg"

import Gallery1 from "../assets/images/gallery/eVPQDxHt.webp"
import Gallery2 from "../assets/images/gallery/eVPQDxHt.webp"
import Gallery3 from "../assets/images/gallery/gWxHWOCt.webp"
import Gallery4 from "../assets/images/gallery/zmrWAoUt.webp"

import Nik from "../assets/images/people/nik.webp"
import Me from "../assets/images/people/ja.webp"
import Vitek from "../assets/images/people/vitek.webp"
import Robot from "../assets/images/people/robot.webp"
import Ondra from "../assets/images/people/ondra.webp"
import Spina from "../assets/images/people/spina.webp"

import Rectangle1 from "../assets/vectors/potatoes/rectangle_1.svg"
import Rectangle2 from "../assets/vectors/potatoes/rectangle_2.svg"
import Rectangle3 from "../assets/vectors/potatoes/rectangle_3.svg"
import Rectangle4 from "../assets/vectors/potatoes/rectangle_4.svg"
import Rectangle5 from "../assets/vectors/potatoes/rectangle_5.svg"

import Circle1 from "../assets/vectors/potatoes/circle_1.svg"
import Circle2 from "../assets/vectors/potatoes/circle_2.svg"
import Circle3 from "../assets/vectors/potatoes/circle_3.svg"
import Circle4 from "../assets/vectors/potatoes/circle_4.svg"
import Circle5 from "../assets/vectors/potatoes/circle_5.svg"
import Circle6 from "../assets/vectors/potatoes/circle_6.svg"
import Circle7 from "../assets/vectors/potatoes/circle_7.svg"
import Circle8 from "../assets/vectors/potatoes/circle_8.svg"

const circles = [
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  Circle6,
  Circle7,
  Circle8,
]

const rectangles = [Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5]

const randomItem =
  (list: any[]) =>
  (index: number = 0) =>
    list[(index * 13 + 11) % list.length]

export const randomCircle = randomItem(circles)
export const randomRectangle = randomItem(rectangles)

import { NavLink } from "../../types/Navigation"
import { HeadingProps } from "../blocks/Heading1/Heading1"
import { PersonProps } from "../blocks/PersonList/personListDef"
import { GalleryProps } from "../blocks/GalleryList/galleryListDef"

export const groupData = [
  {
    name: "Benjam??nci",
    address: "benjaminci",
    image: LogoBenja,
    comment: "kluci a holky od 6 do 10 let",
  },
  {
    name: "Sv??tlu??ky",
    address: "svetlusky",
    image: LogoSvetlusky,
    comment: "holky od 10 do 16 let",
  },
  {
    name: "Vl??ata",
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
    name: "Rove??i",
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
  { name: "??vod", address: "/" },
  {
    name: "Odd??ly",
    subLinks: {
      linkPrefix: "/oddily/",
      data: groupData,
    },
  },
  {
    name: "Z??kladny",
    subLinks: {
      linkPrefix: "/zakladny/",
      data: [
        {
          name: "D??evomorka",
          address: "drevomorka",
          image: LogoSkauti,
          comment: "Chata na ??pat?? Lu??ick??ch hor",
        },
        {
          name: "Puchverk",
          address: "puchverk",
          image: LogoSkautky,
          comment: "T??bo??i??t?? daleko kter??ho nev??me jestli chceme",
        },
        {
          name: "B??ra",
          address: "bara",
          image: LogoBenja,
          comment: "Skautsk?? d??m v Kralupech nad Vltavou",
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

export const galleryListData: GalleryProps[] = [
  {
    name: "T??bor 2023",
    address: "benjaminci",
    image: Gallery1,
    comment: "kluci a holky od 6 do 10 let",
  },
  {
    name: "Silvestr na D??evomorce",
    address: "svetlusky",
    image: Gallery3,
    comment: "holky od 10 do 16 let",
  },
  {
    name: "K??i??em kr????em ??eskou Republikou",
    address: "vlcata",
    image: Gallery4,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Zahajov??c?? v??prava",
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
    name: "V??prava na Ivan??enu",
    address: "roveri",
    image: Gallery1,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "T??bor 2080",
    address: "oldskauti",
    image: Gallery2,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "T??bor 2023",
    address: "benjaminci",
    image: Gallery1,
    comment: "kluci a holky od 6 do 10 let",
  },
  {
    name: "Silvestr na D??evomorce",
    address: "svetlusky",
    image: Gallery3,
    comment: "holky od 10 do 16 let",
  },
  {
    name: "K??i??em kr????em ??eskou Republikou",
    address: "vlcata",
    image: Gallery4,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "T??bor 2023",
    address: "benjaminci",
    image: Gallery1,
    comment: "kluci a holky od 6 do 10 let",
  },
  {
    name: "Silvestr na D??evomorce",
    address: "svetlusky",
    image: Gallery3,
    comment: "holky od 10 do 16 let",
  },
  {
    name: "K??i??em kr????em ??eskou Republikou",
    address: "vlcata",
    image: Gallery4,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Zahajov??c?? v??prava",
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
    name: "V??prava na Ivan??enu",
    address: "roveri",
    image: Gallery1,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "T??bor 2080",
    address: "oldskauti",
    image: Gallery2,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Zahajov??c?? v??prava",
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
    name: "V??prava na Ivan??enu",
    address: "roveri",
    image: Gallery1,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "T??bor 2080",
    address: "oldskauti",
    image: Gallery2,
    comment: "kluci od 10 do 15 let",
  },
]

export const headerData: HeadingProps = {
  content: "Galerie",
}

export const personData: PersonProps[] = [
  {
    name: "David Heraleck??",
    nickname: "Dave",
    image: Robot,
    subtitle: "V??dce st??ediska, v??dce roversk??ho kmene",
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Blanka Dym????kov?? ",
    image: Nik,
    subtitle: "V??dk??n?? 6. odd??lu benjam??nku",
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Ing. Olga M??kotov??",
    image: Spina,
    subtitle: "V??dk??n?? 3. roje sv??tlu??ek Wali??a Te??a",
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Karel",
    nickname: "Franta I",
    image: Me,
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Karel",
    nickname: "Franta I",
    image: Ondra,
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Karel",
    nickname: "Franta I",
    image: Vitek,
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
]
