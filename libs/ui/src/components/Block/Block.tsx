/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import * as yup from "yup"

export interface BlockFields {
  id?: string
}

export const blockSchema = yup.object({
  id: yup.string(),
  backgroundColor: yup.string(),
})

export const withBlockSchema = <T extends {}>(schema: yup.ObjectSchema<T>) =>
  blockSchema.concat(schema)

export const Block: React.FC<BlockFields & { children: ReactNode }> = ({
  children,
}) => <StyledSection>{children}</StyledSection>

const StyledSection = styled.section`
  position: relative;
  margin-bottom: 4rem;
`
