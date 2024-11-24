import React from 'react'
import { Outlet } from 'react-router-dom'
import CommonAside from '../components/commonAside'
import CommonHeader from '../components/commonHeader'
import { useSelector } from 'react-redux'
import { Layout, theme } from 'antd'
import { RootState } from '../store/index'

const { Content } = Layout

const Main: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  // 获取collapsed状态
  const isCollapsed = useSelector((state: RootState) => state.tab.isCollapsed)

  return (
    <Layout className="main-container">
      <CommonAside collapsed={isCollapsed} />
      <Layout>
        <CommonHeader collapsed={isCollapsed} />
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
