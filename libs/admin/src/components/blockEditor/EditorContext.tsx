import { useField } from "formik"
import React, { ReactNode, useContext, useRef, useState } from "react"

interface EditorContext {
  isInEditor?: boolean
}

const defaultContext = {
  isInEditor: true,
}

export const EditorContext = React.createContext<EditorContext>(defaultContext)

export const EditorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state] = useState<EditorContext>({ isInEditor: true })

  return (
    <EditorContext.Provider value={state}>{children}</EditorContext.Provider>
  )
}

export const useValue = (name: string, order: number) => {
  const context = useContext(EditorContext)
  const isEditable = context.isInEditor
  const [{ value }, _, { setValue }] = useField(
    `blocks[${order}].fields.${name}`
  )
  const childrenRef = useRef<string>(value)

  return isEditable
    ? {
        innertext: value,
        children: childrenRef.current,
        contentEditable: true,
        onInput: (e) => setValue(e.currentTarget.textContent),
      }
    : {
        children: value,
      }
}
