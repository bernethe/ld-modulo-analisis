import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const BarChart = ({chartColor, chartTitle, chartData}) => {

	/*
	console.log(chartData.map(item => {
		return {
			name: item.name,
			y: item.value,
			drilldown: item.name
		}
	}))
	*/

	const options = {
		chart: { type: 'column',height:300,defaultSeriesType: 'areaspline' },
		legend: { enabled: false },
		plotOptions: { column: { colorByPoint: true } },
		colors: [ chartColor ],
		title: { text: chartTitle },
		yAxis: { title: { text: 'Total' } },
		xAxis: { categories: chartData.map(item => item.name) },
		series: [{
		data: chartData.map(item => {
			return {
				name: item.name,
				y: item.value,
				drilldown: item.name
			}
		})
		}]
	}
	return <HighchartsReact
		highcharts={Highcharts}
		options={options}
	/>
}

export default BarChart