import React from "react"
import { Formik, Form } from "formik"
import { Page } from "@strelka/ui"
import { useFetcher } from "@remix-run/react"
import { TitleInput, Field, Button } from "@strelka/admin-ui"
import { IoSaveOutline } from "react-icons/io5"

interface PageForm {
  onSubmit: (values: Page) => void
  initialData: Page
}

export const PageForm: React.FC<PageForm> = ({ onSubmit, initialData }) => {
  return (
    <Formik<Partial<Page>> initialValues={initialData} onSubmit={onSubmit}>
      {(renderProps) => (
        <Form>
          <TitleInput id="title" name="title" placeholder="Název stránky" />
          <Field name="slug" label="URL" />
          <Button type="submit" onClick={renderProps.submitForm}>
            <IoSaveOutline /> Uložit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
