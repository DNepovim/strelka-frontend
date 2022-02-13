/** @jsxImportSource @emotion/react */
import type { NextPage } from "next"
import Head from "next/head"
import {
  BlockTemplates,
  GlobalStyles,
  MetaTags,
  NavLink,
  Page,
  RenderBlocks,
  theme,
} from "@local/lib"
import { GalleryProps } from "@local/lib/src/ui/blocks/GalleryList/galleryListDef"
import { GroupProps } from "../../lib/src/ui/blocks/GroupList/GroupList"

import LogoBenja from "../../lib/src/ui/assets/images/groups/benjaminci.jpg"
import LogoSvetlusky from "../../lib/src/ui/assets/images/groups/svetlusky.jpg"
import LogoVlcata from "../../lib/src/ui/assets/images/groups/vlcata.jpg"
import LogoSkautky from "../../lib/src/ui/assets/images/groups/skautky.jpg"
import LogoSkauti from "../../lib/src/ui/assets/images/groups/skauti.jpg"
import LogoRoveri from "../../lib/src/ui/assets/images/groups/roveri.jpg"
import LogoOldskauti from "../../lib/src/ui/assets/images/groups/oldskauti.jpg"
import Gallery1 from "../../lib/src/ui/assets/images/gallery/2e0sFeVt.webp"
import Gallery2 from "../../lib/src/ui/assets/images/gallery/eVPQDxHt.webp"
import Gallery3 from "../../lib/src/ui/assets/images/gallery/gWxHWOCt.webp"
import Gallery4 from "../../lib/src/ui/assets/images/gallery/zmrWAoUt.webp"

import Gallery1 from "../../lib/src/ui/assets/images/gallery/2e0sFeVt.webp"
import Gallery2 from "../../lib/src/ui/assets/images/gallery/eVPQDxHt.webp"
import Gallery3 from "../../lib/src/ui/assets/images/gallery/gWxHWOCt.webp"
import Gallery4 from "../../lib/src/ui/assets/images/gallery/zmrWAoUt.webp"

const groupData: GroupProps[] = [
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

export const links: NavLink[] = [
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

const galleryData: GalleryProps[] = [
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

const Home: NextPage<Props> = ({ page }) => (
  <div>
    <Head>
      <MetaTags
        title={""}
        description={""}
        brandColor={theme.color.lightAccent}
        themeColor={theme.color.darkAccent}
        url={""}
        image=""
        manifest=""
        icons={{
          appleTouchIcon: "",
          largeIcon: "",
          smallIcon: "",
          maskIcon: "",
        }}
      />
    </Head>

    <GlobalStyles />

    <main>
      <RenderBlocks blocks={page.blocks} />
    </main>
  </div>
)

// export const getServerSideProps: GetServerSideProps<Props> = async () => ({
export const getServerSideProps: () => { props: Props } = () => ({
  props: {
    page: {
      blocks: [
        {
          id: "",
          template: BlockTemplates.GalleryList,
          fields: {
            content: galleryData,
          },
        },
      ],
    },
  },
})

interface Props {
  page: Page
}

export default Home
