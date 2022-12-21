import { LoaderFunction, redirect } from "@remix-run/node"
import { routes } from "routes"

export const loader: LoaderFunction = async ({ params }) => {
  return redirect(
    params.section ? routes.pages.list.route()(params.section) : "/"
  )
}
