import styled from "@emotion/styled"
import { buttonHover, theme } from "../theme"
import { css } from "@emotion/react"
import React, { ButtonHTMLAttributes } from "react"
import { RouteLink } from "./RouteLink"

export interface ButtonProps {
  danger?: boolean
  circled?: boolean
}

export const Button: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = (props) => <StyledButton type="button" {...props} />

const StyledButton = styled.button`
  display: flex;
  align-items: start;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.4em 1em;
  border: ${theme.styles.border};
  background-color: white;
  transition: background-color 200ms;
  text-decoration: none;
  color: ${({ danger }: ButtonProps) =>
    danger ? theme.colors.danger : theme.colors.text};
  ${({ circled }: ButtonProps) =>
    circled
      ? css`
          border-radius: 1em;
        `
      : ""}

  svg {
    margin: 0 0.4em 0 -0.2em;
  }
`

export const ButtonLink = StyledButton.withComponent(RouteLink)
