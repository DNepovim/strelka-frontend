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

interface BodyCellProps {
  align?: "left" | "center" | "right"
}
export const BodyCell = styled(Cell)`
  padding: 0.4em 1em;
  background-color: white;
  text-align: ${({ align }: BodyCellProps) => align ?? "left"};
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

export const EmptyCell = styled.td`
  background-color: ${theme.colors.backgroundGray};
  padding: 1em;
  text-align: center;
`
