/** @jsxImportSource @emotion/react */
import { v4 as uuid } from "uuid"
import * as yup from "yup"
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined"
import AppstoreAddOutlined from "@ant-design/icons/lib/icons/AppstoreAddOutlined"
import EyeOutlined from "@ant-design/icons/lib/icons/EyeOutlined"
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { Button, Form, Spin, Typography, Row, Col, Space, Switch } from "antd"
import { Formik, FormikHelpers } from "formik"
import { SortableAdminBlockFields } from "../../components/adminFieldsDef"
import { useParams } from "react-router"
import { User } from "@firebase/auth"
import { Centered } from "../../components/Centered/Centered"
import useSwr from "swr"
import { useState } from "react"
import { css } from "@emotion/react"
import { Preview } from "../../components/Preview/Preview"
import { PageWrapper } from "../../components/PageHeader/PageWrapper"
import {
  Page,
  BlockTemplates,
  blocksDefList,
  RenderBlocks,
  fonts,
  global,
  enumToSchemaOptions,
} from "@local/lib/src"

export const PageEditPage = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  const [isPreviewVisible, setIsPreviewVisible] = useState(false)

  const { slug } = useParams()
  const { data: page } = useSwr<Page>("/api/page/get", async (url) => {
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ slug }),
    })
    return await result.json()
  })

  if (!slug) {
    console.error("Slug is not defined.")
  }

  if (!page) {
    return (
      <Centered>
        <Spin />
      </Centered>
    )
  }

  return (
    <Formik<Page>
      onSubmit={async (values: Page, helpers: FormikHelpers<Page>) => {
        const today = new Date()
        const pageValues: Page = {
          title: page.title,
          lastEditedBy: "",
          lastEditedTime: today.toLocaleString("cs-CZ"),
          blocks: values.blocks,
        }
        await fetch("/api/page/edit", {
          method: "POST",
          body: JSON.stringify({ slug, pageValues }),
        })
        helpers.setValues(pageValues)
      }}
      validationSchema={() =>
        yup.lazy(() =>
          yup.array().of(
            yup.object().shape({
              template: yup
                .string()
                .oneOf(enumToSchemaOptions(BlockTemplates))
                .required(),
              fields: yup
                .mixed()
                .when("template", (template: BlockTemplates) =>
                  template ? blocksDefList[template].schema : yup.mixed()
                ),
            })
          )
        )
      }
      initialValues={page}
    >
      {(props) => (
        <PageWrapper
          title={<Typography.Title>{page.title}</Typography.Title>}
          subTitle={`naposledny upraveno ${props.values.lastEditedTime} uživatelem ${props.values.lastEditedBy}`}
          breadcrumb={{
            routes: [
              { breadcrumbName: "Stránky", path: "" },
              { breadcrumbName: "Hlavní stránka", path: "" },
            ],
          }}
          extra={[
            <Button
              key="preview"
              icon={<EyeOutlined />}
              href={`/api/preview?secret=${process.env.NEXT_PUBLIC_PREVIEW_TOKEN}&slug=/`} // TODO dynamic path
              target="_blank"
            >
              Náhled
            </Button>,
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
          <Row
            gutter={16}
            css={css`
              display: flex;
            `}
          >
            {isPreviewVisible && (
              <Col span={12}>
                <Preview zoom={0.4}>
                  <div css={[fonts, global]}>
                    <RenderBlocks blocks={page.blocks} />
                  </div>
                </Preview>
              </Col>
            )}
            <Col span={isPreviewVisible ? 12 : 24}>
              <Form>
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={(event) => {
                    const { active, over } = event

                    if (!over || active.id === over.id) {
                      return
                    }

                    const items = props.values.blocks.map((v) => v.id)
                    const overIndex = items.indexOf(over.id)
                    const activeIndex = items.indexOf(active.id)
                    const newOrder = arrayMove(
                      props.values.blocks,
                      activeIndex,
                      overIndex
                    )

                    props.setFieldValue("blocks", newOrder)
                  }}
                >
                  <SortableContext
                    items={props.values.blocks.map((v) => v.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {props.values.blocks.map((block, index) => (
                      <SortableAdminBlockFields
                        key={block.id}
                        index={index}
                        id={block.id}
                        {...(block.template
                          ? blocksDefList[block.template as BlockTemplates]
                          : {})}
                        onRemove={() =>
                          props.setFieldValue(
                            "blocks",
                            props.values.blocks.filter((_, i) => i !== index)
                          )
                        }
                        onTemplateChange={(template) =>
                          props.setFieldValue(
                            `blocks[${index}].template`,
                            template
                          )
                        }
                      />
                    ))}
                  </SortableContext>
                </DndContext>
                <Button
                  icon={<AppstoreAddOutlined />}
                  onClick={() =>
                    props.setFieldValue("blocks", [
                      ...props.values.blocks,
                      { id: uuid() },
                    ])
                  }
                >
                  Přidat blok
                </Button>
              </Form>
            </Col>
          </Row>
        </PageWrapper>
      )}
    </Formik>
  )
}
