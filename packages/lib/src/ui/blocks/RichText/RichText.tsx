import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { RichTextProps } from "./richTextDef"

export const RichText: React.FC<RichTextProps> = ({ content }) => (
  <Block>
    <Container>{content}</Container>
  </Block>
)
