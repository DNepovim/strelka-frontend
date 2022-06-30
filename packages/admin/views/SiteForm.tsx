/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined"
import { Button, Col, Form, message, Row } from "antd"
import { Formik, FormikHelpers } from "formik"
import React from "react"
import { PageWrapper } from "../components/PageWrapper/PageWrapper"
import { useRouter } from "next/dist/client/router"
import { routes } from "../routes"
import { webalize } from "@local/lib"
import { Input } from "formik-antd"
import { Site, siteToCreateSchema } from "../schemas/site"

type Model = Site

interface SiteFormProps {
  initialValues: Model
  onSave: (values: Model) => Promise<string | undefined>
  autoFillSlug?: boolean
}

export const SiteForm: React.FC<SiteFormProps> = ({
  initialValues,
  onSave,
  autoFillSlug,
}) => {
  const router = useRouter()

  return (
    <Formik<Model>
      onSubmit={async (values: Model, helpers: FormikHelpers<Model>) => {
        try {
          await onSave(values)
          helpers.setValues(values)
          await message.success("Sekce byla úspěšně uložena.")
          const url = routes.editSite.getLink(values.slug)
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
      validationSchema={siteToCreateSchema}
      initialValues={initialValues}
    >
      {(props) => (
        <Form layout="vertical">
          <PageWrapper
            breadcrumb={[
              { breadcrumbName: "Sekce", path: routes.sitesList.getLink() },
              {
                breadcrumbName: props.values.name,
                path: routes.editSite.getLink(props.values.slug),
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
            <Row>
              <Col span="12">
                <Form.Item label="Odkaz">
                  <Input
                    name="slug"
                    onChange={(value) => {
                      props.setFieldValue("slug", webalize(value.target.value))
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </PageWrapper>
        </Form>
      )}
    </Formik>
  )
}
