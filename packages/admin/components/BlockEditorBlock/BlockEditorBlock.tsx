/** @jsxImportSource @emotion/react */
import { v4 as uuid } from "uuid"
import { CSS } from "@dnd-kit/utilities"
import { useSortable } from "@dnd-kit/sortable"
import { BlockDef, blocksDefsList } from "@local/lib"
import { Space, Dropdown, Menu, Collapse as AntCollapse } from "antd"
import React, { forwardRef, PropsWithChildren } from "react"
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined"
import HolderOutlined from "@ant-design/icons/lib/icons/HolderOutlined"
import SwapOutlined from "@ant-design/icons/lib/icons/SwapOutlined"
import EllipsisOutlined from "@ant-design/icons/lib/icons/EllipsisOutlined"
import CopyOutlined from "@ant-design/icons/lib/icons/CopyOutlined"
import { AdminFieldset } from "../AdminFieldset/AdminFieldset"
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { BlockTemplates, InputType } from "@local/lib"
import { inputTypeComponents } from "../Inputs"
import { ArrayHelpers, useField } from "formik"

// TODO divide this file

export type BlockEditorBlockProps = Partial<BlockDef<unknown>> & {
  id: string
  name: string
  index: number
  arrayHelpers: ArrayHelpers
}

export const BlockEditorBlock: React.FC<BlockEditorBlockProps> = ({
  id,
  name,
  index,
  arrayHelpers,
  additionalFields,
  inputType,
  title,
}) => {
  const nameWithIndex = `${name}[${index}]`
  const [field] = useField(nameWithIndex)
  const { setNodeRef } = useSortable({ id })

  return (
    <DndWrapper ref={setNodeRef} id={id}>
      <FlexContainer>
        <BlockControl>
          <AddNewBlock index={index} arrayHelpers={arrayHelpers} />
          <BlockHolder
            index={index}
            id={id}
            arrayHelpers={arrayHelpers}
            value={field.value}
          />
        </BlockControl>
        <FullWidthContainer>
          {inputType && (
            <InputTypeElement inputType={inputType} name={nameWithIndex} />
          )}
          {additionalFields && (
            <Collapse>
              <AntCollapse.Panel key="neco" header={title}>
                <AdminFieldset
                  path={`${nameWithIndex}.fields`}
                  fields={additionalFields}
                />
              </AntCollapse.Panel>
            </Collapse>
          )}
        </FullWidthContainer>
      </FlexContainer>
    </DndWrapper>
  )
}

const BlocksMenuItems: React.FC<{
  onClick: (template: BlockTemplates) => void
}> = ({ onClick }) => (
  <>
    {Object.values(blocksDefsList).map((block, index) => (
      <Menu.Item key={index} onClick={() => onClick(block.template)}>
        {block.icon ? React.createElement(block.icon) : <PlusOutlined />}
        &nbsp;
        {block.title}
      </Menu.Item>
    ))}
  </>
)

const DndWrapper = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ id: string }>
>(({ id, children }, ref) => {
  const { transform, transition } = useSortable({ id })
  return (
    <div
      ref={ref}
      css={css`
        transform: ${CSS.Transform.toString(transform)};
        transition: ${transition};
        &:hover ${BlockControl} {
          visibility: visible;
        }
      `}
    >
      {children}
    </div>
  )
})

const AddNewBlock: React.FC<{ index: number; arrayHelpers: ArrayHelpers }> = ({
  index,
  arrayHelpers,
}) => (
  <Dropdown
    trigger={["click"]}
    overlay={
      <Menu>
        <BlocksMenuItems
          onClick={(template) =>
            arrayHelpers.insert(index + 1, {
              id: uuid(),
              template,
              fields: blocksDefsList[template]?.getDefautlValues?.(),
            })
          }
        />
      </Menu>
    }
  >
    <PlusOutlined />
  </Dropdown>
)

const BlockHolder: React.FC<{
  index: number
  arrayHelpers: ArrayHelpers
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  id: string
}> = ({ index, arrayHelpers, value, id }) => {
  const { attributes, listeners } = useSortable({ id })
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.SubMenu
            key="changeBlock"
            title="Změnit blok"
            icon={<SwapOutlined />}
          >
            <BlocksMenuItems
              onClick={(template) =>
                arrayHelpers.replace(index, { ...value, template })
              }
            />
          </Menu.SubMenu>
          <Menu.Item
            key="duplicateBlock"
            icon={<CopyOutlined />}
            onClick={() =>
              arrayHelpers.insert(index + 1, {
                ...value,
                id: uuid(),
              })
            }
          >
            Duplikovat
          </Menu.Item>
          <Menu.Item
            key="removeBlock"
            icon={<DeleteOutlined />}
            onClick={() => arrayHelpers.remove(index)}
            danger
          >
            Odebrat
          </Menu.Item>
        </Menu>
      }
    >
      <HolderOutlined {...attributes} {...listeners} />
    </Dropdown>
  )
}

const InputTypeElement: React.FC<{ inputType: InputType; name: string }> = ({
  inputType,
  name,
}) =>
  React.createElement(inputTypeComponents[inputType], {
    name: `${name}.fields.content`,
  })

const Collapse = styled(AntCollapse)`
  margin: 8px;
  .ant-collapse-header {
    padding: 16px 8px;
  }
`

const BlockControl = styled(Space)`
  align-items: flex-start;
  visibility: hidden;
  padding-right: 4px;
`

const FlexContainer = styled.div`
  display: flex;
`

const FullWidthContainer = styled.div`
  width: 100%;
`
