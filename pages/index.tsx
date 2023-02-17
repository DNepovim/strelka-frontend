import type { NextPage } from "next"
import { Column, Container, Row } from "../components/Layout/Layout"
import { Header2 } from "../components/Typography/Typography"
import {
  buildingData,
  contactData,
  groupListData,
  menuData,
  heroData,
  postListData,
  statisticsData,
  textHighlightData,
  headerData,
  richTextData,
} from "../mockData/mockData"
import { PostList } from "../blocks/PostList/PostList"
import { Hero } from "../components/Hero/Hero"
import { Block } from "../components/Block/Block"
import { Page } from "../types/Page"
import { TextHighlight } from "../blocks/TextHighlight/TextHighlight"
import { GroupList } from "../blocks/GroupList/GroupList"
import { Statistics } from "../blocks/Statistics/Statistics"
import { VerticalSpace } from "../blocks/VerticalSpace/VerticalSpace"
import { BaseComponentWrapper } from "./_app"
import { RichText } from "../blocks/RichText/RichText"

const Home: NextPage<Props> = () => (
  <BaseComponentWrapper headerData={headerData}>
    <Block>
      <Container>
        <Row>
          <Column col={12}>
            <Hero {...heroData} />
          </Column>
        </Row>
      </Container>
    </Block>
    <VerticalSpace height={4} />
    <RichText {...richTextData} />
    <VerticalSpace height={4} />
    <TextHighlight {...textHighlightData} />
    <VerticalSpace height={4} />
    <GroupList {...groupListData} />
    <VerticalSpace height={4} />
    <TextHighlight {...textHighlightData} />
    <VerticalSpace height={4} />
    <Statistics {...statisticsData} />
    <VerticalSpace height={4} />
    <Block>
      <Container>
        <Row>
          <Column col={12}>
            <Header2>Poslední akce</Header2>
          </Column>
          <Column col={12}>
            <PostList posts={postListData} />
          </Column>
        </Row>
      </Container>
    </Block>
  </BaseComponentWrapper>
)

// export const getServerSideProps: GetServerSideProps<Props> = async () => ({
export const getServerSideProps: () => { props: Props } = () => ({
  props: {
    page: {
      blocks: [
        {
          fields: {
            content: menuData,
          },
        },
        {
          fields: contactData,
        },
        {
          fields: buildingData,
        },
      ],
    },
  },
})

interface Props {
  page: Page
}

export default Home
