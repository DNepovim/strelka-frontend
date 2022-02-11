import { InputNumber } from "antd"
import React from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export const NumberInput: React.FC<FieldProps<number>> = (props) => (
  <Fieldset<number> {...props}>
    {(renderProps) => <InputNumber {...renderProps} />}
  </Fieldset>
)
