import { GetServerSideProps, NextPage } from "next"
import { editPage } from "../../api/editPage"
import { getPageBySlug } from "../../api/getPageBySlug"
import { PageWithContent } from "../../schemas/page"
import { PageForm } from "../../views/PageForm"

export const PageEditPage: NextPage<Props> = ({ page }) => (
  <PageForm initialValues={page} onSave={editPage} />
)

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => ({
  props: {
    page: await getPageBySlug(query.slug as string),
  },
})

interface Props {
  page: PageWithContent
}

export default PageEditPage
