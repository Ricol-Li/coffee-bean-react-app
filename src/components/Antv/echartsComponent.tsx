import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
import ReactECharts from 'react-echarts'

// type EChartsOption = echarts.EChartsOption;
interface EChartsComponentProps {
  option: echarts.EChartsOption
}

const EChartsComponent: React.FC<EChartsComponentProps> = ({ option }) => {
  const chartRef = useRef<echarts.ECharts | null>(null)

  console.log(chartRef, 'chartRef')
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.setOption(option)
    }
  }, [option])

  const onChartReady = (chartInstance: echarts.ECharts) => {
    chartRef.current = chartInstance
  }

  return (
    <ReactECharts
      option={option}
      onChartReady={onChartReady}
      style={{ width: '100%', height: '400px' }}
    />
  )
}

export default EChartsComponent
