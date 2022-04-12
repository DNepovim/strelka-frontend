/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import { Avatar, Button, Layout as AntLayout, Space } from "antd"
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons"
import { Content } from "antd/lib/layout/layout"
import { css } from "@emotion/react"
import { routes } from "../../routes"
import { Navigation } from "../Navigation/Navigation"
import { Logo } from "@local/lib/src/ui/components/Logo/Logo"
import { useKeycloak } from "@react-keycloak/ssr"
import type { KeycloakInstance, KeycloakTokenParsed } from "keycloak-js"

type ParsedToken = KeycloakTokenParsed & {
  email?: string
  name?: string
  // eslint-disable-next-line @typescript-eslint/naming-convention
  preferred_username?: string
  // eslint-disable-next-line @typescript-eslint/naming-convention
  given_name?: string
  // eslint-disable-next-line @typescript-eslint/naming-convention
  family_name?: string
}

export const Layout: React.FC = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const { keycloak } = useKeycloak<KeycloakInstance>()
  const parsedToken: ParsedToken | undefined = keycloak?.tokenParsed

  return keycloak?.authenticated ? (
    <AntLayout
      css={css`
        min-height: 100vh;
      `}
    >
      <AntLayout>
        <AntLayout.Sider
          collapsible
          collapsed={isSidebarCollapsed}
          onCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          width={200}
          css={css`
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
          `}
        >
          <div
            css={css`
              padding: 16px 24px;
            `}
          >
            <Logo width="100%" height="90px" />
          </div>
          <Navigation routes={routes} />
          {keycloak?.authenticated && (
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
                  <Button
                    type="text"
                    css={css`
                      padding: 0;
                    `}
                    onClick={() => {
                      if (keycloak) {
                        window.location.href = keycloak.createAccountUrl()
                      }
                    }}
                  >
                    <Avatar alt="" src={""} />
                  </Button>
                  <Button
                    onClick={() => {
                      if (keycloak) {
                        window.location.href = keycloak.createLogoutUrl()
                      }
                    }}
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
                  <Avatar alt="" src="" />
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      justify-content: flex-end;
                    `}
                  >
                    <Button
                      type="link"
                      onClick={() => {
                        if (keycloak) {
                          window.location.href = keycloak.createAccountUrl()
                        }
                      }}
                      css={css`
                        height: 24px;
                        padding: 0;
                        text-align: right;
                      `}
                    >
                      {parsedToken?.preferred_username}
                    </Button>
                    <Button
                      onClick={() => {
                        if (keycloak) {
                          window.location.href = keycloak.createLogoutUrl()
                        }
                      }}
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
          )}
        </AntLayout.Sider>
        <AntLayout
          css={css`
            margin-left: ${isSidebarCollapsed ? 80 : 200}px;
            padding: 24px;
          `}
        >
          <Content>{children}</Content>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  ) : (
    <div
      css={css`
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
      `}
    >
      <Button
        onClick={() => {
          if (keycloak) {
            window.location.href = keycloak?.createLoginUrl()
          }
        }}
        icon={<LoginOutlined />}
      >
        Přihlásit
      </Button>
    </div>
  )
}
