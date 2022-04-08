/** @jsxImportSource @emotion/react */
import { CSS } from "@dnd-kit/utilities"
import { useSortable } from "@dnd-kit/sortable"
import { BlockDef, blocksDefsList } from "@local/lib"
import { Space, Dropdown, Menu, Collapse } from "antd"
import React, { KeyboardEvent } from "react"
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined"
import HolderOutlined from "@ant-design/icons/lib/icons/HolderOutlined"
import SwapOutlined from "@ant-design/icons/lib/icons/SwapOutlined"
import EllipsisOutlined from "@ant-design/icons/lib/icons/EllipsisOutlined"
import CopyOutlined from "@ant-design/icons/lib/icons/CopyOutlined"
import { AdminFieldset } from "../AdminFieldset/AdminFieldset"
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { defaultBlockTemplate } from "@local/lib/src/ui/blocks/enums"
import { inputTypeComponents } from "../Inputs"

export type BlockEditorBlockProps = Partial<BlockDef<any>> & {
  id: string
  name: string
  onFocus: () => void
  onBlockRemove: () => void
  onGoUp: () => void
  onGoDown: () => void
  onBlockDuplicate: () => void
  onTemplateChange: (tempalte: string) => void
  onBlockAdd: (tempalte: string) => void
}

export const BlockEditorBlock: React.FC<BlockEditorBlockProps> = ({
  id,
  name,
  additionalFields,
  inputType,
  title,
  onBlockRemove,
  onGoUp,
  onGoDown,
  onBlockDuplicate,
  onTemplateChange,
  onBlockAdd,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      css={css`
        &:hover ${BlockControl} {
          visibility: visible;
        }
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <BlockControl align="start">
          <Dropdown
            trigger={["click"]}
            overlay={
              <Menu>
                <BlocksMenuItems onClick={onBlockAdd} />
              </Menu>
            }
          >
            <PlusOutlined />
          </Dropdown>
          <Dropdown
            trigger={["click"]}
            overlay={
              <Menu>
                <Menu.SubMenu title="Změnit blok" icon={<SwapOutlined />}>
                  <BlocksMenuItems onClick={onTemplateChange} />
                </Menu.SubMenu>
                <Menu.Item onClick={onBlockDuplicate} icon={<CopyOutlined />}>
                  Zduplikovat
                </Menu.Item>
                <Menu.Item
                  onClick={onBlockRemove}
                  icon={<DeleteOutlined />}
                  danger
                >
                  Odebrat
                </Menu.Item>
              </Menu>
            }
          >
            <EllipsisOutlined />
          </Dropdown>
          <HolderOutlined {...attributes} {...listeners} />
        </BlockControl>
        <div
          css={css`
            width: 100%;
          `}
        >
          {inputType &&
            React.createElement(inputTypeComponents[inputType], {
              name: `${name}.fields.content`,
              onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => {
                switch (e.key) {
                  case "Enter":
                    e.preventDefault()
                    onBlockAdd(defaultBlockTemplate)
                    break
                  case "Backspace":
                    if (!e.currentTarget?.value?.length && !additionalFields) {
                      e.preventDefault()
                      onBlockRemove()
                      onGoUp()
                    }
                    break
                  case "ArrowUp":
                    onGoUp()
                    break
                  case "ArrowDown":
                    onGoDown()
                    break
                }
              },
            })}
          {additionalFields && (
            <Collapse
              css={css`
                margin: 8px;
                .ant-collapse-header {
                  padding: 16px 8px;
                }
              `}
            >
              <Collapse.Panel key="neco" header={title}>
                <AdminFieldset
                  path={`${name}.fields`}
                  fields={additionalFields}
                />
              </Collapse.Panel>
            </Collapse>
          )}
        </div>
      </div>
    </div>
  )
}

const BlockControl = styled(Space)`
  visibility: hidden;
`

const BlocksMenuItems: React.FC<{ onClick: (template: string) => void }> = ({
  onClick,
}) => (
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
