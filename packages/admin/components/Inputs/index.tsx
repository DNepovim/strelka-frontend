/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { AdditonalFieldInputType, InputType } from "@local/lib"
import { useField } from "formik"
import { Checkbox, Form, Input, InputNumber, Select } from "formik-antd"
import React, { FocusEventHandler, KeyboardEventHandler } from "react"
import { ImagePickerInput } from "../ImagePickerInput/ImagePickerInput"
import { RichTextEditor } from "./RichTextInput/RichTextInput"

export const additionalFieldsInputsComponents: Record<
  AdditonalFieldInputType,
  React.FC<any>
> = {
  [AdditonalFieldInputType.Text]: (props) => (
    <Form.Item {...props}>
      <Input {...props} />
    </Form.Item>
  ),
  [AdditonalFieldInputType.TextArea]: (props) => (
    <Form.Item {...props}>
      <Input.TextArea {...props} />
    </Form.Item>
  ),
  [AdditonalFieldInputType.Number]: (props) => (
    <Form.Item {...props}>
      <InputNumber {...props} />
    </Form.Item>
  ),
  [AdditonalFieldInputType.Select]: (props) => (
    <Form.Item {...props}>
      <Select {...props} />
    </Form.Item>
  ),
  [AdditonalFieldInputType.Checkbox]: (props) => (
    <Form.Item {...props}>
      <Checkbox {...props} />
    </Form.Item>
  ),
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

const SubHeadlineInput: React.FC<InputProps> = ({ name, ...inputProps }) => {
  const [field] = useField(name)

  return (
    <input
      {...field}
      {...inputProps}
      css={css`
        font-size: 1.4em;
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
  [InputType.SubHeading]: SubHeadlineInput,
  [InputType.RichText]: RichTextEditor,
  [InputType.Image]: ImagePickerInput,
}
