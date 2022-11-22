import { Field as FormikField } from "formik"
import React from "react"
import { Field, FieldProps } from "./Field"

export interface SelectOption {
  value: string
  label: string
}

export interface SelectInputProps extends FieldProps {
  options: SelectOption[]
}

// export const SelectInput: React.FC<SelectInputProps> = (props) => (
//   <Field {...props}>
//     {(renderProps) => (
//       <FormikField {...renderProps} as="select">
//         {props.options.map(({ value, label }) => (
//           <option key={value} value={value}>
//             {label}
//           </option>
//         ))}
//       </FormikField>
//     )}
//   </Field>
// )
