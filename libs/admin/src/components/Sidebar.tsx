import React from "react"
import styled from "@emotion/styled"
import { IoArrowBackOutline } from "react-icons/io5"
import { User, UserBox } from "./UserBox"
import { buttonHover, theme } from "../theme"
import { Navigation, NavigationItem } from "./Navigation"

interface MainNavigationProps {
  navigations: NavigationItem[][]
  isCollapsed: boolean
  setIsCollapsed: (isCollpased: boolean) => void
  collapsedWidth: string
  notCollapsedWidth: string
  user: User
}

export const Sidebar: React.FC<MainNavigationProps> = ({
  navigations,
  isCollapsed,
  setIsCollapsed,
  collapsedWidth,
  notCollapsedWidth,
  user,
}) => {
  return (
    <Container width={isCollapsed ? collapsedWidth : notCollapsedWidth}>
      <div>
        <ResponsiveImage>
          <img src="/images/logo.svg" alt="logo" />
        </ResponsiveImage>
        <nav>
          {navigations.map((navigation, index) => (
            <Navigation
              key={index}
              items={navigation}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
      </div>
      <Bottom>
        <UserBox {...user} isCollapsed={isCollapsed} />
        <Collapser
          isCollapsed={isCollapsed}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <IoArrowBackOutline />
        </Collapser>
      </Bottom>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ width }: { width: string }) => width};
  border-right: ${theme.styles.border};
  transition: width 300ms ${theme.styles.animationFunction};
`

const Bottom = styled.div`
  display: flex;
  flex-flow: column;
`

interface CollapserProps {
  isCollapsed?: boolean
}

const Collapser = styled.button`
  cursor: pointer;
  display: block;
  background: none;
  border: none;
  border: ${theme.styles.border};
  padding: 0.4em;

  svg {
    transform: rotate(
      ${({ isCollapsed }: CollapserProps) => (isCollapsed ? "180deg" : "0")}
    );
    transition: transform 300ms ${theme.styles.animationFunction};
  }

  ${buttonHover}
`

const ResponsiveImage = styled.figure`
  padding: 0;
  margin: 0 0 1rem;
  img {
    max-width: 100%;
    height: auto;
  }
`
