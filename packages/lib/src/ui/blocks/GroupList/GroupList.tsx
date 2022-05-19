import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import styled from "@emotion/styled"
import { Header3, Text } from "../../components/Typography/Typography"
import React from "react"
import { GroupListProps } from "./groupListDef"

import Circle1 from "../../assets/vectors/potatoes/circle_1.svg"
import Circle2 from "../../assets/vectors/potatoes/circle_2.svg"
import Circle3 from "../../assets/vectors/potatoes/circle_3.svg"
import Circle4 from "../../assets/vectors/potatoes/circle_4.svg"
import Circle5 from "../../assets/vectors/potatoes/circle_5.svg"
import Circle6 from "../../assets/vectors/potatoes/circle_6.svg"
import Circle7 from "../../assets/vectors/potatoes/circle_7.svg"
import Circle8 from "../../assets/vectors/potatoes/circle_8.svg"

import { max, theme } from "../../styles/theme"
import { Image } from "../../../types/Image"
import { BlockTitle } from "../../components/BlockTitle/BlockTitle"

const circles = [
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  Circle6,
  Circle7,
  Circle8,
]

export interface GroupProps {
  name: string
  address: string
  image: Image
  comment: string
}

export const GroupList: React.FC<GroupListProps> = (props) => (
  <Block>
    <Container>
      <GroupListContainer>
        <TitleContainer>
          <PositionedTitle props={props} />
        </TitleContainer>
        {props.groups.map((group, index) => (
          <Group
            key={index}
            href={group.address}
            backgroundImg={group.image.src}
            mask={circles[index % 8].src}
          >
            <Name>{group.name}</Name>
            <Comment>{group.comment}</Comment>
          </Group>
        ))}
      </GroupListContainer>
    </Container>
  </Block>
)

const TitleContainer = styled.div`
  grid-area: 1 / 1 / 2 / 3;
`

const PositionedTitle = styled(BlockTitle)`
  margin: 0;
`

const GroupListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: ${theme.size.small}rem 0;
  grid-template-areas:
    ". . skautky ."
    ". svetlusky skautky oldskauti"
    "benjaminci svetlusky skauti oldskauti"
    "benjaminci vlcata skauti ."
    ". vlcata roveri ."
    ". . roveri .";

  @media ${max("l")} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "benjaminci ."
      "benjaminci svetlusky"
      "vlcata svetlusky"
      "vlcata skautky"
      "skauti skautky"
      "skauti roveri"
      "oldskauti roveri"
      "oldskauti .";
  }

  @media ${max("m")} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "benjaminci"
      "svetlusky"
      "vlcata"
      "skautky"
      "skauti"
      "roveri"
      "oldskauti";
  }
`

const groupList = [
  "benjaminci",
  "svetlusky",
  "vlcata",
  "skautky",
  "skauti",
  "roveri",
  "oldskauti",
]

const createGroupList = () =>
  groupList.map(
    (groupItem, index) => `
    &:nth-of-type(${index + 1}) {
      grid-area: ${groupItem};
    }`
  )

const Group = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 13em;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("${(props: { backgroundImg: string; mask: string }) =>
      props.backgroundImg}");
  mask-image: url("${(props: { backgroundImg: string; mask: string }) =>
    props.mask}");
  mask-size: 100% 100%;
  mask-position: center;
  background-size: cover;

  ${createGroupList()};

  @media ${max("l")} {
    height: 15em;
  }
`

const Name = styled(Header3)`
  color: ${theme.color.lightest};
  font-size: 1.7rem;
  text-align: center;
  margin-bottom: 0;
`

const Comment = styled(Text)`
  color: ${theme.color.lightest};
  font-size: 1rem;
  text-align: center;
  padding: 0.2rem 25% 1.7rem;
  margin-top: 0;
`
