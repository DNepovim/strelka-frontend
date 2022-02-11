/** @jsxImportSource @emotion/react */
import React from "react"
import { tp } from "../../../utils/tp"
import { theme } from "../../styles/theme"
import { Container } from "../../components/Container/Container"
import { Heading } from "../../components/Heading/Heading"
import { Button } from "../../components/Button/Button"
import { ExampleProps } from "./exampleDef"
import { Block } from "../../components/Block/Block"

export const Example: React.FC<ExampleProps> = ({ id, title, button }) => (
  <Block id={id} backgroundColor={theme.color.background}>
    <Container>
      <Heading>{tp(title)}</Heading>
      <Button link={button.link}>{button.label}</Button>
    </Container>
  </Block>
)
