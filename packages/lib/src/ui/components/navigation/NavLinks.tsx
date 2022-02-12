import React, { useState } from "react"
import styled from "@emotion/styled"
import { max, min, theme } from "../../styles/theme"
import { SubLinksProps, ItemContent } from "./SubLinks"

import SquareMask from "../../assets/vectors/potatoes/rectangle_5.svg"
import { SubLinks } from "./SubLinks"

interface NavLinksProps {
  className?: string
  id?: string
  visible: boolean
  data: NavLinkProps[]
}

export interface NavLinkProps {
  name: string
  address?: string
  subLinks?: SubLinksProps
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
              <ItemContent href={navLink.address}>{navLink.name}</ItemContent>
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

export const LinkItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;

  @media ${max("l")} {
    flex-direction: column;
  }

  @media ${min("l")} {
    &:hover {
      button {
        &:after {
          transform: rotate(-180deg);
        }
      }
      ul {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
`
