import { ActionFunction, LoaderFunction } from "@remix-run/node"
import { useFetcher, useLoaderData } from "@remix-run/react"
import { createColumnHelper, ColumnDef } from "@tanstack/react-table"
import { PagesTableItem } from "data"
import { getPagesList, removePage } from "firebase/db"
import { IoPencilOutline, IoTrashBinOutline } from "react-icons/io5"
import {
  BodyCell,
  ButtonGroup,
  ButtonLink,
  HeadCell,
  SiteHeader,
  Table,
  Title,
} from "@strelka/admin-ui"

export const loader: LoaderFunction = async () => {
  return await getPagesList()
}

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const slug = formData.get("slug") as string
  await removePage(slug)
  return null
}

export default function Index() {
  const columnHelper = createColumnHelper<PagesTableItem>()
  const data = useLoaderData()
  const fetcher = useFetcher()

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
    columnHelper.accessor("slug", {
      header: () => <HeadCell />,
      cell: (info) => (
        <BodyCell align="right">
          <ButtonGroup
            items={[
              {
                type: "button",
                key: "remove",
                label: <IoTrashBinOutline color="red" size="1rem" />,
                title: "Smazat stránku",
                danger: true,
                onClick: async () => {
                  fetcher.submit({ slug: info.getValue() }, { method: "post" })
                },
              },
              {
                type: "link",
                key: "detail",
                label: <IoPencilOutline size="1rem" />,
                title: "Upravit stránku",
                to: `/stranky/${info.getValue()}`,
              },
            ]}
          />
        </BodyCell>
      ),
    }),
  ]

  return (
    <>
      <SiteHeader>
        <ButtonLink to="/stranky/vytvorit">Nová stránka</ButtonLink>
      </SiteHeader>
      <Table
        data={data}
        columns={columns}
        emptyMessage="Žádné stránky tu nejsou..."
      />
    </>
  )
}
