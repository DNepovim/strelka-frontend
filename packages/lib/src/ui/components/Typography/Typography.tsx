import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

export const Header1 = styled.h1`
  font-family: ${theme.fonts.headings};
  font-weight: bold;
  font-size: 4rem;
  color: ${theme.color.darkest};
  margin: 0;
  margin-top: ${theme.size.base * 2.5}rem;
  margin-bottom: ${theme.size.base}rem;
  padding: 0;
`

export const Header2 = styled.h2`
  font-family: ${theme.fonts.accent};
  font-weight: bold;
  font-size: 2.5rem;
  color: ${theme.color.darkest};
  margin: 0;
  margin-top: ${theme.size.base * 1.5}rem;
  margin-bottom: ${theme.size.base}rem;
  padding: 0;
`

export const Header3 = styled.h3`
  font-family: ${theme.fonts.accent};
  font-weight: bold;
  font-size: ${theme.size.base * 1.25}rem;
  line-height: 1.2em;
  color: ${theme.color.darkest};
  margin: 0;
  margin-top: ${theme.size.base * 1.5}rem;
  margin-bottom: ${theme.size.base}rem;
  padding: 0;
`

export const Text = styled.p`
  font-family: ${theme.fonts.text};
  font-size: ${theme.size.base}rem;
  line-height: 1.65em;
`

export const SmallText = styled.p`
  font-family: ${theme.fonts.text};
  font-size: ${theme.size.small}rem;
  line-height: 1.3em;
`
