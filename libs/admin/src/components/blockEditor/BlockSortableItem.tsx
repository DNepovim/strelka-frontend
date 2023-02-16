import { useSortable } from "@dnd-kit/sortable"
import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import {
  IoChevronUpOutline,
  IoEllipsisVerticalOutline,
  IoChevronDownOutline,
  IoAddOutline,
} from "react-icons/io5"
import { CSS } from "@dnd-kit/utilities"
import { theme } from "../../theme"
import { SimpleButton } from "../SimpleButton"
import { useEditorState } from "./EditorContext"

export const BlockSortableItem: React.FC<{
  children: ReactNode
  id: string
  onMoveUp: () => void
  onMoveDown: () => void
  onAddUp: () => void
  onAddBottom: () => void
}> = ({ children, id, onMoveUp, onMoveDown, onAddUp, onAddBottom }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const { blockMeta } = useEditorState()
  return (
    <BlockWrapper ref={setNodeRef} style={style}>
      {blockMeta?.id === id && [
        <ControlWrapper>
          <ControlButton onClick={onMoveUp}>
            <IoChevronUpOutline />
          </ControlButton>
          <ControlButton {...attributes} {...listeners}>
            <IoEllipsisVerticalOutline />
          </ControlButton>
          <ControlButton onClick={onMoveDown}>
            <IoChevronDownOutline />
          </ControlButton>
        </ControlWrapper>,
        <AddUpButton onClick={onAddUp}>
          <IoAddOutline />
        </AddUpButton>,
        <AddBottomButton onClick={onAddBottom}>
          <IoAddOutline />
        </AddBottomButton>,
      ]}
      {children}
    </BlockWrapper>
  )
}

const BlockWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`

const ControlWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(calc(-100% - 0.4rem));
  display: flex;
  flex-direction: column;
`

const ControlButton = styled(SimpleButton)`
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

const AddButton = styled(SimpleButton)`
  cursor: pointer;
  position: absolute;
  z-index: 100;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: white;
  border: ${theme.styles.border};
`

const AddUpButton = styled(AddButton)`
  top: 0;
  transform: translate(-50%, -50%);
`

const AddBottomButton = styled(AddButton)`
  bottom: 0;
  transform: translate(-50%, 50%);
`
