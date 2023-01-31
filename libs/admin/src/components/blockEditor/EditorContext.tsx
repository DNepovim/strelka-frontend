import { useField } from "formik"
import React, {
  ReactNode,
  ReducerWithoutAction,
  useContext,
  useReducer,
  useRef,
  useState,
} from "react"
import { InputDefs } from "../.."

export interface BlockField {
  naem: string
  label: string
  input: InputDefs
}

interface EditorState {
  isInEditor?: boolean
  templates?: Record<string, { fields: BlockField[] }>
}

interface EditorContext {
  state: EditorState
  addBlockFields?: (template: string, fields: BlockField[]) => void
}

const defaultContext = {
  state: {
    isInEditor: true,
  },
}

export const EditorContext = React.createContext<EditorContext>(defaultContext)

interface EditorStateAction {
  type: "addBlockFields"
  payload: {
    template: string
    fields: BlockField[]
  }
}

const editorContextReducer = (
  state: EditorState,
  action: EditorStateAction
): EditorState => {
  switch (action.type) {
    case "addBlockFields":
      return {
        ...state,
        templates: {
          ...state.templates,
          [action.payload.template]: { fields: action.payload.fields },
        },
      }
    default:
      return state
  }
}

export const EditorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(editorContextReducer, {
    isInEditor: true,
  })

  return (
    <EditorContext.Provider
      value={{
        state,
        addBlockFields: (template: string, fields: BlockField[]) =>
          dispatch({ type: "addBlockFields", payload: { template, fields } }),
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}

export const useValue = (name: string, order: number) => {
  const context = useContext(EditorContext)
  const isEditable = context.state.isInEditor
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
