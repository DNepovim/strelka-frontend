import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined"
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined"
import {
  Avatar,
  Button,
  Dropdown,
  Menu,
  message,
  Table,
  Typography,
} from "antd"
import { ListUsersResult, UserRecord } from "firebase-admin/auth"
import { Link } from "react-router-dom"
import useSwr from "swr"
import { useEffect, useState } from "react"
import { PageWrapper } from "../../components/PageHeader/PageWrapper"

export const UsersListPage = () => {
  const [users, setUsers] = useState<UserRecord[]>([])
  const { data } = useSwr<ListUsersResult>("/api/users/list", async (url) => {
    const result = await fetch(url)
    return await result.json()
  })

  useEffect(() => {
    setUsers(data?.users ?? [])
  }, [data])

  const setRole = async (uid: string, role: string) => {
    await fetch("/api/users/setRole", {
      method: "POST",
      body: JSON.stringify({ uid, role }),
    })
  }

  const deleteUser = async (uid: string) => {
    try {
      await fetch("/api/users/delete", {
        method: "POST",
        body: JSON.stringify({ uid }),
      })
      setUsers(users.filter((user) => user.uid !== uid))
      message.success("Uživatel byl úspěšně smazán.")
    } catch (e) {
      message.error("Nastala nějaká chyba při mazání uživatele.")
      console.error(e)
    }
  }

  return (
    <PageWrapper
      title={<Typography.Title>Uživatelé</Typography.Title>}
      breadcrumb={{
        routes: [{ breadcrumbName: "Uživatelé", path: "/admin/uzivatele" }],
      }}
    >
      <Table<UserRecord>
        dataSource={users}
        loading={!data}
        columns={[
          {
            title: "Jméno",
            render: (record) => (
              <>
                <Avatar alt={record.displayName} src={record.photoURL} />
                &nbsp;{record.displayName}
              </>
            ),
            key: "name",
          },
          {
            title: "E-mail",
            key: "email",
            render: ({ email }) => (
              <Link to={`mailto:${email}`} target="_blank">
                {email}
              </Link>
            ),
          },
          {
            title: "Role",
            key: "role",
            render: (_, record) => (
              <>
                {record.customClaims?.role}
                <Dropdown
                  trigger={["click"]}
                  overlay={
                    <Menu onClick={(e) => setRole(record.uid, e.key)}>
                      <Menu.Item key="admin">Admin</Menu.Item>
                      <Menu.Item key="editor">Editor</Menu.Item>
                      <Menu.Item key="guest">Host</Menu.Item>
                    </Menu>
                  }
                >
                  <EditOutlined />
                </Dropdown>
              </>
            ),
          },
          {
            key: "actions",
            render: (_, record) => (
              <Button
                icon={<DeleteOutlined />}
                onClick={() => deleteUser(record.uid)}
              >
                Smazat
              </Button>
            ),
          },
        ]}
        pagination={{
          hideOnSinglePage: true,
        }}
      />
    </PageWrapper>
  )
}
