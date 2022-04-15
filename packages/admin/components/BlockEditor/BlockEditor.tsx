/** @jsxImportSource @emotion/react */
import { v4 as uuid } from "uuid"
import {
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  DndContext,
  closestCenter,
} from "@dnd-kit/core"
import {
  sortableKeyboardCoordinates,
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { blocksDefsList, BlocksDefs, BlockTemplates } from "@local/lib"
import React, { useState } from "react"
import { BlockEditorBlock } from "../BlockEditorBlock/BlockEditorBlock"
import { css } from "@emotion/react"
import { insertToArray } from "../../utils/insertToArray"

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
  const [_, setFocusOn] = useState<number | null>(null)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  return (
    <div
      css={css`
        background: white;
        padding: 32px 16px;
        min-height: 60vh;
      `}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={(event) => {
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
        }}
      >
        <SortableContext
          id={name}
          items={blocks.map((v) => v.id) ?? []}
          strategy={verticalListSortingStrategy}
        >
          {blocks.map((block, index) => (
            <BlockEditorBlock
              name={`${name}[${index}]`}
              key={block.id}
              id={block.id}
              {...(block.template
                ? blocksDefsList[block.template as BlockTemplates]
                : {})}
              onFocus={() => setFocusOn(index)}
              onBlockRemove={() =>
                setValue(
                  name,
                  blocks.filter((_, i) => i !== index)
                )
              }
              onGoUp={() => {
                setFocusOn(index - 1)
              }}
              onGoDown={() => {
                setFocusOn(index + 1)
              }}
              onBlockDuplicate={() => {
                setValue(
                  name,
                  insertToArray(blocks, { ...block, id: uuid() }, index)
                )
              }}
              onTemplateChange={(template) =>
                setValue(`${name}[${index}].template`, template)
              }
              onBlockAdd={(template: BlockTemplates) => {
                setValue(
                  name,
                  insertToArray(
                    blocks,
                    {
                      id: uuid(),
                      template,
                      fields: blocksDefsList[template]?.getDefautlValues?.(),
                    },
                    index
                  )
                )
                setFocusOn(index + 1)
              }}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  )
}
