/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Row, RowProps } from "antd"

export const FlexRow: React.FC<RowProps> = ({ children, ...props }) => (
  <Row
    gutter={16}
    css={css`
      display: flex;
    `}
    {...props}
  >
    {children}
  </Row>
)
