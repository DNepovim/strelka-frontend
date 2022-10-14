import { css, Theme } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"
import { Breakpoints, min, theme } from "../../styles/theme"
import { Columns } from "../../types/Layout"

export const Layout = styled.main`
  padding: ${theme.layout.gutter * 2}rem ${theme.layout.gutter}rem;
`

export const Container: React.FC = styled.div`
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  max-width: ${theme.layout.width}rem;
  margin: 0 auto;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${theme.layout.gutter}em;
`

export interface ColumnProps {
  col: Columns
  s?: Columns
  m?: Columns
  l?: Columns
}

export const Column = styled.div`
  ${({ col }: ColumnProps) => css`
    flex: 1 1 calc((100 / 12) * ${col}% - ${theme.layout.gutter * 2}em);
  `}
  ${(props: ColumnProps) =>
    Object.keys(theme.breakpoints).map(
      (key: Breakpoints) =>
        props[key] &&
        css`
          @media ${min(key)} {
            flex: 1 1
              calc((100 / 12) * ${props[key]}% - ${theme.layout.gutter * 2}em);
          }
        `
    )}
  padding: 0 ${theme.layout.gutter}em;
  min-height: 1px;
`
