import {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
} from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useParams,
} from "@remix-run/react"
import styled from "@emotion/styled"
import { Global } from "@emotion/react"
import { adminNavigation } from "data"
import { useState } from "react"
import { authenticator } from "./services/auth.server"
import { globalStyles, theme, Sidebar } from "@strelka/admin-ui"
import { getSectionsList, Section } from "firebase/section"
import { getUser, User } from "firebase/user"
import { routes } from "routes"

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

interface LoaderData {
  user: User
  sections: Section[]
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await authenticator.authenticate("google", request, {
    failureRedirect: "/login",
  })
  const sections = await getSectionsList(user.email)
  if (!params.section) {
    return redirect(routes.pages.list.route()(sections[0].slug))
  }
  return {
    user,
    sections,
  }
}

export default function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const { user, sections } = useLoaderData<LoaderData>()
  const { section } = useParams()
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <Global styles={globalStyles} />
      </head>
      <body>
        <Sidebar
          navigations={[adminNavigation]}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
          collapsedWidth={sidebarCollapsedWidth}
          notCollapsedWidth={sidebarNotCollapsedWIdth}
          user={user}
          sections={sections.map(({ title, slug }) => ({
            title,
            slug,
            selected: slug === section,
          }))}
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
  max-width: 50rem;
`
