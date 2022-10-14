import React from "react"
import styled from "@emotion/styled"
import { max, min, theme } from "../../styles/theme"
import SquareMask from "../../assets/vectors/potatoes/rectangle_5.svg"
import CircleMask from "../../assets/vectors/potatoes/circle_2.svg"
import { SmallText } from "../Typography/Typography"
import { MenuItemContent } from "../MenuItemContent/MenuItemContent"
import { LinkItem } from "../LinkItem/LinkItem"
import { NavLink, SubLinksData } from "../../types/Navigation"

interface SublinksProps {
  link: NavLink
  subLinks: SubLinksData
  openSubLinks: string
  setOpenSubLinks: (name: string) => void
}

export const SubLinks: React.FC<SublinksProps> = (props) => (
  <>
    <SubLinksToggle
      onClick={() =>
        props.setOpenSubLinks(
          props.openSubLinks === props.link.name ? "" : props.link.name
        )
      }
      isActive={props.openSubLinks === props.link.name}
    >
      {props.link.name}
    </SubLinksToggle>
    <SubLinkWrapper isVisible={props.openSubLinks === props.link.name}>
      {props.subLinks.data.map((subLink, index) => (
        <LinkItem key={index}>
          <SubLink href={subLink.address}>
            <SubLinkPicture backgroundImg={subLink.image.src} />
            <SubLinkInfo>
              <Name>{subLink.name}</Name>
              {subLink.comment && <Comment>{subLink.comment}</Comment>}
            </SubLinkInfo>
          </SubLink>
        </LinkItem>
      ))}
    </SubLinkWrapper>
  </>
)

const SubLinkWrapper = styled.ul`
  padding: 0;
  box-sizing: border-box;

  @media ${max("l")} {
    transition: padding ${theme.timing.fast};
    min-width: 30vw;
    max-width: 40vw;

    ${(props: { isVisible: boolean }) =>
      props.isVisible
        ? `
          padding-bottom: 0.9rem;
          li a {
            height: 2.4rem;
          }`
        : `
          pointer-events: none;
          padding-bottom: 0;
          li a {
            height: 0;
          }
      `}
  }

  @media ${max("m")} {
    min-width: 40vw;
    max-width: 50vw;
  }

  @media ${max("s")} {
    min-width: 65vw;
    max-width: 75vw;
  }

  @media ${min("l")} {
    position: absolute;
    transition: opacity ${theme.timing.fast};
    max-width: 17rem;
    mask-image: url("${SquareMask.src}");
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
    mask-position: center;
    background-color: ${theme.color.lightAccent};
    pointer-events: none;
    top: 100%;
    opacity: 0;
    padding: 1rem 0;
  }
`

const SubLink = styled.a`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  color: ${theme.color.darkest};
  padding: 0;

  @media ${max("l")} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    overflow: hidden;
    transition: height ${theme.timing.medium}, padding ${theme.timing.medium};
  }

  @media ${min("l")} {
    padding: 0.5rem 1.2rem;
  }
`

const SubLinksToggle = styled(MenuItemContent.withComponent("button"))`
  border: none;
  background: none;

  &:after {
    content: "▼";
    color: ${theme.color.darkest};
    font-family: ${theme.fonts.headings};
    font-size: 0.65em;
    padding-left: 0.2em;
    padding-right: 0.2em;
    transform-origin: center center;
    transition: transform ${theme.timing.medium};
    ${(props: { isActive: boolean }) =>
      props.isActive && "transform: rotate(-180deg);"}
  }
`

const SubLinkPicture = styled.div`
  width: 3.6rem;
  min-width: 3.6rem;
  height: 3.6rem;
  background-size: cover;
  background-image: url("${(props: { backgroundImg: string }) =>
    props.backgroundImg}");
  mask-image: url("${CircleMask.src}");
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-position: center;

  @media ${max("l")} {
    display: none;
  }
`

const SubLinkInfo = styled.div`
  flex-grow: 1;

  display: flex;
  justify-items: stretch;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-left: 1.5rem;
`

const Name = styled.p`
  font-family: ${theme.fonts.accent};
  font-weight: bold;
  margin: 0;
  flex-basis: 100%;
  display: flex;
  align-items: center;
`

const Comment = styled(SmallText)`
  margin: 0;
  flex-basis: 100%;
  font-family: ${theme.fonts.text};

  @media ${max("l")} {
    display: none;
  }
`
