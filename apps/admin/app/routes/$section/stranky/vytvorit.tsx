import { useFetcher, useParams } from "@remix-run/react"
import { ActionFunction, redirect } from "@remix-run/node"
import { PageForm } from "~/forms/PageForm"
import { routes } from "routes"
import { updatePage } from "repo/firestore/page"
import { useId } from "react"

export const action: ActionFunction = async ({ request, params }) => {
  const section = params.section
  if (!section) {
    throw new Error("Sekce musí být specifikována.")
  }

  const formData = await request.formData()
  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  const blocks = formData.get("blocks")
  const blocksParsed = JSON.parse(blocks as string)
  await updatePage(section, slug, { title, blocks: blocksParsed })
  return redirect(routes.pages.edit.route(slug)(section))
}

export default function CreatePage() {
  const fetcher = useFetcher()
  const { section } = useParams()
  const id = useId()
  if (!section) {
    return <>Není vybrána sekce.</>
  }
  return (
    <PageForm
      initialData={{
        title: "",
        slug: "",
        blocks: [
          {
            id,
            template: "paragraph",
            fields: {
              title: { value: "nadpis" },
              row: [
                {
                  id,
                  fields: {
                    text: { value: "nejaky text" },
                    anothertext: { value: "dalsi text" },
                  },
                },
              ],
            },
          },
        ],
      }}
      onSubmit={async (values) =>
        fetcher.submit(
          { ...values, blocks: JSON.stringify(values.blocks) },
          { method: "post" }
        )
      }
    />
  )
}
