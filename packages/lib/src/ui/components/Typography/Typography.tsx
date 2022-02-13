import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

export const Header1 = styled.h1`
  font-family: ${theme.fonts.headings};
  font-weight: bold;
  font-size: 4rem;
`

export const Header2 = styled.h2`
  font-family: ${theme.fonts.accent};
  font-weight: bold;
  font-size: 2.4rem;
`

export const Header3 = styled.h3`
  font-family: ${theme.fonts.accent};
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 1.2em;
`

export const Text = styled.p`
  font-family: ${theme.fonts.text};
  font-size: 1.3rem;
  line-height: 1.4em;
`

export const SmallText = styled.p`
  font-family: ${theme.fonts.text};
  font-size: 1.1rem;
  line-height: 1.3em;
`
