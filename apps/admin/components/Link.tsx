import { useRouter } from "next/dist/client/router"
import React, { ReactNode } from "react"
import { Route } from "../routes"
import NextLink from "next/link"

export const Link: React.FC<{
  route: Route
  params: string[]
  isRoot?: boolean
  children: ReactNode
}> = ({ route, params, isRoot, children }) => {
  const router = useRouter()
  return (
    <NextLink
      href={`${isRoot ? "" : router.query.siteSlug}${route.getLink(...params)}`}
    >
      {children}
    </NextLink>
  )
}
