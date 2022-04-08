/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { AdditonalFieldInputType, InputType } from "@local/lib"
import { useField } from "formik"
import React, { FocusEventHandler, KeyboardEventHandler } from "react"
import { CheckInput } from "./CheckInput/CheckInput"
import { NumberInput } from "./NumberInput/NumberInput"
import { RichTextEditor } from "./RichTextInput/RichTextInput"
import { SelectInput } from "./SelectInput/SelectInput"
import { TextAreaInput } from "./TextAreaInput/TextAreaInput"
import { TextInput } from "./TextInput/TextInput"

export const additionalFieldsInputsComponents: Record<
  AdditonalFieldInputType,
  React.FC<any>
> = {
  [AdditonalFieldInputType.Text]: (props) => <TextInput {...props} />,
  [AdditonalFieldInputType.TextArea]: (props) => <TextAreaInput {...props} />,
  [AdditonalFieldInputType.Number]: (props) => <NumberInput {...props} />,
  [AdditonalFieldInputType.Select]: (props) => <SelectInput {...props} />,
  [AdditonalFieldInputType.Checkbox]: (props) => <CheckInput {...props} />,
}

interface InputProps {
  name: string
  autofocus: boolean
  onKeyDown: KeyboardEventHandler
  onFocus: FocusEventHandler
}

const HeadlineInput: React.FC<InputProps> = ({ name, ...inputProps }) => {
  const [field] = useField(name)

  return (
    <input
      {...field}
      {...inputProps}
      css={css`
        font-size: 2em;
        font-weight: bold;
        border: none;
        width: 100%;
        &:focus {
          outline: none;
        }
      `}
    />
  )
}

export const inputTypeComponents: Record<InputType, React.FC<any>> = {
  [InputType.Heading]: HeadlineInput,
  [InputType.RichText]: RichTextEditor,
}
