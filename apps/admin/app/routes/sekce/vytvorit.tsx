import { useFetcher } from "@remix-run/react"
import { ActionFunction, redirect } from "@remix-run/node"
import { updateSection } from "firebase/section"
import { SectionForm } from "~/forms/SectionForm"

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  await updateSection(slug, { title })
  return redirect(`/sekce/${slug}`)
}

export default function CreateSection() {
  const fetcher = useFetcher()
  return (
    <SectionForm
      initialData={{ title: "", slug: "" }}
      onSubmit={async (values) => fetcher.submit(values, { method: "post" })}
    />
  )
}
