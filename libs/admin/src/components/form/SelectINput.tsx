import React from "react"
import { Field, FieldProps } from "./Field"
import ReactSelect from "react-select"

export interface SelectInputOption {
  value: string
  label: string
}

export interface SelectInputProps extends FieldProps {
  options: SelectInputOption[]
}

export const SelectInput: React.FC<SelectInputProps> = (props) => {
  return (
    <Field<SelectInputProps> {...props}>
      {(renderProps) => <ReactSelect {...renderProps} />}
    </Field>
  )
}
