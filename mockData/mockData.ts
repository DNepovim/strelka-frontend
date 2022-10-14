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

import { PersonProps } from "../blocks/PersonList/PersonList"
import { NavLink } from "../types/Navigation"
import { ImageTextProps, Icons } from "../blocks/ImageText/ImageText"
import { GalleryProps } from "../blocks/GalleryList/GalleryList"
import { EventProps } from "../blocks/EventList/EventList"

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

export const personData: PersonProps[] = [
  {
    name: "David",
    surname: "Heralecky",
    nickname: "Dave",
    image: Robot,
    comment: "Vůdce střediska, vůdce roverského kmene",
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Blanka",
    surname: "Dymáčková",
    image: Nik,
    comment: "Vůdkýně 6. oddílu benjamínku",
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Ing. Olga",
    nickname: "S fakt dlouhou prezdivku",
    surname: "Měkotová Dlouha Dlouhatanska",
    image: Spina,
    comment: "Vůdkýně 3. roje světlušek Waliča Teča",
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Karel",
    nickname: "Franta I",
    surname: "Josimir",
    image: Me,
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Karel",
    nickname: "Franta I",
    surname: "Ondra",
    image: Ondra,
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Karel",
    nickname: "Franta I",
    surname: "Ondra",
    image: Vitek,
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
]

export const contacts: ImageTextProps = {
  title: "Fakturační údaje",
  text: [
    {
      text: [
        "Junák – český skaut,",
        "středisko Střelka Kralupy nad Vltavo u , z. s.",
        "Šafaříkova 358, 278 01, Kralupy n. Vlt.",
        "vedená u Městského soudu v Praze",
        "",
        "2107489044/2700 (hlavní účet)",
        "2801050859/2010 (pro platby akcí)",
      ],
    },
  ],
  imageUrl: "https://picsum.photos/520/350",
}

export const building: ImageTextProps = {
  title: "Podrobnosti",
  imageUrl: "https://picsum.photos/520/350",
  text: [
    {
      icon: Icons.Marker,
      text: ["Šafaříkova 358,", "Kralupy nad Vltavou, 278 01"],
    },
    {
      icon: Icons.Bed,
      text: ["25 lidí na vlastních karimatkách"],
    },
    {
      icon: Icons.Pig,
      text: [
        "skauti: 20 Kč/osoba/noc",
        "veřejnost: 40 Kč/osoba/noc",
        "+ energie",
      ],
    },
    {
      icon: Icons.Person,
      text: ["Eva Klementová", "evitka@strelka.cz", "737 688 203"],
    },
    {
      icon: Icons.Case,
      text: [
        "kuchyňka se základním vybavením, wc, koupelna, elektřina, pitná voda, teplá voda, ústřední topení, internet (wi-fi)",
      ],
    },
  ],
}

export const gallery: GalleryProps[] = [
  {
    name: "Podzimky",
    link: "/",
    imageUrl: "http://picsum.photos/300/200",
    date: "12.–17. 11. 2022",
  },
  {
    name: "Vánoční výprava",
    link: "/",
    imageUrl: "http://picsum.photos/300/200",
    date: "24. 12. 2022",
  },
  {
    name: "Zimní výprava",
    link: "/",
    imageUrl: "http://picsum.photos/300/200",
    date: "28. 2. – 3. 3. 2023",
  },
  {
    name: "Georgiáda a Ekobrigáda",
    link: "/",
    imageUrl: "http://picsum.photos/300/200",
    date: "24. 4. 2023",
  },
  {
    name: "Tábor",
    link: "/",
    imageUrl: "http://picsum.photos/300/200",
    date: "1.–31. 7. 2023",
  },
]

export const eventListData: EventProps[] = [
  {
    name: "Velikonoce na Slovensko",
    date: {
      from: "22. 3.",
      to: "23. 4.",
    },
    description:
      "Čeká nás výprava do Litoměřic. Výprava má 2 části.\n" +
      "Pro obě části platí sraz v sobotu v 9:00 na nádraží.\n" +
      "1. část-výprava do Litoměřic (konec v sobotu v Kralupech v 18:45)\n" +
      "2. část-přespání na Rusavkách ve stanech či v lesní školce (konec v 10:00 na Rusavkách)\n" +
      "\n" +
      "Druhá část není povinná, ale budeme moc rádi, pokud se zúčastníte. Nemáte se čeho bát. Pokud si ještě na přespání ve stanu netroufnete, můžeme zařídit přespání v maringotkách.\n" +
      "\n" +
      "S sebou: věci na jednodenní/dvoudenní výpravu (pokud jedete na obě části), jídlo na celý den+snídani na neděli, peníze na vlak+kartičku s vekěm, něco na opečení (moučné těsto na hady, sýr, buřt, jablko... prostě to, co máte rádi), pytel na odpadky (stačí jeden do dvojice, je to pouze pro případ, že bychom v přírodě našli nějaký nepořádek) \n" +
      "Stan vám předají vedoucí\n" +
      "\n" +
      "Těšíme se :) \n" +
      "Můry ",
  },
  {
    name: "Velikonoce na Slovensko",
    date: {
      from: "22. 3.",
      to: "23. 4.",
    },
    description:
      "Čeká nás výprava do Litoměřic. Výprava má 2 části.\n" +
      "Pro obě části platí sraz v sobotu v 9:00 na nádraží.\n" +
      "1. část-výprava do Litoměřic (konec v sobotu v Kralupech v 18:45)\n" +
      "2. část-přespání na Rusavkách ve stanech či v lesní školce (konec v 10:00 na Rusavkách)\n" +
      "\n" +
      "Druhá část není povinná, ale budeme moc rádi, pokud se zúčastníte. Nemáte se čeho bát. Pokud si ještě na přespání ve stanu netroufnete, můžeme zařídit přespání v maringotkách.\n",
  },
  {
    name: "Velikonoce na Slovensko",
    date: {
      from: "22. 3.",
      to: "23. 4.",
    },
    description:
      "Druhá část není povinná, ale budeme moc rádi, pokud se zúčastníte. Nemáte se čeho bát. Pokud si ještě na přespání ve stanu netroufnete, můžeme zařídit přespání v maringotkách.\n" +
      "\n" +
      "S sebou: věci na jednodenní/dvoudenní výpravu (pokud jedete na obě části), jídlo na celý den+snídani na neděli, peníze na vlak+kartičku s vekěm, něco na opečení (moučné těsto na hady, sýr, buřt, jablko... prostě to, co máte rádi), pytel na odpadky (stačí jeden do dvojice, je to pouze pro případ, že bychom v přírodě našli nějaký nepořádek) \n" +
      "Stan vám předají vedoucí\n" +
      "\n" +
      "Těšíme se :) \n" +
      "Můry ",
  },
]
