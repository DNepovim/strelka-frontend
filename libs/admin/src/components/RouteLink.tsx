import { useParams, NavLink, NavLinkProps } from "@remix-run/react"
import React from "react"

export interface RouteLinkProps extends Omit<NavLinkProps, "to"> {
  route: (section: string) => string
}

export const RouteLink: React.FC<RouteLinkProps | NavLinkProps> = (props) => {
  const { section } = useParams()
  if (isRouteNavLink(props)) {
    return <NavLink {...props} to={section ? props.route(section) : "/"} />
  }
  return <NavLink {...props} />
}

const isRouteNavLink = (
  props: RouteLinkProps | NavLinkProps
): props is RouteLinkProps => !!(props as RouteLinkProps).route
