import { css } from "@emotion/react"

export const theme = {
  styles: {
    border: "1px solid #ccc",
    animationFunction: "ease-in-out",
  },
  colors: {
    brand: "#ccc",
    backgroundGray: "#eee",
    text: "black",
    danger: "red",
    bodyBackground: "#f8f8f8",
  },
  layout: {
    gap: 1,
  },
}

export const buttonHover = css`
  box-shadow: inset 0 0 0 0 white;
  transition: box-shadow 900ms ${theme.styles.animationFunction};

  &:hover {
    box-shadow: inset 0 0 13px 5px #ddd;
  }
`
