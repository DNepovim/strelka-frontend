import { NextPage } from "next"
import { createPage } from "../../api/createPage"
import { PageForm } from "../../views/PageForm"

export const PageCreatePage: NextPage = () => (
  <PageForm
    initialValues={{
      name: "",
      content: [],
      siteId: "",
      slug: "",
    }}
    onSave={createPage}
    autoFillSlug
  />
)

export default PageCreatePage
