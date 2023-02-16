import React, { Fragment } from "react"
import { Block } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import { ItemList } from "../../components/ItemList/ItemList"
import { TextBlock } from "../../components/TextBlock/TextBlock"
import {
  RichTextItemType,
  RichText as RichTextProps,
} from "../../types/RichText"
import styled from "@emotion/styled"

export const RichText: React.FC<RichTextProps> = ({ items }) => (
  <Block>
    <NarrowContainer>
      <Row>
        <Column col={12}>
          {items.map(({ content, type }, index) => {
            switch (type) {
              case RichTextItemType.TextBlock:
                // @ts-ignore custom type checking
                return <TextBlock key={index} {...content} />
              case RichTextItemType.List:
                // @ts-ignore custom type checking
                return <ItemList key={index} {...content} />
              default:
                return <Fragment key={index}></Fragment>
            }
          })}
        </Column>
      </Row>
    </NarrowContainer>
  </Block>
)

const NarrowContainer = styled(Container)`
  max-width: 80ch;
`
