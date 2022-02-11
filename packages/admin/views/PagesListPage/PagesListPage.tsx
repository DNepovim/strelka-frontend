import { Button, Table, Typography } from "antd"
import { Link } from "react-router-dom"
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined"
import { Page } from "../../../data"
import useSwr from "swr"
import { PageWrapper } from "../../components/PageHeader/PageWrapper"

export const PagesListPage = () => {
  const { data: pages } = useSwr<Page>("/api/page/list", async (url) => {
    const result = await fetch(url)
    return await result.json()
  })

  return (
    <PageWrapper
      title={<Typography.Title>Stránky</Typography.Title>}
      breadcrumb={{ routes: [{ breadcrumbName: "Stránky", path: "" }] }}
    >
      <Table
        loading={!pages}
        rowKey={"slug"}
        dataSource={
          pages
            ? Object.entries(pages).map(([slug, data]) => ({ slug, ...data }))
            : []
        }
        columns={[
          {
            title: "Název",
            dataIndex: "title",
            key: "title",
          },
          {
            title: "Naposledy upraveno",
            render: (record) =>
              `${record.lastEditedBy} (${record.lastEditedTime})`,
            key: "lastEdited",
          },
          {
            render: (record) => (
              <Link to={`/admin/stranky/${record.slug}`}>
                <Button icon={<EditOutlined />}>Upravit</Button>
              </Link>
            ),
            key: "action",
            align: "right",
          },
        ]}
        pagination={{
          hideOnSinglePage: true,
        }}
      />
    </PageWrapper>
  )
}
