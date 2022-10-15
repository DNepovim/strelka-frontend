import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"
import styled from "@emotion/styled"
import { Global } from "@emotion/react"
import { navigation } from "data"
import { useState } from "react"
import { authenticator } from "./services/auth.server"
import { globalStyles, theme, MainNavigation } from "@strelka/admin-ui"

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
})

const sidebarCollapsedWidth = "3em"
const sidebarNotCollapsedWIdth = "12em"

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400;600&display=swap",
  },
]

export const loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("google", request, {
    failureRedirect: "/login",
  })
}

// export const action: ActionFunction = ({ request }) => {
//   return authenticator.authenticate("google", request)
// }

export default function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const data = useLoaderData()
  return (
    <html lang="en">
      <Global styles={globalStyles} />
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MainNavigation
          navigation={navigation}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
          collapsedWidth={sidebarCollapsedWidth}
          notCollapsedWidth={sidebarNotCollapsedWIdth}
          user={data}
        />
        <MainContainer
          width={
            isSidebarCollapsed
              ? sidebarCollapsedWidth
              : sidebarNotCollapsedWIdth
          }
        >
          <Outlet />
        </MainContainer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

const MainContainer = styled.main`
  margin-left: ${({ width }: { width: string }) => width};
  transition: margin-left 300ms ${theme.styles.animationFunction};
  min-height: 80vh;
  padding: 2em;
`
