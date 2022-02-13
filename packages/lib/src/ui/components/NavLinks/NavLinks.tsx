import React, { useState } from "react"
import styled from "@emotion/styled"
import { max, min, theme } from "../../styles/theme"
import SquareMask from "../../assets/vectors/potatoes/rectangle_5.svg"
import { MenuItemContent } from "../MenuItemContent/MenuItemContent"
import { LinkItem } from "../LinkItem/LinkItem"
import { NavLink } from "../../../types/navigation"
import { SubLinks } from "../SubLinks/SubLinks"

interface NavLinksProps {
  className?: string
  id?: string
  visible: boolean
  data: NavLink[]
}

export const NavLinks: React.FC<NavLinksProps> = (props) => {
  const [openedSubLinks, setOpenedSubLinks] = useState("")
  return (
    <LinksContainer isVisible={props.visible} id={props.id}>
      <Links isVisible={props.visible}>
        {props.data.map((navLink) => (
          <LinkItem key={navLink.name}>
            {navLink.subLinks ? (
              <SubLinks
                link={navLink}
                subLinks={navLink.subLinks}
                openSubLinks={openedSubLinks}
                setOpenSubLinks={setOpenedSubLinks}
              />
            ) : (
              <MenuItemContent href={navLink.address}>
                {navLink.name}
              </MenuItemContent>
            )}
          </LinkItem>
        ))}
      </Links>
    </LinksContainer>
  )
}

const LinksContainer = styled.div`
  @media ${max("l")} {
    position: absolute;
    top: 100%;
    right: 0;
    overflow: hidden;
  }

  @media ${min("l")} {
    position: relative;
  }

  @media ${max("l")} {
    padding: 0.5rem;
    pointer-events: ${(props: { isVisible: boolean }) =>
      props.isVisible ? "all" : "none"};
  }
`

const Links = styled.ul`
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;

  @media ${max("l")} {
    flex-direction: column;
    flex-wrap: nowrap;

    padding-top: 0.7rem;
    padding-bottom: 0.7rem;

    position: relative;

    mask-image: url("${SquareMask.src}");
    background-color: ${theme.color.lightAccent};
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
    mask-position: center;

    transition: transform ${theme.timing.slow};
    ${(props: { isVisible: boolean }) =>
      props.isVisible
        ? `transform: translateX(0);`
        : `transform: translateX(110%);`}
  }
`
