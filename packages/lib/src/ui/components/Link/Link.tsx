import React from "react"
import NextLink from "next/link"

export const Link: React.FC<{ to: string; className: string }> = ({
  to,
  className,
  children,
}) => (
  <NextLink href={to}>
    <a className={className}>{children}</a>
  </NextLink>
)
