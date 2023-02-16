import { BlockMeta, InputDefs, useValue } from "@strelka/admin-ui"
import React from "react"
import { Block } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import { Header2 } from "../../components/Typography/Typography"
import { IoMenuOutline } from "react-icons/io5"

export interface ParagraphProps {
  name: string
  label: string
  input: InputDefs
}

export const Paragraph: React.FC<{
  blockMeta: BlockMeta
}> = ({ blockMeta }) => {
  const titleProps = useValue("title", blockMeta, {
    color: {
      label: "Barva",
      input: InputDefs.Text,
    },
  })
  const textProps = useValue("text", blockMeta)
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

export const paragraph = {
  template: "paragraph",
  icon: <IoMenuOutline />,
  component: Paragraph,
}
