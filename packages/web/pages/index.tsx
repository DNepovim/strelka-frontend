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

import {
  galleryListData,
  linkData,
  personData,
} from "@local/lib/src/ui/mockData/mockData"

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
            content: linkData,
          },
        },
        {
          id: "",
          template: BlockTemplates.Heading2,
          fields: {
            content: { content: "Vedení" },
          },
        },
        {
          id: "",
          template: BlockTemplates.PersonList,
          fields: {
            content: personData,
          },
        },

        {
          id: "",
          template: BlockTemplates.Heading2,
          fields: {
            content: { content: "Fotogalerie" },
          },
        },
        {
          id: "",
          template: BlockTemplates.GalleryList,
          fields: {
            content: galleryListData,
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
