import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import { Link } from "@remix-run/react"
import { buttonHover, theme } from "../theme"
import { css } from "@emotion/react"

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

interface WithoutFrame {
  withoutFrame?: boolean
}

interface Layout {
  layout?: "vertical" | "horizontal"
}

export interface ButtonGroupProps extends Layout, WithoutFrame {
  items: (ButtonGroupButton | ButtonGroupLink)[]
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  items,
  withoutFrame,
  layout,
}) => (
  <Wrapper layout={layout} withoutFrame={withoutFrame}>
    {items.map((item) => (
      <Item key={item.key} withoutFrame={withoutFrame} layout={layout}>
        {isButton(item) ? (
          <Button onClick={item.onClick} layout={layout}>
            {item.label}
          </Button>
        ) : (
          <ButtonLink to={item.to} layout={layout}>
            {item.label}
          </ButtonLink>
        )}
      </Item>
    ))}
  </Wrapper>
)

const isButton = (
  item: ButtonGroupButton | ButtonGroupLink
): item is ButtonGroupButton => item.type === "button"

type ItemProps = Layout & WithoutFrame

const Wrapper = styled.ul`
  position: relative;
  z-index: 1;
  list-style: none;
  display: inline-flex;
  padding: 0;
  margin: 0;
  ${({ layout }: ItemProps) =>
    layout === "vertical"
      ? css`
          width: 100%;
        `
      : ""}
  ${({ withoutFrame }: ItemProps) =>
    withoutFrame
      ? ""
      : css`
          border: ${theme.styles.border};
        `}
`

const Item = styled.li`
  min-width: 1.8em;

  ${({ layout }: ItemProps) =>
    layout === "vertical"
      ? css`
          width: 100%;
          border-bottom: ${theme.styles.border};
          &:last-of-type {
            border-bottom: none;
          }
        `
      : css`
          border-right: ${theme.styles.border};
          &:last-of-type {
            border-right: none;
          }
        `}
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
  ${({ layout }: ItemProps) =>
    layout === "vertical"
      ? css`
          width: 100%;
        `
      : ""}
`

const ButtonLink = Button.withComponent(Link)
