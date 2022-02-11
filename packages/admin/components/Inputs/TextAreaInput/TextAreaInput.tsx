import { Input } from "antd"
import { useField } from "formik"
import React from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export const TextAreaInput: React.FC<FieldProps<string>> = (props) => (
  <Fieldset<string> {...props}>
    {(renderProps) => <Input.TextArea {...renderProps} rows={10} />}
  </Fieldset>
)
