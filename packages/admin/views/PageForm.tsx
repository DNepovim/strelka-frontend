import { css } from "@emotion/react"
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined"
import { fonts, global, RenderBlocks } from "@local/lib/src"
import { Button, Space, Switch, Col, Form } from "antd"
import { Formik, FormikHelpers } from "formik"
import React, { useState } from "react"
import { BlockEditor } from "../components/BlockEditor/BlockEditor"
import { FlexRow } from "../components/FlexRow/FlexRow"
import { TextInput } from "../components/Inputs/TextInput/TextInput"
import { PageWrapper } from "../components/PageHeader/PageWrapper"
import { Preview } from "../components/Preview/Preview"
import { PageWithContent, pageToCreateSchema, PageId } from "../schemas/page"

type Model = PageWithContent

interface PageFormProps {
  initialValues: Model
  onSave: (values: Model) => Promise<PageId>
}

export const PageForm: React.FC<PageFormProps> = ({
  initialValues,
  onSave,
}) => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false)

  return (
    <Formik<PageWithContent>
      onSubmit={async (
        values: PageWithContent,
        helpers: FormikHelpers<PageWithContent>
      ) => {
        await onSave(values)
        helpers.setValues(values)
      }}
      validationSchema={pageToCreateSchema}
      initialValues={initialValues}
    >
      {(props) => (
        <PageWrapper
          title={<TextInput name="name" />}
          subTitle={<TextInput name="slug" />}
          breadcrumb={{
            routes: [
              { breadcrumbName: "Stránky", path: "" },
              { breadcrumbName: "Hlavní stránka", path: "" },
            ],
          }}
          extra={[
            <Button
              key="save"
              type="primary"
              icon={<SaveOutlined />}
              onClick={async () => props.submitForm()}
              disabled={props.isSubmitting}
              loading={props.isSubmitting}
            >
              Uložit
            </Button>,
          ]}
        >
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
