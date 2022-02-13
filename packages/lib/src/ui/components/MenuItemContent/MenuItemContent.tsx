import styled from "@emotion/styled"
import { theme } from "../../styles/theme"
import { max } from "../../styles/theme"

export const MenuItemContent = styled.a`
  font-family: ${theme.fonts.accent};
  color: ${theme.color.darkest};
  font-weight: bold;
  font-size: ${theme.navSize.horizontal.linkSize};
  display: flex;
  align-items: center;
  padding-left: ${theme.navSize.horizontal.linkPadding};
  padding-right: ${theme.navSize.horizontal.linkPadding};

  @media ${max("l")} {
    padding: 0.5rem 1em;
  }
`
