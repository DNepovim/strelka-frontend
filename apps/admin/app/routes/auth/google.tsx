import { LoaderFunction, redirect, ActionFunction } from "@remix-run/node"
import { authenticator } from "~/services/auth.server"

export const loader: LoaderFunction = () => redirect("/login")

export const action: ActionFunction = ({ request }) => {
  return authenticator.authenticate("google", request)
}
