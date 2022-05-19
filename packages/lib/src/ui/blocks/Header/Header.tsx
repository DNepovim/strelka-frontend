/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import { HeaderProps } from "./headerDef"
import styled from "@emotion/styled"
import { Logo } from "../../components/Logo/Logo"
import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { NavLinks } from "../../components/NavLinks/NavLinks"

import { Button } from "../../components/Button/Button"
import { min, theme } from "../../styles/theme"

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
  padding: ${theme.layout.pagePadding}rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: 3rem;

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
