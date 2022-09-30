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

import { theme } from "../../styles/theme"
import { Link } from "../../components/Link/Link"
import { FreeformImage } from "../../components/FreeformImage/FreeformImage"
import { Image } from "../../../types/Image"

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

function randomCircle(seed: number) {
  // avoid using random() so that component does not need to be generated every time
  const randomIndex = (seed * seed + 13) % circles.length
  return circles[randomIndex].src
}

export const GroupList: React.FC<GroupListProps> = (props) => (
  <Block>
    <Container>
      <GroupListContainer>
        {props.content.map(({ comment, address, name, image }, index) => (
          <Group key={index} to={address}>
            <Picture mask={randomCircle(index)} image={image} />
            <GroupInfo>
              <Name>{name}</Name>
              <Comment>{comment}</Comment>
            </GroupInfo>
          </Group>
        ))}
      </GroupListContainer>
    </Container>
  </Block>
)

const GroupListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Group = styled(Link)`
  display: flex;
  align-content: stretch;
  gap: 1rem;
  padding: 0.7rem 0.8rem;

  :first-child {
    padding-top: 0;
  }
`

const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Picture = styled(FreeformImage)`
  mask-image: url("${(props: { mask: string }) => props.mask}");
  mask-size: 100% 100%;
  mask-position: center;
  width: 5rem;
  height: 5rem;
`

const Name = styled(Header3)`
  margin: 0;
  text-shadow: 0 0 0.5rem ${theme.color.lightest};

  ::after {
    content: " >";
  }
`

const Comment = styled(Text)`
  margin: 0;
  line-height: 1.2em;
  color: ${theme.color.darkest};
`
