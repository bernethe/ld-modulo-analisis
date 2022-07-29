import React from 'react';
import {BiArrowBack} from 'react-icons/bi';
import {BiLineChart} from 'react-icons/bi';

const CreditAnalysisDetailSummary = ({userID}) => {
	return <div className='container'>
		<div className='row mb-4'>
			<div className='col-9 h5'>
				<BiArrowBack className='text-primary' /> Preventa número: {userID}
			</div>
			<div className='col-3 text-end'>
				<button className='btn text-white bg-primary bg-opacity-50'><BiLineChart /> Riesgos</button>
			</div>
		</div>
		<div className='row border rounded pt-3'>
			<div className='col-sm-4'>
				<dl className='row'>

					<dt className='col-sm-4 my-2'>Identificación:</dt>
					<dd className='col-sm-8 my-2 text-end pe-sm-5'>2-0339-0246</dd>
					
					<dt className='col-sm-4 my-2'>Nombre:</dt>
					<dd className='col-sm-8 my-2 text-end pe-sm-5'>MARCO TULIO ROJAS CASTRO</dd>
					
					<dt className='col-sm-4 my-2'>Límite:</dt>
					<dd className='col-sm-8 my-2 text-end pe-sm-5'>2,520,000.00</dd>
					
					<dt className='col-sm-4 my-2'>Disponible:</dt>
					<dd className='col-sm-8 my-2 text-end pe-sm-5'>0.00</dd>
					
				</dl>
			</div>
			<div className='col-sm-4'>
				<dl className='row'>

					<dt className='col-sm-4 my-2'>Venta:</dt>
					<dd className='col-sm-8 my-2 text-end pe-sm-5'>405,800.00</dd>
					
					<dt className='col-sm-4 my-2'>Prima:</dt>
					<dd className='col-sm-8 my-2 text-end pe-sm-5'>80,110.00</dd>
					
					<dt className='col-sm-4 my-2'>Principal:</dt>
					<dd className='col-sm-8 my-2 text-end pe-sm-5'>325,690.00</dd>
					
					<dt className='col-sm-4 my-2'>Financiamiento:</dt>
					<dd className='col-sm-8 my-2 text-end pe-sm-5'>186,973.40</dd>
					
				</dl>
			</div>
			<div className='col-sm-4'>
				<dl className='row'>

					<dt className='col-sm-4 my-2'>Primer Cuota:</dt>
					<dd className='col-sm-8 my-2 text-end pe-sm-5'>21/10/2021</dd>
					
					<dt className='col-sm-4 my-2'>Plazo:</dt>
					<dd className='col-sm-8 my-2 text-end pe-sm-5'>24</dd>
					
					<dt className='col-sm-4 my-2'>Cuota:</dt>
					<dd className='col-sm-8 my-2 text-end pe-sm-5'>21,360.98</dd>
					
					<dt className='col-sm-4 my-2'>Garantía M:</dt>
					<dd className='col-sm-8 my-2 text-end pe-sm-5'>86,967.06</dd>
					
				</dl>
			</div>
		</div>
	</div>
}

export default CreditAnalysisDetailSummary