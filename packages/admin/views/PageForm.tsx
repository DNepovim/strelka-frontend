/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined"
import { fonts, global, RenderBlocks } from "@local/lib/src"
import { Button, Col, Form, message, Row, Tabs } from "antd"
import { Formik, FormikHelpers } from "formik"
import React from "react"
import { BlockEditor } from "../components/BlockEditor/BlockEditor"
import { FlexRow } from "../components/FlexRow/FlexRow"
import { PageWrapper } from "../components/PageHeader/PageWrapper"
import { Preview } from "../components/Preview/Preview"
import { pageToCreateSchema, PageFormValues, PageRole } from "../schemas/page"
import { useRouter } from "next/dist/client/router"
import { routes } from "../routes"
import { webalize } from "@local/lib"
import { PagesSelectInput } from "../components/Inputs/PagesSelectInput/PagesSelectInput"
import { Input, Select } from "formik-antd"

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
  // const [isPreviewVisible, setIsPreviewVisible] = useState(false)
  const isPreviewVisible = false
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
        <Form layout="vertical">
          <PageWrapper
            breadcrumb={[
              { breadcrumbName: "Stránky", path: routes.pagesList.getLink() },
              {
                breadcrumbName: props.values.name,
                path: routes.editPage.getLink(props.values.slug),
              },
            ]}
            title={
              <Input
                css={css`
                  color: rgba(0, 0, 0, 0.85);
                  font-weight: 600;
                  font-size: 38px;
                  line-height: 1.23;
                `}
                name="name"
                onChange={(value: { target: { value: string } }) => {
                  const fieldValue = value?.target?.value
                  if (!props.touched.slug && autoFillSlug) {
                    props.setFieldValue("slug", webalize(value.target.value))
                  }
                  props.setFieldValue("name", fieldValue)
                }}
              />
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
            <Tabs defaultActiveKey="content">
              <Tabs.TabPane tab="Obsah" key="content">
                {/* <Row>
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
          </Row> */}
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
                    <BlockEditor
                      name="content"
                      blocks={props.values.content ?? []}
                      setValue={props.setFieldValue}
                    />
                  </Col>
                </FlexRow>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Nastavení" key="settings">
                <Row>
                  <Col span="12">
                    <Form.Item label="Role">
                      <Select
                        name="role"
                        options={[
                          { label: "Stránka", value: PageRole.Page },
                          {
                            label: "Úvodní stránka",
                            value: PageRole.FrontPage,
                          },
                          {
                            label: "Detail události",
                            value: PageRole.EventDetail,
                          },
                        ]}
                        onChange={(value) => {
                          props.setFieldValue("role", value)
                          if (value !== PageRole.Page)
                            props.setFieldValue("slug", "")
                        }}
                      />
                    </Form.Item>
                    <Form.Item label="Odkaz">
                      <Input
                        name="slug"
                        disabled={props.values.role !== PageRole.Page}
                        onChange={(value) => {
                          props.setFieldValue(
                            "slug",
                            webalize(value.target.value)
                          )
                        }}
                      />
                    </Form.Item>
                    {/* TODO filter out pages with role eventDetail */}
                    <Form.Item label="Nadřazená stránka">
                      <PagesSelectInput
                        disabled={props.values.role === PageRole.FrontPage}
                        name="parentPageId"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Tabs.TabPane>
            </Tabs>
          </PageWrapper>
        </Form>
      )}
    </Formik>
  )
}
