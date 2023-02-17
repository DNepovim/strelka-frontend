import styled from "@emotion/styled"
import { IoAddOutline } from "react-icons/io5"
import { BlockDef } from "../../blockDefs"
import { theme } from "../../theme"
import { Button } from "../Button"
import { ButtonGroup } from "../ButtonGroup"
import { Popover } from "../Popover"
import { GenericBlockDef } from "./BlockEditor"

export interface AddBlockButtonProps {
  blockDefs: BlockDef<GenericBlockDef>[]
  onButtonAdd: (template: string) => void
}

export const AddBlockButton = ({
  blockDefs,
  onButtonAdd,
}: AddBlockButtonProps) => {
  return (
    <Popover
      content={
        <ButtonGroup
          layout="vertical"
          withoutFrame
          items={blockDefs.map(({ template, title, icon }) => ({
            type: "button",
            key: "button",
            label: (
              <>
                {icon && <>&nbsp;{icon}</>}
                {title}
              </>
            ),
            onClick: () => onButtonAdd(template),
          }))}
        />
      }
    >
      <StyledkButton circled>
        <IoAddOutline /> Přidat blok
      </StyledkButton>
    </Popover>
  )
}

const StyledkButton = styled(Button)`
  margin: 1rem auto;

  svg {
    transform: rotate(0);
    transition: transform 300ms ${theme.styles.animationFunction};
  }

  &:hover svg {
    transform: rotate(90deg);
  }
`
