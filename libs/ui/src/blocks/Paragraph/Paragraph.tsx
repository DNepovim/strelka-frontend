import React from "react"
import { BlockProps } from ".."
import { Block, BlockFields } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import { Header2 } from "../../components/Typography/Typography"
import { BlockTemplates } from "../BlockTemplates"

export interface ParagraphBlock extends BlockProps {
  template: BlockTemplates.Paragraph
  fields: ParagraphProps
}

export interface ParagraphProps extends BlockFields {
  title?: string
  text?: string
}

export const Paragraph: React.FC<ParagraphProps> = ({ title, text }) => (
  <Block>
    <Container>
      {title && (
        <Row>
          <Column col={12}>{title && <Header2>{title}</Header2>}</Column>
        </Row>
      )}
      {text && (
        <Row>
          <Column col={12}>{text}</Column>
        </Row>
      )}
    </Container>
  </Block>
)
