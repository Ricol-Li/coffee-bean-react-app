import React from 'react'
import { Row, Col, Card } from 'antd'
import './home.less'
import RicolLee from '../../assets/ricol_lee.jpg'

const Home: React.FC = () => {
  return (
    <Row className="home">
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
      </Col>
      <Col span={16}></Col>
    </Row>
  )
}

export default Home
