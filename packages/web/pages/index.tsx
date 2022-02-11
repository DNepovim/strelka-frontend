/** @jsxImportSource @emotion/react */
import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import {
  GlobalStyles,
  theme,
  MetaTags,
  Page,
  RenderBlocks,
  BlockTemplates,
} from "@local/lib"

const Home: NextPage<Props> = ({ page }) => (
  <div>
    <Head>
      <MetaTags
        title={""}
        description={""}
        brandColor={theme.color.brand}
        themeColor={theme.color.second}
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

export const getStaticProps: GetStaticProps<Props> = () => ({
  props: {
    page: {
      blocks: [
        {
          id: "",
          template: BlockTemplates.Example,
          fields: {
            title: "Nadpis",
            button: {
              label: "Čudlík",
              link: "http://www.neco.cz",
            },
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
