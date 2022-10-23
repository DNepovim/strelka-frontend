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
import { Disclosure } from "../Disclosure"
import { BlockFields } from "./BlockFields"
import { AddBlockButton } from "./AddBlockButton"
import { Block, BlockDef } from "../../blockDefs"
import { FieldArray } from "formik"

interface BlockFieldProps<BlockTemplates> {
  blocks: Block<BlockTemplates, any>[]
  blockDefs: BlockDef<any, BlockTemplates>[]
  setFieldValue: (blocks: Block<BlockTemplates, any>[]) => void
  name: string
}

export const BlockEditor = <BlockTemplates extends string>({
  blocks,
  blockDefs,
  setFieldValue,
  name,
}: BlockFieldProps<BlockTemplates>) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  return (
    <FieldArray name={name}>
      {({ remove, push }) => (
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
              const activeIndex = findIndex(
                blocks,
                (item) => item.id === active.id
              )
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
                    blockDefs.find(
                      (blockDef) => blockDef.template === block.template
                    )?.title ?? block.template
                  }
                  onRemove={() => remove(index)}
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
              push({ id: uuid(), template, fields: {} })
            }}
          />
        </>
      )}
    </FieldArray>
  )
}
