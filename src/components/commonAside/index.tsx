import React from 'react'
import * as Icon from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import menuConfig from '../../config'

const { Sider } = Layout

//  动态获取icon
type IconType = keyof typeof Icon

const iconToElement = (iconName: IconType): React.ReactElement => {
  const IconComponent = Icon[iconName] as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >
  if (!IconComponent) {
    throw new Error(`Icon ${iconName} not found`)
  }
  return <IconComponent />
}

// 处理菜单结构
interface MenuConfigItem {
  path: string
  name?: string
  label: string
  icon: IconType
  url?: string
  children?: MenuConfigItem[]
  title?: string
}

interface AntdMenuConfigItem {
  key: string
  icon: React.ReactElement
  label: string
  title?: string
  children?: AntdMenuConfigItem[] | undefined
}

const getMenuItems = (
  menuConfig: Array<MenuConfigItem>
): AntdMenuConfigItem[] => {
  return menuConfig.map(icon => {
    const item = {
      path: icon.path,
      key: icon.path,
      icon: iconToElement(icon.icon),
      label: icon.label,
      title: icon.label,
      children: icon.children ? getMenuItems(icon.children) : undefined,
    }

    return item
  })
}

const items = getMenuItems(menuConfig)

// console.log(items)

interface CommonAsideProps {
  collapsed: boolean
}
const CommonAside: React.FC<CommonAsideProps> = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="app-name">
        {collapsed ? 'React' : 'React后台管理系统'}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
      />
    </Sider>
  )
}

export default CommonAside
