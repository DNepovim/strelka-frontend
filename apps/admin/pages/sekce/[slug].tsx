import { GetServerSideProps, NextPage } from "next"
import { editSite } from "../../api/editSite"
import { getSiteBySlug } from "../../api/getSiteBySlug"
import { Site } from "../../schemas/site"
import { SiteForm } from "../../views/SiteForm"

export const PageEditPage: NextPage<Props> = ({ site }) => (
  <SiteForm initialValues={site} onSave={editSite} />
)

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => ({
  props: {
    site: await getSiteBySlug(query.slug as string),
  },
})

interface Props {
  site: Site
}

export default PageEditPage
