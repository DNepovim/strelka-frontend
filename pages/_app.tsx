import type { AppProps } from "next/app"
import Head from "next/head"
import { MetaTags } from "../components/MetaTags/MetaTags"
import { theme } from "../styles/theme"
import { GlobalStyles } from "../components/GlobalStyles/GlobalStyles"
import { Layout } from "../components/Layout/Layout"
import { Header, HeaderProps } from "../blocks/Header/Header"
import {
  GroupHeader,
  GroupHeaderProps,
} from "../blocks/GroupHeader/GroupHeader"
import { Footer } from "../blocks/Footer/Footer"
import { VerticalSpace } from "../blocks/VerticalSpace/VerticalSpace"

export const BaseComponentWrapper: React.FC<{ headerData: HeaderProps }> = (
  props
) => (
  <>
    <Header {...props.headerData} />
    {props.children}
    <VerticalSpace height={3} />
    <Footer {...props.headerData} />
  </>
)

export const GroupComponentWrapper: React.FC<{
  headerData: GroupHeaderProps
}> = (props) => (
  <>
    <GroupHeader {...props.headerData} />
    {props.children}
    <VerticalSpace height={3} />
    <Footer items={props.headerData.links} />
  </>
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <MetaTags
          title={""}
          description={""}
          brandColor={theme.color.lightAccent}
          themeColor={theme.color.darkAccent}
          url={""}
          image=""
          manifest=""
          icons={{
            appleTouchIcon: "",
            largeIcon: "",
            smallIcon: "",
            maskIcon: "",
          }}
        />
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
