import styled from "@emotion/styled"
import React, { ReactNode, useEffect, useRef, useState } from "react"
import { theme } from "../theme"
import { IoChevronForwardOutline, IoRemoveOutline } from "react-icons/io5"
import { AiOutlineHolder } from "react-icons/ai"
import { CSS } from "@dnd-kit/utilities"
import { useSortable } from "@dnd-kit/sortable"

export interface DisclosureProps {
  header?: ReactNode
  id: string
  onRemove: () => void
  children: ReactNode
}

export const Disclosure: React.FC<DisclosureProps> = ({
  header,
  children,
  onRemove,
  id,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Wrapper isOpened={isOpened} ref={setNodeRef} style={style}>
      <Header>
        <HeaderLeft>
          <Holder {...attributes} {...listeners} type="button">
            <AiOutlineHolder />
          </Holder>
          <Opener
            isOpened={isOpened}
            onClick={() => setIsOpened(!isOpened)}
            type="button"
          >
            <IoChevronForwardOutline />
          </Opener>
          {header}
        </HeaderLeft>
        <Holder onClick={onRemove} type="button">
          <IoRemoveOutline />
        </Holder>
      </Header>
      <Content isOpened={isOpened}>{children}</Content>
    </Wrapper>
  )
}

interface OpenedProps {
  isOpened: boolean
}

const Wrapper = styled.div`
  max-height: ${({ isOpened }: OpenedProps) => (isOpened ? "auto" : "3.5em")};
  overflow: hidden;
  margin-bottom: 0.2rem;
`

const Header = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border: ${theme.styles.border};
  background-color: #fff;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`

const Content = styled.div`
  padding: 1em;
  background-color: #fff;
  border-bottom: ${theme.styles.border};
  transform: translateY(
    ${({ isOpened }: OpenedProps) => (isOpened ? 0 : -100)}%
  );
  transition: transform 300ms ${theme.styles.animationFunction};
`

const Holder = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.2em;
`

const Opener = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.2em;

  svg {
    transform: rotate(${({ isOpened }: OpenedProps) => (isOpened ? 90 : 0)}deg);
    transition: transform 300ms ${theme.styles.animationFunction};
  }
`
