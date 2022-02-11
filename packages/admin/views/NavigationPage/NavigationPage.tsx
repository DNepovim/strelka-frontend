import { PageHeader } from "antd"

export const NavigationPage = () => {
  return (
    <PageHeader
      title="Navigace"
      breadcrumb={{
        routes: [{ breadcrumbName: "Navigace", path: "/admin/navigace" }],
      }}
    ></PageHeader>
  )
}
