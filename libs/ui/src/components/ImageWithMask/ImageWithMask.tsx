import styled from "@emotion/styled"
import { ImageProps } from "next/image"
import React from "react"

interface ImageWithMask extends ImageProps {
  mask: { src: string }
}

export const ImageWithMask: React.FC<ImageWithMask> = (props) => (
  <MaskedImage {...props} />
)

export const MaskedImage = styled("img")`
  mask-image: url("${({ mask: maskUrl }: ImageWithMask) => maskUrl.src}");
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-position: center;
`