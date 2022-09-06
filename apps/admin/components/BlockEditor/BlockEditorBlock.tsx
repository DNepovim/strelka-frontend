/** @jsxImportSource @emotion/react */
import { v4 as uuid } from "uuid"
import { CSS } from "@dnd-kit/utilities"
import { useSortable } from "@dnd-kit/sortable"
import { BlockDef, blocksDefsList } from "@local/lib"
import { Space, Dropdown, Menu, Collapse as AntCollapse } from "antd"
import React, { forwardRef, PropsWithChildren, useEffect } from "react"
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined"
import HolderOutlined from "@ant-design/icons/lib/icons/HolderOutlined"
import SwapOutlined from "@ant-design/icons/lib/icons/SwapOutlined"
import CopyOutlined from "@ant-design/icons/lib/icons/CopyOutlined"
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { BlockTemplates } from "@local/lib"
import { inputTypeComponents } from "../Inputs"
import { ArrayHelpers, Formik, useFormikContext } from "formik"
import { RenderElementProps, useSlate } from "slate-react"
import { Node, Transforms } from "slate"
import { AdminFieldset } from "./AdminFieldset"

export type BlockEditorBlockProps = Partial<BlockDef<unknown>> & {
  id: string
  name: string
  index: number
  arrayHelpers: ArrayHelpers
}

export const BlockEditorBlock: React.FC<RenderElementProps> = (props) => {
  const { id } = props.element
  const { setNodeRef, attributes, listeners } = useSortable({ id })
  const editor = useSlate()

  return (
    <DndWrapper ref={setNodeRef} id={id}>
      <FlexContainer>
        <BlockControl>
          <AddNewBlock
            onBlockAddHandler={(template) => {
              Transforms.insertNodes(
                editor,
                {
                  id: uuid(),
                  type: template,
                  children: [{ id: uuid(), text: "" }],
                },
                {
                  at: [],
                  match: (node) => (node as { id: string }).id === id,
                  select: true,
                }
              )
            }}
          />
          <BlockHolder
            {...attributes}
            {...listeners}
            id={id}
            onBlockTypeChangeHandler={(template) => {
              Transforms.setNodes(
                editor,
                {
                  type: template,
                },
                {
                  at: [],
                  match: (node) => (node as { id: string }).id === id,
                }
              )
            }}
            onBlockDuplicateHandler={() => {
              Transforms.insertNodes(
                editor,
                Node.get(editor, [editor.selection?.focus.path?.[0]!]),
                { at: [editor.selection?.focus.path[0]! + 1] }
              )
            }}
            onBlockRemoveHandler={() => Transforms.removeNodes(editor)}
          />
        </BlockControl>
        <FullWidthContainer>
          {props.element?.type && <InputTypeElement {...props} />}
          {blocksDefsList[props.element?.type]?.additionalFields && (
            <div contentEditable={false}>
              <Collapse>
                <AntCollapse.Panel key="neco" header="neco">
                  <Formik
                    initialValues={props.element.data ?? {}}
                    onSubmit={() => {}}
                  >
                    <>
                      <FormObserver
                        onChange={(values) => {
                          Transforms.setNodes(
                            editor,
                            {
                              data: values,
                            },
                            {
                              at: [],
                              match: (node) =>
                                (node as { id: string }).id === id,
                            }
                          )
                        }}
                      />
                      <AdminFieldset
                        fields={
                          blocksDefsList[props.element?.type]?.additionalFields!
                        }
                      />
                    </>
                  </Formik>
                </AntCollapse.Panel>
              </Collapse>
            </div>
          )}
        </FullWidthContainer>
      </FlexContainer>
    </DndWrapper>
  )
}

const FormObserver: React.FC<{ onChange: (values: unknown) => void }> = ({
  onChange,
}) => {
  const { values } = useFormikContext()
  useEffect(() => {
    onChange(values)
  }, [values, onChange])
  return <></>
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

const AddNewBlock: React.FC<{
  onBlockAddHandler: (template: BlockTemplates) => void
}> = ({ onBlockAddHandler }) => (
  <Dropdown
    trigger={["click"]}
    overlay={
      <Menu>
        <BlocksMenuItems onClick={(template) => onBlockAddHandler(template)} />
      </Menu>
    }
  >
    <PlusOutlined />
  </Dropdown>
)

const BlockHolder: React.FC<{
  id: string
  onBlockTypeChangeHandler: (tempalte: BlockTemplates) => void
  onBlockDuplicateHandler: () => void
  onBlockRemoveHandler: () => void
}> = ({
  id,
  onBlockTypeChangeHandler,
  onBlockDuplicateHandler,
  onBlockRemoveHandler,
}) => {
  const { attributes, listeners } = useSortable({ id })
  return (
    <Dropdown
      trigger={["contextMenu"]}
      overlay={
        <Menu>
          <Menu.SubMenu
            key="changeBlock"
            title="Změnit blok"
            icon={<SwapOutlined />}
          >
            <BlocksMenuItems
              onClick={(template) => onBlockTypeChangeHandler(template)}
            />
          </Menu.SubMenu>
          <Menu.Item
            key="duplicateBlock"
            icon={<CopyOutlined />}
            onClick={onBlockDuplicateHandler}
          >
            Duplikovat
          </Menu.Item>
          <Menu.Item
            key="removeBlock"
            icon={<DeleteOutlined />}
            onClick={onBlockRemoveHandler}
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

const InputTypeElement: React.FC<RenderElementProps> = (props) =>
  React.createElement(
    inputTypeComponents[blocksDefsList[props.element.type]?.inputs!], // remove excalamation mark
    props
  )

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
