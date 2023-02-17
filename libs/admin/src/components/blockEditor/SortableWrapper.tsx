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
import { ReactNode } from "react"
import { useField } from "formik"
import { findIndex } from "lodash"

export interface SortableWrapperProps {
  children: ReactNode
  name: string
}

export const SortableWrapper = ({ children, name }: SortableWrapperProps) => {
  const [{ value }, _, { setValue }] = useField<{ id: string }[]>(name)
  const items = value ?? []
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  return (
    <DndContext
      id={name}
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
      onDragEnd={(event) => {
        const { active, over } = event

        if (!over || active.id === over.id) {
          return
        }

        const overIndex = findIndex(items, (item) => item.id === over.id)
        const activeIndex = findIndex(items, (item) => item.id === active.id)
        const newOrder = arrayMove(items, activeIndex, overIndex)

        setValue(newOrder)
      }}
    >
      <SortableContext
        items={value ?? []}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </DndContext>
  )
}
