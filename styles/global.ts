/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Breakpoints, min, theme } from "./theme"

export const global = css`
  html {
    background-color: ${theme.color.lightest};
  }

  body {
    background-color: ${theme.color.lightest};
    margin: 0;
    padding: 0;
    font-size: ${theme.size.base}rem;
    font-family: ${theme.fonts.accent};

    --lightest: ${theme.palettes.default[0]};
    --light-accent: ${theme.palettes.default[1]};
    --dark-accent: ${theme.palettes.default[2]};
    --darkest: ${theme.palettes.default[3]};

    ${process.env.NODE_ENV === "development" && theme.debug
      ? Object.keys(theme.breakpoints).map(
          (key: Breakpoints) =>
            css`
              @media ${min(key)} {
                &:after {
                  position: fixed;
                  top: 0;
                  rigth: 0;
                  padding: 0.4em;
                  background-color: red;
                  color: white;
                  content: "${key.toUpperCase()}";
                  font-weight: bold;
                }
              }
            `
        )
      : ""}
  }

  a {
    text-decoration: none;
  }

  ::selection {
    background-color: ${theme.color.lightAccent};
    color: ${theme.color.darkest};
  }
`
