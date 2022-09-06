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
import React, { useCallback, useMemo } from "react"
import styled from "@emotion/styled"
import { createEditor, BaseEditor, Transforms } from "slate"
import {
  withReact,
  Slate,
  ReactEditor,
  Editable,
  RenderElementProps,
  useSlate,
} from "slate-react"
import { BlockEditorBlock } from "./BlockEditorBlock"
import { Format, HoveringToolbar } from "./HoveringToolbar"

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
                    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
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

const EditorContainer = styled.div`
  background: white;
  padding: 32px 16px;
  min-height: 60vh;
`

export type TextType = {
  id: string
  text: string
  [Format.Bold]?: true
  [Format.Italic]?: true
}

interface Block {
  id: string
  type: BlockTemplates
  children: (Block | TextType)[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: Block
    Text: TextType
  }
}
