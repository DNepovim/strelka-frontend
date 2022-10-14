/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import styled from "@emotion/styled"
import { Logo } from "../../components/Logo/Logo"
import { Block, BlockFields } from "../../components/Block/Block"
import { Container } from "../../components/Layout/Layout"
import { NavLinks } from "../../components/NavLinks/NavLinks"

import { Button } from "../../components/Button/Button"
import { min, theme } from "../../styles/theme"
import { NavLink } from "../../types/Navigation"

export interface HeaderProps extends BlockFields {
  content: NavLink[]
}

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

  return (
    <Block>
      <TopContainer>
        <Navigation>
          <Logo />
          <NavButton
            onClick={toggleMenuVisibility}
            nameIsHidden={menuNameIsHidden}
          >
            {menuName}
          </NavButton>
          <NavLinks data={props.content} visible={isVisible} />
        </Navigation>
      </TopContainer>
    </Block>
  )
}

const TopContainer = styled(Container)`
  z-index: 1000;
`

const Navigation = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: 3rem;
  margin-bottom: ${theme.layout.gutter * 2}rem;

  @media ${min("l")} {
    height: 2.8rem;
  }
`

const menuTransitionDurationMS = 200

const NavButton = styled(Button)`
  padding-left: 1rem;
  padding-right: 1rem;
  align-self: stretch;
  font-size: 1.2rem;
  color: ${(props: { nameIsHidden: boolean }) =>
    props.nameIsHidden ? theme.color.darkAccent : theme.color.lightest};
  transition: color ${menuTransitionDurationMS / (2 * 1000)}s ease-in-out;
  @media ${min("l")} {
    display: none;
  }
`
