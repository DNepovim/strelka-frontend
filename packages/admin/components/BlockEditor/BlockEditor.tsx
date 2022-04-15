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
import { blocksDefsList, BlocksDefs, BlockTemplates } from "@local/lib"
import React from "react"
import { BlockEditorBlock } from "../BlockEditorBlock/BlockEditorBlock"
import { get } from "lodash"
import { FieldArray } from "formik"
import styled from "@emotion/styled"

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
        <SortableContext
          id={name}
          items={blocks.map((v) => v.id) ?? []}
          strategy={verticalListSortingStrategy}
        >
          <FieldArray name={name}>
            {(arrayHelepers) =>
              blocks.map((block, index) => (
                <BlockEditorBlock
                  name={name}
                  index={index}
                  arrayHelpers={arrayHelepers}
                  key={block.id}
                  id={block.id}
                  {...(block.template
                    ? blocksDefsList[block.template as BlockTemplates]
                    : {})}
                />
              ))
            }
          </FieldArray>
        </SortableContext>
      </DndContext>
    </EditorContainer>
  )
}

const EditorContainer = styled.div`
  background: white;
  padding: 32px 16px;
  min-height: 60vh;
`
