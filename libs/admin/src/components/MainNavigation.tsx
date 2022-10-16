import { NavLink } from "@remix-run/react"
import React, { ReactNode } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import isPropValid from "@emotion/is-prop-valid"
import { IoArrowBackOutline } from "react-icons/io5"
import { User, UserBox } from "./UserBox"
import { buttonHover, theme } from "../theme"

export type Navigation = NavigationItem[]

export interface NavigationItem {
  title: string
  slug: string
  icon?: ReactNode
  action?: Omit<NavigationItem, "action">
}

interface MainNavigationProps {
  navigation: Navigation
  isCollapsed: boolean
  setIsCollapsed: (isCollpased: boolean) => void
  collapsedWidth: string
  notCollapsedWidth: string
  user: User
}

export const MainNavigation: React.FC<MainNavigationProps> = ({
  navigation,
  isCollapsed,
  setIsCollapsed,
  collapsedWidth,
  notCollapsedWidth,
  user,
}) => {
  return (
    <Container width={isCollapsed ? collapsedWidth : notCollapsedWidth}>
      <nav>
        <List>
          {navigation.map(({ title, slug, icon, action }, index) => (
            <Item key={slug}>
              <Link
                to={`/${slug}`}
                withAction={!!action}
                isCollapsed={isCollapsed}
              >
                <IconWrapper>{icon}</IconWrapper>
                {title}
              </Link>
              {action && (
                <ActionLink to={`/${action.slug}`} isCollapsed={isCollapsed}>
                  {action.icon}
                </ActionLink>
              )}
            </Item>
          ))}
        </List>
      </nav>
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

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const Item = styled.li`
  position: relative;
  border-bottom: ${theme.styles.border};
  border-left: ${theme.styles.border};
  border-right: ${theme.styles.border};
  &:first-of-type {
    border-top: ${theme.styles.border};
  }
`

const GeneralLink = styled(NavLink)`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  color: black;
  text-decoration: none;
  background-color: white;

  ${buttonHover}
`

interface LinkProps {
  withAction?: boolean
  isCollapsed?: boolean
}

const Link = styled(GeneralLink, {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && prop !== "withAction" && prop !== "isCollapsed",
})`
  position: relative;
  z-index: 1;
  padding: 0.4em 1em;
  width: 100%;
  ${({ withAction, isCollapsed }: LinkProps) =>
    withAction && !isCollapsed
      ? css`
          transition: width 300ms ${theme.styles.animationFunction};

          li:hover > & {
            width: calc(100% - 2.4rem);
          }
        `
      : ""}
`

const ActionLink = styled(GeneralLink, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "isCollapsed",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 2.4rem;
  ${({ isCollapsed }: { isCollapsed: boolean }) =>
    isCollapsed
      ? css`
          border: ${theme.styles.border};
          margin: -1px 0;
          transition: transform 200ms ${theme.styles.animationFunction};
          li:hover > & {
            transform: translateX(100%);
          }
        `
      : css`
          box-shadow: inset 0 0 5px #ddd;
          transition: box-shadow 300ms ${theme.styles.animationFunction};

          &:hover {
            box-shadow: none;
          }
        `}
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
  path {
    fill: white;
  }
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

  &:hover {
    background-color: ${theme.colors.brand};
  }
`
