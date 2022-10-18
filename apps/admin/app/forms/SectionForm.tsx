import React, { ChangeEvent } from "react"
import { Formik, Form } from "formik"
import { PageSection, Button, TitleInput, webalize } from "@strelka/admin-ui"
import { IoSaveOutline } from "react-icons/io5"
import styled from "@emotion/styled"
import { Section } from "firebase/section"

interface SectionFormFormProps {
  onSubmit: (values: Section) => void
  initialData: Section
}

export const SectionForm: React.FC<SectionFormFormProps> = ({
  onSubmit,
  initialData,
}) => {
  return (
    <Formik<Section> initialValues={initialData} onSubmit={onSubmit}>
      {(renderProps) => (
        <Form>
          <PageSection>
            <TitleInput
              id="title"
              name="title"
              placeholder="Název sekce"
              onChange={(value: ChangeEvent<HTMLInputElement>) => {
                const currentValue = value.target.value
                renderProps.setFieldValue("slug", webalize(currentValue ?? ""))
                renderProps.setFieldValue("title", currentValue ?? "")
              }}
            />
            <Url>https://{renderProps.values.slug}.strelka.cz/</Url>
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
