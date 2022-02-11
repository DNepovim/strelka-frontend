import { PageHeader } from "antd"

export const SettingsPage = () => {
  return (
    <PageHeader
      title="Nastavení"
      breadcrumb={{
        routes: [{ breadcrumbName: "Nastavení", path: "/admin/nastaveni" }],
      }}
    ></PageHeader>
  )
}
