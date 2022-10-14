import { Block, BlockFields } from "../../components/Block/Block"
import { Container } from "../../components/Layout/Layout"
import styled from "@emotion/styled"
import React from "react"
import { min, theme } from "../../styles/theme"
import { Image } from "../../components/Image/Image"
import { Image as ImageType } from "../../types/Image"

export interface GalleryProps extends BlockFields {
  images: ImageType[]
}

export const Gallery: React.FC<GalleryProps> = (props) => (
  <Block>
    <WideContainer>
      <GalleryContainer>
        {props.images.map((image, index) => (
          <GalleryImage key={index} image={image} />
        ))}
      </GalleryContainer>
    </WideContainer>
  </Block>
)

const WideContainer = styled(Container)`
  max-width: ${theme.layout.width * 1.5}rem;
`
const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media ${min("s")} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const GalleryImage = styled(Image)`
  height: auto;
  width: 100%;

  img {
    border-radius: 0.75rem;
    // override default object fit
    object-fit: cover !important;
  }

  @media ${min("s")} {
    height: 20rem;
    width: auto;
  }
`
