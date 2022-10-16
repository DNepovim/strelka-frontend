import styled from "@emotion/styled"
import { buttonHover, theme } from "../theme"
import { Link } from "@remix-run/react"

export interface ButtonProps {
  danger?: boolean
}

export const Button = styled.button`
  cursor: pointer;
  font-size: 1rem;
  padding: 0.4em 1em;
  border: ${theme.styles.border};
  background-color: transparent;
  transition: background-color 200ms;
  text-decoration: none;
  color: ${({ danger }: ButtonProps) =>
    danger ? theme.colors.danger : theme.colors.text};

  ${buttonHover}
`

export const ButtonLink = Button.withComponent(Link)
