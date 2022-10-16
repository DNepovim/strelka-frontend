import { LoaderFunction, ActionFunction } from "@remix-run/node"
import { useLoaderData, useFetcher } from "@remix-run/react"
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
  await udpatePage(slug, { title })
  return null
}

export default function UpdatePage() {
  const fetcher = useFetcher()
  const page = useLoaderData()
  return (
    <PageForm
      initialData={page}
      onSubmit={async (values) => fetcher.submit(values, { method: "post" })}
    />
  )
}
