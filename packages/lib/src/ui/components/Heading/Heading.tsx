/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React, { ElementRef, useRef } from "react"
import { theme } from "../../styles/theme"
import { useWindowHeight } from "@react-hook/window-size"
import useScrollPosition from "@react-hook/window-scroll"

export const Heading: React.FC<{
  children: string
  color?: string
}> = ({ children, color }) => {
  const windowHeight = useWindowHeight()
  const scrollPosition = useScrollPosition()
  const headingRef = useRef<ElementRef<"h2">>(null)
  const elTop = headingRef?.current?.getBoundingClientRect()?.top ?? undefined
  const start = windowHeight * 0.8
  const end = windowHeight * 0.6
  const percentage = elTop
    ? elTop < end
      ? 100
      : elTop > start
      ? 0
      : ((elTop - start) / (start - end)) * -100
    : 0

  return (
    <h2
      ref={headingRef}
      css={css`
        position: relative;
        display: inline-block;
        font-size: 2.6rem;
        font-family: ${theme.fonts.headings};
        text-align: center;
        color: ${color ?? theme.color.brown};
        margin: 0 auto 1em;
        &:after {
          position: absolute;
          content: "";
          display: block;
          bottom: 0;
          left: 0;
          width: ${percentage}%;
          height: 6px;
          background-color: ${color === theme.color.darkBlue
            ? theme.color.brown
            : theme.color.yellow};
        }
      `}
    >
      {children}
    </h2>
  )
}
