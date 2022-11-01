import { NextPage } from "next"
import { GroupComponentWrapper } from "../../../_app"
import {
  groupHeaderData,
  personListData,
  vlcataContactData,
} from "../../../../mockData/mockData"
import { ImageText } from "../../../../blocks/ImageText/ImageText"
import { PersonList } from "../../../../blocks/PersonList/PersonList"
import { Column, Container, Row } from "../../../../components/Layout/Layout"
import { Block } from "../../../../components/Block/Block"
import { Header1 } from "../../../../components/Typography/Typography"
import styled from "@emotion/styled"

const Contacts: NextPage = () => (
  <GroupComponentWrapper headerData={groupHeaderData}>
    <Block>
      <Container>
        <Row>
          <Column col={12}>
            <Title>Kontakty</Title>
          </Column>
        </Row>
      </Container>
    </Block>
    <PersonList title={"Vedení oddílu"} content={personListData.content} />
    <ImageText {...vlcataContactData} />
  </GroupComponentWrapper>
)

export default Contacts

const Title = styled(Header1)`
  margin-bottom: 0;
`
