import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"
import { Breakpoints, min, theme } from "../../styles/theme"

export const Layout = styled.main`
  padding: ${theme.layout.gutter * 2}rem ${theme.layout.gutter}rem;
`

export const Container: React.FC = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: ${theme.layout.width}rem;
  margin: 0 auto;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${theme.layout.gutter / 2}em;
  ${(props: { rowGap?: number }) =>
    props.rowGap &&
    css`
      row-gap: ${props.rowGap}rem;
    `}
`

type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface ColumnProps {
  col: Columns
  s?: Columns
  m?: Columns
  l?: Columns
  xl?: Columns
}

const getFlexWidth = (col: Columns) =>
  css`
    flex: 0 0 calc(${(100 / 12) * col}% - ${theme.layout.gutter}rem);
  `

export const Column = styled.div`
  ${({ col }: ColumnProps) => getFlexWidth(col)}
  ${(props: ColumnProps) =>
    Object.keys(theme.breakpoints).map(
      (key: Breakpoints) =>
        props[key] &&
        css`
          @media ${min(key)} {
            ${getFlexWidth(props[key])}
          }
        `
    )}
  padding: 0 ${theme.layout.gutter / 2}rem;
  min-height: 1px;
`
