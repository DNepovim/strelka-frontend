import React from "react"
import { Formik, Form } from "formik"
import { PageSection, Button, ToggleInput, TextInput } from "@strelka/admin-ui"
import { IoSaveOutline } from "react-icons/io5"
import styled from "@emotion/styled"
import { User } from "repo/user"
import { Section } from "repo/section"

interface UserFormFormProps {
  onSubmit: (values: User) => void
  initialData: User
  sections: Section[]
  edit?: boolean
}

const roles = ["editor", "admin"]

export const UserForm: React.FC<UserFormFormProps> = ({
  onSubmit,
  initialData,
  sections,
  edit,
}) => {
  return (
    <Formik<User> initialValues={initialData} onSubmit={onSubmit}>
      {(renderProps) => (
        <Form>
          <PageSection>
            {edit && <h1>{initialData.email}</h1>}
            {!edit && <TextInput name="email" label="E-mail" type="email" />}
            <ToggleInput name="roles.superadmin" label="Superadmin" />
            <table>
              <thead>
                <tr>
                  <th></th>
                  {roles.map((role) => (
                    <th key={role}>{role}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sections.map(({ title, slug }) => (
                  <tr key={slug}>
                    <td>{title}</td>
                    {roles.map((role) => (
                      <td key={role}>
                        <ToggleInput
                          name={`roles.${role}`}
                          value={slug}
                          checked={renderProps.values?.roles?.[
                            role as "admin" | "editor"
                          ]?.includes(slug)}
                          onChange={(e) => {
                            const checked = e.currentTarget.checked
                            renderProps.setFieldValue(`roles.${role}`, [
                              ...(renderProps.values?.roles?.[
                                role as "admin" | "editor"
                              ] ?? []),
                              ...(checked ? [slug] : []),
                            ])
                            if (checked) {
                              const opoziteRole =
                                role === "admin" ? "editor" : "admin"
                              renderProps.setFieldValue(
                                `roles.${opoziteRole}`,
                                (
                                  renderProps.values?.roles?.[opoziteRole] ?? []
                                ).filter((item) => item !== slug)
                              )
                            }
                          }}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </PageSection>

          <PageSection>
            <Button type="submit" onClick={renderProps.submitForm}>
              <IoSaveOutline /> Uložit
            </Button>
          </PageSection>
        </Form>
      )}
    </Formik>
  )
}

const Url = styled.p`
  font-size: 0.8rem;
`
