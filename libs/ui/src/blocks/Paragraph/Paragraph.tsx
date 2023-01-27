import { useValue } from "@strelka/admin-ui"
import React from "react"
import { Block } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import { Header2 } from "../../components/Typography/Typography"

export interface ParagraphProps {
  title: string
  text: string
}

export const Paragraph: React.FC<{ order: number }> = ({ order }) => {
  const titleProps = useValue("title", order)
  const textProps = useValue("text", order)
  return (
    <Block>
      <Container>
        <Row>
          <Column col={12}>
            <Header2 {...titleProps} />
          </Column>
        </Row>
        <Row>
          <Column col={12}>
            <p {...textProps} />
          </Column>
        </Row>
      </Container>
    </Block>
  )
}
