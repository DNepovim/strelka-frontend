/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import * as yup from "yup"

interface GenricBlockFields<T> {
  id?: string
  content?: T
}

export type BlockFields<T = undefined> = T extends undefined
  ? Omit<GenricBlockFields<T>, "content">
  : GenricBlockFields<T>

export const blockSchema = yup.object({
  id: yup.string(),
  content: yup.string(),
})

export const withBlockSchema = <T extends {}>(schema: yup.ObjectSchema<T>) =>
  blockSchema.concat(schema)

export const Block: React.FC<BlockFields> = ({ id, children }) => (
  <section
    id={id}
    css={css`
      position: relative;
    `}
  >
    {children}
  </section>
)
