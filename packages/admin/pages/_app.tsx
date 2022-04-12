import "antd/dist/antd.css"
import type { AppContext, AppProps } from "next/app"
import { Layout } from "../components/Layout/Layout"
import { SSRKeycloakProvider, SSRCookies } from "@react-keycloak/ssr"
import { IncomingMessage } from "http"
import cookie from "cookie"

const keycloakCfg = {
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM!,
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT!,
}

interface InitialProps {
  cookies: unknown
}

function MyApp({ Component, pageProps, cookies }: AppProps & InitialProps) {
  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakCfg}
      persistor={SSRCookies(cookies)}
      initOptions={{ checkLoginIframe: false }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRKeycloakProvider>
  )
}

function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {}
  }
  return cookie.parse(req.headers.cookie || "")
}

MyApp.getInitialProps = (context: AppContext) => ({
  cookies: parseCookies(context?.ctx?.req),
})

export default MyApp
