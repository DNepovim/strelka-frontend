import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import styled from "@emotion/styled"
import { Header3, SmallText } from "../../components/Typography/Typography"
import React from "react"
import { GalleryListProps } from "./galleryListDef"
import { max, theme } from "../../styles/theme"
import { Image } from "../../components/Image/Image"
import { BlockTitle } from "../../components/BlockTitle/BlockTitle"

export const GalleryList: React.FC<GalleryListProps> = (props) => (
  <Block>
    <Container>
      <BlockTitle props={props} />
      <GalleryViewContainer>
        {props.galleries.map((galleryView, index) => (
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

const GalleryViewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media ${max("m")} {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`

const GalleryView = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GalleryImage = styled(Image)`
  height: 20em;
  img {
    border-radius: 1rem;
  }

  @media ${max("m")} {
    height: auto;
    width: 90%;
  }
`

const Title = styled(Header3)`
  color: ${theme.color.darkest};
  text-align: center;
  align-self: center;
  max-width: 15em;
  margin: 0.3em 0 0;

  @media ${max("m")} {
    max-width: 20em;
  }
`

const Date = styled(SmallText)`
  color: ${theme.color.darkAccent};
  margin: 0 0 0.2em;
  text-align: center;
  align-self: center;
`
