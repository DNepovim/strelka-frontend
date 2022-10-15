import { ActionArgs, LoaderFunction, redirect } from "@remix-run/node"
import { authenticator } from "~/services/auth.server"

export const loader: LoaderFunction = () => redirect("/")

export async function action({ request }: ActionArgs) {
  await authenticator.logout(request, { redirectTo: "/login" })
}
