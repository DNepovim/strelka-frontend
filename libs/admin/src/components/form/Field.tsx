import styled from "@emotion/styled"
import { Field as FormikField, FieldInputProps, useField } from "formik"
import React, { ChangeEvent, ReactElement, ReactNode } from "react"
import { theme } from "../../theme"

export interface FieldProps<T = {}> {
  label?: ReactNode
  name: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  children: React.FC<FieldInputProps<T>>
}

export const Field = <T extends {}>({
  label,
  children,
  ...fieldProps
}: FieldProps<T>): ReactElement => {
  const [field] = useField(fieldProps.name)
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      {children({ ...fieldProps, ...field })}
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
  font-size: 1rem;
  padding: 0.4em 1em;
  border: 1px solid #ccc;
`
