import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import { Link } from "@remix-run/react"
import { buttonHover, theme } from "../theme"

interface ButtonGroupItem {
  label?: ReactNode
  title?: string
  danger?: boolean
  key: string | number
}

interface ButtonGroupButton extends ButtonGroupItem {
  type: "button"
  onClick: () => void
}

interface ButtonGroupLink extends ButtonGroupItem {
  type: "link"
  to: string
}

export interface ButtonGroupProps {
  items: (ButtonGroupButton | ButtonGroupLink)[]
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ items }) => (
  <Wrapper>
    {items.map((item) => (
      <Item key={item.key}>
        {isButton(item) ? (
          <Button onClick={item.onClick}>{item.label}</Button>
        ) : (
          <ButtonLink to={item.to}>{item.label}</ButtonLink>
        )}
      </Item>
    ))}
  </Wrapper>
)

const isButton = (
  item: ButtonGroupButton | ButtonGroupLink
): item is ButtonGroupButton => item.type === "button"

const Wrapper = styled.ul`
  list-style: none;
  display: inline-flex;
`

const Item = styled.li`
  border: ${theme.styles.border};
  min-width: 1.8em;

  &:not(:last-of-type) {
    border-right: none;
  }
`

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0.4rem;
  box-shadow: none;
  ${buttonHover}
`

const ButtonLink = Button.withComponent(Link)
