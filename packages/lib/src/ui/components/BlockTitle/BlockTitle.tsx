import { BlockTitleFields } from "../../../types/BlockTitle"
import styled from "@emotion/styled"
import React from "react"
import { theme } from "../../styles/theme"
import { Header1, Header2 } from "../Typography/Typography"

export const BlockTitle: React.FC<{
  props: BlockTitleFields
  className?: string
}> = ({ props: { title, isTopLevel }, className }) => {
  const StyledTitle = styled(isTopLevel ?? false ? Header1 : Header2)`
    margin: 0;
  `

  return (
    <TitleWrapper className={className}>
      <StyledTitle>{title}</StyledTitle>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  max-width: ${theme.layout.width}rem;
  margin: ${theme.size.base * 4}rem auto ${theme.size.base * 2}rem auto;
`
