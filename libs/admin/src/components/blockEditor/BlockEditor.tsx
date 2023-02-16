import { v4 as uuid } from "uuid"
import { AddBlockButton } from "./AddBlockButton"
import { Block, BlockDef } from "../../blockDefs"
import { FieldArray } from "formik"
import { BlockSortableWrapper } from "./BlockSortableWrapper"
import React, { createElement } from "react"
import { EditorProvider, getFieldName, useEditorState } from "./EditorContext"
import styled from "@emotion/styled"
import { map } from "lodash"
import { inputDefs } from "../form/inputDefs"
import { theme } from "../../theme"
import { BlockSortableItem } from "./BlockSortableItem"

interface BlockFieldProps<BlockTemplates> {
  blocks: Block<BlockTemplates, any>[]
  blockDefs: BlockDef<any, BlockTemplates>[]
  setFieldValue: (blocks: Block<BlockTemplates, any>[]) => void
  name: string
}

const AdditionalFields: React.FC = () => {
  const { additionalFields, blockMeta, fieldMeta } = useEditorState()
  const fieldAddFields = additionalFields.field
  if (!fieldAddFields || !blockMeta || !fieldMeta) {
    return <></>
  }
  return (
    <>
      {map(fieldAddFields, (field, key) => {
        const name = getFieldName(blockMeta.order, fieldMeta.name, key)
        return createElement(inputDefs[field.input], {
          name,
          key: name,
        })
      })}
    </>
  )
}
export const BlockEditor = <BlockTemplates extends string>({
  blocks,
  blockDefs,
  setFieldValue,
  name,
}: BlockFieldProps<BlockTemplates>) => {
  return (
    <EditorProvider>
      <EditorContainer>
        <EditorPreview>
          <FieldArray name={name}>
            {({ remove, insert, move }) => (
              <BlockSortableWrapper<BlockTemplates>
                blocks={blocks}
                blockDefs={blockDefs}
                setFieldValue={setFieldValue}
              >
                {blocks.map((block, index) => (
                  <BlockSortableItem
                    id={block.id}
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
                        fields: { title: "", text: "" },
                      })
                    }
                    key={block.id}
                  >
                    {React.createElement(
                      blockDefs.find(
                        (blockDef) => block.template === blockDef.template
                      )?.component!,
                      {
                        blockMeta: {
                          order: index,
                          template: block.template,
                          id: block.id,
                        },
                      }
                    )}
                  </BlockSortableItem>
                ))}
              </BlockSortableWrapper>
            )}
          </FieldArray>
        </EditorPreview>
        <div>
          <AdditionalFields />
        </div>
      </EditorContainer>
    </EditorProvider>
  )
}

const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
`

const EditorPreview = styled.div`
  background-color: white;
  border: ${theme.styles.border};
  border-radius: 4px;
`
