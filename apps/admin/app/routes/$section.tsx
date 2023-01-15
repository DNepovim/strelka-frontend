import { LoaderFunction } from "@remix-run/node"
import { Outlet, useCatch } from "@remix-run/react"
import { getSection } from "firebase/section"

export const loader: LoaderFunction = async ({ params }) => {
  const section = await getSection(params.section!)
  if (!section) {
    throw new Response(`Sekce ${params.section} neexistuje.`, { status: 404 })
  }
  return null
}

export default function Index() {
  return <Outlet />
}

export function CatchBoundary() {
  const cought = useCatch()
  return (
    <div>
      <h2>{cought.data}</h2>
    </div>
  )
}

export function ErrorBoundary({ error }) {
  console.error(error)
  return (
    <div>
      <h2>Section error</h2>
    </div>
  )
}
