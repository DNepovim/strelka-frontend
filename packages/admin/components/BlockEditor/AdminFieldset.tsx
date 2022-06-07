/** @jsxImportSource @emotion/react */
import React from "react"
import { AdminFields, isGroupField } from "@local/lib"
import { additionalFieldsInputsComponents } from "../Inputs"
import { getFieldNamePath } from "../../utils/getFieldNamePath"
import { ClonableFields } from "./ClonableFields"

interface AdminFieldsetProps<T> {
  fields: AdminFields<T>
  legend?: string
  path?: string
  clonable?: true
}

export const AdminFieldset: React.FC<
  AdminFieldsetProps<Record<string, unknown>>
> = ({ legend, fields, path }) => (
  <fieldset>
    {legend && <legend>{legend}</legend>}
    {Object.entries(fields).map(([name, field]) => {
      if (field.clonable) {
        if (isGroupField(field)) {
          return (
            <ClonableFields
              key={getFieldNamePath(name, path)}
              name={getFieldNamePath(name, path)}
              fields={field.fields}
            />
          )
        }
        return (
          <ClonableFields
            key={getFieldNamePath(name, path)}
            name={getFieldNamePath(name, path)}
            component={additionalFieldsInputsComponents[field.inputType]}
          />
        ) // TODO resolve typescript
      }
      if (isGroupField(field)) {
        return (
          <AdminFieldset
            key={getFieldNamePath(name, path)}
            legend={field.label}
            fields={field.fields}
            path={getFieldNamePath(name, path)}
          />
        )
      }
      return React.createElement(
        additionalFieldsInputsComponents[field.inputType],
        {
          key: getFieldNamePath(name, path),
          name: getFieldNamePath(name, path),
          label: field.label,
        }
      ) // TODO resolve typescript
    })}
  </fieldset>
)
