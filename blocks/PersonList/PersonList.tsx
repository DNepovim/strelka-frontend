import { Block, BlockFields } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import styled from "@emotion/styled"
import {
  Header3,
  SmallText,
  Text,
} from "../../components/Typography/Typography"
import React from "react"

import { theme } from "../../styles/theme"
import { randomCircle } from "../../mockData/mockData"
import { Image as ImageType } from "../../types/Image"
import { ImageWithMask } from "../../components/ImageWithMask/ImageWithMask"

export interface PersonProps {
  name: string
  secondName?: string
  surname: string
  nickname?: string
  image: ImageType
  comment?: string
  contact?: {
    email?: string
    phone?: string
  }
}

export interface PersonListProps extends BlockFields {
  content: PersonProps[]
}

export const PersonList: React.FC<PersonListProps> = (props) => (
  <Block>
    <Container>
      <PersonListContainer>
        {props.content.map(
          ({ name, nickname, image, comment, contact }, index) => {
            const firstName = name.split(" ").slice(0, 1).join(" ")
            return (
              <Person key={index}>
                <PersonImage mask={randomCircle(index).src} image={image} />
                <div>
                  <Name>{nickname ?? firstName}</Name>
                  <Alias>{name}</Alias>
                </div>
                {comment && <SubTitle>{comment}</SubTitle>}
                {contact && (
                  <ContactPoints>
                    {contact.email && (
                      <ContactPoint href={`mailto:${contact.email}`}>
                        {contact.email}
                      </ContactPoint>
                    )}
                    {contact.phone && (
                      <ContactPoint href={`tel:${contact.phone}`}>
                        {contact.phone}
                      </ContactPoint>
                    )}
                  </ContactPoints>
                )}
              </Person>
            )
          }
        )}
      </PersonListContainer>
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
