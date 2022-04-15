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
import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable"
import { BlocksDefs } from "@local/lib"
import React from "react"
import { get } from "lodash"
import styled from "@emotion/styled"
import { SortableContainer } from "../SortableContainer/SortableContainer"

export interface BlockEditorProps {
  blocks: BlocksDefs[]
  setValue: (field: string, value: unknown) => void
  name: string
}

export const BlockEditor: React.FC<BlockEditorProps> = ({
  blocks,
  setValue,
  name,
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const onDragHandler = (event: DragEndEvent) => {
    const { active, over } = event
    const activeName = active.data.current?.sortable.containerId
    const currentBlocks = get({ content: blocks }, activeName)
    const ids = currentBlocks.map(({ id }: { id: string }) => id)

    if (!over || active.id === over.id || !ids) {
      return
    }

    const overIndex = ids.indexOf(over.id)
    const activeIndex = ids.indexOf(active.id)
    const newOrder = arrayMove(currentBlocks, activeIndex, overIndex)

    setValue(activeName, newOrder)
  }

  return (
    <EditorContainer>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragHandler}
      >
        <SortableContainer name={name} />
      </DndContext>
    </EditorContainer>
  )
}

const EditorContainer = styled.div`
  background: white;
  padding: 32px 16px;
  min-height: 60vh;
`
