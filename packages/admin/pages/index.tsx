import { NextPage } from "next"
import { Button, Table, Typography } from "antd"
import Link from "next/link"
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined"
import { BlockTemplates, Page } from "@local/lib"
import { PageWrapper } from "../components/PageHeader/PageWrapper"
import { ButtonLink } from "../components/ButtonLink/ButtonLink"
import { routes } from "../routes"

const PagesListPage: NextPage<Props> = ({ pages }) => (
  <PageWrapper
    title={<Typography.Title>Stránky</Typography.Title>}
    breadcrumb={{ routes: [{ breadcrumbName: "Stránky", path: "" }] }}
    extra={
      <ButtonLink link={routes.newPage.getLink()}>Nová stránka</ButtonLink>
    }
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
            <Link href={`/stranky/${record.slug}`} passHref>
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

// export const getServerSideProps: GetServerSideProps<Props> = () => ({
export const getServerSideProps: () => { props: Props } = () => ({
  props: {
    pages: [
      {
        blocks: [
          {
            id: "",
            template: BlockTemplates.Example,
            fields: {
              title: "Nadpis",
              button: {
                label: "Čudlík",
                link: "http://www.neco.cz",
              },
            },
          },
        ],
      },
    ],
  },
})

interface Props {
  pages: Page[]
}

export default PagesListPage
