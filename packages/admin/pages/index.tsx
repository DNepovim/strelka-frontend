/** @jsxImportSource @emotion/react */
import { useState } from "react"
import { NextPage } from "next"
import "antd/dist/antd.css"
import { Avatar, Button, Layout, Menu, Space } from "antd"
import { LogoutOutlined } from "@ant-design/icons"
import { Content } from "antd/lib/layout/layout"
import { css } from "@emotion/react"
import FileOutlined from "@ant-design/icons/lib/icons/FileOutlined"
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined"
import BarsOutlined from "@ant-design/icons/lib/icons/BarsOutlined"
import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { NavigationPage } from "../views/NavigationPage/NavigationPage"
import { PageEditPage } from "../views/PageEditPage/PageEditPage"
import { PagesListPage } from "../views/PagesListPage/PagesListPage"
import { SettingsPage } from "../views/SettingsPage/SettingsPage"
import { UsersListPage } from "../views/UsersListPage/UsersListPage"

export const Admin: NextPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <Layout
      css={css`
        min-height: 100vh;
      `}
    >
      <Layout>
        <BrowserRouter>
          <Layout.Sider
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
            <Link
              to="/admin"
              css={css`
                display: flex;
                align-items: center;
                padding: 16px 9px 4px;
              `}
            >
              {!isSidebarCollapsed && (
                <h1
                  css={css`
                    font-size: 24px;
                  `}
                >
                  Godot
                </h1>
              )}
            </Link>
            <Menu>
              <Menu.Item icon={<FileOutlined />} key="pages">
                <Link to="/admin">Stránky</Link>
              </Menu.Item>
              <Menu.Item disabled icon={<BarsOutlined />} key="navigation">
                <Link to="/admin/navigace">Navigace</Link>
              </Menu.Item>
              <Menu.Item icon={<TeamOutlined />} key="users">
                <Link to="/admin/uzivatele">Uživatelé</Link>
              </Menu.Item>
              <Menu.Item disabled icon={<SettingOutlined />} key="settings">
                <Link to="/admin/nastaveni">Nastavení</Link>
              </Menu.Item>
            </Menu>
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
                  <Avatar alt="" src="" />
                  <Button
                    onClick={() => {}}
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
                      onClick={() => {}}
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
          </Layout.Sider>
          <Layout
            css={css`
              margin-left: ${isSidebarCollapsed ? 80 : 200}px;
            `}
          >
            <Content>
              <Routes>
                <Route path="/admin" element={<PagesListPage />} />
                <Route path="/admin/stranky/:slug" element={<PageEditPage />} />
                <Route path="/admin/navigace" element={<NavigationPage />} />
                <Route path="/admin/uzivatele" element={<UsersListPage />} />
                <Route path="/admin/nastaveni" element={<SettingsPage />} />
              </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
      </Layout>
    </Layout>
  )
}
