import React from "react"
import { Block, BlockFields } from "../../components/Block/Block"
import { ImageWithMask } from "../../components/ImageWithMask/ImageWithMask"
import { Column, Container, Row } from "../../components/Layout/Layout"
import { Header2, Text } from "../../components/Typography/Typography"
import SquareMask from "../../assets/vectors/potatoes/rectangle_5.svg"
import styled from "@emotion/styled"
import Bed from "../../assets/vectors/icons/bed.svg"
import Pig from "../../assets/vectors/icons/pig.svg"
import Marker from "../../assets/vectors/icons/marker.svg"
import Person from "../../assets/vectors/icons/person.svg"
import Case from "../../assets/vectors/icons/case.svg"
import Image from "next/image"

export enum Icons {
  Bed = "bed",
  Pig = "pig",
  Marker = "marker",
  Person = "person",
  Case = "case",
}

export const icons = {
  [Icons.Bed]: Bed,
  [Icons.Pig]: Pig,
  [Icons.Marker]: Marker,
  [Icons.Person]: Person,
  [Icons.Case]: Case,
}

export interface ImageTextProps extends BlockFields {
  title?: string
  text?: {
    icon?: Icons
    text?: string[]
  }[]
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
        <Column col={12} l={6}>
          {text?.map(({ icon, text }, index) => (
            <TextRow key={index}>
              {icon && (
                <Icon>
                  <Image src={icons[icon]} />
                </Icon>
              )}
              <Text>
                {text.map((t, index) => (
                  <React.Fragment key={index}>
                    {t}
                    <br />
                  </React.Fragment>
                ))}
              </Text>
            </TextRow>
          ))}
        </Column>
        <Column col={12} l={6}>
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

const TextRow = styled.div`
  display: flex;
`

const Icon = styled.div`
  flex: 0 0 2em;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 2em 0.6em 0;
`

const CenteredImage = styled.div`
  max-width: min(100%, 30rem);
  margin: 0 auto;
`
