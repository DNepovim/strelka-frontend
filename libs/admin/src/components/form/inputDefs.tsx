import { Field, FieldProps } from "./Field"

export enum InputDefs {
  Text = "text",
  TextArea = "textarea",
}

export const inputDefs = {
  [InputDefs.Text]: (props: FieldProps) => <Field {...props} />,
  [InputDefs.TextArea]: (props: FieldProps) => (
    <Field {...props} as="textarea" />
  ),
}
