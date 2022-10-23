import { FieldProps } from "./Field"
import { TextAreaInput } from "./TextAreaInput"
import { TextInput } from "./TextInput"

export enum InputDefs {
  Text = "text",
  TextArea = "textarea",
}

export const inputDefs = {
  [InputDefs.Text]: TextInput,
  [InputDefs.TextArea]: TextAreaInput,
}
