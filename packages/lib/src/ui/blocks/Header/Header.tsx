/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import { HeaderProps } from "./headerDef"
import styled from "@emotion/styled"
import { Logo } from "../../components/Logo/Logo"
import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import { NavLinks } from "../../components/NavLinks/NavLinks"

import { Button } from "../../components/Button/Button"
import { max, min, theme } from "../../styles/theme"

export const Header: React.FC<HeaderProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <Block>
      <Container>
        <Navigation>
          <Logo />
          <NavButton onClick={() => setIsVisible(!isVisible)}>Menu</NavButton>
          <NavLinks data={props.content} visible={isVisible} />
        </Navigation>
      </Container>
    </Block>
  )
}

const Navigation = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: ${theme.navSize.vertical.height};

  @media ${min("l")} {
    height: ${theme.navSize.horizontal.height};
  }
  padding: ${theme.navSize.horizontal.padding};
`

const NavButton = styled(Button)`
  align-self: center;
  padding: 0.4em 0.6em;
  font-size: ${theme.navSize.vertical.buttonSize};

  @media ${max("l")} {
    display: unset;
  }

  @media ${min("l")} {
    display: none;
  }
`
