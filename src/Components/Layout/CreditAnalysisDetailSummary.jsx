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
		<div className="row border rounded pt-3">
			<div className="col-sm-4">
				<p><strong>Identificación</strong>: 2-0339-0246</p>
				<p><strong>Nombre</strong>: MARCO TULIO ROJAS CASTRO</p>
				<p><strong>Límite</strong>: 2,520,000.00</p>
				<p><strong>Disponible</strong>: 0.00</p>
			</div>
			<div className="col-sm-4">
				<p><strong>Venta</strong>: 405,800.00</p>
				<p><strong>Prima</strong>: 80,110.00</p>
				<p><strong>Principal</strong>: 325,690.00</p>
				<p><strong>Financiamiento</strong>: 186,973.40</p>
			</div>
			<div className="col-sm-4">
				<p><strong>Primer Cuota</strong>: 21/10/2021</p>
				<p><strong>Plazo</strong>: 24</p>
				<p><strong>Cuota</strong>: 21,360.98</p>
				<p><strong>Garantía M</strong>: 86,967.06</p>
			</div>
		</div>
	</div>
}

export default CreditAnalysisDetailSummary