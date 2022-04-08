import React, { useMemo, useState } from "react"
import { convertFromRaw, convertToRaw, EditorState } from "draft-js"
import Editor from "@draft-js-plugins/editor"
import createInlineToolbarPlugin from "@draft-js-plugins/inline-toolbar"
import { useField } from "formik"
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
} from "@draft-js-plugins/buttons"
import "@draft-js-plugins/inline-toolbar/lib/plugin.css"

export const RichTextEditor: React.FC<{ name: string }> = ({ name }) => {
  const [field, _, helpers] = useField(name)

  const [plugins, InlineToolbar] = useMemo(() => {
    const inlineToolbarPlugin = createInlineToolbarPlugin()
    return [[inlineToolbarPlugin], inlineToolbarPlugin.InlineToolbar]
  }, [])

  const [editorState, setEditorState] = useState(() =>
    field.value
      ? EditorState.createWithContent(convertFromRaw(field.value))
      : EditorState.createEmpty()
  )

  const onChange = (value: EditorState): void => {
    const contentState = editorState.getCurrentContent()
    setEditorState(value)
    const raw = convertToRaw(contentState)
    helpers.setValue(raw)
  }

  return (
    <>
      <Editor editorState={editorState} onChange={onChange} plugins={plugins} />
      <InlineToolbar>
        {(externalProps) => (
          <div>
            <BoldButton {...externalProps} />
            <ItalicButton {...externalProps} />
            <UnderlineButton {...externalProps} />
          </div>
        )}
      </InlineToolbar>
    </>
  )
}
