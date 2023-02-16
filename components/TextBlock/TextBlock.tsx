import React, { Fragment } from "react"
import {
  HorizontalAlignment,
  TextBlock as TextBlockProps,
} from "../../types/RichText"
import { Text } from "../Typography/Typography"
import styled from "@emotion/styled"
import { Link } from "../Link/Link"
import { max, min, theme } from "../../styles/theme"
import { Image } from "../Image/Image"
import { css } from "@emotion/react"

export const TextBlock: React.FC<TextBlockProps> = ({ lines, figure }) => (
  <>
    {figure && <StyledImage {...figure} />}
    {lines.map((line, index) => (
      <Text key={index}>
        {line.nodes.map(({ content, isBold, to }, index) => {
          const child = React.createElement(
            to === undefined ? React.Fragment : StyledLink,
            to && { to: to },
            content
          )
          return React.createElement(
            isBold ? BoldText : Fragment,
            { key: index },
            child
          )
        })}
      </Text>
    ))}
  </>
)

const StyledLink = styled(Link)`
  color: ${theme.color.darkAccent};
  text-decoration: underline;
  text-decoration-thickness: 1.2px;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    color: ${theme.color.lightest};
    background-color: ${theme.color.darkAccent};
  }
`
const BoldText = styled(Text.withComponent("span"))`
  font-weight: 700;
  color: ${theme.color.darkAccent};
`

const StyledImage = styled(Image)<{ alignment: HorizontalAlignment }>`
  position: relative;
  height: auto;
  @media ${max("m")} {
    margin-bottom: ${theme.size.base}rem;
  }

  @media ${min("m")} {
    width: 50%;
    ${({ alignment }) =>
      alignment === HorizontalAlignment.Left
        ? css`
            float: left;
            clear: left;
            padding-right: ${theme.size.base}rem;
          `
        : css`
            float: right;
            clear: right;
            padding-left: ${theme.size.base}rem;
          `}
    padding-bottom: ${theme.size.base * 0.5}rem;
  }

  @media ${min("l")} {
    width: 38.31%;
  }

  img {
    border-radius: ${theme.size.base * 0.5}rem;
    overflow: hidden;
  }
`
