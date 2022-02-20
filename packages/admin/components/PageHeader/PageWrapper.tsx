/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react"
import { Breadcrumb, Col, Row, Space } from "antd"
import { FlexRow } from "../FlexRow/FlexRow"
import { Route } from "antd/lib/breadcrumb/Breadcrumb"

export interface PageWrapperProps {
  breadcrumb: Route[]
  title: ReactNode
  actions: ReactNode
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  breadcrumb,
  title,
  actions,
  children,
}) => (
  <>
    <FlexRow justify="space-between" align="middle">
      <Col>
        <Breadcrumb routes={breadcrumb} />
      </Col>
      <Col>
        <Space>{actions}</Space>
      </Col>
    </FlexRow>
    <Row>
      <Col span={24}>{title}</Col>
    </Row>
    {children}
  </>
)
