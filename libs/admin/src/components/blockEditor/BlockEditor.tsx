import { Block, BlockDef } from "../../blockDefs"
import { EditorProvider } from "./EditorContext"
import styled from "@emotion/styled"
import { BlockEditorPreview } from "./BlockEditorPreview"
import { AddFields } from "./AddFields"
import { theme } from "../../theme"

export interface BlockFieldProps {
  blockDefs: BlockDef<any>[]
  setFieldValue: (blocks: Block<any>[]) => void
  name: string
}
export const BlockEditor = (props: BlockFieldProps) => {
  return (
    <EditorProvider>
      <EditorContainer>
        <BlockEditorPreview {...props} />
        <div>
          <AddFields />
        </div>
      </EditorContainer>
    </EditorProvider>
  )
}

const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: ${theme.layout.gap}rem;
`
