import { NextPage } from "next"
import { Block } from "../components/Block/Block"
import { Row, Column, Container } from "../components/Layout/Layout"
import { Header1, Header3, Text } from "../components/Typography/Typography"
import styled from "@emotion/styled"
import { Link } from "../components/Link/Link"
import { theme } from "../styles/theme"
import { headerData } from "../mockData/mockData"
import { Header } from "../blocks/Header/Header"
import { Footer } from "../blocks/Footer/Footer"

const ErrorPage: NextPage = () => (
  <>
    <Header {...headerData}></Header>
    <Block>
      <Container>
        <Row>
          <Column col={12}>
            <Header1>Upsík dupsík</Header1>
            <LargeText>Něco se pokazilo.</LargeText>
            <LargeText>
              Můžeš jít <NiceLink to={"/"}>zpátky na ůvod</NiceLink>.
            </LargeText>
          </Column>
        </Row>
      </Container>
    </Block>
    <Footer {...headerData} />
  </>
)

const LargeText = styled(Header3.withComponent(Text))`
  font-weight: normal;
`

const NiceLink = styled(Link)`
  color: ${theme.color.darkest};
  font-weight: 600;
  text-decoration: underline;
`

export default ErrorPage
