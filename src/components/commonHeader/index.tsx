import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Button, theme } from 'antd'
const { Header } = Layout

interface CommonHeaderProps {
  collapsed: boolean
  onClick: (collapsed: boolean) => void
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ collapsed, onClick }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => onClick(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Header>
  )
}

export default CommonHeader
