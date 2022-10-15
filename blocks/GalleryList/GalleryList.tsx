import { Block, BlockFields } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import styled from "@emotion/styled"
import { Header3, SmallText } from "../../components/Typography/Typography"
import React from "react"
import { max, theme } from "../../styles/theme"
import { Image } from "../../components/Image/Image"
import { ImageWithMask } from "../../components/ImageWithMask/ImageWithMask"
import Rectangle from "../../assets/vectors/potatoes/rectangle_5.svg"

export interface GalleryProps {
  name: string
  date: string
  link: string
  imageUrl: string
}

export interface GalleryListProps extends BlockFields {
  content: GalleryProps[]
}

export const GalleryList: React.FC<GalleryListProps> = ({ content }) => (
  <Block>
    <Container>
      <Row>
        {content.map(({ name, date, link, imageUrl }, index) => (
          <Column col={6} m={4} l={3}>
            <GalleryItem key={index} href={link}>
              <ImageWrapper>
                <ImageWithMask
                  src={imageUrl}
                  width={220}
                  height={150}
                  layout="responsive"
                  mask={Rectangle}
                />
              </ImageWrapper>
              <Title>{name}</Title>
              <Date>{date}</Date>
            </GalleryItem>
          </Column>
        ))}
      </Row>
    </Container>
  </Block>
)

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`

const GalleryItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${theme.layout.gutter}rem;
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
