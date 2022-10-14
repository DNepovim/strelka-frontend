import { Block, BlockFields } from "../../components/Block/Block"
import { Container } from "../../components/Layout/Layout"
import styled from "@emotion/styled"
import {
  Header3,
  SmallText,
  Text,
} from "../../components/Typography/Typography"
import React from "react"

import { Image } from "../../components/Image/Image"
import { theme } from "../../styles/theme"
import { randomCircle } from "../../mockData/mockData"
import { Image as ImageType } from "../../types/Image"
import { GridContainer } from "../../components/GridLayout/GridLayout"

export interface PersonProps {
  name: string
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
    <GridContainer columnCount={2} m={3} l={4} rowGap={0.5} colGap={2.5}>
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
    </GridContainer>
  </Block>
)

const Person = styled.div`
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
`

const PersonImage = styled(Image)`
  width: 60%;
  height: auto;
  align-self: center;
  background-color: ${theme.color.lightAccent};
  mask-image: url("${(props: { mask: string }) => props.mask}");
  mask-size: 100% 100%;
  mask-position: center;
  mask-repeat: no-repeat;
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

const ContactPoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const ContactPoint = styled(SmallText.withComponent("a"))`
  display: block;
  color: ${theme.color.darkAccent};
  text-decoration: underline;
  margin: 0;
`
