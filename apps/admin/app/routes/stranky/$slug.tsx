import { LoaderFunction, ActionFunction } from "@remix-run/node"
import { useLoaderData, useFetcher, useSubmit } from "@remix-run/react"
import { Page } from "@strelka/ui"
import { getPage, udpatePage } from "firebase/db"
import { PageForm } from "~/forms/PageForm"

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    throw new Error(`Stránka se slugem ${params.slug} neexistuje.`)
  }
  return await getPage(params.slug)
}

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  const blocks = formData.get("blocks") as any
  const blocksParsed = JSON.parse(blocks)

  await udpatePage(slug, { title, blocks: blocksParsed })
  return null
}

export default function UpdatePage() {
  const submit = useSubmit()
  const page = useLoaderData()
  return (
    <PageForm
      initialData={page}
      onSubmit={async (values) => {
        console.log(values)
        submit(
          { ...values, blocks: JSON.stringify(values.blocks) },
          { method: "post" }
        )
      }}
    />
  )
}
