import { RichTextProps } from "./richTextDef"
import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { Paragraph } from "../../components/Paragraph/Paragraph"

export const RichText: React.FC<RichTextProps> = (props) => (
  <Block>
    <Container>
      {props.paragraphs.map(({ image, textNodes }, index) => (
        <Paragraph image={image} textNodes={textNodes} key={index} />
      ))}
    </Container>
  </Block>
)
