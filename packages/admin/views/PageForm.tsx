/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined"
import { fonts, global, RenderBlocks } from "@local/lib/src"
import { Button, Space, Switch, Col, Form, message, Input, Row } from "antd"
import { Formik, FormikHelpers } from "formik"
import React, { useState } from "react"
import { BlockEditor } from "../components/BlockEditor/BlockEditor"
import { FlexRow } from "../components/FlexRow/FlexRow"
import { PageWrapper } from "../components/PageHeader/PageWrapper"
import { Preview } from "../components/Preview/Preview"
import { pageToCreateSchema, PageFormValues } from "../schemas/page"
import { useRouter } from "next/dist/client/router"
import { routes } from "../routes"
import { webalize } from "@local/lib"
import { Fieldset } from "../components/Inputs/Fieldset/Fieldset"

type Model = PageFormValues

interface PageFormProps {
  initialValues: Model
  onSave: (values: Model) => Promise<string | undefined>
  autoFillSlug?: boolean
}

export const PageForm: React.FC<PageFormProps> = ({
  initialValues,
  onSave,
  autoFillSlug,
}) => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false)
  const router = useRouter()

  return (
    <Formik<Model>
      onSubmit={async (values: Model, helpers: FormikHelpers<Model>) => {
        try {
          await onSave(values)
          helpers.setValues(values)
          await message.success("Stránka byla úspěšně uložena.")
          const url = routes.editPage.getLink(values.slug)
          const currentUrl = router.pathname
          if (url !== currentUrl) {
            await router.push(url)
          }
        } catch (e) {
          await message.error("Něco se pokazilo. Zkus to znovu.")
          // eslint-disable-next-line
          console.error(e)
        }
      }}
      validationSchema={pageToCreateSchema}
      initialValues={{ ...initialValues, siteId: "" }}
    >
      {(props) => (
        <PageWrapper
          breadcrumb={[
            { breadcrumbName: "Stránky", path: routes.pagesList.getLink() },
            {
              breadcrumbName: props.values.name,
              path: routes.editPage.getLink(props.values.slug),
            },
          ]}
          title={
            <Fieldset<string> name="name" label="Název">
              {(fieldProps) => (
                <Input
                  css={css`
                    margin-bottom: 0.5em;
                    color: rgba(0, 0, 0, 0.85);
                    font-weight: 600;
                    font-size: 38px;
                    line-height: 1.23;
                  `}
                  name="name"
                  value={fieldProps.value}
                  onChange={(value: { target: { value: string } }) => {
                    const fieldValue = value?.target?.value
                    if (!props.touched.slug && autoFillSlug) {
                      props.setFieldValue("slug", webalize(value.target.value))
                    }
                    props.setFieldValue(fieldProps.name, fieldValue)
                  }}
                />
              )}
            </Fieldset>
          }
          actions={[
            <Button
              key="save"
              type="primary"
              icon={<SaveOutlined />}
              onClick={async () => props.submitForm()}
              disabled={props.isSubmitting || !props.isValid}
              loading={props.isSubmitting}
            >
              Uložit
            </Button>,
          ]}
        >
          <Row>
            <Col>
              <Fieldset<string> name="slug" label="URL">
                {(fieldProps) => (
                  <Input
                    name={fieldProps.name}
                    value={fieldProps.value}
                    onChange={(value: { target: { value: string } }) => {
                      props.setFieldValue(
                        fieldProps.name,
                        webalize(value.target.value)
                      )
                    }}
                  />
                )}
              </Fieldset>
            </Col>
          </Row>
          <Row>
            <Col span="24">
              <Space
                css={css`
                  margin: 0 0 16px;
                `}
              >
                Náhled:
                <Switch
                  checked={isPreviewVisible}
                  onChange={() => setIsPreviewVisible(!isPreviewVisible)}
                />
              </Space>
            </Col>
          </Row>
          <FlexRow>
            {isPreviewVisible && (
              <Col span={12}>
                <Preview zoom={0.4}>
                  <div css={[fonts, global]}>
                    <RenderBlocks blocks={props.values.content} />
                  </div>
                </Preview>
              </Col>
            )}
            <Col span={isPreviewVisible ? 12 : 24}>
              <Form>
                <BlockEditor
                  name="content"
                  blocks={props.values.content ?? []}
                  setValue={props.setFieldValue}
                />
              </Form>
            </Col>
          </FlexRow>
        </PageWrapper>
      )}
    </Formik>
  )
}
