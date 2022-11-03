import { Block } from "../../components/Block/Block"
import { Container, Row, Column } from "../../components/Layout/Layout"
import { Logo } from "../../components/Logo/Logo"
import { Link as RawLink } from "../../components/Link/Link"
import styled from "@emotion/styled"
import { randomRectangle } from "../../utils/Masks"
import { min, max, theme } from "../../styles/theme"
import { MenuItemContent } from "../../components/Menu/Menu"

export interface GroupHeaderProps {
  title: string
  links: {
    to: string
    text: string
  }[]
}

export const GroupHeader: React.FC<GroupHeaderProps> = (props) => (
  <Block>
    <Container>
      <Row>
        <HeaderColumn col={12}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <LinkList>
            {props.links.map(({ to, text }, index) => (
              <Link to={to} mask={randomRectangle(index)} key={index}>
                {text}
              </Link>
            ))}
          </LinkList>
        </HeaderColumn>
      </Row>
    </Container>
  </Block>
)

const HeaderColumn = styled(Column)`
  top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: ${theme.layout.gutter * 2}rem;
  min-height: 3rem;

  @media ${max("s")} {
    flex-wrap: wrap;
  }

  @media ${min("l")} {
    gap: ${theme.layout.gutter * 2}rem;
    min-height: 4rem;
  }
`

const LogoWrapper = styled.div`
  height: 3.7rem;
  align-self: center;

  @media ${max("s")} {
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media ${min("m")} {
    display: block;
  }

  @media ${min("l")} {
    height: 4rem;
  }
`

const LinkList = styled.div`
  position: sticky;
  top: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  gap: 0.6rem;
  justify-content: center;

  @media ${min("m")} {
    justify-content: left;
  }
`

const Link = styled(MenuItemContent.withComponent(RawLink))`
  mask-image: url("${(props: { to: string; mask: { src: string } }) =>
    props.mask.src}");
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-position: center;
  transition: color ${theme.timing.medium},
    background-color ${theme.timing.medium}, padding ${theme.timing.medium};
  height: auto;

  background-color: ${theme.color.lightAccent};
  color: ${theme.color.darkAccent};
  padding: 0.4rem 1rem;

  @media ${min("l")} {
    background-color: transparent;
    color: ${theme.color.darkest};
    padding: 0.4rem 0.4rem;
  }

  display: flex;
  justify-content: center;
`
