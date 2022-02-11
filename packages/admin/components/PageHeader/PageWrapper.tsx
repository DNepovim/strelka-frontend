/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { PageHeader, PageHeaderProps } from "antd"

export const PageWrapper: React.FC<PageHeaderProps> = (props) => (
  <PageHeader
    {...props}
    css={css`
      .ant-page-header-heading-left {
        flex-direction: column;
        align-items: flex-start;
        h1 {
          margin: 0;
        }
      }
    `}
  />
)
