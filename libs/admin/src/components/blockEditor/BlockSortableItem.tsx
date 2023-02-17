import { useSortable } from "@dnd-kit/sortable"
import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import {
  IoChevronUpOutline,
  IoEllipsisVerticalOutline,
  IoChevronDownOutline,
  IoAddOutline,
  IoTrashBinOutline,
} from "react-icons/io5"
import { CSS } from "@dnd-kit/utilities"
import { theme } from "../../theme"
import { SimpleButton } from "../SimpleButton"

export const BlockSortableItem: React.FC<{
  children: ReactNode
  id: string
  onMoveUp: () => void
  onMoveDown: () => void
  onAddUp: () => void
  onAddBottom: () => void
  onRemove: () => void
  onClick?: () => void
  hideControl?: boolean
}> = ({
  children,
  id,
  onMoveUp,
  onMoveDown,
  onAddUp,
  onAddBottom,
  onRemove,
  onClick,
  hideControl,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <BlockWrapper ref={setNodeRef} style={style} onClick={onClick}>
      {!hideControl && [
        <ControlWrapper key="controlWrapper">
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
        <AddUpButton onClick={onAddUp} key="addUpButton">
          <IoAddOutline />
        </AddUpButton>,
        <AddBottomButton onClick={onAddBottom} key="addBottomButton">
          <IoAddOutline />
        </AddBottomButton>,
        <RemoveButton onClick={onRemove} key="removeButton">
          <IoTrashBinOutline color="red" />
        </RemoveButton>,
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

const RemoveButton = styled(ControlButton)`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateX(calc(-100% - 0.4rem));
  border-color: red;
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
