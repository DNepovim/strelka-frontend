import { NextPage } from "next"
import { GroupComponentWrapper } from "../../_app"
import {
  eventListData,
  groupHeaderData,
  vlcataIntroData,
} from "../../../mockData/mockData"
import { Block } from "../../../components/Block/Block"
import { Container, Row, Column } from "../../../components/Layout/Layout"
import {
  Header1,
  Header2,
  Header3,
  Text,
} from "../../../components/Typography/Typography"
import { UnorderedList } from "../../../components/UnordoredList/UnorderedList"
import styled from "@emotion/styled"
import { TextHighlight } from "../../../blocks/TextHighlight/TextHighlight"
import { EventList } from "../../../blocks/EventList/EventList"

const Group: NextPage = () => (
  <GroupComponentWrapper headerData={groupHeaderData}>
    <Block>
      <Container>
        <Row>
          <Column col={12}>
            <Title>Vlčata</Title>
            <SubTitle>1. Smečka Stopaři</SubTitle>
          </Column>
        </Row>
      </Container>
    </Block>
    <TextHighlight
      text={[
        "“Pokusme se zanechat tento svět o trochu lepším, než jaký byl, když jsme na něj přišli.”",
        "Robert Baden-Powell",
      ]}
    />
    <Block>
      <Container>
        <Row>
          <Column col={12} m={9} l={7}>
            <UnorderedList {...vlcataIntroData} />
          </Column>
        </Row>
      </Container>
    </Block>
    <Block>
      <Container>
        <Row>
          <Column col={12}>
            <Header2>Chces mezi nas?</Header2>
            <Text>Vypln prosim tento formular.</Text>
          </Column>
        </Row>
      </Container>
    </Block>
    <EventList {...eventListData} />
  </GroupComponentWrapper>
)

const Title = styled(Header1)`
  margin-bottom: 0;
`

const SubTitle = styled(Header3)`
  font-weight: normal;
`

export default Group
