import { useFetcher } from "@remix-run/react"
import { ActionFunction, redirect } from "@remix-run/node"
import { SectionForm } from "~/forms/SectionForm"
import { routes } from "routes"
import { updateSection } from "repo/firestore/section"

export const action: ActionFunction = async ({ request, params }) => {
  const section = params.section
  if (!section) {
    throw new Error("Sekce musí být specifikována.")
  }

  const formData = await request.formData()
  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  await updateSection(slug, { title })
  return redirect(routes.sections.edit.route(slug)(section))
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
