/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { AdditonalFieldInputType, InputType } from "@local/lib"
import { Checkbox, Form, Input, InputNumber, Select } from "formik-antd"
import React, { FocusEventHandler, KeyboardEventHandler } from "react"
import { Transforms } from "slate"
import { RenderElementProps, useSlate } from "slate-react"
import { ImagePickerInput } from "./ImagePicker/ImagePickerInput"
import { ContainerInput } from "./ContainerInput/ContainerInput"
import { RichTextEditor } from "./RichTextInput/RichTextInput"

export const additionalFieldsInputsComponents: Record<
  AdditonalFieldInputType,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const HeadlineInput: React.FC<RenderElementProps> = (props) => (
  <h1
    {...props.attributes}
    css={css`
      font-size: 2em;
      font-weight: bold;
      border: none;
      width: 100%;
      &:focus {
        outline: none;
      }
    `}
  >
    {props.children}
  </h1>
)

const SubHeadlineInput: React.FC<RenderElementProps> = (props) => (
  <h2
    {...props.attributes}
    css={css`
      font-size: 1.4em;
      font-weight: bold;
      border: none;
      width: 100%;
      &:focus {
        outline: none;
      }
    `}
  >
    {props.children}
  </h2>
)

const ImageInput: React.FC<RenderElementProps> = (props) => {
  const editor = useSlate()
  return (
    <div {...props.attributes} contentEditable={false}>
      {props.children}
      <ImagePickerInput
        value=""
        onPickHandler={(value) =>
          Transforms.setNodes(editor, { imageId: value })
        }
      />
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const inputTypeComponents: Record<InputType, React.FC<any>> = {
  [InputType.Heading]: HeadlineInput,
  [InputType.SubHeading]: SubHeadlineInput,
  [InputType.RichText]: RichTextEditor,
  [InputType.Image]: ImagePickerInput,
  [InputType.Container]: ContainerInput,
}
