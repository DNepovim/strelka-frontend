import React, { useState } from "react"
import styled from "@emotion/styled"
import { max, min, theme } from "../../styles/theme"
import { MenuProps } from "../../types/Navigation"
import { Link } from "../Link/Link"
import { Header3 } from "../Typography/Typography"
import SquareMask from "../../assets/vectors/potatoes/rectangle_4.svg"
import { css } from "@emotion/react"
import { SubMenu } from "../SubMenu/SubMenu"
import { doIfMatches } from "../../utils/doIfMatches"

interface StatefulMenuProps extends MenuProps {
  isVisible: boolean
}

export const Menu: React.FC<StatefulMenuProps> = (props) => {
  const voidId = -1
  const [activeSubMenuId, setActiveSubMenuId] = useState(voidId)
  const isActive = (id: number): boolean => activeSubMenuId === id
  const toggleActiveSubMenuId = (id: number) =>
    setActiveSubMenuId(isActive(id) ? voidId : id)

  return (
    <MenuItemList isVisible={props.isVisible}>
      {props.items.map((menuItem, menuId) => (
        <MenuItem
          key={menuId}
          onMouseEnter={doIfMatches(min("l"), setActiveSubMenuId, menuId)}
          onMouseLeave={doIfMatches(min("l"), setActiveSubMenuId, voidId)}
        >
          {menuItem.subMenu ? (
            <>
              <SubMenuToggle
                to={""}
                onClick={doIfMatches(max("l"), toggleActiveSubMenuId, menuId)}
                isActive={isActive(menuId)}
              >
                {menuItem.text}
              </SubMenuToggle>
              <SubMenu isVisible={isActive(menuId)} {...menuItem.subMenu} />
            </>
          ) : (
            <MenuItemContent to={menuItem.to}>{menuItem.text}</MenuItemContent>
          )}
        </MenuItem>
      ))}
    </MenuItemList>
  )
}

export const MenuItemList = styled.div<{ isVisible: boolean }>`
  display: flex;
  padding: 1.1rem 0;
  top: 2rem;
  background-color: ${theme.color.lightAccent};

  @media ${max("l")} {
    position: absolute;
    mask-image: url("${SquareMask.src}");
    mask-size: 100% 100%;
    mask-position: center;
    mask-repeat: no-repeat;
    min-width: 80vw;
    flex-direction: column;
    right: 0;

    transform-origin: top right;
    transition: transform 0.6s cubic-bezier(0.37, 1.31, 0.29, 1),
      background-color 0.6s cubic-bezier(0.37, 1.31, 0.29, 1),
      top 0.15s ease-in-out, opacity 0.4s cubic-bezier(0.58, 0, 0.27, 1.25);

    ${(props) =>
      props.isVisible
        ? css`
            transform: scale(1);
            opacity: 1;
            top: 132%;
          `
        : css`
            transform: scale(0);
            opacity: 0;
            background-color: ${theme.color.darkAccent};
            top: 0;
            transition: transform 0.25s ease-in, top 0.25s ease-in,
              background-color 0.25s ease-in,
              opacity 0.8s cubic-bezier(0.6, 0, 0.27, 1.25);
          `}
  }

  @media ${min("s")} {
    min-width: 67vw;
  }

  @media ${min("m")} {
    min-width: 55vw;
  }

  @media ${min("l")} {
    background-color: transparent;
    padding: 0;
    align-items: stretch;
    justify-content: end;
  }
`

export const MenuItem = styled.div`
  position: relative;
`

export const MenuItemContent = styled(Header3.withComponent(Link))`
  display: flex;
  font-size: 1.65rem;
  align-items: center;
  height: 100%;
  margin: 0;

  padding: 0.7rem 1.7rem;

  @media ${min("l")} {
    font-size: 1.5rem;
    padding: 0 0.5em;
  }
`

export const SubMenuToggle = styled(MenuItemContent.withComponent("button"))`
  margin: 0;
  border: 0;
  width: 100%;
  background-color: transparent;

  &:after {
    content: "▼";
    color: ${theme.color.darkest};
    font-family: ${theme.fonts.headings};
    font-size: 0.7em;
    padding-left: 0.2em;
    padding-right: 0.2em;
    transform-origin: center center;
    transition: transform ${theme.timing.medium};
    ${(props: { isActive: boolean }) =>
      props.isActive && "transform: rotate(-180deg);"}
  }
`
