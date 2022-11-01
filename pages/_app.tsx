import type { AppProps } from "next/app"
import { GlobalStyles } from "../components/GlobalStyles/GlobalStyles"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
