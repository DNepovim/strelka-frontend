import { useFetcher } from "@remix-run/react"
import { ActionFunction, redirect } from "@remix-run/node"
import { udpatePage } from "firebase/db"
import { PageForm } from "~/forms/PageForm"

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  await udpatePage(slug, { title })
  return redirect(`/stranky/${slug}`)
}

export default function CreatePage() {
  const fetcher = useFetcher()
  return (
    <PageForm
      initialData={{ title: "", slug: "", blocks: [] }}
      onSubmit={async (values) => fetcher.submit(values, { method: "post" })}
    />
  )
}
