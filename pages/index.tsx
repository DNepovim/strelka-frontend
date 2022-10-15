/** @jsxImportSource @emotion/react */
import type { NextPage } from "next"
import Head from "next/head"
import { BlockTemplates } from "../blocks/BlockTemplates"
import { Header } from "../blocks/Header/Header"
import { Icons, ImageText, ImageTextProps } from "../blocks/ImageText/ImageText"
import { Column, Container, Layout, Row } from "../components/Layout/Layout"
import { GlobalStyles } from "../components/GlobaStyles/GlobalStyles"
import { MetaTags } from "../components/MetaTags/MetaTags"
import { Header1 } from "../components/Typography/Typography"
import {
  building,
  contacts,
  gallery as galleryList,
  linkData,
  personData,
} from "../mockData/mockData"
import { theme } from "../styles/theme"
import { Page } from "../types/Page"
import { Block } from "../components/Block/Block"
import { GalleryList } from "../blocks/GalleryList/GalleryList"

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
      <Block>
        <Container>
          <Row>
            <Column col={12}>
              <Header1>Kontakty</Header1>
            </Column>
          </Row>
        </Container>
      </Block>
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
        {
          fields: {
            content: galleryList,
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
