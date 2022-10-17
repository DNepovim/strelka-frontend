import React, { ChangeEvent, ChangeEventHandler } from "react"
import { v4 as uuid } from "uuid"
import { Formik, Form, Field as FormikField } from "formik"
import { blockDefs, Page } from "@strelka/ui"
import {
  TitleInput,
  Field,
  Disclosure,
  PageSection,
  Popover,
  ButtonGroup,
  theme,
  BlockFields,
  Button,
  webalize,
} from "@strelka/admin-ui"
import { IoAddOutline, IoSaveOutline } from "react-icons/io5"
import styled from "@emotion/styled"
import { BlockTemplates } from "@strelka/ui/src/blocks/BlockTemplates"

interface PageForm {
  onSubmit: (values: Page) => void
  initialData: Page
}

export const PageForm: React.FC<PageForm> = ({ onSubmit, initialData }) => {
  return (
    <Formik<Partial<Page>> initialValues={initialData} onSubmit={onSubmit}>
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
            {(renderProps.values?.blocks ?? []).map((block, index) => (
              <Disclosure header={block.template} key={block.id}>
                <BlockFields<BlockTemplates>
                  name={`blocks[${index}]`}
                  template={block.template}
                  blockDefs={blockDefs}
                />
              </Disclosure>
            ))}
            <Popover
              content={
                <ButtonGroup
                  layout="vertical"
                  withoutFrame
                  items={blockDefs.map(({ template, title, icon }) => ({
                    type: "button",
                    key: "button",
                    label: (
                      <>
                        {icon}&nbsp;{title}
                      </>
                    ),
                    onClick: () =>
                      renderProps.setFieldValue("blocks", [
                        ...(renderProps.values.blocks ?? []),
                        { id: uuid(), template, fields: { title: "" } },
                      ]),
                  }))}
                />
              }
            >
              <AddBlockButton circled>
                <IoAddOutline /> Přidat blok
              </AddBlockButton>
            </Popover>
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

const AddBlockButton = styled(Button)`
  margin: 1rem auto;

  svg {
    transform: rotate(0);
    transition: transform 300ms ${theme.styles.animationFunction};
  }

  &:hover svg {
    transform: rotate(90deg);
  }
`

const Url = styled.p`
  font-size: 0.8rem;
`
