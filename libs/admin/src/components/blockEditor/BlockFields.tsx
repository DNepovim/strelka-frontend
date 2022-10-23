import React, { ReactElement } from "react"
import { BlockDef, isGroupField } from "../../blockDefs"
import { inputDefs } from "../form/inputDefs"

interface BlockFieldsProps<BlockTemplate> {
  template: BlockTemplate
  blockDefs: BlockDef<any, BlockTemplate>[]
  name: string
}

export const BlockFields = <BlockTemplate extends any>({
  template,
  blockDefs,
  name,
}: BlockFieldsProps<BlockTemplate>): ReactElement => {
  const blockDef = blockDefs.find((def) => def.template === template)
  if (!blockDef) {
    return <></>
  }
  return (
    <>
      {Object.entries(blockDef.fields).map(([key, def]) =>
        isGroupField(def) ? (
          <>Group field</>
        ) : (
          <React.Fragment key={key}>
            {inputDefs[def.input]({
              label: def.label,
              name: `${name}.fields[${key}]`,
            })}
          </React.Fragment>
        )
      )}
    </>
  )
}
