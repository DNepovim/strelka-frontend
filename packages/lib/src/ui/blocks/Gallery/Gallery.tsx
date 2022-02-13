import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import styled from "@emotion/styled"
import { Header3, SmallText } from "../../components/Typography/Typography"
import React from "react"
import { GalleryProps } from "./galleryDef"

import Rectangle_1 from "../../assets/vectors/potatoes/rectangle_1.svg"
import Rectangle_2 from "../../assets/vectors/potatoes/rectangle_2.svg"
import Rectangle_3 from "../../assets/vectors/potatoes/rectangle_3.svg"
import Rectangle_4 from "../../assets/vectors/potatoes/rectangle_4.svg"
import { max, theme } from "../../styles/theme"

const rectangles = [Rectangle_1, Rectangle_2, Rectangle_3, Rectangle_4]

export interface GalleryViewProps {
  name: string
  address: string
  image: { src: string }
  comment: string
}

export const Gallery: React.FC<GalleryProps> = (props) => (
  <Block>
    <Container>
      <GalleryViewContainer>
        {props.content.map((galleryView, index) => (
          <GalleryView key={index} href={galleryView.address}>
            <Picture
              src={galleryView.image.src}
              mask={rectangles[(index * 13 + 11) % 4].src}
            />
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
`

const Picture = styled.img`
  width: auto;
  mask-image: url("${(props: { mask: string }) => props.mask}");
  mask-size: 100% 100%;
  mask-position: center;
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
const Title = styled(Header3)`
  color: ${theme.color.darkest};
  text-align: center;
  max-width: 40vw;
  align-self: center;
  margin: 0.3em 0 0;
`

const Date = styled(SmallText)`
  color: ${theme.color.darkAccent};
  margin: 0 0 0.2em;
  text-align: center;
`
