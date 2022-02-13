/** @jsxImportSource @emotion/react */
import { Button, Card, Dropdown, Menu, Space } from "antd"
import { FieldArray, useField } from "formik"
import React, { useState } from "react"
import { AdminFields, BlockDef, blocksDefsList, isGroupField } from "@local/lib"
import { DeleteOutlined } from "@ant-design/icons"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import HolderOutlined from "@ant-design/icons/lib/icons/HolderOutlined"
import { css } from "@emotion/react"
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined"
import Title from "antd/lib/typography/Title"
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined"
import PlusSquareOutlined from "@ant-design/icons/lib/icons/PlusSquareOutlined"
import styled from "@emotion/styled"
import { FieldProps } from "./Inputs/Fieldset/Fieldset"
import { adminInputsComponents } from "./Inputs"

// TODO refactor and divide to more files

export type AdminBlockFieldsProps = Partial<BlockDef<any>> & {
  id: string
  index: number
  onRemove: (index: number) => void
  onTemplateChange: (tempalte: string) => void
}

export const SortableAdminBlockFields: React.FC<AdminBlockFieldsProps> = ({
  id,
  index,
  adminFields,
  onRemove,
  template,
  onTemplateChange,
}) => {
  const [isOpened, setIsOpened] = useState(false)
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style}>
      <Card
        css={
          !isOpened &&
          css`
            .ant-card-body {
              padding: 0;
            }
          `
        }
        title={
          <Space>
            <Button type="text" {...attributes} {...listeners}>
              <HolderOutlined />
            </Button>
            <Button onClick={() => setIsOpened(!isOpened)} type="text">
              <RightOutlined
                css={css`
                  transition: transform 300ms !important;
                  ${isOpened && "transform: rotate(90deg);"}
                `}
              />
            </Button>
            <Title
              level={3}
              css={css`
                margin: 0 !important;
              `}
            >
              {template ? blocksDefsList[template].title : "..."}
              <Dropdown
                trigger={["click"]}
                overlay={
                  <Menu>
                    {Object.values(blocksDefsList).map((block, index) => (
                      <Menu.Item key={index}>
                        <Button
                          block
                          onClick={() => onTemplateChange(block.template)}
                        >
                          {block.title}
                        </Button>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <Button type="link">
                  <EditOutlined />
                </Button>
              </Dropdown>
            </Title>
          </Space>
        }
        extra={
          <Button
            onClick={() => onRemove(index)}
            icon={<DeleteOutlined />}
            danger
          >
            Odebrat
          </Button>
        }
      >
        {isOpened &&
          (adminFields ? (
            <AdminFieldset
              path={`blocks[${index}].fields`}
              fields={adminFields}
            />
          ) : (
            <div>Vyberte šablonu</div>
          ))}
      </Card>
    </div>
  )
}

interface AdminFieldsetProps<T> {
  fields: AdminFields<T>
  legend?: string
  path?: string
  clonable?: true
}

const AdminFieldset: React.FC<AdminFieldsetProps<Record<string, any>>> = ({
  legend,
  fields,
  path,
}) => (
  <fieldset>
    {legend && <legend>{legend}</legend>}
    {Object.entries(fields).map(([name, field]) => {
      if (field.clonable) {
        if (isGroupField(field)) {
          return (
            <ClonableFields name={getPath(name, path)} fields={field.fields} />
          )
        }
        return (
          <ClonableFields
            name={getPath(name, path)}
            component={adminInputsComponents[field.inputType]}
          />
        ) // TODO resolve typescript
      }
      if (isGroupField(field)) {
        return (
          <AdminFieldset
            legend={field.label}
            fields={field.fields}
            path={getPath(name, path)}
          />
        )
      }
      return React.createElement(adminInputsComponents[field.inputType], {
        key: getPath(name, path),
        name: getPath(name, path),
        label: field.label,
      }) // TODO resolve typescript
    })}
  </fieldset>
)

const getPath = (name: string, path?: string): string =>
  path ? `${path}[${name}]` : name

const ClonableFields: React.FC<{
  name: string
  fields?: AdminFields<any>
  component?: React.FC<Omit<FieldProps<any>, "children">>
}> = ({ name, fields, component }) => {
  const [field] = useField(name)
  return (
    <FieldArray
      name={name}
      render={(helpers) => (
        <>
          <ClonableContainer>
            {(Array.isArray(field.value) ? field.value : []).map((_, index) => (
              <ClonableItem
                key={index}
                css={css`
                  margin-bottom: 16px;
                `}
                title={
                  <div>
                    <HolderOutlined />
                  </div>
                }
                extra={
                  <Button
                    onClick={() => helpers.remove(index)}
                    icon={<DeleteOutlined />}
                    type="text"
                    danger
                  />
                }
              >
                {component &&
                  React.createElement(component, {
                    key: `${name}[${index}]`,
                    name: `${name}[${index}]`,
                  })}
                {fields && (
                  <AdminFieldset
                    key={`${name}[${index}]`}
                    fields={fields}
                    path={`${name}[${index}]`}
                  />
                )}
              </ClonableItem>
            ))}
          </ClonableContainer>
          <Button
            onClick={() => helpers.push(undefined)}
            icon={<PlusSquareOutlined />}
            type="primary"
            ghost
          >
            Přidat
          </Button>
        </>
      )}
    />
  )
}

const ClonableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`

const ClonableItem = styled(Card)`
  width: 300px;
  margin: 8px;
`
