import { Block } from "../../components/Block/Block"
import { Container, Row, Column } from "../../components/Layout/Layout"
import styled from "@emotion/styled"
import { randomCircle } from "../../utils/Masks"
import { MaskedImage } from "../../components/ImageWithMask/ImageWithMask"
import { min, theme } from "../../styles/theme"
import { Link } from "../../components/Link/Link"
import { Header2, Header3, Text } from "../../components/Typography/Typography"
import { ImageProps } from "next/image"

export interface GroupListProps {
  content: GroupProps[]
  title: string
}

export interface GroupProps {
  text: string
  to: string
  image: ImageProps
  comment?: string
}

export const GroupList: React.FC<GroupListProps> = (props) => (
  <Block>
    <Container>
      <Row>
        <Column col={12}>
          <Header2>{props.title}</Header2>
        </Column>
      </Row>
      <GroupRow rowGap={theme.layout.gutter * 2.5}>
        {props.content.map(({ comment, to, text, image }, index) => (
          <Group col={6} m={4} l={3} key={index}>
            <GroupLink to={to}>
              <ImageContainer>
                <MaskedImage
                  layout={"responsive"}
                  width={1}
                  height={1}
                  mask={randomCircle(index)}
                  src={image.src}
                />
              </ImageContainer>
              <GroupInfo>
                <Name>{text}</Name>
                {comment && <Comment>{comment}</Comment>}
              </GroupInfo>
            </GroupLink>
          </Group>
        ))}
      </GroupRow>
    </Container>
  </Block>
)

const GroupRow = styled(Row)``

const Group = styled(Column)``

const GroupLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-content: center;

  @media ${min("m")} {
    row-gap: 0.25rem;
  }
`

const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${min("s")} {
    text-align: center;
  }
`

const ImageContainer = styled.div`
  align-self: center;
  width: 75%;
  margin-bottom: ${theme.layout.gutter * 0.5}rem;

  @media ${min("m")} {
    width: 80%;
  }

  @media ${min("l")} {
    width: 85%;
  }
`

const Name = styled(Header3)`
  margin: 0;
  margin-bottom: 0.25em;
  ::after {
    content: " >"; // nb space
  }
`

const Comment = styled(Text)`
  margin: 0;
  line-height: 1.2em;
  padding: 0 ${theme.layout.gutter}rem;
  color: ${theme.color.darkest};
`
