import { map } from "lodash"
import { createElement } from "react"
import { inputDefs } from "../form/inputDefs"
import { useEditorState } from "./EditorContext"

export const AddFields: React.FC = () => {
  const { additionalFields, blockMeta, fieldMeta } = useEditorState()
  const fieldAddFields = additionalFields.field
  if (!fieldAddFields || !blockMeta || !fieldMeta) {
    return <></>
  }
  return (
    <>
      {map(fieldAddFields, (field, key) => {
        const name = `blocks[${blockMeta.order}].fields.${fieldMeta.name}.${key}`

        return createElement(inputDefs[field.input], {
          name,
          key: name,
          label: field.label,
        })
      })}
    </>
  )
}
