import { Timestamp } from "firebase/firestore"
import { LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { createColumnHelper, ColumnDef } from "@tanstack/react-table"
import { getUsersList } from "firebase/db"
import { IoPencilOutline, IoTrashBinOutline } from "react-icons/io5"
import { User } from "~/services/auth.server"
import {
  Action,
  ActionCell,
  ActionFooter,
  ActionHeader,
  BodyCell,
  HeadCell,
  Table,
  timestampToDisplay,
  Title,
  UserPicture,
} from "@strelka/admin-ui"

export const loader: LoaderFunction = async () => {
  return await getUsersList()
}

export default function Index() {
  const columnHelper = createColumnHelper<User>()
  const data = useLoaderData()

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
          <Title to={`/uzivatele/${info.row.original.email}`}>
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
          {timestampToDisplay(info.getValue() as unknown as Timestamp)}
        </BodyCell>
      ),
    }),
    columnHelper.accessor("actions", {
      header: () => <ActionHeader />,
      footer: () => <ActionFooter as="td" />,
      cell: () => (
        <ActionCell>
          <Action title="Smazat uživatele" danger>
            <IoTrashBinOutline color="red" size="1rem" />
          </Action>
          <Action title="Upravit uživatele">
            <IoPencilOutline size="1rem" />
          </Action>
        </ActionCell>
      ),
    }),
  ]

  return <Table data={data} columns={columns} />
}
