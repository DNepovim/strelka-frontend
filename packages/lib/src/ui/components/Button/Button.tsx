/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { theme } from "../../styles/theme"

export interface ButtonProps {
  link: string
  targetBlank?: boolean
  isSmall?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  link,
  targetBlank,
  isSmall,
}) => (
  <a
    href={link}
    {...(targetBlank
      ? {
          target: "_blank",
          rel: "noreferrer noopener",
        }
      : {})}
    css={css`
      position: relative;
      display: inline-block;
      font-family: themix;
      font-size: ${isSmall ? 0.8 : 1.4}rem;
      color: ${theme.color.background};
      padding: 0.6em 1em;
      border-radius: 4px;
      text-decoration: none;
      background-color: ${theme.color.brand};
      overflow: hidden;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: ${theme.color.second};
        transition: width 700ms cubic-bezier(0.1, 0.15, 0, 0.97);
      }

      span {
        position: relative;
        z-index: 10;
      }

      &:hover {
        text-decoration: none;

        &:before {
          width: 100%;
        }
      }
      @media (min-width: 400px) {
        font-size: ${isSmall ? 1 : 1.4}rem;
      }
    `}
  >
    <span>{children}</span>
  </a>
)

export default Button
