import React from "react"
import {
  List,
  ListType,
  RichTextItem,
  RichTextItemType,
} from "../../types/RichText"
import styled from "@emotion/styled"
import { theme } from "../../styles/theme"
import { Text } from "../Typography/Typography"
import { TextBlock } from "../TextBlock/TextBlock"

export const ItemList: React.FC<List> = (list) => {
  const List =
    (list.type ?? ListType.Unordered) === ListType.Unordered
      ? StyledUL
      : StyledOL

  return (
    <List>
      {list.items.map((item, index) => (
        <StyledLI key={index}>
          {item.map((component, index) => (
            <Item {...component} key={index} />
          ))}
        </StyledLI>
      ))}
    </List>
  )
}

const Item: React.FC<RichTextItem> = ({ content, type }) => {
  switch (type) {
    case RichTextItemType.TextBlock:
      // @ts-ignore manual type checking
      return <TextBlock {...content} />
    case RichTextItemType.List:
      // @ts-ignore manual type checking
      return <ItemList {...content} />
    default:
      return <></>
  }
}

const CommonListStyle = styled.div`
  margin: 0;
  padding: 0 0 0 ${theme.size.base * 1.25}rem;
`
const StyledOL = styled(CommonListStyle.withComponent("ol"))``

const StyledUL = styled(CommonListStyle.withComponent("ul"))`
  > li {
    list-style-type: "¶";
    font-family: ${theme.fonts.headings};
    font-size: 0.8em;
    color: ${theme.color.darkAccent};
  }

  & li ul {
    padding-left: ${theme.size.base}rem;
    > li {
      color: ${theme.color.darkAccent};
    }
  }
`

// ¶ -> Brambora
// ¬ -> Lilie;
// ÷ -> Mala brambora
const StyledLI = styled(Text.withComponent("li"))`
  padding-left: ${theme.size.base * 0.55}rem;
  & ul,
  ol {
    padding-left: ${theme.size.base}rem;
  }
`
