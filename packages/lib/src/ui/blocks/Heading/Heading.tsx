import { Container } from "../../components/Container/Container"
import { Header } from "../../components/Typography/Typography"
import styled from "@emotion/styled"
import { max } from "../../styles/theme"
import { HeadingProps } from "./headingDef"

export const Heading: React.FC<HeadingProps> = ({ content }) => (
  <Container>
    <StyledHeader>{content}</StyledHeader>
  </Container>
)

const StyledHeader = styled(Header)`
  @media ${max("s")} {
    font-size: 3rem;
  }
`
