/** @jsxImportSource @emotion/react */
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined"
import AppstoreAddOutlined from "@ant-design/icons/lib/icons/AppstoreAddOutlined"
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
import { Button, Form, Row, Col, Space, Switch } from "antd"
import { Formik, FormikHelpers } from "formik"
import { SortableAdminBlockFields } from "../../components/adminFieldsDef"
import { useState } from "react"
import { css } from "@emotion/react"
import { Preview } from "../../components/Preview/Preview"
import { PageWrapper } from "../../components/PageHeader/PageWrapper"
import {
  BlockTemplates,
  blocksDefList,
  RenderBlocks,
  fonts,
  global,
} from "@local/lib/src"
import { NextPage } from "next"
import { pageToCreateSchema, PageWithContent } from "../../schemas/page"
import { TextInput } from "../../components/Inputs/TextInput/TextInput"
import { v4 as uuid } from "uuid"
import { createPage } from "../../api/createPage"

export const PageCreatePage: NextPage = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

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
      initialValues={{ name: "", slug: "", content: [] }}
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
                    <RenderBlocks blocks={props.values.content} />
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
                    const items = props.values.content?.map((v) => v.id)

                    if (!over || active.id === over.id || !items) {
                      return
                    }

                    const overIndex = items.indexOf(over.id)
                    const activeIndex = items.indexOf(active.id)
                    const newOrder = arrayMove(items, activeIndex, overIndex)

                    props.setFieldValue("content", newOrder)
                  }}
                >
                  <SortableContext
                    items={props.values.content?.map((v) => v.id) ?? []}
                    strategy={verticalListSortingStrategy}
                  >
                    {props.values.content?.map((block, index) => (
                      <SortableAdminBlockFields
                        key={block.id}
                        index={index}
                        id={block.id}
                        {...(block.template
                          ? blocksDefList[block.template as BlockTemplates]
                          : {})}
                        onRemove={() =>
                          props.setFieldValue(
                            "content",
                            props.values.content?.filter((_, i) => i !== index)
                          )
                        }
                        onTemplateChange={(template) =>
                          props.setFieldValue(
                            `content[${index}].template`,
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
                    props.setFieldValue("content", [
                      ...(props.values.content ?? []),
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

export default PageCreatePage
