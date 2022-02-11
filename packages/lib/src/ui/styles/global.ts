/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { theme } from "./theme"

export const global = css`
  html {
    background-color: ${theme.color.lightBlue};
  }

  body {
    background-color: ${theme.color.background};
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-family: ${theme.fonts.text};
  }

  a {
    color: ${theme.color.lightBlue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ::selection {
    background-color: ${theme.color.brown};
    color: ${theme.color.beige};
  }
`
