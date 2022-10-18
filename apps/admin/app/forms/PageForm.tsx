import React, { ChangeEvent } from "react"
import { Formik, Form } from "formik"
import { blockDefs, Page } from "@strelka/ui"
import {
  TitleInput,
  PageSection,
  Button,
  webalize,
  BlockEditor,
} from "@strelka/admin-ui"
import { IoSaveOutline } from "react-icons/io5"
import styled from "@emotion/styled"
import { BlockTemplates } from "@strelka/ui/src/blocks/BlockTemplates"

interface PageForm {
  onSubmit: (values: Page) => void
  initialData: Page
}

export const PageForm: React.FC<PageForm> = ({ onSubmit, initialData }) => {
  return (
    <Formik<Page>
      initialValues={{ ...initialData, blocks: initialData.blocks ?? [] }}
      onSubmit={onSubmit}
    >
      {(renderProps) => (
        <Form>
          <PageSection>
            <TitleInput
              id="title"
              name="title"
              placeholder="Název stránky"
              onChange={(value: ChangeEvent<HTMLInputElement>) => {
                const currentValue = value.target.value
                renderProps.setFieldValue("slug", webalize(currentValue ?? ""))
                renderProps.setFieldValue("title", currentValue ?? "")
              }}
            />
            <Url>https://www.strelka.cz/{renderProps.values.slug}</Url>
          </PageSection>

          <PageSection>
            <BlockEditor<BlockTemplates>
              blocks={renderProps.values.blocks}
              blockDefs={blockDefs}
              setFieldValue={(value) =>
                renderProps.setFieldValue("blocks", value)
              }
            />
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
