/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const underline = (color: string, height: number) => css`
  position: relative;

  &:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 0;
    height: ${height}px;
    background-color: ${color};
    animation-name: underline;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 500ms;
    animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
  }

  @keyframes underline {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`
