import styled from "@emotion/styled"
import { Form } from "antd"
import { FieldInputProps, useField } from "formik"
import React, { ReactElement } from "react"

export interface FieldProps<T> {
  label?: string
  name: string
  children: React.FC<FieldInputProps<T>>
}

export const Fieldset = <T extends any>(props: FieldProps<T>): ReactElement => {
  const [field, meta] = useField(props.name)
  return (
    <Form.Item
      label={props.label}
      validateStatus={meta.touched && meta.error ? "error" : undefined}
      help={meta.touched && meta.error}
    >
      {props.children(field)}
    </Form.Item>
  )
}
