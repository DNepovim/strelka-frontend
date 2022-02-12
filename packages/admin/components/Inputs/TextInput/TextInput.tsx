import { Input } from "antd"
import React from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export const TextInput: React.FC<Omit<FieldProps<string>, "children">> = (
  props
) => (
  <Fieldset<string> {...props}>
    {(renderProps) => <Input {...renderProps} />}
  </Fieldset>
)
