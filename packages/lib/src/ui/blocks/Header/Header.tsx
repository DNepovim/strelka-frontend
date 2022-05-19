/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import { HeaderProps } from "./headerDef"
import styled from "@emotion/styled"
import { Logo } from "../../components/Logo/Logo"
import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { NavLinks } from "../../components/NavLinks/NavLinks"

import { Button } from "../../components/Button/Button"
import { min } from "../../styles/theme"

export const Header: React.FC<HeaderProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <TopBlock>
      <Container>
        <Navigation>
          <Logo />
          <NavButton onClick={() => setIsVisible(!isVisible)}>Menu</NavButton>
          <NavLinks data={props.content} visible={isVisible} />
        </Navigation>
      </Container>
    </TopBlock>
  )
}

const TopBlock = styled(Block)`
  z-index: 1000;
`

const Navigation = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: 4.6rem;

  @media ${min("l")} {
    height: 4rem;
  }
`

const NavButton = styled(Button)`
  align-self: center;
  padding: 0.5em 1em;
  font-size: 1.5rem;

  @media ${min("l")} {
    display: none;
  }
`
