/** @jsxImportSource @emotion/react */
import { v4 as uuid } from "uuid"
import {
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  DndContext,
  closestCenter,
  DragEndEvent,
} from "@dnd-kit/core"
import {
  sortableKeyboardCoordinates,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { BlockTemplates } from "@local/lib"
import React, { useCallback, useEffect, useMemo, useRef } from "react"
import styled from "@emotion/styled"
import {
  createEditor,
  BaseEditor,
  Text,
  Transforms,
  Editor,
  Range,
} from "slate"
import {
  withReact,
  Slate,
  ReactEditor,
  Editable,
  RenderElementProps,
  useSlate,
  useFocused,
} from "slate-react"
import { BlockEditorBlock } from "./BlockEditorBlock"
import { css } from "@emotion/react"
import { Button } from "antd"
import ButtonGroup from "antd/lib/button/button-group"
import { Portal } from "../Portal"
import BoldOutlined from "@ant-design/icons/lib/icons/BoldOutlined"
import ItalicOutlined from "@ant-design/icons/lib/icons/ItalicOutlined"

export interface BlockEditorProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  onChange: (value: unknown) => void
}

export const BlockEditor: React.FC<BlockEditorProps> = ({
  value,
  onChange,
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const editor = useMemo(() => withReact(createEditor()), [])

  const renderElement = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (props: RenderElementProps) => <BlockEditorBlock {...props} />,
    []
  )

  const renderLeaf = useCallback(({ attributes, children, leaf }) => {
    if (leaf.bold) {
      children = <strong>{children}</strong>
    }

    if (leaf.italic) {
      children = <em>{children}</em>
    }

    return <span {...attributes}>{children}</span>
  }, [])

  const onDragHandler = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) {
      return
    }

    if (active.id !== over.id) {
      const ids = editor.children.map(({ id }) => id)
      const oldIndex = ids.indexOf(active.id)
      const newIndex = ids.indexOf(over.id)

      Transforms.moveNodes(editor, {
        at: [oldIndex],
        to: [newIndex],
      })
    }
  }

  return (
    <EditorContainer>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragHandler}
      >
        <Slate editor={editor} value={value ?? {}} onChange={onChange}>
          <HoveringToolbar />
          <SortableContainer>
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  Transforms.insertNodes(
                    editor,
                    {
                      id: uuid(),
                      type: BlockTemplates.RichText,
                      children: [{ id: uuid(), text: "" }],
                    },
                    { at: [editor.selection?.focus.path[0]! + 1], select: true }
                  )
                }
              }}
            />
          </SortableContainer>
        </Slate>
      </DndContext>
    </EditorContainer>
  )
}

const SortableContainer: React.FC = ({ children }) => {
  const editor = useSlate()
  return (
    <SortableContext
      items={editor.children.map(({ id }) => id) ?? []}
      strategy={verticalListSortingStrategy}
    >
      {children}
    </SortableContext>
  )
}

export enum Format {
  Bold = "bold",
  Italic = "italic",
}

const toggleFormat = (editor: Editor, format: Format) => {
  const isActive = isFormatActive(editor, format)
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true }
  )
}

const isFormatActive = (editor: Editor, format: Format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n[format] === true,
    mode: "all",
  })
  return !!match
}

const HoveringToolbar = () => {
  const ref = useRef<HTMLDivElement | null>()
  const editor = useSlate()
  const inFocus = useFocused()

  useEffect(() => {
    const el = ref.current
    const { selection } = editor

    if (!el) {
      return
    }

    if (
      !selection ||
      !inFocus ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      el.removeAttribute("style")
      return
    }

    const domSelection = window.getSelection()
    const domRange = domSelection.getRangeAt(0)
    const rect = domRange.getBoundingClientRect()
    el.style.opacity = "1"
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`
    el.style.left = `${
      rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
    }px`
  })

  return (
    <Portal>
      <div
        ref={ref}
        css={css`
          position: absolute;
          z-index: 1;
          top: -10000px;
          left: -10000px;
          margin-top: -6px;
          opacity: 0;
          transition: opacity 0.75s;
        `}
        onMouseDown={(e) => {
          // prevent toolbar from taking focus away from editor
          e.preventDefault()
        }}
      >
        <ButtonGroup>
          <Button
            icon={<BoldOutlined />}
            disabled={isFormatActive(editor, Format.Bold)}
            onClick={() => toggleFormat(editor, Format.Bold)}
          />
          <Button
            icon={<ItalicOutlined />}
            disabled={isFormatActive(editor, Format.Italic)}
            onClick={() => toggleFormat(editor, Format.Italic)}
          />
        </ButtonGroup>
      </div>
    </Portal>
  )
}

const EditorContainer = styled.div`
  background: white;
  padding: 32px 16px;
  min-height: 60vh;
`

type Text = { id: string; text: string; bold?: true }

export interface Block {
  id: string
  type: BlockTemplates
  children: (Block | Text)[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: Block
    Text: Text
  }
}
