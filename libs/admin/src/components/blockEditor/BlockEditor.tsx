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
import { findIndex } from "lodash"
import { ReactNode } from "react"
import { Disclosure } from "../Disclosure"
import { BlockFields } from "./BlockFields"
import { AddBlockButton } from "./AddBlockButton"
import { BlockDef } from "src/blockDefs"

export interface GenericBlockDef<BlockTemplates> {
  id: string
  template: BlockTemplates
}

interface BlockFieldProps<
  BlockDefs extends GenericBlockDef<BlockTemplates>,
  BlockTemplates
> {
  blocks: BlockDefs[]
  blockDefs: BlockDef<GenericBlockDef<BlockTemplates>, BlockTemplates>[]
  setFieldValue: (blocks: BlockDefs[]) => void
}

export const BlockEditor = <BlockTemplates extends string>({
  blocks,
  blockDefs,
  setFieldValue,
}: BlockFieldProps<
  GenericBlockDef<BlockTemplates>,
  BlockTemplates
>) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={(event) => {
          const { active, over } = event

          if (!over || active.id === over.id) {
            return
          }

          const overIndex = findIndex(blocks, (item) => item.id === over.id)
          const activeIndex = findIndex(blocks, (item) => item.id === active.id)
          const newOrder = arrayMove(blocks, activeIndex, overIndex)

          setFieldValue(newOrder)
        }}
      >
        <SortableContext
          items={blocks.map((v) => v.id)}
          strategy={verticalListSortingStrategy}
        >
          {blocks.map((block, index) => (
            <Disclosure
              header={
                blockDefs.find((blockDef) => blockDef.id === block.id)?.title ??
                block.template
              }
              key={block.id}
              id={block.id}
            >
              <BlockFields<BlockTemplates>
                name={`blocks[${index}]`}
                template={block.template}
                blockDefs={blockDefs}
              />
            </Disclosure>
          ))}
        </SortableContext>
      </DndContext>
      <AddBlockButton
        blockDefs={blockDefs}
        onButtonAdd={(template) => {
          setFieldValue([...blocks, { id: uuid(), template }])
        }}
      />
    </>
  )
}
