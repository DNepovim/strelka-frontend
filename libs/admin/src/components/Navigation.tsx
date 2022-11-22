import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { NavLink } from "@remix-run/react"
import React, { ReactNode } from "react"
import { theme, buttonHover } from "../theme"
import { RouteLink } from "./RouteLink"

export interface NavigationItem {
  title: string
  route: (param?: string) => (section: string) => string
  icon?: ReactNode
  action?: Omit<NavigationItem, "action">
}

export interface NavigationProps {
  items: NavigationItem[]
  isCollapsed: boolean
  notCollapsedWidth: string
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  isCollapsed,
  notCollapsedWidth,
}) => (
  <List>
    {items.map(({ title, route, icon, action }, index) => (
      <Item
        key={index}
        notCollapsedWidth={notCollapsedWidth}
        isCollapsed={isCollapsed}
        withAction={!!action}
      >
        <Link
          route={route()}
          withAction={!!action}
          isCollapsed={isCollapsed}
          title={title}
          notCollapsedWidth={notCollapsedWidth}
        >
          <IconWrapper>{icon}</IconWrapper>
          {title}
        </Link>
        {action && (
          <ActionLink route={action.route()} title={title}>
            {action.icon}
          </ActionLink>
        )}
      </Item>
    ))}
  </List>
)

const List = styled.ul`
  list-style: none;
  padding: 0;
`

interface LinkProps {
  withAction: boolean
  isCollapsed: boolean
  notCollapsedWidth: string
}

const Item = styled("li", {
  shouldForwardProp: (prop) => prop !== "withAction",
})`
  position: relative;
  border-bottom: ${theme.styles.border};
  border-left: ${theme.styles.border};
  border-right: ${theme.styles.border};
  width: 100%;
  transition: width 300ms ${theme.styles.animationFunction};

  &:first-of-type {
    border-top: ${theme.styles.border};
  }

  &:has(+ li:hover) {
    border-bottom: none;
  }

  &:hover {
    border-top: ${theme.styles.border};
  }

  ${({ isCollapsed, notCollapsedWidth }: LinkProps) =>
    isCollapsed
      ? css`
          &:hover {
            width: calc(${notCollapsedWidth} - 0.8rem);
          }
        `
      : ""};
`

const GeneralLink = styled(RouteLink)`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  color: black;
  text-decoration: none;
  background-color: white;

  ${buttonHover}
`

const Link = styled(GeneralLink, {
  shouldForwardProp: (prop) => prop !== "withAction",
})`
  position: relative;
  z-index: 1;
  padding: 0.4em 1em;
  width: 100%;
  transition: width 300ms ${theme.styles.animationFunction};
  ${({ withAction }: LinkProps) =>
    withAction
      ? css`
          li:hover > & {
            width: calc(100% - 2.4rem);
          }
        `
      : ""}
`

const ActionLink = styled(GeneralLink, {
  shouldForwardProp: (prop) => prop !== "isCollapsed",
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
  box-shadow: inset 0 0 5px #ddd;
  transition: box-shadow 300ms ${theme.styles.animationFunction};
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
  path {
    fill: white;
  }
`
