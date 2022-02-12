/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Row } from "antd"

export const FlexRow: React.FC = ({ children }) => (
  <Row
    gutter={16}
    css={css`
      display: flex;
    `}
  >
    {children}
  </Row>
)
