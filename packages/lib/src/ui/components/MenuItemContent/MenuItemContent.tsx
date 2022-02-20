import styled from "@emotion/styled"
import { min, theme } from "../../styles/theme"

export const MenuItemContent = styled.a`
  font-family: ${theme.fonts.accent};
  color: ${theme.color.darkest};
  font-weight: bold;
  font-size: ${theme.size.base * 1.15}rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1em;

  @media ${min("l")} {
    padding: 0;
    font-size: ${theme.size.base * 1.2}rem;
  }
`
