import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import { theme } from "../theme"

export const Button: React.FC<{ children: ReactNode }> = ({ children }) => (
  <StyledBudton>{children}</StyledBudton>
)

const StyledBudton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  padding: 0.4em 1em;
  border: ${theme.styles.border};
  background-color: transparent;
  transition: background-color 200ms;

  &:hover {
    background-color: ${theme.colors.brand};
  }
`
