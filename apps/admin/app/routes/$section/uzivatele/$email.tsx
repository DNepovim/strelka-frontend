import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node"
import { useLoaderData, useSubmit } from "@remix-run/react"
import { getSectionsList } from "repo/section"
import { getUser, setUser } from "repo/user"
import { UserForm } from "~/forms/UserForm"

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const email = formData.get("email") as string
  const roles = formData.get("roles")
  const rolesParsed = JSON.parse(roles as string)
  await setUser({ email, roles: rolesParsed })
  return redirect(`/uzivatele/${email}`)
}

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.email) {
    throw new Error(`Uživatel s e-mailovou adresou ${params.email} neexistuje.`)
  }
  return {
    user: await getUser(params.email),
    sections: await getSectionsList(),
  }
}

export default function UpdateUser() {
  const submit = useSubmit()
  const { user, sections } = useLoaderData()
  return (
    <UserForm
      initialData={user}
      sections={sections ?? []}
      onSubmit={async (values) => {
        submit(
          { ...values, roles: JSON.stringify(values.roles) },
          { method: "post" }
        )
      }}
      edit
    />
  )
}
