import { Select } from "antd"
import { ReactElement } from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export interface SelectInputProps<T> extends FieldProps<T> {
  options: {
    label: string
    value: T
  }[]
}

export const SelectInput = <T extends string | number>(
  props: SelectInputProps<T>
): ReactElement => (
  <Fieldset<string> {...props}>
    {(renderProps) => (
      <Select {...renderProps}>
        {props.options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    )}
  </Fieldset>
)
