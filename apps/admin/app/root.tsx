import {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
  Response,
} from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useNavigate,
  useParams,
} from "@remix-run/react"
import { css, Global } from "@emotion/react"
import { globalStyles, Sidebar, theme } from "@strelka/admin-ui"
import styled from "@emotion/styled"
import { adminNavigation } from "data"
import { Section, getSectionsList } from "firebase/section"
import { getUser, User } from "firebase/user"
import { useState } from "react"
import { routes } from "routes"
import { authenticator } from "./services/auth.server"
import { getUserRoleFromSection } from "./utils/getUserRoleFromSection"

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
  const userEmail = await authenticator.authenticate("google", request, {
    failureRedirect: "/login",
  })

  const user = await getUser(userEmail)
  if (!user) {
    throw new Response("Nemáte dostatečné oprávnění.", { status: 403 })
  }

  const sections = await getSectionsList(user.email)
  if (!sections.length) {
    throw new Response("Nemáte dostatečné oprávnění.", { status: 403 })
  }

  if (!params.section) {
    return redirect(routes.pages.list.route()(sections[0].slug))
  }

  return {
    user,
    sections,
  }
}

const getUserData = (user: User, sections: Section[], section: string) => ({
  ...user,
  role: getUserRoleFromSection(
    user,
    sections.find(({ slug }) => slug === section)!
  ),
})

export default function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const { user, sections } = useLoaderData<LoaderData>()
  const { section } = useParams()
  const navigate = useNavigate()
  const [userData, setUserData] = useState(
    getUserData(user, sections, section!)
  )

  return (
    <html lang="cs">
      <head>
        <Meta />
        <Links />
        <Global styles={globalStyles} />
      </head>
      <body>
        <Sidebar
          navigations={[
            adminNavigation.filter(
              ({ show }) => !show || (show && show(userData.role))
            ),
          ]}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
          collapsedWidth={sidebarCollapsedWidth}
          notCollapsedWidth={sidebarNotCollapsedWIdth}
          user={userData}
          sections={sections.map(({ title, slug }) => ({
            title,
            slug,
            selected: slug === section,
          }))}
          onSectionChange={async (slug) => {
            setUserData(getUserData(user, sections, slug))
            navigate(`/${slug}/stranky`)
          }}
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
  transition: margin-left 300ms ${theme.styles.animationFunction},
    max-width 300ms ${theme.styles.animationFunction};
  min-height: 80vh;
  padding: 2em;
  max-width: ${({ width }: { width: string }) => `calc(100vw - ${width})`};
`

export function CatchBoundary() {
  const cought = useCatch()
  return (
    <div>
      <h2>{cought.data}</h2>
    </div>
  )
}

export function ErrorBoundary({ error }) {
  console.error(error)
  return (
    <div>
      <h2>Section error</h2>
    </div>
  )
}
