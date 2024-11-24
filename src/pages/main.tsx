import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import CommonAside from '../components/commonAside'
import CommonHeader from '../components/commonHeader'

import { Layout, theme } from 'antd'

const { Content } = Layout

const Main: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <Layout className="main-container">
      <CommonAside collapsed={collapsed} />
      <Layout>
        <CommonHeader
          collapsed={collapsed}
          onClick={() => setCollapsed(!collapsed)}
        />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main
