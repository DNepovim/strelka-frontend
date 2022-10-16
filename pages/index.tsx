import type { NextPage } from "next"
import Head from "next/head"
import { Header } from "../blocks/Header/Header"
import { Column, Container, Layout, Row } from "../components/Layout/Layout"
import { GlobalStyles } from "../components/GlobaStyles/GlobalStyles"
import { MetaTags } from "../components/MetaTags/MetaTags"
import { Header1 } from "../components/Typography/Typography"
import {
  building,
  contacts,
  groupListData,
  linkData,
  heroData,
  postListData,
  statisticsData,
  textHighlightData,
} from "../mockData/mockData"
import { PostList } from "../blocks/PostList/PostList"
import { Hero } from "../components/Hero/Hero"
import { theme } from "../styles/theme"
import { Block } from "../components/Block/Block"
import { Page } from "../types/Page"
import { TextHighlight } from "../blocks/TextHighlight/TextHighlight"
import { GroupList } from "../blocks/GroupList/GroupList"
import { Statistics } from "../blocks/Statistics/Statistics"

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
              <Header1>Poslední akce</Header1>
            </Column>
            <Column col={12}>
              <PostList posts={postListData} />
              <Hero {...heroData} />
            </Column>
          </Row>
        </Container>
      </Block>
      <TextHighlight {...textHighlightData} />
      <GroupList {...groupListData} />
      <TextHighlight {...textHighlightData} />
      <Statistics {...statisticsData} />
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
