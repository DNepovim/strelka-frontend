import { v4 as uuid } from "uuid"
import { useField, FieldArray } from "formik"
import React from "react"
import { BlockSortableItem } from "./BlockSortableItem"
import { BlockMeta } from "./EditorContext"
import { SortableWrapper } from "./SortableWrapper"
import { isEqual } from "lodash"

export const Repeater: React.FC<{
  children: React.FC<{ block: BlockMeta; name: string }>
  name: string
  block: BlockMeta
}> = ({ children, name, block }) => {
  const repeaterName = `blocks[${block.order}].fields.${name}`
  const [{ value }, _, { setValue }] = useField<any[] | undefined>(repeaterName)
  return (
    <Neco name={name} block={block} items={value} repeaterName={repeaterName}>
      {children}
    </Neco>
  )
}

const Neco: React.FC<{
  children: React.FC<{ block: BlockMeta; name: string }>
  name: string
  repeaterName: string
  items?: any[]
  block: BlockMeta
}> = React.memo(
  ({ children, name, repeaterName, items, block }) => (
    <FieldArray name={repeaterName}>
      {({ remove, insert, move }) => (
        <SortableWrapper name={repeaterName}>
          {(items ?? []).map((item, index) => (
            <BlockSortableItem
              id={item.id}
              key={item.id}
              onMoveUp={() => move(index, index - 1)}
              onMoveDown={() => move(index, index + 1)}
              onAddUp={() =>
                insert(index, {
                  id: uuid(),
                  text: { value: "Nejaky text" },
                  anotherText: { value: "Another nejaky text" },
                })
              }
              onAddBottom={() =>
                insert(index + 1, {
                  id: uuid(),
                  text: { value: "Nejaky text" },
                  anotherText: { value: "Another nejaky text" },
                })
              }
              onRemove={() => remove(index)}
            >
              {React.createElement(children, {
                block,
                name: `${name}[${index}]`,
              })}
            </BlockSortableItem>
          ))}
        </SortableWrapper>
      )}
    </FieldArray>
  ),
  (prevProps, nextProps) =>
    prevProps.items?.length === nextProps.items?.length &&
    prevProps.block.order === nextProps.block.order
)
