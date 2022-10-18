import isPropValid from "@emotion/is-prop-valid"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { NavLink } from "@remix-run/react"
import React, { ReactNode } from "react"
import { theme, buttonHover } from "../theme"

export interface NavigationItem {
  title: string
  slug: string
  icon?: ReactNode
  action?: Omit<NavigationItem, "action">
}

export interface NavigationProps {
  items: NavigationItem[]
  isCollapsed: boolean
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  isCollapsed,
}) => (
  <List>
    {items.map(({ title, slug, icon, action }, index) => (
      <Item key={index}>
        <Link to={`/${slug}`} withAction={!!action} isCollapsed={isCollapsed}>
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
)

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
