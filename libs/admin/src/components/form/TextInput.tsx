import styled from "@emotion/styled"
import { Field as FormikField } from "formik"
import React from "react"
import { Field, FieldProps } from "./Field"

export interface TextInputProps extends Omit<FieldProps, "children"> {
  type?: "email" | "text"
  inline?: boolean
}

export const TextInput: React.FC<TextInputProps> = (props) => (
  <StyledField {...props}>
    {(renderProps) => (
      <FormikField {...renderProps} type={props.type ?? "text"} />
    )}
  </StyledField>
)

const StyledField = styled(Field)`
  display: inline-flex;
`
