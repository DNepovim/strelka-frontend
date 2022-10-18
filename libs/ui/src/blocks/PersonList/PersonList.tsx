import { Block, BlockFields } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import styled from "@emotion/styled"
import {
  Header3,
  SmallText,
  Text,
} from "../../components/Typography/Typography"
import React from "react"

import { Image } from "../../components/Image/Image"
import { max, theme } from "../../styles/theme"
import { Image as ImageType } from "../../types/Image"
import { ImageWithMask } from "../../components/ImageWithMask/ImageWithMask"
import { randomCircle } from "../../utils"

export interface PersonProps {
  name: string
  secondName?: string
  surname: string
  nickname?: string
  image?: ImageType
  subtitle?: string
  mail?: string
  phone?: string
}

export interface PersonListProps extends BlockFields {
  content: PersonProps[]
}

export const PersonList: React.FC<PersonListProps> = (props) => (
  <Block>
    <Container>
      <Row rowGap={2.5}>
        {props.content.map(
          (
            { name, surname, nickname, image, subtitle, phone, mail },
            index
          ) => (
            <Person col={6} m={4} l={3} key={index}>
              <ImageContainer>
                <ImageWithMask mask={randomCircle(index)} src={image} />
              </ImageContainer>
              <div>
                <Name>{nickname ?? name}</Name>
                <Alias>
                  {name} {surname}
                </Alias>
              </div>
              {subtitle && <SubTitle>{subtitle}</SubTitle>}
              <>
                {mail && (
                  <ContactPoint href={`mailto:${mail}`}>{mail}</ContactPoint>
                )}
                {phone && (
                  <ContactPoint href={`tel:${phone}`}>{phone}</ContactPoint>
                )}
              </>
            </Person>
          )
        )}
      </Row>
    </Container>
  </Block>
)

const Person = styled(Column)`
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
`

const ImageContainer = styled.div`
  width: 60%;
  height: auto;
  align-self: center;
`

const Name = styled(Header3)`
  margin: 0;
`

const Alias = styled(SmallText)`
  color: ${theme.color.darkAccent};
  margin: 0;
`

const SubTitle = styled(Text)`
  margin: 0;
`

const ContactPoint = styled(SmallText.withComponent("a"))`
  display: block;
  color: ${theme.color.darkAccent};
  text-decoration: underline;
  margin: 0;
`
