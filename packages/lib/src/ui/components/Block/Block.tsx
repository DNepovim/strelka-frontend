/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import * as yup from "yup"

export interface BlockFields {
  id?: string
  backgroundColor?: string
  className?: string
}

export const blockSchema = yup.object({
  id: yup.string(),
  backgroundColor: yup.string(),
})

export const withBlockSchema = <T extends {}>(schema: yup.ObjectSchema<T>) =>
  blockSchema.concat(schema)

export const Block: React.FC<BlockFields> = ({
  id,
  backgroundColor,
  className,
  children,
}) => (
  <section
    id={id}
    css={css`
      position: relative;
      ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
    `}
    className={className}
  >
    {children}
  </section>
)
