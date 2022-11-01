import { NextPage } from "next"
import { Column, Container, Row } from "../../components/Layout/Layout"
import { Header1 } from "../../components/Typography/Typography"
import { Block } from "../../components/Block/Block"
import { ImageText } from "../../blocks/ImageText/ImageText"
import {
  contactData,
  headerData,
  personListData,
} from "../../mockData/mockData"
import styled from "@emotion/styled"
import { PersonList } from "../../blocks/PersonList/PersonList"
import { VerticalSpace } from "../../blocks/VerticalSpace/VerticalSpace"
import { theme } from "../../styles/theme"
import { BaseComponentWrapper } from "../_app"

const Contacts: NextPage = () => (
  <BaseComponentWrapper headerData={headerData}>
    <Block>
      <Container>
        <Row>
          <Column col={12}>
            <Header>Kontakt</Header>
          </Column>
        </Row>
      </Container>
    </Block>
    <ImageText {...contactData} />
    <VerticalSpace height={theme.layout.gutter * 2} />
    <PersonList {...personListData} />
  </BaseComponentWrapper>
)

const Header = styled(Header1)`
  margin: 0;
`

export default Contacts
