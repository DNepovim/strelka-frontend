import React from "react"
import styled from "@emotion/styled"
import NextImage from "next/image"
import { Image as ImageType } from "../../types/Image"

interface ImageProps {
  image: ImageType
  className?: string
}

export const Image: React.FC<ImageProps> = ({ className, image }) => (
  <ImageContainer className={className}>
    <NextImage src={image} layout="fill" objectFit="contain" />
  </ImageContainer>
)

/**
 * Override Image default behaviour.
 * Allows image to have height of container and automatic width
 * If a container has an unset height but fixed width, then the image
 * will fill the containers width and have an automatic height
 */
const ImageContainer = styled.div`
  height: 100%;
  position: relative;
  > div {
    height: 100% !important;
    width: 100% !important;
    position: relative !important;
    > img {
      position: relative !important;
      width: auto !important;
      height: auto !important;
    }
  }
`
