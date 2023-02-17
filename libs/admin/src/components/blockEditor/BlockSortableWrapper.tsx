import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers"
import { findIndex } from "lodash"
import { ReactNode } from "react"
import { Block, BlockDef } from "src"

export interface BlockSortableWrapperProps {
  children: ReactNode
  blocks: Block<any>[]
  blockDefs: BlockDef<any>[]
  setFieldValue: (blocks: Block<any>[]) => void
}

export const BlockSortableWrapper = ({
  children,
  blocks,
  setFieldValue,
}: BlockSortableWrapperProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
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
        {children}
      </SortableContext>
    </DndContext>
  )
}
