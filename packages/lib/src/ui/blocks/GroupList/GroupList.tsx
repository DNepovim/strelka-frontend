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
  image: { src: string }
  comment: string
}

export const GroupList: React.FC<GroupListProps> = (props) => (
  <Block>
    <Container>
      <GroupListContainer>
        {props.content.map((group, index) => (
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

const GroupListContainer = styled.div``

const Group = styled.a`
  display: block;
  height: 10em;
  background-image: url("${(props: { backgroundImg: string; mask: string }) =>
    props.backgroundImg}");
  mask-image: url("${(props: { backgroundImg: string; mask: string }) =>
    props.mask}");
  mask-size: 100% 100%;
  mask-position: center;
`

const Name = styled(Header3)``

const Comment = styled(Text)``
