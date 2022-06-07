import { Menu } from "antd"
import Link from "next/link"
import React from "react"
import { Routes } from "../routes"

interface NavigationProps {
  routes: Routes
}

export const Navigation: React.FC<NavigationProps> = ({ routes }) => (
  <Menu>
    {Object.entries(routes)
      .filter(([_, item]) => item.showInMenu)
      .map(([key, { title, menuIcon, getLink }]) => (
        <Menu.Item icon={menuIcon} key={key}>
          <Link href={getLink()}>{title()}</Link>
        </Menu.Item>
      ))}
  </Menu>
)
