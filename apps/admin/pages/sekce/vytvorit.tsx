import { NextPage } from "next"
import { editSite } from "../../api/editSite"
import { SiteForm } from "../../views/SiteForm"

export const PageEditPage: NextPage = () => (
  <SiteForm initialValues={{ name: "", slug: "" }} onSave={editSite} />
)

export default PageEditPage
