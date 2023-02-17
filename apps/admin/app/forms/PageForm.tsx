import React, { ChangeEvent } from "react"
import { Formik, Form } from "formik"
import { blockDefs } from "@strelka/ui"
import {
  TitleInput,
  PageSection,
  Button,
  webalize,
  BlockEditor,
  EditableUrl,
} from "@strelka/admin-ui"
import { IoSaveOutline } from "react-icons/io5"
import { Page } from "firebase/page"
import { config } from "~/config"

interface PageFormProps {
  onSubmit: (values: Page) => void
  initialData: Page
  fixedSlug?: boolean
}

export const PageForm: React.FC<PageFormProps> = ({
  onSubmit,
  initialData,
  fixedSlug,
}) => (
  <Formik<Page>
    initialValues={{ ...initialData, blocks: initialData.blocks ?? [] }}
    onSubmit={onSubmit}
  >
    {({ setFieldValue, submitForm, touched }) => (
      <Form>
        <PageSection>
          <TitleInput
            id="title"
            name="title"
            placeholder="Název stránky"
            onChange={(value: ChangeEvent<HTMLInputElement>) => {
              const currentValue = value.target.value
              if (!touched.slug && !fixedSlug) {
                setFieldValue("slug", webalize(currentValue ?? ""))
              }
              setFieldValue("title", currentValue ?? "")
            }}
          />
          <EditableUrl name="slug" url={config.url} />
        </PageSection>

        <PageSection>
          <BlockEditor
            name="blocks"
            blockDefs={blockDefs}
            setFieldValue={(value) => setFieldValue("blocks", value)}
          />
        </PageSection>

        <PageSection>
          <Button type="submit" onClick={submitForm}>
            <IoSaveOutline /> Uložit
          </Button>
        </PageSection>
      </Form>
    )}
  </Formik>
)
