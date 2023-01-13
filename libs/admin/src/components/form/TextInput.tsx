import styled from "@emotion/styled"
import { Field as FormikField } from "formik"
import React from "react"
import { Field, FieldProps, Input } from "./Field"

export interface TextInputProps extends Omit<FieldProps, "children"> {
  type?: "email" | "text"
  inline?: boolean
}

export const TextInput: React.FC<TextInputProps> = (props) => (
  <StyledField {...props}>
    {(renderProps) => <Input {...renderProps} type={props.type ?? "text"} />}
  </StyledField>
)

const StyledField = styled(Field)`
  display: inline-flex;
  border: 1px solid #ccc;
`
