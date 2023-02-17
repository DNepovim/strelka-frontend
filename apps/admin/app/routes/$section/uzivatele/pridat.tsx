import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node"
import { useFetcher, useLoaderData } from "@remix-run/react"
import { getSectionsList } from "repo/firestore/section"
import { setUser } from "repo/firestore/user"
import { UserForm } from "~/forms/UserForm"

export const loader: LoaderFunction = async () => {
  return await getSectionsList()
}

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const email = formData.get("email") as string
  const roles = formData.get("roles")
  const rolesParsed = JSON.parse(roles as string)
  await setUser({ email, role: rolesParsed })
  return redirect(`/uzivatele/${email}`)
}

export default function AddUser() {
  const fetcher = useFetcher()
  const data = useLoaderData()
  return (
    <UserForm
      initialData={{
        email: "",
        roles: { superadmin: false, admin: [], editor: [] },
      }}
      sections={data ?? []}
      onSubmit={async (values) =>
        fetcher.submit(
          { ...values, roles: JSON.stringify(values.roles) },
          { method: "post" }
        )
      }
    />
  )
}
