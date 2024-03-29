import React, { useRef, useState } from "react"
import styled from "@emotion/styled"
import { Logo } from "../../components/Logo/Logo"
import { Block, BlockFields } from "../../components/Block/Block"
import { Menu } from "../../components/Menu/Menu"
import { Column, Container, Row } from "../../components/Layout/Layout"

import { Button } from "../../components/Button/Button"
import { min, theme } from "../../styles/theme"
import { MenuProps } from "../../types/Navigation"
import useOnClickOutside from "use-onclickoutside"

export interface HeaderProps extends BlockFields, MenuProps {}

export const Header: React.FC<HeaderProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [menuName, setMenuName] = useState("Menu")
  const [menuNameIsHidden, setMenuNameIsHidden] = useState(false)

  const toggleMenuVisibility = () => {
    setIsVisible(!isVisible)
    setMenuNameIsHidden(true)
    setTimeout(() => {
      setMenuName(isVisible ? "Menu" : "Zavřít")
      setMenuNameIsHidden(false)
    }, menuTransitionDurationMS)
  }

  const headerRef = useRef()

  useOnClickOutside(headerRef, () => isVisible && toggleMenuVisibility())

  return (
    <Block>
      <TopContainer>
        <Row>
          <Navigation col={12} ref={headerRef}>
            <Logo />
            <NavButton
              onClick={toggleMenuVisibility}
              nameIsHidden={menuNameIsHidden}
            >
              {menuName}
            </NavButton>
            <Menu items={props.items} isVisible={isVisible} />
          </Navigation>
        </Row>
      </TopContainer>
    </Block>
  )
}

const TopContainer = styled(Container)`
  z-index: 1000;
`

const Navigation = styled(Column)`
  display: flex;
  justify-content: space-between;
  height: 3rem;

  @media ${min("l")} {
    height: 4rem;
  }
`

const menuTransitionDurationMS = 200

const NavButton = styled(Button)`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.25em;
  align-self: center;
  color: ${(props: { nameIsHidden: boolean }) =>
    props.nameIsHidden ? theme.color.darkAccent : theme.color.lightest};
  transition: color ${menuTransitionDurationMS / (2 * 1000)}s ease-in-out;
  @media ${min("l")} {
    display: none;
  }
`
