import { GetServerSideProps, NextPage } from "next"
import { Button, Table, Typography } from "antd"
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined"
import { Site } from "../../schemas/site"
import { getSites } from "../../api/getSites"
import { ButtonLink } from "../../components/ButtonLink/ButtonLink"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"
import { routes } from "../../routes"
import { PageWithContent } from "../../schemas/page"
import { Link } from "../../components/Link/Link"

const SitesListPage: NextPage<Props> = ({ sites }) => (
  <PageWrapper
    title={<Typography.Title>Sekce</Typography.Title>}
    breadcrumb={[{ breadcrumbName: "Sekce", path: "/sekce" }]}
    actions={
      <ButtonLink link={routes.newPage.getLink()}>Nová sekce</ButtonLink>
    }
  >
    <Table<Site>
      loading={!sites}
      rowKey={"slug"}
      dataSource={sites}
      columns={[
        {
          title: "Název",
          key: "name",
          render: ({ name, slug }: PageWithContent) => (
            <Link route={routes.editSite} params={[slug]} isRoot>
              {name}
            </Link>
          ),
        },
        {
          title: "Naposledy upraveno",
          dataIndex: "updatedAt",
          key: "updatedAt",
        },
        { title: "Site", dataIndex: "siteId", key: "siteId" },
        {
          render: ({ slug }: PageWithContent) => (
            <Link route={routes.editSite} params={[slug]} isRoot>
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
    sites: await getSites({ limit: 10 }),
  },
})

interface Props {
  sites: Site[]
}

export default SitesListPage
