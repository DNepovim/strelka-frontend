import styled from "@emotion/styled"
import React from "react"
import { theme } from "../../styles/theme"

export const Container: React.FC = styled("div")`
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  max-width: ${theme.layout.width}px;
  margin: 0 auto;
`
