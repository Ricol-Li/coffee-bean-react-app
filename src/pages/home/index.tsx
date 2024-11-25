import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Table } from 'antd'
import './home.less'
import RicolLee from '../../assets/ricol_lee.jpg'
import { getData } from '../../api'
import * as Icon from '@ant-design/icons'
type IconType = keyof typeof Icon
import LineBarChart from '../../components/Antv/cloumns'

const iconToElement = (iconName: IconType): React.ReactElement => {
  const IconComponent = Icon[iconName] as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >
  if (!IconComponent) {
    throw new Error(`Icon ${iconName} not found`)
  }
  return <IconComponent />
}
const columns = [
  {
    title: '品牌',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '日销量',
    dataIndex: 'todayBuy',
    key: 'todayBuy',
  },
  {
    title: '日销量',
    dataIndex: 'monthBuy',
    key: 'monthBuy',
  },
  {
    title: '总销量',
    dataIndex: 'totalBuy',
    key: 'totalBuy',
  },
]

const countData = [
  {
    name: '今日支付订单',
    value: 1234,
    icon: 'CheckCircleOutlined',
    color: '#2ec7c9',
  },
  {
    name: '今日收藏订单',
    value: 3421,
    icon: 'ClockCircleOutlined',
    color: '#ffb980',
  },
  {
    name: '今日未支付订单',
    value: 1234,
    icon: 'CloseCircleOutlined',
    color: '#5ab1ef',
  },
  {
    name: '本月支付订单',
    value: 1234,
    icon: 'CheckCircleOutlined',
    color: '#2ec7c9',
  },
  {
    name: '本月收藏订单',
    value: 3421,
    icon: 'ClockCircleOutlined',
    color: '#ffb980',
  },
  {
    name: '本月未支付订单',
    value: 1234,
    icon: 'CloseCircleOutlined',
    color: '#5ab1ef',
  },
]

const Home: React.FC = () => {
  const [tableData, setTableData] = useState([])
  const [userData, setUserData] = useState([])

  useEffect(() => {
    getData().then(data => {
      console.log('data.data.data', data.data.data)
      const { tableData, userData } = data.data.data
      setTableData(tableData)
      setUserData(userData)
    })
  }, [userData])

  return (
    <Row className="home" gutter={16}>
      <Col span={8}>
        <Card hoverable>
          <div className="user">
            <img src={RicolLee} />
            <div className="user-info">
              <p className="name">Admin</p>
              <p className="access">超级管理员</p>
            </div>
          </div>

          <div className="login-info">
            <p>上次登录时间：2024-05-23 19:42:00</p>
            <p>上次登录地点：武汉洪山区光谷一路</p>
          </div>
        </Card>

        <Card className="mt-8">
          <Table
            rowKey={'name'}
            columns={columns}
            dataSource={tableData}
            pagination={false}
          />
        </Card>
      </Col>
      <Col span={16}>
        <div className="num">
          {countData.map((item, index) => {
            return (
              <Card hoverable key={index}>
                <div className="icon-box" style={{ background: item.color }}>
                  {iconToElement(item.icon as IconType)}
                </div>
                <div className="detail">
                  <p className="num">￥{item.value}</p>
                  <p className="txt">{item.name}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-8">
          <LineBarChart data={userData} />
        </div>
      </Col>
    </Row>
  )
}

export default Home
