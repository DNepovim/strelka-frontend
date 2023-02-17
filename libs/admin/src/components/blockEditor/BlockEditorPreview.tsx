import { v4 as uuid } from "uuid"
import styled from "@emotion/styled"
import { FieldArray, useField } from "formik"
import React from "react"
import { BlockFieldProps } from "./BlockEditor"
import { BlockSortableItem } from "./BlockSortableItem"
import { BlockSortableWrapper } from "./BlockSortableWrapper"
import { theme } from "../../theme"
import { useEditorDispatchers, useEditorState } from "./EditorContext"
import { Block } from "src/blockDefs"

export const BlockEditorPreview: React.FC<BlockFieldProps> = ({
  name,
  blockDefs,
  setFieldValue,
}) => {
  const [{ value }] = useField<Block<any>[]>(name)

  const { registerBlockMeta } = useEditorDispatchers()
  const { blockMeta } = useEditorState()
  return (
    <EditorPreview>
      <FieldArray name={name}>
        {({ remove, insert, move }) => (
          <BlockSortableWrapper blocks={value} setFieldValue={setFieldValue}>
            {value.map((block, index) => (
              <BlockSortableItem
                id={block.id}
                key={block.id}
                hideControl={block.id !== blockMeta?.id}
                onMoveUp={() => move(index, index - 1)}
                onMoveDown={() => move(index, index + 1)}
                onAddUp={() =>
                  insert(index, {
                    id: uuid(),
                    template: "paragraph",
                    fields: { title: "", text: "" },
                  })
                }
                onAddBottom={() =>
                  insert(index + 1, {
                    id: uuid(),
                    template: "paragraph",
                    fields: {
                      title: { value: "Nejaky nadpis" },
                      row: [
                        {
                          id: uuid(),
                          fields: { text: { value: "Nejaky text" } },
                        },
                      ],
                    },
                  })
                }
                onRemove={() => remove(index)}
                onClick={() =>
                  // TODO remove "!"
                  registerBlockMeta!({
                    id: block.id,
                    template: block.template,
                    order: index,
                  })
                }
              >
                {React.createElement(
                  blockDefs.find(
                    (blockDef) => block.template === blockDef.template
                  )?.component!,
                  {
                    block: {
                      id: block.id,
                      template: block.template,
                      order: index,
                    },
                  }
                )}
              </BlockSortableItem>
            ))}
          </BlockSortableWrapper>
        )}
      </FieldArray>
    </EditorPreview>
  )
}

const EditorPreview = styled.div`
  background-color: white;
  border: ${theme.styles.border};
  border-radius: 4px;
`
