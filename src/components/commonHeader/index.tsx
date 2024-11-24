import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Button, theme, Avatar, Flex, Dropdown } from 'antd'
import RicolLee from '../../assets/ricol_lee.jpg'
import type { MenuProps } from 'antd'
import { useDispatch } from 'react-redux'
import { collapseMenu } from '../../store/reducer/tab'
const { Header } = Layout

interface CommonHeaderProps {
  collapsed: boolean
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ collapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  // 退出
  const logOut = () => {
    console.log('logout')
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer">
          个人中心
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a onClick={() => logOut} target="_blank" rel="noopener noreferrer">
          退出
        </a>
      ),
    },
  ]

  const dispatch = useDispatch()
  const setCollapsed = () => {
    dispatch(collapseMenu())
  }

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Flex align="center" justify="space-between">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed()}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
        <Dropdown menu={{ items }} >
          <Avatar style={{marginRight: '20px'}} src={<img src={RicolLee} />} />
        </Dropdown>
      </Flex>
    </Header>
  )
}

export default CommonHeader
