/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react"
import { Avatar, Button, Layout as AntLayout, Space } from "antd"
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useSession, signIn, signOut } from "next-auth/react"
import { routes } from "../routes"
import { Navigation } from "./Navigation"
import { Logo as LogoImage } from "@local/lib/src/ui/components/Logo/Logo"
import { SitesSelect } from "./Inputs/SitesSelect/SitesSelect"
import { Centered } from "./Centered"

export const Layout: React.FC = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const { data: session } = useSession()

  return session ? (
    <MainLayout>
      <Sider
        collapsible
        collapsed={isSidebarCollapsed}
        onCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        width={200}
      >
        <Logo />
        <Navigation routes={routes} />
        <SitesSelect />
        <AccountControll isSidebarCollapsed={isSidebarCollapsed} />
      </Sider>
      <Content isSidebarCollapsed={isSidebarCollapsed}>{children}</Content>
    </MainLayout>
  ) : (
    <Centered>
      <Button onClick={() => signIn()} icon={<LoginOutlined />}>
        Přihlásit
      </Button>
    </Centered>
  )
}

const Content: React.FC<{
  children: ReactNode
  isSidebarCollapsed: boolean
}> = ({ children, isSidebarCollapsed }) => (
  <AntLayout.Content
    css={css`
      margin-left: ${isSidebarCollapsed ? 80 : 200}px;
      padding: 24px;
    `}
  >
    {children}
  </AntLayout.Content>
)

const MainLayout = styled(AntLayout)`
  min-height: 100vh;
`

const Sider = styled(AntLayout.Sider)`
  position: fixed;
  left: 0;
  height: 100vh;
  overflow: auto;
  background-color: white;
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
  .ant-layout-sider-trigger {
    background-color: white;

    svg {
      color: black;
    }
  }
`

const Logo: React.FC = () => (
  <div
    css={css`
      padding: 16px 24px;
    `}
  >
    <LogoImage width="100%" height="90px" />
  </div>
)

const AccountControll: React.FC<{ isSidebarCollapsed: boolean }> = ({
  isSidebarCollapsed,
}) => {
  const { data: session } = useSession()
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px 16px;
        margin: auto 0 0;
      `}
    >
      {isSidebarCollapsed ? (
        <Space
          direction="vertical"
          css={css`
            margin: 0 auto;
          `}
        >
          <Avatar alt="" src={session?.user?.image ?? ""} />
          <Button
            onClick={() => signOut()}
            title="Odhlásit"
            type="link"
            css={css`
              height: 24px;
              padding: 0;
              text-align: right;
              margin-right: -2px;
            `}
            icon={<LogoutOutlined />}
          />
        </Space>
      ) : (
        <>
          <Avatar alt="" src={session?.user?.image ?? ""} />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
            `}
          >
            {session?.user?.email}
            <Button
              onClick={() => signOut()}
              type="link"
              css={css`
                height: 24px;
                padding: 0;
                text-align: right;
                margin-right: -2px;
              `}
            >
              Odhlásit
              <LogoutOutlined />
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
