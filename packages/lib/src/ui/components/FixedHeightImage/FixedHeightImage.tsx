import React from "react"
import styled from "@emotion/styled"
import { max } from "../../styles/theme"

interface ImageProps {
  src: string
  mask?: string
}

export const FixedHeightImage: React.FC<ImageProps> = (props) => (
  <Picture src={props.src} mask={props.mask} />
)

const Picture = styled.img`
  width: auto;
  ${(props: { mask?: string }) =>
    props.mask &&
    `mask-image: url("${props.mask}");
      mask-size: 100% 100%;
      mask-position: center;
    `};
  align-self: center;
  height: 35vh;

  @media ${max("l")} {
    height: 30vh;
  }

  @media ${max("s")} {
    height: auto;
    width: 90vw;
  }
`
