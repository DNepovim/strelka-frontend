import { Timestamp } from "firebase/firestore"
import { LoaderFunction } from "@remix-run/node"
import { useLoaderData, useParams } from "@remix-run/react"
import { createColumnHelper, ColumnDef } from "@tanstack/react-table"
import { IoPencilOutline, IoTrashBinOutline } from "react-icons/io5"
import {
  BodyCell,
  ButtonGroup,
  HeadCell,
  Table,
  timestampToDisplay,
  Title,
  UserPicture,
} from "@strelka/admin-ui"
import { getUsersList, User } from "firebase/user"
import { routes } from "routes"

export const loader: LoaderFunction = async () => {
  return await getUsersList()
}

export default function Index() {
  const columnHelper = createColumnHelper<User>()
  const data = useLoaderData()
  const { section } = useParams()

  if (!section) {
    return <>Sekce není vybraná.</>
  }

  const columns: ColumnDef<User, string>[] = [
    columnHelper.accessor("image", {
      header: () => <HeadCell></HeadCell>,
      footer: () => <td />,
      cell: (info) => (
        <BodyCell>
          <UserPicture src={info.getValue()} alt="" />
        </BodyCell>
      ),
    }),
    columnHelper.accessor("name", {
      header: () => <HeadCell>Jméno</HeadCell>,
      footer: () => <td />,
      cell: (info) => (
        <BodyCell>
          <Title to={routes.users.edit.route(info.row.original.email)(section)}>
            {info.getValue()}
          </Title>
        </BodyCell>
      ),
    }),
    columnHelper.accessor("email", {
      header: () => <HeadCell>Email</HeadCell>,
      footer: () => <td />,
      cell: (info) => <BodyCell>{info.getValue()}</BodyCell>,
    }),
    columnHelper.accessor("lastLoggedIn", {
      header: () => <HeadCell>Poslední přihlášení</HeadCell>,
      footer: () => <td />,
      cell: (info) => (
        <BodyCell>
          {info.getValue()
            ? timestampToDisplay(info.getValue() as unknown as Timestamp)
            : ""}
        </BodyCell>
      ),
    }),
    columnHelper.accessor("email", {
      header: () => <HeadCell />,
      cell: (info) => (
        <BodyCell align="right">
          <ButtonGroup
            items={[
              {
                type: "button",
                key: "remove",
                label: <IoTrashBinOutline color="red" size="1rem" />,
                title: "Smazat uživatele",
                danger: true,
                onClick: async () => {},
              },
              {
                type: "link",
                key: "detail",
                label: <IoPencilOutline size="1rem" />,
                title: "Upravit uživatele",
                to: routes.users.edit.route(info.getValue())(section),
              },
            ]}
          />
        </BodyCell>
      ),
    }),
  ]

  return <Table data={data} columns={columns} />
}
