import { InputType } from "@local/lib/src/ui/blocks/enums"
import React from "react"
import { CheckInput } from "./CheckInput/CheckInput"
import { NumberInput } from "./NumberInput/NumberInput"
import { SelectInput } from "./SelectInput/SelectInput"
import { TextAreaInput } from "./TextAreaInput/TextAreaInput"
import { TextInput } from "./TextInput/TextInput"

export const adminInputsComponents: Record<InputType, React.FC<any>> = {
  [InputType.Text]: (props) => <TextInput {...props} />,
  [InputType.TextArea]: (props) => <TextAreaInput {...props} />,
  [InputType.Number]: (props) => <NumberInput {...props} />,
  [InputType.Select]: (props) => <SelectInput {...props} />,
  [InputType.Checkbox]: (props) => <CheckInput {...props} />,
}
