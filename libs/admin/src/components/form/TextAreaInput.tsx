import { Field as FormikField } from "formik"
import React from "react"
import { Field, FieldProps } from "./Field"

export interface TextAreaInputProps extends Omit<FieldProps, "children"> {}

export const TextAreaInput: React.FC<TextAreaInputProps> = (props) => (
  <Field {...props}>
    {(renderProps) => <FormikField {...renderProps} as="textarea" />}
  </Field>
)
