import { Block } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import styled from "@emotion/styled"
import { Header3, Text } from "../../components/Typography/Typography"

interface TextHighlightProps {
  text: string[]
}

export const TextHighlight: React.FC<TextHighlightProps> = ({ text }) => (
  <Block>
    <Container>
      <CenteredRow>
        <Column col={10} m={8}>
          {text.map((paragraph, index) => (
            <HighlightedText key={index}>{paragraph}</HighlightedText>
          ))}
        </Column>
      </CenteredRow>
    </Container>
  </Block>
)

const CenteredRow = styled(Row)`
  justify-content: center;
`

const HighlightedText = styled(Header3.withComponent(Text))`
  font-weight: 500;
`
