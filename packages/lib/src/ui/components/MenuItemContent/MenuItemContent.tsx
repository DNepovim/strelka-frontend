import styled from "@emotion/styled"
import { min, theme } from "../../styles/theme"

export const MenuItemContent = styled.a`
  font-family: ${theme.fonts.accent};
  color: ${theme.color.darkest};
  font-weight: bold;
  font-size: 1.38rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1.2rem;

  @media ${min("l")} {
    padding: 0;
    font-size: 1.44rem;
  }
`
