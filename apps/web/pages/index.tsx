/** @jsxImportSource @emotion/react */
import {
  Header,
  ImageText,
  GalleryList,
  Layout,
  MetaTags,
  GlobalStyles,
  Page,
  theme,
} from "@strelka/ui"
import type { NextPage } from "next"
import Head from "next/head"
import { linkData, contacts, building, gallery } from "../mockData/mockData"

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
    <Layout>
      <Header {...page.blocks[0].fields} />
      <ImageText {...page.blocks[1].fields} />
      <ImageText {...page.blocks[2].fields} />
      <GalleryList {...page.blocks[3].fields} />
    </Layout>
  </div>
)

// export const getServerSideProps: GetServerSideProps<Props> = async () => ({
export const getServerSideProps: () => { props: Props } = () => ({
  props: {
    page: {
      blocks: [
        {
          fields: {
            content: linkData,
          },
        },
        {
          fields: contacts,
        },
        {
          fields: building,
        },
      ],
    },
  },
})

interface Props {
  page: Page
}

export default Home
