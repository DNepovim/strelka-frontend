import { LoaderFunction } from "@remix-run/node"
import { useLoaderData, useParams } from "@remix-run/react"
import { getPage } from "firebase/db"

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    throw new Error(`Stránka se slugem ${params.slug} neexistuje.`)
  }
  return await getPage(params.slug)
}

export default function Page() {
  const data = useLoaderData()

  return data.title
}
