import { entries } from "lodash"
import React, { ReactElement } from "react"
import { BlockDef, isGroupField } from "../../blockDefs"
import { inputDefs } from "../form/inputDefs"

interface BlockFieldsProps {
  template: string
  blockDefs: BlockDef<any>[]
  name: string
}

export const BlockFields = ({
  template,
  blockDefs,
  name,
}: BlockFieldsProps): ReactElement => {
  const blockDef = blockDefs.find((def) => def.template === template)
  if (!blockDef) {
    return <></>
  }
  return (
    <>
      {entries(blockDef.fields).map(([key, def]) =>
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
