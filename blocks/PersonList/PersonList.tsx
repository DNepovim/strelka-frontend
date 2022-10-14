import { Block, BlockFields } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import styled from "@emotion/styled"
import {
  Header3,
  SmallText,
  Text,
} from "../../components/Typography/Typography"
import React from "react"

import { Image } from "../../components/Image/Image"
import { max, theme } from "../../styles/theme"
import { randomCircle } from "../../mockData/mockData"
import { Image as ImageType } from "../../types/Image"

export interface PersonProps {
  name: string
  nickname?: string
  image: ImageType
  subtitle?: string
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
            <Name>
              {person.name}
              {person.nickname && `—${person.nickname}`}
            </Name>
            {person.subtitle && <SubTitle>{person.subtitle}</SubTitle>}
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3em 2em;

  @media ${max("l")} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${max("m")} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${max("s")} {
    grid-template-columns: 1fr;
  }
`

const Person = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const PersonImage = styled(Image)`
  height: auto;
  width: 100%;
  background-color: ${theme.color.lightAccent};
  mask-image: url("${(props: { mask: string }) => props.mask}");
  mask-size: 100% 100%;
  mask-position: center;
  mask-repeat: no-repeat;
  align-self: center;
`

const Name = styled(Header3)`
  margin: 0.8rem 0 0;
  padding: 0;
`

const SubTitle = styled(Text)`
  margin: 0;
  line-height: 1.2em;
`

const ContactPoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const ContactPoint = styled(SmallText.withComponent("a"))`
  display: block;
  text-decoration: underline;
  color: ${theme.color.darkAccent};
`
