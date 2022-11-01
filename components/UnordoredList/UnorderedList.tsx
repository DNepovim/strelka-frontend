import React from "react"
import { Text } from "../Typography/Typography"
import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

export interface UnorderedListProps {
  items: string[]
}

export const UnorderedList: React.FC<UnorderedListProps> = (props) => (
  <List>
    {props.items.map((item, index) => (
      <ListItem key={index}>
        <Text>{item}</Text>
      </ListItem>
    ))}
  </List>
)

// pro font SKAUT:
//   dot: ¶
//   point: ÷
//   skautsky pozdrav ≠
//   kotva »
//   lily ¬
const List = styled.ul`
  @counter-style lily {
    system: cyclic;
    symbols: "¬";
    suffix: " ";
  }

  padding-left: ${theme.size.base * 1.5}rem;
  margin-top: 0;

  list-style: lily;
  font-size: 1.5rem;
  line-height: 0rem;
`

const ListItem = styled.li`
  font-family: ${theme.fonts.headings};
  margin-bottom: 1em;
`
