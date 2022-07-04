import React from 'react';
import Header from '../Layout/Header';
import MyJSONChart from '../../JSON/credit-analysis-charts.json';
import MyJSONTable from '../../JSON/credit-analysis-table.json';
import ChartCarousel from '../Layout/ChartCarousel';
import ShadowHeadline from '../UI/ShadowHeadline';
import CreditAnalysisTable from '../Layout/CreditAnalysisTable';

const CreditAnalysisPage = () => {
	return <>
		<Header />
		<ShadowHeadline title='Análisis de preventa' />
		<div className='container mb-4 pb-4'>
			<div className='row my-4'>
				<div className='col'>
					<ChartCarousel chartColor='#95A4CE' chartTitle='Preventas por sucursal' chartData={MyJSONChart.por_sucursal} />
				</div>
			</div>
			<div className='row my-4'>
				<div className='col'>
					<ChartCarousel chartColor='#DE8B57' chartTitle='Preventas por usuarios' chartData={MyJSONChart.por_usuario} />
				</div>
			</div>
		</div>
		<ShadowHeadline title='Lista de preventa' />
		<CreditAnalysisTable tableData={MyJSONTable.preventas} />
	</>
}

export default CreditAnalysisPage