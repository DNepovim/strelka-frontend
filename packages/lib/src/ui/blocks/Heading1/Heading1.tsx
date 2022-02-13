import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { Header1 } from "../../components/Typography/Typography"

import styled from "@emotion/styled"
import { Heading1Props } from "./heading1Def"

export interface HeadingProps {
  content: string
}

export const Heading1: React.FC<Heading1Props> = (props) => (
  <Block>
    <Container>
      <Heading>{props.content.content}</Heading>
    </Container>
  </Block>
)

const Heading = styled(Header1)``
