/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"
import React from "react"
import * as yup from "yup"

export interface BlockFields {
  id?: string
  backgroundColor?: string
}

export const blockSchema = yup.object({
  id: yup.string(),
  backgroundColor: yup.string(),
})

export const withBlockSchema = <T extends {}>(schema: yup.ObjectSchema<T>) =>
  blockSchema.concat(schema)

export const Block: React.FC<BlockFields> = ({ children, ...props }) => (
  <StyledSection {...props}>{children}</StyledSection>
)

const StyledSection = styled.section`
  position: relative;
  ${({ backgroundColor }: BlockFields) =>
    backgroundColor ? `background-color: ${backgroundColor};` : ""};
  margin-bottom: 4rem;
`
