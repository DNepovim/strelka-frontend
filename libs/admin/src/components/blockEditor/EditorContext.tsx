import { useField } from "formik"
import React, {
  FormEvent,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react"
import { InputDefs } from "../.."
import { useEditable } from "use-editable"

export interface BlockField {
  label: string
  input: InputDefs
}

export type BlockFields = Record<string, BlockField>

export interface BlockMeta {
  template: string
  order: number
  id: string
}

export interface FieldMeta {
  name: string
}

interface EditorState {
  isInEditor?: boolean
  blockMeta?: BlockMeta
  fieldMeta?: FieldMeta
  additionalFields: {
    block?: BlockFields
    field?: BlockFields
  }
}

interface EditorContextDispatchers {
  registerFieldAddFields?: (fields?: BlockFields) => void
  registerBlockMeta?: (meta: BlockMeta) => void
  registerFieldMeta?: (meta: FieldMeta) => void
}

const defaultContext = {
  isInEditor: true,
  additionalFields: {},
} satisfies EditorState

export const EditorContextState =
  React.createContext<EditorState>(defaultContext)
export const EditorContextDispatchers =
  React.createContext<EditorContextDispatchers>({})

export const useEditorState = () => useContext(EditorContextState)
export const useEditorDispatchers = () => useContext(EditorContextDispatchers)

interface RegisterFieldAddFieldsStateAction {
  type: "registerFieldAddFields"
  payload: {
    fields?: BlockFields
    blockMeta?: BlockMeta
  }
}

interface RegisterBlockMetaStateAction {
  type: "registerBlockMeta"
  payload: BlockMeta
}

interface RegisterFieldMetaStateAction {
  type: "registerFieldMeta"
  payload: FieldMeta
}

type EditorContextStateAction =
  | RegisterFieldAddFieldsStateAction
  | RegisterBlockMetaStateAction
  | RegisterFieldMetaStateAction

const editorContextReducer = (
  state: EditorState,
  { type, payload }: EditorContextStateAction
): EditorState => {
  switch (type) {
    case "registerFieldAddFields":
      return {
        ...state,
        additionalFields: {
          ...state.additionalFields,
          field: payload.fields,
        },
      }
    case "registerBlockMeta":
      return {
        ...state,
        blockMeta: payload,
      }
    case "registerFieldMeta":
      return {
        ...state,
        fieldMeta: payload,
      }
    default:
      return state
  }
}

export const EditorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(editorContextReducer, defaultContext)

  const memoState = useMemo(() => state, [state])
  const memoDispatchers = useMemo(
    () => ({
      registerFieldAddFields: (fields?: BlockFields) =>
        dispatch({ type: "registerFieldAddFields", payload: { fields } }),
      registerBlockMeta: (meta: BlockMeta) =>
        dispatch({ type: "registerBlockMeta", payload: meta }),
      registerFieldMeta: (meta: FieldMeta) =>
        dispatch({ type: "registerFieldMeta", payload: meta }),
    }),
    []
  )

  return (
    <EditorContextState.Provider value={memoState}>
      <EditorContextDispatchers.Provider value={memoDispatchers}>
        {children}
      </EditorContextDispatchers.Provider>
    </EditorContextState.Provider>
  )
}

export const useValue = (
  name: string,
  blockMeta: BlockMeta,
  fields?: BlockFields
) => {
  const { registerFieldAddFields, registerFieldMeta } = useEditorDispatchers()

  if (!blockMeta) {
    return
  }

  const [{ value }, _, { setValue }] = useField(
    `blocks[${blockMeta.order}].fields.${name}.value`
  )
  const childrenRef = useRef(null)

  useEditable(childrenRef, (value) => setValue(value))

  return {
    ref: childrenRef,
    children: value,
    onFocus: () => {
      if (fields && registerFieldAddFields) {
        registerFieldAddFields(fields)
      }
      if (registerFieldMeta) {
        registerFieldMeta({ name })
      }
    },
    style: {
      outline: "none",
    },
  }
}
