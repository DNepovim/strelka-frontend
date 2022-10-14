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
import { max, min, theme } from "../../styles/theme"
import { randomCircle } from "../../mockData/mockData"
import { Image as ImageType } from "../../types/Image"

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
    <Container>
      <PersonListContainer>
        {props.content.map((person, index) => (
          <Person key={index}>
            <PersonImage mask={randomCircle(index).src} image={person.image} />
            <div>
              <Name>{person.nickname || person.name}</Name>
              {person.nickname && <Alias>{person.name}</Alias>}
            </div>
            {person.comment && <SubTitle>{person.comment}</SubTitle>}
            {person.contact && (
              <ContactPoints>
                {person.contact.email && (
                  <ContactPoint href={`mailto:${person.contact.email}`}>
                    {person.contact.email}
                  </ContactPoint>
                )}
                {person.contact.phone && (
                  <ContactPoint href={`tel:${person.contact.phone}`}>
                    {person.contact.phone}
                  </ContactPoint>
                )}
              </ContactPoints>
            )}
          </Person>
        ))}
      </PersonListContainer>
    </Container>
  </Block>
)

const PersonListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5em 0.5em;

  @media ${min("s")} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${min("m")} {
    grid-template-columns: repeat(4, 1fr);
  }
`

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
  gap: 0.4em;
`

const ContactPoint = styled(SmallText.withComponent("a"))`
  display: block;
  color: ${theme.color.darkAccent};
  text-decoration: underline;
`
