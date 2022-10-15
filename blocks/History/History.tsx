import React from "react"
import { Block } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import styled from "@emotion/styled"
import { min, theme } from "../../styles/theme"
import {
  Header2,
  Header3,
  Text as Paragraph,
} from "../../components/Typography/Typography"
import { ImageProps } from "next/image"
import { MaskedImage } from "../../components/ImageWithMask/ImageWithMask"
import { randomRectangle } from "../../utils/Masks"

interface ChapterProps {
  year?: number
  text: string[]
  image?: ImageProps
}

export interface HistoryProps {
  introduction: {
    text: string[]
  }
  chapters: ChapterProps[]
}

export const History: React.FC<HistoryProps> = ({ introduction, chapters }) => (
  <Block>
    <Container>
      <Introduction>
        <Column col={12} m={6}>
          {introduction.text.map((paragraph, index) => (
            <IntroductionText key={index}>{paragraph}</IntroductionText>
          ))}
        </Column>
      </Introduction>
      {chapters?.map(({ year, text, image }, index) => (
        <Row key={index}>
          <Year col={12} m={2} key={index}>
            {year}
          </Year>
          <Column col={12} m={6} key={index + chapters.length}>
            {text.map((paragraph, index) => (
              <Text key={index}>{paragraph}</Text>
            ))}
          </Column>
          {image && (
            <ImageWrapper
              col={12}
              m={4}
              key={index + chapters.length * chapters.length}
            >
              {image && (
                <MaskedImage
                  mask={randomRectangle(index)}
                  objectFit={"cover"}
                  layout={"responsive"}
                  {...image}
                />
              )}
            </ImageWrapper>
          )}
        </Row>
      ))}
    </Container>
  </Block>
)

const Introduction = styled(Row)`
  margin-bottom: ${theme.layout.gutter * 2}rem;
`
const Text = styled(Paragraph)`
  margin-bottom: ${theme.layout.gutter * 2}rem;
`
const IntroductionText = styled(Header3.withComponent(Text))`
  font-weight: normal;
  font-size: 1.6rem;
  font-family: ${theme.fonts.accent};
`

const Year = styled(Header2.withComponent(Column))`
  margin-bottom: 0;
  @media ${min("m")} {
    text-align: right;
    overflow: hidden;
    align-self: start;
    position: sticky;
    top: 1rem;
  }
`

const ImageWrapper = styled(Column)`
  position: relative;
  width: 80%;
  margin: 0 auto;
  margin-bottom: ${theme.layout.gutter * 2}rem;

  img {
    border-radius: 0.4em;
  }
  
  @media ${min("m")} {
    padding: 0 ${theme.layout.gutter}rem;
    box-sizing: border-box;
    margin-bottom: 0;
    align-self: start;
    position: sticky;
    top: ${theme.layout.gutter}rem;
  }
}
`