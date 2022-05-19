import styled from "@emotion/styled"
import { min, theme } from "../../styles/theme"

export const MenuItemContent = styled.a`
  font-family: ${theme.fonts.accent};
  color: ${theme.color.darkest};
  font-weight: bold;
  font-size: 1.22rem;
  display: flex;
  align-items: center;
  padding: 0.65rem 1.75rem;

  @media ${min("l")} {
    padding: 0;
    font-size: 1.1rem;
  }
`
