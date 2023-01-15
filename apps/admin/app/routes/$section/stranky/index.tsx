import { ActionFunction, LoaderFunction } from "@remix-run/node"
import { useFetcher, useLoaderData, useParams } from "@remix-run/react"
import { createColumnHelper, ColumnDef } from "@tanstack/react-table"
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
import { getPagesList, removePage, PagesTableItem } from "firebase/page"
import { routes } from "routes"
import { getSection } from "firebase/section"

export const loader: LoaderFunction = async ({ params }) => {
  const section = await getSection(params.section!)
  if (!section) {
    throw new Response(`Stránka ${params.slug} neexistuje.`, {
      status: 404,
    })
  }
  return await getPagesList(params.section!)
}

export const action: ActionFunction = async ({ request, params }) => {
  const section = params.section
  if (!section) {
    throw new Error("Sekce musí být specifikována.")
  }

  const formData = await request.formData()
  const slug = formData.get("slug") as string

  await removePage(section, slug)
  return null
}

export default function Index() {
  const columnHelper = createColumnHelper<PagesTableItem>()
  const data = useLoaderData()
  const fetcher = useFetcher()
  const { section } = useParams()

  if (!section) {
    return <>Sekce není vybraná.</>
  }

  const columns: ColumnDef<PagesTableItem, string>[] = [
    columnHelper.accessor("title", {
      header: () => <HeadCell>Název</HeadCell>,
      footer: () => <td />,
      cell: (info) => (
        <BodyCell>
          <Title route={routes.pages.edit.route(info.row.original.slug)}>
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
                to: routes.pages.edit.route(info.getValue())(section),
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
        <ButtonLink route={routes.pages.create.route()}>
          Nová stránka
        </ButtonLink>
      </SiteHeader>
      <Table
        data={data}
        columns={columns}
        emptyMessage="Žádné stránky tu nejsou..."
      />
    </>
  )
}
