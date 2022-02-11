import { Global } from "@emotion/react"
import { fonts } from "../../styles/fonts"
import { global } from "../../styles/global"

export const GlobalStyles: React.FC = () => <Global styles={[fonts, global]} />
