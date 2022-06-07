import React from "react"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { BlocksDefs, blocksDefsList, BlockTemplates } from "@local/lib/src"
import { FieldArray, useField } from "formik"
import { BlockEditorBlock } from "./BlockEditorBlock"

export const SortableContainer: React.FC<{
  name: string
}> = ({ name }) => {
  const [field] = useField<BlocksDefs[]>(name)
  return (
    <SortableContext
      id={name}
      items={field.value.map((v) => v.id) ?? []}
      strategy={verticalListSortingStrategy}
    >
      <FieldArray name={name}>
        {(arrayHelepers) =>
          field.value.map((block, index) => (
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
  )
}
