import { Field as FormikField } from "formik"
import React from "react"
import { Field, FieldProps } from "./Field"

export interface TextInputProps extends Omit<FieldProps, "children"> {}

export const TextInput: React.FC<TextInputProps> = (props) => (
  <Field {...props}>
    {(renderProps) => <FormikField {...renderProps} {...props} />}
  </Field>
)
