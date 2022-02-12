import React from "react"
import { LinkItem, NavLinkProps } from "./NavLinks"
import styled from "@emotion/styled"
import { max, min, theme } from "../../styles/theme"
import SquareMask from "../../assets/vectors/potatoes/rectangle_5.svg"
import CircleMask from "../../assets/vectors/potatoes/circle_2.svg"
import { SmallText } from "../base/Typography"

export interface SubLinksProps {
  linkPrefix: string
  data: SubLinkProps[]
}

interface SubLinkProps {
  name: string
  address: string
  image: { src: string }
  comment?: string
}

export const SubLinks: React.FC<{
  link: NavLinkProps
  subLinks: SubLinksProps
  openSubLinks: string
  setOpenSubLinks: (_: string) => void
}> = (props) => (
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
      {props.subLinks.data.map((subLink) => (
        <LinkItem key={subLink.name}>
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

export const ItemContent = styled.a`
  font-family: ${theme.fonts.accent};
  color: ${theme.color.darkest};
  font-weight: bold;
  font-size: ${theme.navSize.horizontal.linkSize};
  display: flex;
  align-items: center;
  padding-left: ${theme.navSize.horizontal.linkPadding};
  padding-right: ${theme.navSize.horizontal.linkPadding};

  @media ${max("l")} {
    padding: 0.5rem 1em;
  }
`

const SubLinksToggle = styled(ItemContent.withComponent("button"))`
  border: none;
  background: none;
  &:after {
    content: "▼";
    color: ${theme.color.darkest};
    font-family: ${theme.fonts.headings};
    font-size: 0.65em;
    padding-left: 0.15em;
    transform-origin: center;
    transition: transform ${theme.timing.fast};
    ${(props: { isActive: boolean }) =>
      props.isActive ?? "transform: rotate(180deg);"}
  }
`

const SubLinkWrapper = styled.ul`
  padding: 0;
  box-sizing: border-box;
  padding: ${theme.navSize.horizontal.subLinkPadding}
    ${theme.navSize.horizontal.linkSidePadding};

  @media ${min("l")} {
    position: absolute;
    transition: opacity ${theme.timing.fast};
    max-width: ${theme.navSize.horizontal.subLinksMaxWidth};
    mask-image: url("${SquareMask.src}");
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
    mask-position: center;
    background-color: ${theme.color.lightAccent};
    pointer-events: none;
    top: 100%;
    opacity: 0;
  }

  @media ${max("l")} {
    padding-top: 0;
    padding-bottom: 0;
    transition: padding ${theme.timing.fast};

    min-width: 30vw;
    max-width: 40vw;

    ${(props: { isVisible: boolean }) =>
      props.isVisible
        ? `
          pointer-events: all;
          padding-top: 0em;
          padding-bottom: 1em;
          li a {
            max-height: 10em;
          }`
        : `
          pointer-events: none;
          padding-top: 0;
          padding-bottom: 0;
          li a {
            max-height: 0;
            padding: 0;
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
`

const SubLink = styled.a`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  color: ${theme.color.darkest};
  padding: ${theme.navSize.horizontal.subLinkPadding} 0;

  @media ${max("l")} {
    overflow: hidden;
    transition: max-height ${theme.timing.fast}, padding ${theme.timing.fast};
  }
`

const SubLinkPicture = styled.img`
  width: ${theme.navSize.horizontal.subLinkImageSize};
  min-width: ${theme.navSize.horizontal.subLinkImageSize};
  height: ${theme.navSize.horizontal.subLinkImageSize};
  background-size: cover;
  mask-image: url("${CircleMask.src}");
  background-image: url("${(props: { backgroundImg: string }) =>
    props.backgroundImg}");
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
  padding-left: ${theme.navSize.horizontal.subLinkHPadding};
`

const Name = styled.p`
  font-family: ${theme.fonts.accent};
  font-weight: bold;
  font-size: ${theme.navSize.horizontal.subLinkSize};
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
