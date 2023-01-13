import styled from "@emotion/styled"
import React from "react"
import { Field, FieldProps, Input } from "./Field"
import TextareaAutosize from "react-textarea-autosize"

export interface TextAreaInputProps extends Omit<FieldProps, "children"> {}

export const TextAreaInput: React.FC<TextAreaInputProps> = (props) => {
  return (
    <Field {...props}>
      {(renderProps) => (
        <StyledInput {...renderProps} as={TextareaAutosize} minRows={5} />
      )}
    </Field>
  )
}

const StyledInput = styled(Input)`
  resize: vertical;
`
