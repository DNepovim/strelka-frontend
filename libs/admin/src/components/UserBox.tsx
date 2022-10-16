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
}

export const UserBox: React.FC<User & { isCollapsed?: boolean }> = ({
  email,
  image,
  isCollapsed,
}) => (
  <Wrapper isCollapsed={isCollapsed}>
    <UserPicture src={image} />
    <Text>
      {email}
      <LogOutLink to="/logout">
        <IoLogOutOutline />
        Odhlásit
      </LogOutLink>
    </Text>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4em 0.3em;
  margin-bottom: 1em;
  width: calc(100% - 0.6em);
  overflow: hidden;
  transition: width 200ms ${theme.styles.animationFunction},
    background-color 300ms ${theme.styles.animationFunction};
  background-color: ${theme.colors.bodyBackground};
  border: 1px solid transparent;

  ${({ isCollapsed }: { isCollapsed?: boolean }) =>
    isCollapsed
      ? css`
          cursor: pointer;
          &:hover {
            width: 10em;
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

const LogOutLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  svg {
    margin-right: 0.4em;
  }

  &:hover {
    text-decoration: underline;
  }
`
