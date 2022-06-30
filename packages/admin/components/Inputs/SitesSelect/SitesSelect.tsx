import { Spin } from "antd"
import { Select } from "antd"
import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import { getSites } from "../../../api/getSites"
import { Site } from "../../../schemas/site"

export const SitesSelect: React.FC = () => {
  const [data, setData] = useState<Site[]>()
  useEffect(() => {
    void (async () => {
      const sites = await getSites()
      setData(sites)
    })()
  }, [])

  const router = useRouter()

  if (!data) {
    return <Spin />
  }

  return (
    <Select
      onChange={async (value: string) => {
        await router.push(`/${value}`)
      }}
      options={data.map((site) => ({ label: site.name, value: site.slug }))}
    />
  )
}
