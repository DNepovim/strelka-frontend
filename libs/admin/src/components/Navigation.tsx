import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import { theme } from "../theme"
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

const shouldForwardProp = (prop: string) =>
  !["withAction", "isCollapsed", "notCollapsedWidth"].includes(prop)

const Item = styled("li", {
  shouldForwardProp,
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

const GeneralLink = styled(RouteLink, {
  shouldForwardProp,
})`
  display: flex;
  overflow: hidden;
  color: black;
  text-decoration: none;
  background-color: white;
`

const Link = styled(GeneralLink, {
  shouldForwardProp,
})`
  position: relative;
  z-index: 1;
  margin-right: -1px;
  padding: 0.4em 1em;
  border-right: ${theme.styles.border};
  width: calc(100% + 1px);
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

const ActionLink = styled(GeneralLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 2.4rem;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
`
