import styled from "@emotion/styled"
import { LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { createColumnHelper, ColumnDef } from "@tanstack/react-table"
import { PagesTableItem } from "data"
import { getPagesList } from "firebase/db"
import { IoPencilOutline, IoTrashBinOutline } from "react-icons/io5"
import {
  Action,
  ActionCell,
  ActionFooter,
  ActionHeader,
  BodyCell,
  Button,
  HeadCell,
  Table,
  Title,
} from "@strelka/admin-ui"

export const loader: LoaderFunction = async () => {
  return await getPagesList()
}

export default function Index() {
  const columnHelper = createColumnHelper<PagesTableItem>()
  const data = useLoaderData()

  const columns: ColumnDef<PagesTableItem, string>[] = [
    columnHelper.accessor("title", {
      header: () => <HeadCell>Název</HeadCell>,
      footer: () => <td />,
      cell: (info) => (
        <BodyCell>
          <Title to={`/stranky/${info.row.original.slug}`}>
            {info.getValue()}
          </Title>
        </BodyCell>
      ),
    }),
    columnHelper.accessor("lastEditedBy", {
      header: () => <HeadCell>Upravil</HeadCell>,
      footer: () => <td />,
      cell: (info) => <BodyCell>{info.getValue()}</BodyCell>,
    }),
    columnHelper.accessor("id", {
      header: () => <ActionHeader />,
      footer: () => <ActionFooter as="td" />,
      cell: () => (
        <ActionCell>
          <Action title="Smazat stránku" danger>
            <IoTrashBinOutline color="red" size="1rem" />
          </Action>
          <Action title="Upravit stránku">
            <IoPencilOutline size="1rem" />
          </Action>
        </ActionCell>
      ),
    }),
  ]

  return (
    <>
      <SiteHeader>
        <Button>Nová stránka</Button>
      </SiteHeader>
      <Table data={data} columns={columns} />
    </>
  )
}

const SiteHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem;
`
