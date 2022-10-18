import styled from "@emotion/styled"
import { Field as FormikField, useField } from "formik"
import { ChangeEvent, ReactNode } from "react"
import { theme } from "../../theme"

export interface FieldProps {
  label: ReactNode
  name: string
  as?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Field: React.FC<FieldProps> = ({ label, ...fieldProps }) => {
  const [field] = useField(fieldProps.name)
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Input {...fieldProps} {...field} />
    </Wrapper>
  )
}

export const Wrapper = styled.label`
  display: flex;
  flex-flow: column;
  margin-bottom: ${theme.layout.gap}rem;
`

export const Label = styled.p`
  margin: 0 0 0.4em;
`

export const Input = styled(FormikField)`
  padding: 0.4em 1em;
  border: 1px solid #ccc;
`
