import { Checkbox } from "antd"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export const CheckInput: React.FC<FieldProps<boolean | undefined>> = (
  props
) => (
  <Fieldset<boolean> {...props}>
    {(renderProps) => <Checkbox {...renderProps} />}
  </Fieldset>
)
