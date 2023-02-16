import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "@remix-run/react"
import React from "react"
import { IoLogOutOutline } from "react-icons/io5"
import { theme } from "../theme"
import { UserPicture } from "./UserPicture"

export interface User {
  email?: string
  image?: string
  name?: string
}

export const UserBox: React.FC<User & { isCollapsed?: boolean }> = ({
  email,
  image,
  name,
  isCollapsed,
}) => (
  <Wrapper isCollapsed={isCollapsed}>
    <UserPicture src={image} />
    <Text>
      <NoWrap>{name}</NoWrap>
      {email}
    </Text>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4em 0.3em;
  margin-bottom: 1em;
  width: 100%;
  overflow: hidden;
  transition: width 200ms ${theme.styles.animationFunction},
    background-color 300ms ${theme.styles.animationFunction};
  background-color: ${theme.colors.bodyBackground};
  border: 1px solid transparent;

  ${({ isCollapsed }: { isCollapsed?: boolean }) =>
    isCollapsed
      ? css`
          &:hover {
            width: 12em;
            border: ${theme.styles.border};
            background-color: white;
          }
        `
      : ""}
`

const Text = styled.div`
  display: flex;
  flex-flow: column;
  font-size: 0.8em;
  padding-left: 1em;
`

const NoWrap = styled.span`
  white-space: nowrap;
`
