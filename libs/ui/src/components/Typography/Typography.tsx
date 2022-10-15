import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

export const Header1 = styled.h1`
  font-family: ${theme.fonts.headings};
  font-weight: bold;
  font-size: 4rem;
  color: ${theme.color.darkest};
  margin: 0 0 0.6em;
`

export const Header2 = styled.h2`
  font-family: ${theme.fonts.accent};
  font-weight: bold;
  font-size: 2.8rem;
  color: ${theme.color.darkest};
  margin: 0 0 0.6em;
`

export const Header3 = styled.h3`
  font-family: ${theme.fonts.accent};
  font-weight: bold;
  font-size: ${theme.size.base * 1.2}rem;
  line-height: 1.2em;
  color: ${theme.color.darkest};
  margin: 0 0 0.6em;
`

export const Text = styled.p`
  font-family: ${theme.fonts.text};
  font-size: ${theme.size.base}rem;
  line-height: 1.4em;
  margin: 0 0 0.6em;
`

export const SmallText = styled.p`
  font-family: ${theme.fonts.text};
  font-size: ${theme.size.small}rem;
  line-height: 1.3em;
  margin: 0 0 0.6em;
`
