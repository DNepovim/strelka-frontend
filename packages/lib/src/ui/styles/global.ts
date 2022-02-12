/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { min, theme } from "./theme"

export const global = css`
  html {
    background-color: ${theme.color.lightest};
  }

  body {
    background-color: ${theme.color.lightest};
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-family: ${theme.fonts.accent};

    --lightest: ${theme.palettes.default[0]};
    --light-accent: ${theme.palettes.default[1]};
    --dark-accent: ${theme.palettes.default[2]};
    --darkest: ${theme.palettes.default[3]};

    @media ${min("l")} {
      --small-size: 1rem;
      --base-size: 1.2rem;
    }
  }

  a {
    text-decoration: none;
  }

  ::selection {
    background-color: ${theme.color.lightAccent};
    color: ${theme.color.darkest};
  }
`
