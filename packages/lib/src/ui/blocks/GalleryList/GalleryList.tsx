import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import styled from "@emotion/styled"
import { Header3, SmallText } from "../../components/Typography/Typography"
import React from "react"
import { GalleryListProps } from "./galleryListDef"
import { max, theme } from "../../styles/theme"
import { FixedHeightImage } from "../../components/FixedHeightImage/FixedHeightImage"

export const GalleryList: React.FC<GalleryListProps> = (props) => (
  <Block>
    <Container>
      <GalleryViewContainer>
        {props.content.map((galleryView, index) => (
          <GalleryView key={index} href={galleryView.address}>
            <FixedHeightImage src={galleryView.image.src} />
            <Title>{galleryView.name}</Title>
            <Date>{galleryView.comment}</Date>
          </GalleryView>
        ))}
      </GalleryViewContainer>
    </Container>
  </Block>
)

const GalleryViewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`

const GalleryView = styled.a`
  display: flex;
  flex-direction: column;
  max-width: 100vw;

  img {
    border-radius: 1rem;
  }
`

const Title = styled(Header3)`
  color: ${theme.color.darkest};
  text-align: center;
  max-width: 40vw;
  align-self: center;
  margin: 0.3em 0 0;

  @media ${max("m")} {
    max-width: 80vw;
  }
`

const Date = styled(SmallText)`
  color: ${theme.color.darkAccent};
  margin: 0 0 0.2em;
  text-align: center;
`
