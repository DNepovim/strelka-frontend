/** @jsxImportSource @emotion/react */
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
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { BlocksDefs, InputType } from "@local/lib"
import React, { useCallback, useMemo } from "react"
import { get } from "lodash"
import styled from "@emotion/styled"
import { createEditor, BaseEditor, Descendant, Transforms } from "slate"
import {
  withReact,
  Slate,
  ReactEditor,
  Editable,
  RenderElementProps,
  useSlate,
} from "slate-react"
import { BlockEditorBlock } from "../BlockEditorBlock/BlockEditorBlock"

export interface BlockEditorProps {
  blocks: BlocksDefs[]
  setValue: (field: string, value: unknown) => void
  name: string
}

const initialValue = [
  {
    id: "one",
    type: InputType.RichText,
    children: [{ id: "one-one", text: "First" }],
  },
  {
    id: "two",
    type: InputType.Heading,
    children: [{ id: "two-one", text: "Second" }],
  },
  {
    id: "three",
    type: InputType.Heading,
    children: [{ id: "three-one", text: "Third" }],
  },
]

export const BlockEditor: React.FC<BlockEditorProps> = ({
  blocks,
  setValue,
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

  // const renderLeaf = useCallback((props) => <Leaf {...props} />, [])

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
        <Slate editor={editor} value={initialValue}>
          <SortableContainer>
            <Editable renderElement={renderElement} />
            {/* <SortableContainer name={name} /> */}
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

type Text = { id: string; text: string; bold?: true }

interface Block {
  id: string
  type: InputType
  children: (Block | Text)[]
}

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: Block
    Text: Text
  }
}
