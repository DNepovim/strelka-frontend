/** @jsxImportSource @emotion/react */
import React from "react"
import Link from "next/link"
import { Button, ButtonProps } from "antd"

export interface ButtonLinkProps extends ButtonProps {
  link: string
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  link,
  ...buttonProps
}) => (
  <Link href={link} passHref>
    <Button {...buttonProps}>{children}</Button>
  </Link>
)
