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
import { BlockSortableWrapper } from "./BlockSortableWrapper"
import React from "react"
import { EditorProvider } from "./EditorContext"

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
  return (
    <EditorProvider>
      <FieldArray name={name}>
        {({ remove, push }) => (
          <>
            <BlockSortableWrapper<BlockTemplates>
              blocks={blocks}
              blockDefs={blockDefs}
              setFieldValue={setFieldValue}
            >
              <>
                {blocks.map((block, index) =>
                  React.createElement(
                    blockDefs.find(
                      (blockDef) => block.template === blockDef.template
                    )?.component!,
                    { order: index, key: block.id }
                  )
                )}
              </>
            </BlockSortableWrapper>
            <AddBlockButton
              blockDefs={blockDefs}
              onButtonAdd={(template) => {
                push({ id: uuid(), template, fields: { title: "", text: "" } })
              }}
            />
          </>
        )}
      </FieldArray>
    </EditorProvider>
  )
}
