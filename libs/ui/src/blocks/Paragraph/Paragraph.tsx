import {
  BlockField,
  EditorContext,
  InputDefs,
  useValue,
} from "@strelka/admin-ui"
import React, { useContext } from "react"
import { Block } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import { Header2 } from "../../components/Typography/Typography"
import { IoMenuOutline } from "react-icons/io5"
import { useField } from "formik"

export interface ParagraphProps {
  title: string
  text: string
}

const useBlock = (template: string, order: number, fields?: BlockField[]) => {
  const { addBlockFields } = useContext(EditorContext)
  if (fields?.length) {
    addBlockFields(template, fields)
  }
  const [{ value }] = useField(`blocks[${order}].meta`)
  return value
}

export const Paragraph: React.FC<{ order: number; template: string }> = ({
  order,
  template,
}) => {
  const blockValues = useBlock(template, order, [
    {
      name: "neco",
      label: "Neco",
      in
  }
  ])
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

export const paragraph = {
  template: "paragraph",
  icon: <IoMenuOutline />,
  component: Paragraph,
}
