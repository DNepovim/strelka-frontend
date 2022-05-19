import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import styled from "@emotion/styled"
import {
  Header3,
  SmallText,
  Text,
} from "../../components/Typography/Typography"
import React from "react"
import { PersonListProps } from "./personListDef"

import { Image } from "../../components/Image/Image"
import { min, theme } from "../../styles/theme"
import { randomCircle } from "../../mockData/mockData"

export const PersonList: React.FC<PersonListProps> = (props) => (
  <Block>
    <Container>
      <PersonListContainer>
        {props.content.map((person, index) => (
          <Person key={index}>
            <PersonImage mask={randomCircle(index).src} image={person.image} />
            <Name>
              {person.name}
              {person.nickname && (
                <>
                  &#8288;, <Nickname>{person.nickname}</Nickname>
                </>
              )}
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
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem 0.75rem;
  padding: 0 0.5rem;
  text-align: center;

  @media ${min("m")} {
    padding: 0 2rem;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${min("l")} {
    gap: 2.5rem 2.5rem;
    padding: 0 2.5rem;
    grid-template-columns: repeat(4, 1fr);
  }
`

const Person = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const PersonImage = styled(Image)`
  height: auto;
  width: 70%;
  background-color: ${theme.color.lightAccent};
  mask-image: url("${(props: { mask: string }) => props.mask}");
  mask-size: 100% 100%;
  mask-position: center;
  mask-repeat: no-repeat;
  align-self: center;

  @media ${min("s")} {
    width: 60%;
  }

  @media ${min("l")} {
    width: 70%;
  }
`

const Name = styled(Header3)`
  font-size: ${theme.size.base * 1.2}rem;
  margin: 0.125rem 0 0;
  padding: 0;
`

const Nickname = styled(Name.withComponent("span"))`
  font-style: italic;
`

const SubTitle = styled(Text)`
  font-size: ${theme.size.base * 0.9}rem;
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
