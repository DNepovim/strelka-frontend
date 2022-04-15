/** @jsxImportSource @emotion/react */
import { CSS } from "@dnd-kit/utilities"
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import React from "react"
import HolderOutlined from "@ant-design/icons/lib/icons/HolderOutlined"
import { css } from "@emotion/react"
import { useField } from "formik"

const Item: React.FC<{ id: string }> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  return (
    <div
      style={style}
      css={css`
        width: 100px;
        height: 100px;
        border: 4px solid blue;
      `}
      ref={setNodeRef}
    >
      <HolderOutlined {...attributes} {...listeners} />
      {id}
    </div>
  )
}

type Ids = {
  id: string
}[]

export const ContainerInput: React.FC<{ name: string }> = ({ name }) => {
  const [field] = useField<Ids>(name)

  return (
    <SortableContext
      id={name}
      items={field.value?.map(({ id }) => id) ?? []}
      strategy={verticalListSortingStrategy}
    >
      {field.value?.map(({ id }) => (
        <Item key={id} id={id} />
      ))}
    </SortableContext>
  )
}
