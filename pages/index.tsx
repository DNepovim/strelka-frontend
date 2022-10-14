/** @jsxImportSource @emotion/react */
import type { NextPage } from "next"
import Head from "next/head"
import { BlockTemplates } from "../blocks/BlockTemplates"
import { Header } from "../blocks/Header/Header"
import { ImageText } from "../blocks/ImageText/ImageText"
import { Column, Container, Layout, Row } from "../components/Layout/Layout"
import { GlobalStyles } from "../components/GlobaStyles/GlobalStyles"
import { MetaTags } from "../components/MetaTags/MetaTags"
import { Header1 } from "../components/Typography/Typography"
import { linkData, personData } from "../mockData/mockData"
import { theme } from "../styles/theme"
import { Page } from "../types/Page"
import { Block } from "../components/Block/Block"

const data = {
  title: "Fakturační údaje",
  text: [
    "Junák – český skaut,",
    "středisko Střelka Kralupy nad Vltavo u , z. s.",
    "Šafaříkova 358, 278 01, Kralupy n. Vlt.",
    "vedená u Městského soudu v Praze",
    "",
    "2107489044/2700 (hlavní účet)",
    "2801050859/2010 (pro platby akcí)",
  ],
  imageUrl: "https://picsum.photos/520/350",
}

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
      <ImageText {...data} />
    </Layout>
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
      ],
    },
  },
})

interface Props {
  page: Page
}

export default Home
