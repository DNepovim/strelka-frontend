/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"
import { AdminFields } from "@strelka/admin-ui"
import * as yup from "yup"

export const blockSchema = yup.object({
  id: yup.string(),
  backgroundColor: yup.string(),
})

export const withBlockSchema = <T extends {}>(schema: yup.ObjectSchema<T>) =>
  blockSchema.concat(schema)

export const Block: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <StyledSection>{children}</StyledSection>

const StyledSection = styled.section`
  position: relative;
  margin-bottom: 4rem;
`
