import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import styled from "@emotion/styled"
import React from "react"
import { min } from "../../styles/theme"
import { Image } from "../../components/Image/Image"
import { GalleryProps } from "./galleryDef"

export const Gallery: React.FC<GalleryProps> = (props) => (
  <Block>
    <Container>
      <GalleryContainer>
        {props.content.map((image, index) => (
          <GalleryImage key={index} image={image.image} />
        ))}
      </GalleryContainer>
    </Container>
  </Block>
)

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 2rem;

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
    border-radius: 1rem;
    // override default object fit
    object-fit: cover !important;
  }

  @media ${min("s")} {
    justify-self: center;
    height: 20em;
    width: auto;
  }
`
