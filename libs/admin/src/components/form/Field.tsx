import styled from "@emotion/styled"
import { Field as FormikField } from "formik"
import { ReactNode } from "react"

export interface FieldProps {
  label: ReactNode
  name: string
}

export const Field: React.FC<FieldProps> = ({ label, name }) => (
  <Label>
    {label && <p>{label}</p>}
    <Input id={name} name={name} />
  </Label>
)

export const Label = styled.label`
  display: flex;
  flex-flow: column;
`

export const Input = styled(FormikField)`
  padding: 0.4em 1em;
  border: 1px solid #ccc;
`
