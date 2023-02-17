import { BlockMeta, InputDefs, Repeater, useValue } from "@strelka/admin-ui"
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

export const Paragraph: React.FC<{ block: BlockMeta }> = ({ block }) => {
  const titleProps = useValue("title", block, {
    color: {
      label: "Barva",
      input: InputDefs.Text,
    },
  })
  return (
    <Block>
      <Container>
        <Row>
          <Column col={12}>
            <Header2 {...titleProps} />
          </Column>
        </Row>
        <Repeater name="row" block={block}>
          {(props) => <TextRow {...props} />}
        </Repeater>
      </Container>
    </Block>
  )
}

export const paragraph = {
  template: "paragraph",
  icon: <IoMenuOutline />,
  component: Paragraph,
}

const TextRow: React.FC<{ block: BlockMeta; name: string }> = ({
  block,
  name,
}) => {
  const textProps = useValue(`${name}.fields.text`, block)
  const anotherTextProps = useValue(`${name}.fields.anotherText`, block)
  return (
    <Row>
      <Column col={6}>
        <p {...textProps} />
      </Column>
      <Column col={6}>
        <p {...anotherTextProps} />
      </Column>
    </Row>
  )
}
