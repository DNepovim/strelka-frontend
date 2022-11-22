/** @jsxImportSource @emotion/react */
import { Layout, MetaTags, GlobalStyles, theme } from "@strelka/ui"
import type { NextPage } from "next"
import Head from "next/head"
import { get } from "lodash"

const Home: NextPage = () => (
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
    <Layout></Layout>
  </div>
)

export default Home
