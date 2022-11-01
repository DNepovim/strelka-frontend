import { Block, BlockFields } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import styled from "@emotion/styled"
import {
  Header1,
  Header3,
  SmallText,
} from "../../components/Typography/Typography"
import React from "react"
import { max, theme } from "../../styles/theme"
import { ImageWithMask } from "../../components/ImageWithMask/ImageWithMask"
import { randomRectangle } from "../../utils/Masks"
import { Link } from "../../components/Link/Link"

export interface GalleryProps {
  title: string
  date: string
  to: string
  imageUrl: string
}

export interface GalleryListProps extends BlockFields {
  title: string
  content: GalleryProps[]
}

export const GalleryList: React.FC<GalleryListProps> = ({ title, content }) => (
  <Block>
    <Container>
      <Row>
        <Column col={12}>
          <Header1>{title}</Header1>
        </Column>
      </Row>
      <Row>
        {content.map(({ title, date, to, imageUrl }, index) => (
          <Column key={index} col={6} m={4} l={3}>
            <GalleryItem key={index} to={to}>
              <ImageWrapper>
                <ImageWithMask
                  src={imageUrl}
                  width={220}
                  height={150}
                  layout="responsive"
                  mask={randomRectangle(index)}
                />
              </ImageWrapper>
              <Title>{title}</Title>
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

const GalleryItem = styled(Link)`
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
