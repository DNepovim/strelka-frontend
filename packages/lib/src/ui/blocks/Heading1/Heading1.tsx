import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { Heading1Props } from "./heading1Def"
import { BlockTitle } from "../../components/BlockTitle/BlockTitle"

export interface HeadingProps {
  content: string
}

export const Heading1: React.FC<Heading1Props> = (props) => (
  <Block>
    <Container>
      <BlockTitle props={{ title: props.content, isTopLevel: true }} />
    </Container>
  </Block>
)
