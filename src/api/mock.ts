import Mock from 'mockjs'
import homeMockApi from './mockServeData/home'

Mock.mock(/home\/getData/, homeMockApi.getStatisticalData)
