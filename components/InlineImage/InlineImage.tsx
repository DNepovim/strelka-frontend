import React from "react"
import { Image as ImageType } from "../../types/Image"
import styled from "@emotion/styled"
import { Image } from "../Image/Image"
import { min, theme } from "../../styles/theme"
import { SmallText } from "../Typography/Typography"

export interface InlineImageProps {
  image: ImageType
  caption?: string
}

export const InlineImage: React.FC<InlineImageProps> = (props) => (
  <Figure>
    <StyledImage image={props.image} />
    {props.caption && <Caption>{props.caption}</Caption>}
  </Figure>
)

const Figure = styled.figure`
  width: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: ${theme.size.base * 1.25}rem;
  margin-top: ${theme.size.base * 1.25}rem;

  @media ${min("m")} {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${min("m")} {
    width: 72%;
  }
`

const Caption = styled(SmallText.withComponent("caption"))`
  max-width: 60ch;
  text-align: center;
  width: auto;
  display: block;
  margin: 0 auto;
  margin-top: ${theme.size.base * 0.25}rem;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;

  img {
    border-radius: ${theme.size.base * 0.5}rem;
    overflow: hidden;
  }
`
