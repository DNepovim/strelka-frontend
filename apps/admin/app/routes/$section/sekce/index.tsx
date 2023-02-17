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
import { routes } from "routes"
import { getSectionsList, removeSection, Section } from "repo/firestore/section"

export const loader: LoaderFunction = async () => {
  return await getSectionsList()
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const slug = formData.get("slug") as string
  await removeSection(slug)
  return null
}

export default function Index() {
  const columnHelper = createColumnHelper<Section>()
  const data = useLoaderData()
  const fetcher = useFetcher()
  const { section } = useParams()

  if (!section) {
    return <>Sekce není vybraná.</>
  }

  const columns: ColumnDef<Section, string>[] = [
    columnHelper.accessor("title", {
      header: () => <HeadCell>Název</HeadCell>,
      footer: () => <td />,
      cell: (info) => (
        <BodyCell>
          <Title
            to={routes.sections.edit.route(info.row.original.slug)(section)}
          >
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
                title: "Smazat sekci",
                danger: true,
                onClick: async () => {
                  fetcher.submit({ slug: info.getValue() }, { method: "post" })
                },
              },
              {
                type: "link",
                key: "detail",
                label: <IoPencilOutline size="1rem" />,
                title: "Upravit sekci",
                to: routes.sections.edit.route(info.getValue())(section),
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
        <ButtonLink route={routes.sections.create.route()}>
          Nová sekce
        </ButtonLink>
      </SiteHeader>
      <Table
        data={data}
        columns={columns}
        emptyMessage="Žádné sekce tu nejsou..."
      />
    </>
  )
}
