import styled from "@emotion/styled"
import React, { ReactNode, useState } from "react"
import { Popover as HPopover, PopoverProps } from "react-tiny-popover"
import { theme } from "../theme"

export interface HPopoverProps
  extends Omit<PopoverProps, "content" | "isOpen"> {
  content: ReactNode
}

export const Popover: React.FC<HPopoverProps> = ({ children, content }) => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <HPopover
      isOpen={isOpened}
      content={
        <ContentWrapper onClick={() => setIsOpened(false)}>
          {content}
        </ContentWrapper>
      }
      onClickOutside={() => setIsOpened(false)}
      containerStyle={{
        zIndex: "1000",
      }}
    >
      <span onClick={() => setIsOpened(!isOpened)}>{children}</span>
    </HPopover>
  )
}

const ContentWrapper = styled.div`
  position: relative;
  bottom: 1rem;
  min-width: 6rem;
  background-color: white;
  border: ${theme.styles.border};

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(50% + 1px)) rotate(45deg);
    background-color: white;
    width: 1rem;
    height: 1rem;
    border-right: ${theme.styles.border};
    border-bottom: ${theme.styles.border};
  }
`
