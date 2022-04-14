import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { ImageProps } from "./imageDef"

export const Image: React.FC<ImageProps> = ({ content }) => (
  <Block>
    <Container>{content}</Container>
  </Block>
)
