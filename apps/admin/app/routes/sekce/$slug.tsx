import { LoaderFunction, ActionFunction } from "@remix-run/node"
import { useLoaderData, useSubmit } from "@remix-run/react"
import { getSection, updateSection } from "firebase/section"
import { SectionForm } from "~/forms/SectionForm"

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    throw new Error(`Stránka se slugem ${params.slug} neexistuje.`)
  }
  return await getSection(params.slug)
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const title = formData.get("title") as string
  const slug = formData.get("slug") as string

  await updateSection(slug, { title })
  return null
}

export default function UpdateSection() {
  const submit = useSubmit()
  const section = useLoaderData()
  return (
    <SectionForm
      initialData={section}
      onSubmit={async (values) => {
        submit(values, { method: "post" })
      }}
    />
  )
}
