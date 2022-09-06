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
import { ItemType } from "antd/lib/menu/hooks/useItems"

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
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
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

const getMenuItems = (
  onClick: (template: BlockTemplates) => void
): ItemType[] =>
  Object.values(blocksDefsList).map((block, index) => ({
    key: index,
    icon: block.icon ?? <PlusOutlined />,
    label: block.title,
    onClick: () => onClick(block.template),
  }))

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
    overlay={<Menu items={getMenuItems(onBlockAddHandler)} />}
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
        <Menu
          items={[
            {
              key: "changeBlock",
              label: "Změnit blok",
              icon: <SwapOutlined />,
              children: getMenuItems(onBlockTypeChangeHandler),
            },
            {
              key: "duplicateBlock",
              label: "Duplikovat",
              icon: <CopyOutlined />,
              onClick: onBlockDuplicateHandler,
            },
            {
              key: "removeBlock",
              icon: <DeleteOutlined />,
              onClick: onBlockRemoveHandler,
              danger: true,
              label: "Odebrat",
            },
          ]}
        />
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
