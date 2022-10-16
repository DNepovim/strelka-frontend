import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "@remix-run/react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ReactElement } from "react"
import { theme } from "../theme"

export interface TableProps<T> {
  columns: ColumnDef<T, any>[]
  data: T[]
  emptyMessage?: string
}

export const Table = <T extends any>({
  columns,
  data,
  emptyMessage,
}: TableProps<T>): ReactElement => {
  const table = useReactTable<T>({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <StyledTable>
      <thead>
        {table.getHeaderGroups().map((group) => (
          <tr key={group.id}>
            {group.headers.map((header) =>
              flexRender(header.column.columnDef.header, {
                ...header.getContext(),
                key: header.id,
              })
            )}
          </tr>
        ))}
      </thead>
      <tbody>
        {data.length ? (
          table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) =>
                flexRender(cell.column.columnDef.cell, {
                  ...cell.getContext(),
                  key: cell.id,
                })
              )}
            </tr>
          ))
        ) : (
          <>
            <tr>
              <EmptyCell colSpan={columns.length}>
                {emptyMessage ?? "Nejsou zde žádná data..."}
              </EmptyCell>
            </tr>
          </>
        )}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map((group) => (
          <tr key={group.id}>
            {group.headers.map((header) =>
              flexRender(header.column.columnDef.footer, {
                ...header.getContext(),
                key: header.id,
              })
            )}
          </tr>
        ))}
      </tfoot>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const HeadCell = styled.th`
  border-bottom: ${theme.styles.border};
  text-align: left;
  padding: 0.4em 1em;
  font-weight: bold;
`

const Cell = styled.td`
  border-bottom: ${theme.styles.border};
  height: 2rem;
`

export const BodyCell = styled(Cell)`
  padding: 0.4em 1em;
`

export const ActionCell = styled(Cell)`
  padding-right: 1rem;
  text-align: right;
`

const ActionOverlay = styled.th`
  text-align: right;
  padding: 0 1rem 0 0;
  line-height: 0;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 3rem;
    height: 0.4rem;
    border-right: ${theme.styles.border};
  }

  &::before {
    border-left: ${theme.styles.border};
  }
`

export const ActionHeader = styled(ActionOverlay)`
  vertical-align: bottom;
  border-bottom: ${theme.styles.border};
`

export const ActionFooter = styled(ActionOverlay)`
  vertical-align: top;
`

export const Title = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const Date = styled.span`
  font-size: 0.8rem;
`

export const Action = styled.button`
  box-sizing: content-box;
  height: calc(100% + 2px);
  margin: -1px 0;
  border: ${theme.styles.border};
  background-color: transparent;
  width: 3rem;
  cursor: pointer;
  padding: 0;
  box-shadow: inset 0 0 5px #ddd;
  transition: background-color 200ms;

  &:first-of-type {
    border-right: none;
  }

  &:hover {
    box-shadow: none;
    ${({ danger }: { danger?: boolean }) =>
      danger
        ? css`
            background-color: red;
            path,
            rect {
              stroke: white;
            }
          `
        : css`
            background-color: ${theme.colors.brand};
            path,
            rect {
              fill: white;
            }
          `};
  }
`

export const ActionLink = Action.withComponent(Link)

export const EmptyCell = styled.td`
  background-color: ${theme.colors.backgroundGray};
  padding: 1em;
  text-align: center;
`
