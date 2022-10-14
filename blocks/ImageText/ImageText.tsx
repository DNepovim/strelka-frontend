import React from "react"
import { Block, BlockFields } from "../../components/Block/Block"
import { ImageWithMask } from "../../components/ImageWithMask/ImageWithMask"
import { Column, Container, Row } from "../../components/Layout/Layout"
import { Header2, Text } from "../../components/Typography/Typography"
import SquareMask from "../../assets/vectors/potatoes/rectangle_5.svg"
import styled from "@emotion/styled"

export interface ImageTextProps extends BlockFields {
  title?: string
  text?: string[]
  imageUrl?: string
}

export const ImageText: React.FC<ImageTextProps> = ({
  title,
  text,
  imageUrl,
}) => (
  <Block>
    <Container>
      <Row>
        <Column col={12}>{title && <Header2>{title}</Header2>}</Column>
      </Row>
      <Row>
        <Column col={12} m={6}>
          <Text>
            {text?.map((line) => (
              <>
                {line} <br />
              </>
            ))}
          </Text>
        </Column>
        <Column col={12} m={6}>
          {imageUrl && (
            <CenteredImage>
              <ImageWithMask
                src={imageUrl}
                layout="responsive"
                width="520"
                height="350"
                mask={SquareMask}
              />
            </CenteredImage>
          )}
        </Column>
      </Row>
    </Container>
  </Block>
)

const CenteredImage = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`
