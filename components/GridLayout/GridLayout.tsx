import styled from "@emotion/styled"
import React from "react"
import { Breakpoints, min, theme } from "../../styles/theme"
import { Columns } from "../../types/Layout"
import { css } from "@emotion/react"

export interface GridProps {
  columnCount: Columns
  rowGap?: number
  colGap?: number
  s?: Columns
  m?: Columns
  l?: Columns
}

export const GridContainer: React.FC = styled.div`
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  max-width: ${theme.layout.width}rem;
  margin: 0 auto;
  
  display: grid;
  gap: ${(props: GridProps) =>
    `${props.colGap ?? 0}rem ${props.rowGap ?? 0}rem;`}
  grid-template-columns: repeat( ${(props: GridProps) =>
    props.columnCount}, 1fr);

  ${(props: GridProps) =>
    Object.keys(theme.breakpoints).map(
      (key: Breakpoints) =>
        props[key] &&
        css`
          @media ${min(key)} {
            grid-template-columns: repeat(${props[key]}, 1fr);
          }
        `
    )}
`
