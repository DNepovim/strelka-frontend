import { useFetcher } from "@remix-run/react"
import { ActionFunction, redirect } from "@remix-run/node"
import { updatePage } from "firebase/page"
import { PageForm } from "~/forms/PageForm"

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  const blocks = formData.get("blocks")
  const blocksParsed = JSON.parse(blocks as string)
  await updatePage(slug, { title, blocks: blocksParsed })
  return redirect(`/stranky/${slug}`)
}

export default function CreatePage() {
  const fetcher = useFetcher()
  return (
    <PageForm
      initialData={{ title: "", slug: "", blocks: [] }}
      onSubmit={async (values) =>
        fetcher.submit(
          { ...values, blocks: JSON.stringify(values.blocks) },
          { method: "post" }
        )
      }
    />
  )
}
