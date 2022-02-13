import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { Header2 } from "../../components/Typography/Typography"

import styled from "@emotion/styled"
import { Heading2Props } from "./heading2Def"

export interface HeadingProps {
  content: string
}

export const Heading2: React.FC<Heading2Props> = (props) => (
  <Block>
    <Container>
      <Heading>{props.content.content}</Heading>
    </Container>
  </Block>
)

const Heading = styled(Header2)``
