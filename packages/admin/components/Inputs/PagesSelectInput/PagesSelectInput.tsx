import { Spin } from "antd"
import { Select, SelectProps } from "formik-antd"
import React from "react"
import useSWR from "swr"
import { getPages } from "../../../api/getPages"

export const PagesSelectInput: React.FC<
  Omit<SelectProps<string>, "options">
> = (props) => {
  const { data, error } = useSWR("/api/user", () => getPages())

  if (!data) {
    return <Spin />
  }

  if (error) {
    return <>Nepodařilo se načíst seznam stránek.</>
  }

  return (
    <Select
      {...props}
      options={data.map((page) => ({ label: page.name, value: page.id }))}
    />
  )
}
