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
import { NavLink } from "../../types/Navigation"
import { HeadingProps } from "../blocks/Heading1/Heading1"
import { PersonProps } from "../blocks/PersonList/personListDef"
import { GalleryProps } from "../blocks/GalleryList/galleryListDef"
import { RichTextProps } from "../blocks/RichText/richTextDef"
import { Style } from "../../types/RichText"
import { EventListProps } from "../blocks/EventList/eventListDef"

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

export const galleryListData: GalleryProps[] = [
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

export const personData: PersonProps[] = [
  {
    name: "David Heralecký",
    nickname: "Dave",
    image: Robot,
    subtitle: "Vůdce střediska, vůdce roverského kmene",
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Blanka Dymáčková ",
    image: Nik,
    subtitle: "Vůdkýně 6. oddílu benjamínku",
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Ing. Olga Měkotová",
    image: Spina,
    subtitle: "Vůdkýně 3. roje světlušek Waliča Teča",
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

export const contentData: RichTextProps = {
  paragraphs: [
    {
      textNodes: [
        { content: "Právě jste zavítali na stránky " },
        { content: "Kvítek", href: "strelka.cz/kvitek" },
        {
          content:
            ",  5. oddílu skautek z Kralup nad Vltavou. Můžete zde nalézt vše o našem oddíle od informací k výpravám, seznámení s družinami až po fotky z akcí. Pokud chcete zjistit více o skautingu samotném, tak Vám doporučujeme ",
        },
        { content: "tyto stránky", href: "strelka.cz/kvitek/stranka" },
        { content: "." },
      ],
    },
    {
      textNodes: [
        {
          content: "Na oddílové schůzky a výpravy (pokud není určeno jinak), ",
        },
        {
          style: Style.Bold,
          content: "chodíme ve skautských krojích",
        },
        {
          content:
            ". Ke kroji patří hnědé nebo zelené (černé) kalhoty, kraťasy nebo sukně.",
        },
      ],
      image: Gallery3,
    },
  ],
}

function encodeDate(date: string) {
  return new Date(date).toISOString()
}

export const eventListData: EventListProps = {
  title: "Výpravy",
  events: [
    {
      name: "Silvestr na Dřevomorce",

      date: {
        from: encodeDate("12-01-2021"),
        to: encodeDate("12-03-2021"),
      },
      description: [
        {
          textNodes: [
            {
              content: "Silvestr na  dřevomorce ",
            },
            {
              content: "(skautská chata v horách)",
              style: Style.Italic,
            },
            {
              content: ".",
            },
          ],
        },
      ],
    },
    {
      name: "Movie night",

      date: {
        from: encodeDate("1-31-2022"),
        to: encodeDate("2-1-2022"),
      },
    },
    {
      name: "Velikonoce na Slovensko",

      date: {
        from: encodeDate("5-4-2021"),
        to: encodeDate("12-4-2021"),
      },
    },
    {
      name: "Tábor 2031",

      date: {
        from: encodeDate("7-3-2031"),
        to: encodeDate("7-23-2031"),
      },
      description: [
        {
          textNodes: [
            {
              content: "Sraz: ",
              style: Style.Bold,
            },
            {
              content: "3. 7. na Báře v 8:00\n",
            },
            {
              content: "Návrat: ",
              style: Style.Bold,
            },
            {
              content:
                "23. 7. na Kralupském nádraží (tedy mezi expedici a vodou se do Kralup nevracíme). Čas upřesníme.\n",
            },
            {
              content: "Cena: ",
              style: Style.Bold,
            },
            {
              content: "240 €",
            },
          ],
        },
        {
          textNodes: [
            {
              content:
                "Zcela nevhodné jsou sandále a kroksy. S takovým obutím nebude umožněno vodu absolvovat. Nejsou to jen boty do lodi, jsou to hlavně boty, ve kterých bude možná třeba jít v proudu po kamenitém dně s lodí v jedné a bagáží v druhé ruce.",
            },
          ],
        },
        {
          textNodes: [
            {
              content:
                "Láhev na vodu, alespoň 2 litry. Oblečení na loď (volné kraťasy či sukni a slabé tričko, aby se v tom dalo dobře plavat). Plavky. Opalovací krém. Dva ručníky. Voděodolný obal na osobní věci. Igelitové pytle. Sudy se občas nepodaří správně uzavřít a trochu do nich nateče, proto je dobré mít věci ještě v igelitových pytlech. Pokud si chcete vzít vlastní lodní pytel, tak můžete. Jinak dostanete půjčený 50l lodní sud. Prázdný batoh se do sudu vejít nemusí. Ten pojede autem.",
            },
          ],
        },
      ],
    },
  ],
}
