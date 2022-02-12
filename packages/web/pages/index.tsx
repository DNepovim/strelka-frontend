/** @jsxImportSource @emotion/react */
import type { NextPage } from "next"
import Head from "next/head"
import {
  BlockTemplates,
  GlobalStyles,
  MetaTags,
  Page,
  RenderBlocks,
  theme,
} from "@local/lib"

import { NavLinkProps } from "../../lib/src/ui/components/NavLinks/NavLinks"

import LogoBenja from "../../lib/src/ui/assets/images/groups/benjaminci.jpg"
import LogoSvetlusky from "../../lib/src/ui/assets/images/groups/svetlusky.jpg"
import LogoVlcata from "../../lib/src/ui/assets/images/groups/vlcata.jpg"
import LogoSkautky from "../../lib/src/ui/assets/images/groups/skautky.jpg"
import LogoSkauti from "../../lib/src/ui/assets/images/groups/skauti.jpg"
import LogoRoveri from "../../lib/src/ui/assets/images/groups/roveri.jpg"
import LogoOldskauti from "../../lib/src/ui/assets/images/groups/oldskauti.jpg"

export const links: NavLinkProps[] = [
  { name: "Úvod", address: "/" },
  {
    name: "Oddíly",
    subLinks: {
      linkPrefix: "/oddily/",
      data: [
        {
          name: "Benjaminci",
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
      ],
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
  { name: "Historie", address: "/historie" },
  { name: "Kontakt", address: "/kontakt" },
  { name: "English", address: "/english" },
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
          template: BlockTemplates.Header,
          fields: {
            content: links,
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
