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
import { blocksDefsList, BlocksDefs, BlockTemplates } from "@local/lib/src"
import { Button } from "antd"
import React from "react"
import { SortableAdminBlockFields } from "../adminFieldsDef"
import AppstoreAddOutlined from "@ant-design/icons/lib/icons/AppstoreAddOutlined"

export interface BlockEditorProps {
  blocks: BlocksDefs[]
  setValue: (field: string, value: any) => void
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
  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={(event) => {
          const { active, over } = event
          const items = blocks.map((v) => v.id)

          if (!over || active.id === over.id || !items) {
            return
          }

          const overIndex = items.indexOf(over.id)
          const activeIndex = items.indexOf(active.id)
          const newOrder = arrayMove(items, activeIndex, overIndex)

          setValue(name, newOrder)
        }}
      >
        <SortableContext
          items={blocks.map((v) => v.id) ?? []}
          strategy={verticalListSortingStrategy}
        >
          {blocks.map((block, index) => (
            <SortableAdminBlockFields
              key={block.id}
              index={index}
              id={block.id}
              {...(block.template
                ? blocksDefsList[block.template as BlockTemplates]
                : {})}
              onRemove={() =>
                setValue(
                  name,
                  blocks.filter((_, i) => i !== index)
                )
              }
              onTemplateChange={(template) =>
                setValue(`${name}[${index}].template`, template)
              }
            />
          ))}
        </SortableContext>
      </DndContext>
      <Button
        icon={<AppstoreAddOutlined />}
        onClick={() => setValue(name, [...(blocks ?? []), { id: uuid() }])}
      >
        Přidat blok
      </Button>
    </>
  )
}
