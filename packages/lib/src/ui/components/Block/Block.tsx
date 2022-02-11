/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import * as yup from "yup"

export interface BlockFields {
  id?: string
  backgroundColor?: string
}

export const withBlockSchema = <T extends {}>(schema: yup.ObjectSchema<T>) =>
  yup
    .object()
    .shape({
      id: yup.string(),
      backgroundColor: yup.string(),
    })
    .concat(schema)

export const Block: React.FC<BlockFields> = ({
  id,
  backgroundColor,
  children,
}) => (
  <section
    id={id}
    css={css`
      position: relative;
      ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
    `}
  >
    {children}
  </section>
)
