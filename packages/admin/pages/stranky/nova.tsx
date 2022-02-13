/** @jsxImportSource @emotion/react */
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined"
import { Button, Form, Col, Space, Switch } from "antd"
import { Formik, FormikHelpers } from "formik"
import { useState } from "react"
import { css } from "@emotion/react"
import { Preview } from "../../components/Preview/Preview"
import { PageWrapper } from "../../components/PageHeader/PageWrapper"
import { RenderBlocks, fonts, global } from "@local/lib"
import { NextPage } from "next"
import { pageToCreateSchema, PageWithContent } from "../../schemas/page"
import { TextInput } from "../../components/Inputs/TextInput/TextInput"
import { createPage } from "../../api/createPage"
import { BlockEditor } from "../../components/BlockEditor/BlockEditor"
import { FlexRow } from "../../components/FlexRow/FlexRow"

export const PageCreatePage: NextPage = () => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false)

  return (
    <Formik<PageWithContent>
      onSubmit={async (
        values: PageWithContent,
        helpers: FormikHelpers<PageWithContent>
      ) => {
        await createPage(values)
        helpers.setValues(values)
      }}
      validationSchema={pageToCreateSchema}
      initialValues={{
        id: "",
        name: "",
        updatedUserId: null,
        updatedAt: null,
        content: [],
        siteId: null,
        slug: "",
      }}
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

export default PageCreatePage
