import { Input } from "antd"
import React from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export const TextInput: React.FC<FieldProps<string>> = (props) => (
  <Fieldset<string> {...props}>
    {(renderProps) => <Input {...renderProps} />}
  </Fieldset>
)
