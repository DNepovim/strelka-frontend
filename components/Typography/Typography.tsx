import styled from "@emotion/styled"
import { min, theme } from "../../styles/theme"

export const Header1 = styled.h1`
  font-family: ${theme.fonts.headings};
  font-weight: normal;
  font-size: ${theme.size.heading}rem;
  color: ${theme.color.darkest};
  margin: 0 0 0.6em;

  @media ${min("m")} {
    font-size: ${theme.size.heading * 2}rem;
  }
`

export const Header2 = styled.h2`
  font-family: ${theme.fonts.accent};
  font-weight: 600;
  font-size: ${theme.size.subHeading}rem;
  color: ${theme.color.darkest};
  margin: 0 0 0.6em;

  @media ${min("m")} {
    font-size: ${theme.size.subHeading * 1.4}rem;
  }
`

export const Header3 = styled.h3`
  font-family: ${theme.fonts.accent};
  font-weight: 600;
  font-size: ${theme.size.subSubHeading}rem;
  line-height: 1.25em;
  color: ${theme.color.darkest};
  margin: 0 0 0.6em;

  @media ${min("m")} {
    font-size: ${theme.size.subSubHeading * 1.1}rem;
  }

  @media ${min("l")} {
    font-size: ${theme.size.subSubHeading * 1.2}rem;
  }
`

export const Text = styled.p`
  font-family: ${theme.fonts.accent};
  font-size: ${theme.size.base}rem;
  color: ${theme.color.darkest};
  line-height: 1.5em;
  margin: 0 0 0.6em;
`

export const SmallText = styled.p`
  font-family: ${theme.fonts.text};
  font-size: ${theme.size.small}rem;
  line-height: 1.3em;
  margin: 0 0 0.6em;
`
