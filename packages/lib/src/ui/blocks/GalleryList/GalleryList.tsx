import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import styled from "@emotion/styled"
import { Header3, SmallText } from "../../components/Typography/Typography"
import React from "react"
import { GalleryListProps } from "./galleryListDef"
import { min, theme } from "../../styles/theme"
import { FreeformImage } from "../../components/FreeformImage/FreeformImage"

export const GalleryList: React.FC<GalleryListProps> = (props) => (
  <Block>
    <Container>
      <GalleryViewContainer>
        {props.content.map((galleryView, index) => (
          <GalleryView key={index} href={galleryView.address}>
            <GalleryImage image={galleryView.image} />
            <Title>{galleryView.name}</Title>
            <Date>{galleryView.comment}</Date>
          </GalleryView>
        ))}
      </GalleryViewContainer>
    </Container>
  </Block>
)

const calculateGalleryImageSide = (
  columnCount: number,
  gapWidth: number,
  totalWidth: number
) => (totalWidth - (columnCount + 1) * gapWidth) / columnCount
// + 1 for additional space on sides

const GalleryViewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 2vw;

  padding: 0 2vw;

  @media ${min("m")} {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 2.5vw;
    gap: 2.5vw;
  }

  @media ${min("l")} {
    padding: 0 1.5rem;
    gap: 1.5rem;
  }
`

const GalleryView = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover h3 {
    text-decoration: underline;
  }
`

const GalleryImage = styled(FreeformImage)`
  img {
    border-radius: 0.75rem;
  }

  height: ${calculateGalleryImageSide(2, 2, 100)}vw;

  @media ${min("m")} {
    height: ${calculateGalleryImageSide(3, 2, 100)}vw;
  }

  @media ${min("l")} {
    height: ${calculateGalleryImageSide(3, 1.5, theme.layout.width)}rem;
  }
`

const Title = styled(Header3)`
  color: ${theme.color.darkest};
  text-align: center;
  align-self: center;
  max-width: 15em;
  font-size: ${theme.size.base * 1.1}rem;
  line-height: 1em;
  margin: 0.4rem 0 0.2rem;

  @media ${min("m")} {
    line-height: 1.1em;
    font-size: ${theme.size.base * 1.3}rem;
    margin: 0.75rem 0 0.2rem;
  }
`

const Date = styled(SmallText)`
  color: ${theme.color.darkAccent};
  margin: 0 0 0.2em;
  text-align: center;
  align-self: center;
`
