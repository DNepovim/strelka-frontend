import { useSortable } from "@dnd-kit/sortable"
import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import {
  IoChevronUpOutline,
  IoEllipsisVerticalOutline,
  IoChevronDownOutline,
} from "react-icons/io5"
import { CSS } from "@dnd-kit/utilities"
import { theme } from "../../theme"

export const BlockSortableItem: React.FC<{
  children: ReactNode
  id: string
  onMoveUp: () => void
  onMoveDown: () => void
}> = ({ children, id, onMoveUp, onMoveDown }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  return (
    <BlockWrapper ref={setNodeRef} style={style}>
      <ControlWrapper>
        <ControlItem onClick={onMoveUp}>
          <IoChevronUpOutline />
        </ControlItem>
        <ControlItem {...attributes} {...listeners}>
          <IoEllipsisVerticalOutline />
        </ControlItem>
        <ControlItem onClick={onMoveDown}>
          <IoChevronDownOutline />
        </ControlItem>
      </ControlWrapper>
      {children}
    </BlockWrapper>
  )
}

const BlockWrapper = styled.div`
  position: relative;
`

const ControlWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(calc(-100% - 0.4rem));
  display: flex;
  flex-direction: column;
`

const ControlItem = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${theme.styles.border};
  background-color: white;
  width: 1.6rem;
  height: 1.6rem;

  &:not(:last-of-type) {
    border-bottom: none;
  }
`
