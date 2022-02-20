import { GetServerSideProps, NextPage } from "next"
import { Button, Table, Typography } from "antd"
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined"
import { PageWrapper } from "../components/PageHeader/PageWrapper"
import { ButtonLink } from "../components/ButtonLink/ButtonLink"
import { routes } from "../routes"
import { PageWithContent } from "../schemas/page"
import { getPages } from "../api/getPages"
import { Link } from "@local/lib"

const PagesListPage: NextPage<Props> = ({ pages }) => (
  <PageWrapper
    title={<Typography.Title>Stránky</Typography.Title>}
    breadcrumb={[{ breadcrumbName: "Stránky", path: "" }]}
    actions={
      <ButtonLink link={routes.newPage.getLink()}>Nová stránka</ButtonLink>
    }
  >
    <Table<PageWithContent>
      loading={!pages}
      rowKey={"slug"}
      dataSource={pages}
      columns={[
        {
          title: "Název",
          key: "name",
          render: (record: PageWithContent) => (
            <Link to={routes.editPage.getLink(record.slug)}>{record.name}</Link>
          ),
        },
        {
          title: "Naposledy upraveno",
          dataIndex: "updatedAt",
          key: "updatedAt",
        },
        {
          render: (record: PageWithContent) => (
            <Link to={routes.editPage.getLink(record.slug)}>
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

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
  props: {
    pages: await getPages({ limit: 10 }),
  },
})

interface Props {
  pages: PageWithContent[]
}

export default PagesListPage
