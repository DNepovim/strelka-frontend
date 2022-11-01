import React from "react"
import { MaskedImage } from "../../components/ImageWithMask/ImageWithMask"
import { Block } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import styled from "@emotion/styled"
import { Link } from "../../components/Link/Link"
import {
  Header3,
  SmallText,
  Text,
} from "../../components/Typography/Typography"
import { randomRectangle } from "../../utils/Masks"
import { min, theme } from "../../styles/theme"

export interface PostProps {
  title: string
  link: string
  date: {
    from: string
    to?: string
  }
  place?: string
  textPreview: string
  imageSrc: string
}

interface PostListProps {
  posts: PostProps[]
}

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <Block>
    <Container>
      {posts.map((post, index) => (
        <PostRowLink key={index} to={post.link}>
          <PostImage col={10} m={4} l={3}>
            <MaskedImage
              mask={randomRectangle(index)}
              src={post.imageSrc}
              width={300}
              height={200}
              objectFit={"cover"}
              layout={"responsive"}
            />
          </PostImage>
          <PostInfoColumn col={12} m={7} l={4}>
            <Title>{post.title}</Title>
            <Context>
              {post.date.from}
              {post.date.to && `​–​${post.date.to}`}
              {post.place && `, ${post.place}`}
            </Context>
            <Preview>
              {post.textPreview}
              {`… `}
              <LinkToPost>číst&nbsp;více&nbsp;&gt;</LinkToPost>
            </Preview>
          </PostInfoColumn>
        </PostRowLink>
      ))}
    </Container>
  </Block>
)

const Context = styled(SmallText)`
  color: ${theme.color.darkAccent};
`

const PostInfoColumn = styled(Column)``

const PostImage = styled(Column)`
  position: relative;
  margin-bottom: ${theme.layout.gutter}rem;
`

const PostRowLink = styled(Row.withComponent(Link))`
  margin-bottom: ${theme.layout.gutter * 2}rem;
  justify-content: center;

  @media ${min("m")} {
    justify-content: flex-start;
  }
`

const Title = styled(Header3)`
  margin-bottom: 0;
`

const Preview = styled(Text)`
  color: ${theme.color.darkest};
`

const LinkToPost = styled(Text.withComponent("span"))`
  display: inline-block;
  font-family: ${theme.fonts.accent};
  color: ${theme.color.darkest};
  font-weight: bold;
`
