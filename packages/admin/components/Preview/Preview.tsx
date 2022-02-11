/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"

export const Preview: React.FC<{ zoom: number }> = ({ children, zoom }) => (
  <div
    css={css`
      postion: static;
      height: 100%;
    `}
  >
    <div
      css={css`
        position: sticky;
        top: 16px;
        height: 90vh;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          overflow-y: scroll;
          width: ${100 / zoom}%;
          height: ${100 / zoom}%;
          transform-origin: left top;
          transform: scale(${zoom});
        `}
      >
        {children}
      </div>
    </div>
  </div>
)
