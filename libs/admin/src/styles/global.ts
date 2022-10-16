import { css } from "@emotion/react"
import { theme } from "../theme"

export const global = css`
  body {
    margin: 0;
    font-family: "Noto Sans Mono", sans-serif;
    min-height: 100vh;
    background-color: ${theme.colors.bodyBackground};
  }

  a {
    color: black;
  }
`
