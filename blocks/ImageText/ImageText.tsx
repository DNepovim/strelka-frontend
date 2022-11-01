import { Block, BlockFields } from "../../components/Block/Block"
import { ImageWithMask } from "../../components/ImageWithMask/ImageWithMask"
import { Column, Container, Row } from "../../components/Layout/Layout"
import { Header1, Header2, Text } from "../../components/Typography/Typography"
import SquareMask from "../../assets/vectors/potatoes/rectangle_5.svg"
import styled from "@emotion/styled"
import Bed from "../../assets/vectors/icons/bed.svg"
import Pig from "../../assets/vectors/icons/pig.svg"
import Marker from "../../assets/vectors/icons/marker.svg"
import Person from "../../assets/vectors/icons/person.svg"
import Case from "../../assets/vectors/icons/case.svg"
import Teepee from "../../assets/vectors/icons/teepee.svg"
import Lily from "../../assets/vectors/icons/lily.svg"
import Heart from "../../assets/vectors/icons/heart.svg"
import People from "../../assets/vectors/icons/people.svg"
import Image from "next/image"
import React from "react"

export enum Icons {
  Bed = "bed",
  Pig = "pig",
  Marker = "marker",
  Person = "person",
  Case = "case",
  Teepee = "teepee",
  Lily = "lily",
  People = "people",
  Heart = "heart",
}

export const icons = {
  [Icons.Bed]: Bed,
  [Icons.Pig]: Pig,
  [Icons.Marker]: Marker,
  [Icons.Person]: Person,
  [Icons.Case]: Case,
  [Icons.Teepee]: Teepee,
  [Icons.Lily]: Lily,
  [Icons.People]: People,
  [Icons.Heart]: Heart,
}

export interface ImageTextProps extends BlockFields {
  title?: string
  titleIsH1?: boolean
  text?: {
    icon?: Icons
    text?: string[]
  }[]
  imageUrl?: string
}

export const ImageText: React.FC<ImageTextProps> = ({
  title,
  titleIsH1,
  text,
  imageUrl,
}) => {
  const TitleWrapper = titleIsH1 ?? false ? Header1 : Header2
  return (
    <Block>
      <Container>
        <Row>
          <Column col={12}>
            {title && <TitleWrapper>{title}</TitleWrapper>}
          </Column>
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
                  {text.map((t) => (
                    <>
                      {t}
                      <br />
                    </>
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
}

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
